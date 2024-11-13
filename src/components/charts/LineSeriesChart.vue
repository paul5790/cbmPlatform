<template>
  <div ref="lineChart" class="line-chart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition,
]);

const lineChart = ref(null);
let chartInstance = null;
const colors = ["#5470C6", "#EE6666"];

onMounted(() => {
  if (lineChart.value) {
    chartInstance = echarts.init(lineChart.value);
    setChartOptions(); // 초기값 설정
  }
});

const setChartOptions = (value) => {
  const option = {
    color: colors,
    tooltip: {
      trigger: "none",
      axisPointer: {
        type: "cross",
      },
    },
    legend: {},
    grid: {
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[1],
          },
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return (
                "Precipitation  " +
                params.value +
                (params.seriesData.length
                  ? "：" + params.seriesData[0].data
                  : "")
              );
            },
          },
        },
        // prettier-ignore
        data: ['2024-1', '2024-2', '2024-3', '2024-4', '2024-5', '2024-6', '2024-7', '2024-8', '2024-9', '2024-10', '2024-11', '2024-12'],
      },
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[0],
          },
        },
        axisPointer: {
          label: {
            formatter: function (params) {
              return (
                "Precipitation  " +
                params.value +
                (params.seriesData.length
                  ? "：" + params.seriesData[0].data
                  : "")
              );
            },
          },
        },
        // prettier-ignore
        data: ['2024-1', '2024-2', '2024-3', '2024-4', '2024-5', '2024-6', '2024-7', '2024-8', '2024-9', '2024-10', '2024-11', '2024-12'],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Pureun Pado Ho",
        type: "line",
        xAxisIndex: 1,
        smooth: true,
        emphasis: {
          focus: "series",
        },
        data: [100, 100, 100, 94, 85, 78, 65, 54.6, 41.4, 30.4, 29.3, 28],
      },
      {
        name: "Emerald Sun",
        type: "line",
        smooth: true,
        emphasis: {
          focus: "series",
        },
        data: [100, 100, 98, 91, 84, 75, 64, 56.6, 42.4, 32.4, 31.3, 30],
      },
    ],
  };

  chartInstance.setOption(option);
};
</script>

<style scoped>
.line-chart {
  width: 100%;
  height: 100%;
  min-height: 250px; /* 필요에 따라 높이를 조정 */
}
</style>
