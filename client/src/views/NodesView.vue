<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Line } from 'vue-chartjs'
import { useApiStore } from '@/stores/api'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { h } from 'vue'

const api = useApiStore()
let fetchInterval = null

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

const loaded = ref(false)

const dec_color_one = 'hsl(200, 100%, 50%)'
const dec_color_two = 'hsl(160, 100%, 50%)'
const dec_color_three = 'hsl(30, 100%, 50%)'

const maxDataPoints = 120 // Represents 120 seconds

const gpuUsage = ref([])
const gpuMem = ref([])
const ramUsage = ref([])

const chartOptions = {
  animation: false,
  transitions: false,
  responsive: true,

  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'System Performance Metrics',
      color: '#fff',
      font: {
        size: 16,
      },
    },
    legend: {
      labels: {
        color: '#fff',
      },
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      beginAtZero: true,
      max: 100,
      title: {
        display: true,
        text: 'Usage (%)',
        color: '#fff',
      },
      grid: {
        color: '#111',
      },
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      beginAtZero: true,
      max: 80,
      title: {
        display: true,
        text: 'Memory (GB)',
        color: '#fff',
      },
      grid: {
        drawOnChartArea: false,
        color: '#111',
      },
    },
  },
  animation: {
    duration: 500,
  },
}

const chartData = ref({
  labels: Array.from({ length: maxDataPoints }, (_) => ''),
  datasets: [
    {
      label: 'GPU Usage (%)',
      data: gpuUsage,
      borderColor: dec_color_two,
      tension: 0.4,
      yAxisID: 'y',
      pointRadius: 0,
      pointStyle: false,
      fill: false,
    },
    {
      label: 'GPU Memory (GB)',
      data: gpuMem,
      borderColor: dec_color_one,
      tension: 0.4,
      yAxisID: 'y1',
      pointRadius: 0,
      pointStyle: false,
      fill: false,
    },
    {
      label: 'RAM Usage (GB)',
      data: ramUsage,
      borderColor: dec_color_three,
      tension: 0.4,
      yAxisID: 'y1',
      pointRadius: 0,
      pointStyle: false,
      fill: false,
    },
  ],
})

const updateChartData = (data) => {
  gpuUsage.value = [...gpuUsage.value, data.gpu_usage ?? null]
  gpuUsage.value = gpuUsage.value.slice(-maxDataPoints)

  gpuMem.value = [
    ...gpuMem.value,
    typeof data.gpu_mem === 'string'
      ? parseInt(data.gpu_mem.replace('GB', ''), 10) || 0
      : data.gpu_mem,
  ]
  gpuMem.value = gpuMem.value.slice(-maxDataPoints)

  ramUsage.value = [...ramUsage.value, data.ram_usage ?? null]
  ramUsage.value = ramUsage.value.slice(-maxDataPoints)

  chartData.value = {
    ...chartData.value,
    datasets: [
      { ...chartData.value.datasets[0], data: gpuUsage.value },
      { ...chartData.value.datasets[1], data: gpuMem.value },
      { ...chartData.value.datasets[2], data: ramUsage.value },
    ],
  }
}

const fetchData = async () => {
  const data = await api.getPerfStats()
  updateChartData(data)
}

onMounted(async () => {
  loaded.value = false

  try {
    await fetchData()
    fetchInterval = setInterval(fetchData, 1000)
    loaded.value = true
  } catch (e) {
    console.error(e)
  }
})

window.addEventListener('resize', () => {
  chartOptions.maintainAspectRatio = false
})

onBeforeUnmount(() => {
  clearInterval(fetchInterval)
})
</script>

<template>
  <div
    class="chart-container container is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
  >
    <Line v-if="loaded" :data="chartData" :options="chartOptions" />
  </div>

  <h2 class="is-family-monospace is-size-7 has-text-centered">
    NVIDIA H100 GPU Server | System Specifications: 80GB System Memory, 220GB GPU Memory | Powering
    InfraW Platform Services
  </h2>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 60vh;
  max-height: 768px;
}
</style>
