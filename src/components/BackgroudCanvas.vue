<template>
    <div class="background-canvas">
        <div class="canvas-wrapper">
            <canvas ref="canvasRef" width="540" height="556" class="animated-canvas" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)

// 定义颜色
const COLOR_GREEN_1 = { r: 24, g: 233, b: 51 }   // rgb(24, 233, 51)
const COLOR_GREEN_2 = { r: 42, g: 237, b: 120 }  // rgb(42, 237, 120)

onMounted(async () => {
    try {
        const raw = (await import('./cvs.txt?raw')).default

        const img = new Image()
        img.onload = () => {
            if (canvasRef.value) {
                const ctx = canvasRef.value.getContext('2d', { willReadFrequently: true })
                if (ctx) {
                    ctx.drawImage(img, 0, 0)

                    // 获取像素数据并处理颜色
                    const imageData = ctx.getImageData(0, 0, 540, 556)
                    const data = imageData.data

                    for (let i = 0; i < data.length; i += 4) {
                        const r = data[i]
                        const g = data[i + 1]
                        const b = data[i + 2]

                        // 计算灰度值 (0-255)
                        // @ts-ignore
                        const gray = (r + g + b) / 3

                        // 白色或接近白色 -> 透明
                        if (gray > 240) {
                            data[i + 3] = 0 // 设置为透明
                        }
                        // 黑色或接近黑色 -> 保持黑色
                        else if (gray < 30) {
                            data[i] = 0
                            data[i + 1] = 0
                            data[i + 2] = 0
                            data[i + 3] = 255
                        }
                        // 中间灰度 -> 映射到绿色渐变
                        else {
                            // gray: 30-240 映射到绿色渐变
                            const t = (gray - 30) / (240 - 30) // 0 到 1

                            // 在两个绿色之间插值
                            const greenR = Math.round(COLOR_GREEN_1.r + (COLOR_GREEN_2.r - COLOR_GREEN_1.r) * t)
                            const greenG = Math.round(COLOR_GREEN_1.g + (COLOR_GREEN_2.g - COLOR_GREEN_1.g) * t)
                            const greenB = Math.round(COLOR_GREEN_1.b + (COLOR_GREEN_2.b - COLOR_GREEN_1.b) * t)

                            // 根据灰度调整亮度
                            const brightness = gray / 255

                            data[i] = Math.round(greenR * brightness)
                            data[i + 1] = Math.round(greenG * brightness)
                            data[i + 2] = Math.round(greenB * brightness)
                            data[i + 3] = 255
                        }
                    }

                    ctx.putImageData(imageData, 0, 0)
                }

                // 设置 canvas 的 mask 为原始图片
                canvasRef.value.style.mask = `url("data:image/png;base64,${raw}") luminance`
                canvasRef.value.style.webkitMask = `url("data:image/png;base64,${raw}") luminance`
            }
        }
        img.src = `data:image/png;base64,${raw}`
    } catch (err) {
        console.error('加载 Base64 失败：', err)
    }
})
</script>

<style scoped>
@keyframes moveMask {
    0% {
        mask-position: 0% 0%;
        -webkit-mask-position: 0% 0%;
    }

    100% {
        mask-position: -60% 0%;
        -webkit-mask-position: -60% 0%;
    }
}

.background-canvas {
    position: absolute;
    top: -139px;
    left: -144px;
    width: 540px;
    height: 556px;
    overflow: hidden;
    pointer-events: none;
    /* transform: rotate(-25deg) 对应 matrix(0.906308, -0.422618, 0.422618, 0.906308, 0, 0) */
    transform: matrix(0.906308, -0.422618, 0.422618, 0.906308, 0, 0);
    mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 41.8018%, rgb(0, 0, 0) 67.7478%);
    -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 41.8018%, rgb(0, 0, 0) 67.7478%);
}

.canvas-wrapper {
    width: 100%;
    height: 100%;
}

.animated-canvas {
    width: 100%;
    height: 100%;
    display: block;
    /* will-change: mask-position; */
    animation: moveMask 15.188s linear infinite;
}

/* Mobile Responsive */
@media (max-width: 809.98px) {
    .background-canvas {
        width: 400px;
        height: 412px;
        top: -100px;
        left: -100px;
    }
}

@media (max-width: 480px) {
    .background-canvas {
        width: 300px;
        height: 309px;
        top: -80px;
        left: -80px;
    }
}
</style>
