<template>
  <div ref="scatterChart" class="scatter-chart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import { ScatterChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import {
  TooltipComponent,
  GridComponent,
  MarkLineComponent,
} from "echarts/components";

echarts.use([
  TooltipComponent,
  GridComponent,
  MarkLineComponent,
  ScatterChart,
  CanvasRenderer,
  UniversalTransition,
]);

const dataAll = [
  [
    [10.0, 8.04],
    [8.0, 6.95],
    [13.0, 7.58],
    [9.0, 8.81],
    [11.0, 8.33],
    [14.0, 9.96],
    [6.0, 7.24],
    [4.0, 4.26],
    [12.0, 10.84],
    [7.0, 4.82],
    [5.0, 5.68],
  ],
  [
    [10.0, 9.14],
    [8.0, 8.14],
    [13.0, 8.74],
    [9.0, 8.77],
    [11.0, 9.26],
    [14.0, 8.1],
    [6.0, 6.13],
    [4.0, 3.1],
    [12.0, 9.13],
    [7.0, 7.26],
    [5.0, 4.74],
  ],
];

const markLineOpt = {
  animation: false,
  label: {
    align: "right",
  },
  lineStyle: {
    type: "solid",
  },
  tooltip: {
    formatter: "y = 0.5 * x + 3",
  },
  data: [
    [
      {
        coord: [0, 3],
        symbol: "none",
      },
      {
        coord: [20, 13],
        symbol: "none",
      },
    ],
  ],
};

const scatterChart = ref(null);
let chartInstance = null;

onMounted(() => {
  if (scatterChart.value) {
    chartInstance = echarts.init(scatterChart.value);
    setChartOptions(); // 초기값 설정
  }
});

const setChartOptions = (value) => {
  const option = {
    grid: [
      { left: "7%", top: "7%", width: "38%", height: "38%" },
      { right: "7%", top: "7%", width: "38%", height: "38%" },
    ],
    tooltip: {
      formatter: "Group {a}: ({c})",
    },
    xAxis: [
      { gridIndex: 0, min: 0, max: 20 },
      { gridIndex: 1, min: 0, max: 20 },
    ],
    yAxis: [
      { gridIndex: 0, min: 0, max: 15 },
      { gridIndex: 1, min: 0, max: 15 },
    ],
    series: [
      {
        name: "I",
        type: "scatter",
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: dataAll[0],
        markLine: markLineOpt,
      },
      {
        name: "II",
        type: "scatter",
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: dataAll[1],
        markLine: markLineOpt,
      },
    ],
  };

  chartInstance.setOption(option);
};
</script>

<style scoped>
.scatter-chart {
  width: 100%;
  height: 100%;
  min-height: 400px; /* 필요에 따라 높이를 조정 */
}
</style>
