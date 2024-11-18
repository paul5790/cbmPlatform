<template>
  <div ref="barChart" class="bar-chart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
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
  BarChart,
  CanvasRenderer,
]);

const barChart = ref(null);
let chartInstance = null;

let categoryData = [];
let barData = [];
const dataCount = 100;

for (let i = 0; i < dataCount; i++) {
  const val = Math.random() * 100;
  categoryData.push("category" + i);
  barData.push(echarts.number.round(val, 2));
}

// 데이터를 정렬 (작은 값 순서로 정렬)
const sortedData = barData
  .map((value, index) => ({ value, category: categoryData[index] })) // 값과 카테고리를 매핑
  .sort((a, b) => a.value - b.value); // 값 기준으로 정렬

// 정렬된 데이터를 다시 분리
barData = sortedData.map(item => item.value);
categoryData = sortedData.map(item => item.category);


onMounted(() => {
  if (barChart.value) {
    chartInstance = echarts.init(barChart.value);
    setChartOptions(); // 초기값 설정
  }
});

const setChartOptions = () => {
  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 20, // 상단 여백 (px)
    },
    xAxis: {
      data: categoryData,
    },
    yAxis: {},
    series: [
      {
        type: "bar",
        name: "bar",
        data: barData,
        itemStyle: {
          color: "#77bef7",
        },
      },
    ],
  };

  chartInstance.setOption(option);
};
</script>

<style scoped>
.bar-chart {
  width: 100%;
  height: 100%;
  min-height: 350px; /* 필요에 따라 높이를 조정 */
}
</style>
