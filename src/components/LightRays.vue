<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import * as THREE from 'three'

interface Props {
  color?: string
  color2?: string
  colorMode?: 'single' | 'multi'
  animate?: boolean
  speed?: number
  intensity?: number
  rays?: number
  reach?: number
  position?: number
  backgroundColor?: string
  borderRadius?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: '#18e933',
  color2: '#ffcb47',
  colorMode: 'single',
  animate: true,
  speed: 10,
  intensity: 50,
  rays: 40,
  reach: 0,
  position: 0,
  backgroundColor: 'transparent',
  borderRadius: '0px'
})

const containerRef = ref<HTMLDivElement | null>(null)
const webglSupported = ref(true)

// Three.js 对象
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial> | null = null
let animationId: number | null = null
let timeOffset = Math.random() * 10000

// 顶点着色器
const vertexShader = `
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

// 片段着色器
const fragmentShader = `
// Uniforms
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec4 u_colors[2];
uniform float u_intensity;
uniform float u_rays;
uniform float u_reach;
uniform vec2 u_rayPos1;
uniform vec2 u_rayPos2;

#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif

#ifndef FNC_PERMUTE
#define FNC_PERMUTE

float permute(const in float x) { return mod289(((x * 34.0) + 1.0) * x); }
vec2 permute(const in vec2 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec3 permute(const in vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 permute(const in vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

#endif

#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
#endif

#ifndef FNC_QUINTIC
#define FNC_QUINTIC

float quintic(const in float v) { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec2  quintic(const in vec2 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec3  quintic(const in vec3 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec4  quintic(const in vec4 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }

#endif

#ifndef FNC_PNOISE
#define FNC_PNOISE

float pnoise(in vec2 P, in vec2 rep) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, rep.xyxy);
    Pi = mod289(Pi);
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;

    vec4 i = permute(permute(ix) + iy);

    vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
    vec4 gy = abs(gx) - 0.5 ;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;

    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);

    vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;

    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));

    vec2 fade_xy = quintic(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}
#endif

#if !defined(FNC_SATURATE) && !defined(saturate)
#define FNC_SATURATE
#define saturate(x) clamp(x, 0.0, 1.0)
#endif

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed)
{
    vec2 sourceToCoord = coord - raySource;
    float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);

    float diagonal = length(u_resolution);

    return clamp(
        (.45 + 0.15 * sin(cosAngle * seedA + u_time * speed)) +
        (0.3 + 0.2 * cos(-cosAngle * seedB + u_time * speed)),
        u_reach, 1.0) *
        clamp((diagonal - length(sourceToCoord)) / diagonal, u_reach, 1.0);
}

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y = 1.0 - uv.y;
    vec2 coord = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);
    float speed = u_rays * 10.0;

    vec2 rayPos1 = u_rayPos1;
    vec2 rayRefDir1 = normalize(vec2(1.0, -0.116));
    float raySeedA1 = 36.2214*speed;
    float raySeedB1 = 21.11349*speed;
    float raySpeed1 = 1.5*speed;

    vec2 rayPos2 = u_rayPos2;
    vec2 rayRefDir2 = normalize(vec2(1.0, 0.241));
    float raySeedA2 = 22.39910*speed;
    float raySeedB2 = 18.0234*speed;
    float raySpeed2 = 1.1*speed;

    float strength1 = rayStrength(rayPos1, rayRefDir1, coord, raySeedA1, raySeedB1, raySpeed1);
    float strength2 = rayStrength(rayPos2, rayRefDir2, coord, raySeedA2, raySeedB2, raySpeed2);

    float brightness = 1.0*u_reach - (coord.y / u_resolution.y);
    float attenuation = clamp(brightness + (0.5 + u_intensity), 0.0, 1.0);

    float alpha1 = strength1 * attenuation * u_colors[0].a;
    float alpha2 = strength2 * attenuation * u_colors[1].a;

    vec3 premultColor1 = u_colors[0].rgb * alpha1;
    vec3 premultColor2 = u_colors[1].rgb * alpha2;

    vec3 blendedColor = premultColor1 + premultColor2;
    float blendedAlpha = alpha1 + alpha2 * (1.0 - alpha1);

    vec3 finalRGB = blendedColor / max(blendedAlpha, 0.0001);

    gl_FragColor = vec4(finalRGB * blendedAlpha, blendedAlpha);
}
`

// 解析 CSS 颜色为 RGB
function parseColor(colorStr: string): { r: number; g: number; b: number } {
  const ctx = document.createElement('canvas').getContext('2d')
  if (!ctx) return { r: 1, g: 1, b: 1 }
  
  ctx.fillStyle = colorStr
  const result = ctx.fillStyle
  
  if (result.startsWith('#')) {
    const hex = result.slice(1)
    return {
      r: parseInt(hex.slice(0, 2), 16) / 255,
      g: parseInt(hex.slice(2, 4), 16) / 255,
      b: parseInt(hex.slice(4, 6), 16) / 255
    }
  }
  
  return { r: 1, g: 1, b: 1 }
}

// 映射值范围
function mapRange(value: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
  return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin)
}

// 定义 uniforms 类型
interface LightRaysUniforms {
  u_colors: { value: THREE.Vector4[] }
  u_intensity: { value: number }
  u_rays: { value: number }
  u_reach: { value: number }
  u_time: { value: number }
  u_mouse: { value: THREE.Vector2 }
  u_resolution: { value: THREE.Vector2 }
  u_rayPos1: { value: THREE.Vector2 }
  u_rayPos2: { value: THREE.Vector2 }
}

// 获取 uniforms 的辅助函数
function getUniforms(): LightRaysUniforms | null {
  if (!mesh || !mesh.material) return null
  return mesh.material.uniforms as unknown as LightRaysUniforms
}

// 检测 WebGL 支持
function checkWebGLSupport(): boolean {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    return !!gl
  } catch (e) {
    return false
  }
}

// 初始化 Three.js 场景
function initScene() {
  const container = containerRef.value
  if (!container) return

  // 检测 WebGL 支持
  if (!checkWebGLSupport()) {
    console.warn('WebGL is not supported, LightRays component will not render')
    webglSupported.value = false
    return
  }

  const width = container.clientWidth
  const height = container.clientHeight

  // 创建场景
  scene = new THREE.Scene()

  // 创建相机
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.z = 5

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true,
    premultipliedAlpha: true,
    alpha: true,
    antialias: true,
    precision: 'highp',
    powerPreference: 'high-performance'
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(1)
  container.appendChild(renderer.domElement)

  // 创建几何体和材质
  const geometry = new THREE.PlaneGeometry(1024, 1024)
  const material = createMaterial(width, height)

  // 创建网格
  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  // 开始动画
  startAnimation()
}

// 创建着色器材质
function createMaterial(width: number, height: number): THREE.ShaderMaterial {
  const color1 = parseColor(props.color)
  const color2 = props.colorMode === 'multi' ? parseColor(props.color2) : parseColor(props.color)

  const rayPos1Y = -0.4 * height
  const rayPos2Y = -0.5 * height

  return new THREE.ShaderMaterial({
    fragmentShader,
    vertexShader,
    uniforms: {
      u_colors: {
        value: [
          new THREE.Vector4(color1.r, color1.g, color1.b, 1),
          new THREE.Vector4(color2.r, color2.g, color2.b, 1)
        ]
      },
      u_intensity: { value: mapRange(props.intensity, 0, 100, 0, 0.5) },
      u_rays: { value: mapRange(props.rays, 0, 100, 0, 0.3) },
      u_reach: { value: mapRange(props.reach, 0, 100, 0, 0.5) },
      u_time: { value: timeOffset },
      u_mouse: { value: new THREE.Vector2(0, 0) },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_rayPos1: { value: new THREE.Vector2((props.position / 100) * width, rayPos1Y) },
      u_rayPos2: { value: new THREE.Vector2((props.position / 100 + 0.02) * width, rayPos2Y) }
    },
    wireframe: false,
    side: THREE.DoubleSide
  })
}

// 更新材质 uniforms
function updateUniforms() {
  const uniforms = getUniforms()
  if (!uniforms) return

  const container = containerRef.value
  if (!container) return

  const width = container.clientWidth
  const height = container.clientHeight

  const color1 = parseColor(props.color)
  const color2 = props.colorMode === 'multi' ? parseColor(props.color2) : parseColor(props.color)

  const rayPos1Y = -0.4 * height
  const rayPos2Y = -0.5 * height

  uniforms.u_colors.value = [
    new THREE.Vector4(color1.r, color1.g, color1.b, 1),
    new THREE.Vector4(color2.r, color2.g, color2.b, 1)
  ]
  uniforms.u_intensity.value = mapRange(props.intensity, 0, 100, 0, 0.5)
  uniforms.u_rays.value = mapRange(props.rays, 0, 100, 0, 0.3)
  uniforms.u_reach.value = mapRange(props.reach, 0, 100, 0, 0.5)
  uniforms.u_rayPos1.value = new THREE.Vector2((props.position / 100) * width, rayPos1Y)
  uniforms.u_rayPos2.value = new THREE.Vector2((props.position / 100 + 0.02) * width, rayPos2Y)
}

// 动画循环
let lastTime = 0
function animate(timestamp: number) {
  if (!props.animate) {
    lastTime = timestamp
  }

  const delta = timestamp - lastTime
  lastTime = timestamp

  const uniforms = getUniforms()
  if (uniforms && props.animate) {
    uniforms.u_time.value += (delta * props.speed) / 1000 / 10
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }

  animationId = requestAnimationFrame(animate)
}

function startAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  lastTime = performance.now()
  animationId = requestAnimationFrame(animate)
}

function stopAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
}

// 清理资源
function cleanup() {
  stopAnimation()

  if (renderer) {
    renderer.dispose()
    if (containerRef.value && renderer.domElement) {
      containerRef.value.removeChild(renderer.domElement)
    }
  }

  if (mesh) {
    if (mesh.geometry) mesh.geometry.dispose()
    if (mesh.material) mesh.material.dispose()
  }

  scene = null
  camera = null
  renderer = null
  mesh = null
}

// 处理窗口大小变化
function handleResize() {
  if (!containerRef.value || !renderer || !camera) return

  const width = containerRef.value.clientWidth
  const height = containerRef.value.clientHeight

  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)

  const uniforms = getUniforms()
  if (uniforms) {
    uniforms.u_resolution.value = new THREE.Vector2(width, height)
    updateUniforms()
  }
}

// 监听属性变化
watch(
  () => [props.color, props.color2, props.colorMode, props.intensity, props.rays, props.reach, props.position],
  () => {
    updateUniforms()
  }
)

watch(
  () => props.animate,
  (newVal) => {
    if (newVal) {
      startAnimation()
    }
  }
)

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  initScene()
  
  resizeObserver = new ResizeObserver(handleResize)
  if (containerRef.value) {
    resizeObserver.observe(containerRef.value)
  }
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
  cleanup()
})
</script>

<template>
  <div
    ref="containerRef"
    class="light-rays-container"
    :style="{
      borderRadius: borderRadius,
      backgroundColor: backgroundColor,
    }"
  >
    <!-- WebGL Fallback: 显示静态渐变背景 -->
    <div v-if="!webglSupported" class="light-rays-fallback"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.light-rays-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.light-rays-container canvas {
  display: block;
}

.light-rays-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, rgba(24, 233, 51, 0.15) 0%, transparent 70%);
  pointer-events: none;
}
</style>
