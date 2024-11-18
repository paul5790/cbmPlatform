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
    series: [
    {
      type: 'gauge',
      center: ['50%', '65%'],
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 60,
      splitNumber: 12,
      radius: "100%",
      itemStyle: {
        color: '#FFAB91'
      },
      progress: {
        show: true,
        width: 10
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 10
        }
      },
      axisTick: {
        distance: -18,
        splitNumber: 2,
        length: 4,
        lineStyle: {
          width: 0.5,
          color: '#999'
        }
      },
      splitLine: {
        show: false,
        distance: -28,
        length: 8,
        lineStyle: {
          width: 2,
          color: '#999'
        }
      },
      axisLabel: {
        distance: 3,
        color: '#999',
        fontSize: 5
      },
      anchor: {
        show: false
      },
      title: {
        show: false
      },
      detail: {
        valueAnimation: true,
        width: '60%',
        lineHeight: 40,
        borderRadius: 8,
        offsetCenter: [0, 0],
        fontSize: 12,
        fontWeight: 'bolder',
        formatter: '{value} °C',
        color: 'inherit'
      },
      data: [
        {
          value: 20
        }
      ]
    },
    {
      type: 'gauge',
      center: ['50%', '65%'],
      radius: "100%",
      startAngle: 200,
      endAngle: -20,
      min: 0,
      max: 60,
      itemStyle: {
        color: '#FD7347'
      },
      progress: {
        show: true,
        width: 6
      },
      pointer: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      detail: {
        show: false
      },
      data: [
        {
          value: 20
        }
      ]
    }
  ]
  };

  chartInstance.setOption(option);
};
</script>

<style scoped>
.gauge-chart {
  width: 100%;
  height: 100%;
  min-height: 150px; /* 필요에 따라 높이를 조정 */
}
</style>
