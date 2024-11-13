<template>
  <a-row gutter="16" style="margin-top: 10px">
    <!-- 첫 번째 줄: 운항시간 (20vh) -->
    <a-col :span="6">
      <a-card title="운항시간" class="small-card height-20" size="small">
        <div class="card-content">
          Start: 2023.mm.dd hh:mm <br />
          Elapse: 1D-17H:33M
        </div>
      </a-card>
    </a-col>

    <!-- 첫 번째 줄: 고장 발생 현황 (20vh) -->
    <a-col :span="18">
      <a-card title="고장 발생 현황" class="small-card height-20" size="small">
      </a-card>
    </a-col>
  </a-row>

  <a-row gutter="16" style="margin-top: 16px">
    <!-- 두 번째 줄: 실시간 위치 (40vh) -->
    <a-col :span="6">
      <a-card title="실시간 위치" class="small-card height-40" size="small">
        <!-- 지도 또는 위치 표시 -->
        <!-- 그래프 또는 차트 위치 -->
        <RealtimeMap :lat="parseFloat(36.1111)" :lon="parseFloat(129.5555)" />
      </a-card>
    </a-col>

    <!-- 두 번째 줄: 엔진 RPM (40vh) -->
    <a-col :span="6">
      <a-card title="엔진 RPM" class="small-card height-40" size="small">
        <!-- 엔진 RPM 차트 -->
        <div class="gauge-container">
          <SmallGauge />
          <SmallGauge />
        </div>
      </a-card>
    </a-col>

    <!-- 두 번째 줄: 냉각 계통 온도 (40vh) -->
    <a-col :span="6">
      <a-card title="냉각 계통 온도" class="small-card height-40" size="small">
        <!-- 온도 관련 차트 -->
      </a-card>
    </a-col>

    <!-- 두 번째 줄: 장비별 고장 발생 빈도 (40vh) -->
    <a-col :span="6">
      <a-card
        title="장비 별 고장 발생 빈도"
        class="small-card height-40"
        size="small"
      >
        <!-- 고장 발생 빈도 차트 -->
        <RadarChart />
      </a-card>
    </a-col>
  </a-row>

  <a-row gutter="16" style="margin-top: 16px">
    <!-- 세 번째 줄: 실시간 알람 (30vh) -->
    <a-col :span="24">
      <a-card title="실시간 알람" class="small-card height-25" size="small">
        <!-- 알람 테이블 위치 -->
        <AlarmTable/>
      </a-card>
    </a-col>
  </a-row>
</template>

<script setup>
// Ant Design Vue 컴포넌트를 사용하므로 별도의 스크립트 로직은 현재 필요 없습니다.
import CandlestickChart from "../components/charts/CandlestickChart.vue";
import RealtimeMap from "../components/map/RealtimeMap.vue";
import SmallGauge from "../components/charts/SmallGauge.vue";
import RadarChart from "../components/charts/RadarChart.vue";
import AlarmTable from "../components/table/AlarmTable.vue";

</script>

<style scoped>
.small-card {
  text-align: center;
}

.height-20 {
  height: 20vh;
}

.height-40 {
  height: 40vh;
}

.height-25 {
  height: 25vh;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2em; /* 글씨 크기 조절 */
  height: 100%;
}

.gauge-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
</style>
