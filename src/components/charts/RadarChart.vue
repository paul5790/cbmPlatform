<template>
  <div ref="radarChart" class="radar-chart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import { RadarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent } from "echarts/components";

echarts.use([RadarChart, CanvasRenderer, TooltipComponent]);

const radarChart = ref(null);
let chartInstance = null;

onMounted(() => {
  if (radarChart.value) {
    chartInstance = echarts.init(radarChart.value);
    setChartOptions(); // 초기값 설정
  }
});

const setChartOptions = () => {
  const option = {
    color: ["#FFE434","#FF917C"],
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    radar: {
      indicator: [
        { text: "RADAR", max: 150 },
        { text: "ECDIS", max: 150 },
        { text: "DGPS", max: 150 },
        { text: "GYRO", max: 120 },
        { text: "ENGINE1", max: 108 },
        { text: "ENGINE2", max: 72 },
      ],
      center: ["50%", "50%"],
      radius: 120,
    },
    series: [
      {
        type: "radar",
        data: [
          {
            value: [120, 118, 130, 100, 99, 70],
            name: "Warning",
            lineStyle: { type: "dashed" },
          },
          {
            value: [100, 93, 50, 90, 70, 60],
            name: "Error",
            areaStyle: {
              color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                { color: "rgba(255, 145, 124, 0.1)", offset: 0 },
                { color: "rgba(255, 145, 124, 0.9)", offset: 1 },
              ]),
            },
          },
        ],
      },
    ],
  };

  chartInstance.setOption(option);
};
</script>

<style scoped>
.radar-chart {
  width: 100%;
  height: 100%;
  min-height: 300px; /* 필요에 따라 높이를 조정 */
}
</style>
