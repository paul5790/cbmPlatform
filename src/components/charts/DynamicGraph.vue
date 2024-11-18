<template>
  <div ref="graphChart" class="graph-chart"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts/core";
import { GraphChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { TooltipComponent } from "echarts/components";

echarts.use([GraphChart, CanvasRenderer, TooltipComponent]);

const graphChart = ref(null);
let chartInstance = null;
// 20개의 고정 데이터 생성
const data = Array.from({ length: 20 }, (_, index) => ({
  id: `${index + 1}`,
  name: `Node ${index + 1}`,
  symbolSize: Math.floor(Math.random() * 20) + 10, // 10 ~ 30 크기의 노드
}));

// 랜덤한 연결 관계 생성 (노드 간 최대 2개의 연결)
const edges = [];
for (let i = 0; i < 20; i++) {
  const source = `${i + 1}`;
  const targetCount = Math.floor(Math.random() * 2) + 1; // 각 노드당 1~2개의 연결
  for (let j = 0; j < targetCount; j++) {
    const target = `${Math.floor(Math.random() * 20) + 1}`;
    if (source !== target && !edges.some(edge => edge.source === source && edge.target === target)) {
      edges.push({ source, target });
    }
  }
}

onMounted(() => {
  if (graphChart.value) {
    chartInstance = echarts.init(graphChart.value);
    setChartOptions();
  }
});

const setChartOptions = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "graph",
        layout: "force",
        data: data,
        edges: edges,
        force: {
          repulsion: 100, // 노드 간 거리
          edgeLength: [50, 100], // 엣지 길이
        },
        roam: true, // 드래그 및 확대/축소 허용
        label: {
          show: true,
          position: "right",
        },
        lineStyle: {
          color: "#aaa",
        },
      },
    ],
  };

  chartInstance.setOption(option);
};
</script>

<style scoped>
.graph-chart {
  width: 100%;
  height: 100%;
  min-height: 350px; /* 필요에 따라 높이를 조정 */
}
</style>
