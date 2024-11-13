<template>
  <div ref="gaugeChart" class="gauge-chart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent } from "echarts/components";

echarts.use([GaugeChart, CanvasRenderer, TooltipComponent]);

const gaugeChart = ref(null);
let chartInstance = null;

onMounted(() => {
  if (gaugeChart.value) {
    chartInstance = echarts.init(gaugeChart.value);
    setChartOptions(50); // 초기값 설정
  }
});

const setChartOptions = (value) => {
  const option = {
    tooltip: {
      formatter: "{a} <br/>{b} : {c}%",
    },
    series: [
      {
        name: "Engine RPM",
        splitNumber: 5, // 10단위로 나눔
        type: "gauge",
        progress: {
          show: true,
        },
        center: ["50%", "50%"],
        min: 0,
        max: 50,
        axisLine: {
          lineStyle: {
            width: 7,
          },
        },
        radius: "90%",
        detail: {
          valueAnimation: true,
          formatter: "{value}",
          fontSize: 13,
        },
        progress: {
          show: true,
          width: 5,
        },
        pointer: {
          length: "55%",
          width: 2,
        },
        axisTick: {
          distance: 5,
          length: 4,

          lineStyle: {
            width: 0.7,
          },
        },
        axisLabel: {
          distance: 10,
          fontSize: 9,
        },
        splitLine: {
          distance: 5,
          length: 6,
          lineStyle: {
            width: 2,
          },
        },
        data: [
          {
            value: value,
          },
        ],
      },
    ],
  };

  chartInstance.setOption(option);
};
</script>

<style scoped>
.gauge-chart {
  width: 100%;
  height: 100%;
  min-height: 180px; /* 필요에 따라 높이를 조정 */
}
</style>
