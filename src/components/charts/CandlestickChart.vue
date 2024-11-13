<template>
  <div ref="chartDom" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import { use } from "echarts/core";
import {
  GraphicComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components';
import { BarChart, CandlestickChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import VChart, { THEME_KEY } from "vue-echarts";
import { CanvasRenderer } from 'echarts/renderers';
import { ref, onMounted } from 'vue';

use([
  GraphicComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CandlestickChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

provide(THEME_KEY);

const chartDom = ref(null);

const rawData = [
  ["2015/1/5", "3258.63", "3350.52", "115.84", "3.58%", "3253.88", "3369.28", "531352384", "54976008", "-"],
  // ... 생략 ...
];

const dates = ["2016-03-29", "2016-03-30", "2016-03-31", "2016-04-01", "2016-04-04", "2016-04-05", "2016-04-06", "2016-04-07", "2016-04-08", "2016-04-11", "2016-04-12", "2016-04-13", "2016-04-14", "2016-04-15", "2016-04-18", "2016-04-19", "2016-04-20", "2016-04-21", "2016-04-22", "2016-04-25", "2016-04-26", "2016-04-27", "2016-04-28", "2016-04-29", "2016-05-02", "2016-05-03", "2016-05-04", "2016-05-05", "2016-05-06", "2016-05-09", "2016-05-10", "2016-05-11", "2016-05-12", "2016-05-13", "2016-05-16", "2016-05-17", "2016-05-18", "2016-05-19", "2016-05-20", "2016-05-23", "2016-05-24", "2016-05-25", "2016-05-26", "2016-05-27", "2016-05-31", "2016-06-01", "2016-06-02", "2016-06-03", "2016-06-06", "2016-06-07", "2016-06-08", "2016-06-09", "2016-06-10", "2016-06-13", "2016-06-14", "2016-06-15", "2016-06-16", "2016-06-17", "2016-06-20", "2016-06-21", "2016-06-22"
];

const data = [
  [17512.58, 17633.11, 17434.27, 17642.81, 86160000],
  // ... 생략 ...
];

const volumes = [86160000, 79330000, 102600000, 104890000, 85230000, 115230000, 99410000, 90120000, 79990000, 107100000, 81020000, 91710000, 84510000, 118160000, 89390000, 89820000, 100210000, 102720000, 134120000, 83770000, 92570000, 109090000, 100920000, 136670000, 80100000, 97060000, 95020000, 81530000, 80020000, 85590000, 75790000, 87390000, 88560000, 86640000, 88440000, 103260000, 79120000, 95530000, 111990000, 87790000, 86480000, 79180000, 68940000, 73190000, 147390000, 78530000, 75560000, 82270000, 71870000, 78750000, 71260000, 69690000, 90540000, 101690000, 93740000, 94130000, 91950000, 248680000, 99380000, 85130000, 89440000
];

function calculateMA(dayCount, data) {
  let result = [];
  for (let i = 0, len = data.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    let sum = 0;
    for (let j = 0; j < dayCount; j++) {
      sum += +data[i - j][1];
    }
    result.push((sum / dayCount).toFixed(2));
  }
  return result;
}

const dataMA5 = calculateMA(5, data);
const dataMA10 = calculateMA(10, data);
const dataMA20 = calculateMA(20, data);

onMounted(() => {
  const myChart = echarts.init(chartDom.value);
  const option = {
    // 차트 옵션 (위의 옵션 코드 사용)
  };

  myChart.setOption(option);
});
</script>

<style scoped>
#chartDom {
  width: 100%;
  height: 400px;
}
</style>
