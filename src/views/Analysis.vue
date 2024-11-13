<template>
  <a-row gutter="16" style="margin-top: 10px">
    <!-- 왼쪽 상단: 선박 별 엔진 잔여수명과 고장 발생 종류 및 빈도를 상하로 배치 -->
    <a-col :span="14">
      <a-row gutter="16">
        <a-col :span="24">
          <a-card
            title="선박 별 엔진 잔여수명"
            class="small-card height-30"
            size="small"
          >
           <LineSeriesChart />
          </a-card>
        </a-col>
        <a-col :span="24" style="margin-top: 18px">
          <a-card
            title="선박 별 엔진 고장 발생 종류 및 빈도"
            class="small-card height-30"
            size="small"
          >
            <!-- 고장 발생 종류 및 빈도 차트 위치 -->
            <ScatterChart />
          </a-card>
        </a-col>
      </a-row>
    </a-col>

    <!-- 오른쪽: 엔진 정보 (세로로 긴 카드) -->
    <a-col :span="10">
      <a-card title="엔진 정보" class="small-card height-62" size="small">
        <!-- 엔진 정보 차트 위치 -->
        <TreeChart />
      </a-card>
    </a-col>
  </a-row>

  <a-row gutter="16" style="margin-top: 16px">
    <!-- 하단 전체: 실시간 알람 -->
    <a-col :span="24">
      <a-card title="실시간 알람" class="small-card height-25" size="small">
        <!-- 알람 테이블 위치 -->
         <AlarmTable/>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup>
import LineSeriesChart from "../components/charts/LineSeriesChart.vue";
import ScatterChart from "../components/charts/ScatterChart.vue";
import TreeChart from "../components/charts/TreeChart.vue";
import AlarmTable from "../components/table/AlarmTable.vue";
</script>

<style scoped>
.small-card {
  text-align: center;
}

.height-25 {
  height: 25vh;
}

.height-62 {
  height: 62vh;
}

.height-30 {
  height: 30vh;
}
</style>
