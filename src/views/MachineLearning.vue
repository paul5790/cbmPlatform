<template>
  <a-row gutter="16" style="margin-top: 10px;">
    <!-- 왼쪽 상단: 선박 별 엔진 잔여수명과 고장 발생 종류 및 빈도를 상하로 배치 -->
    <a-col :span="12">
      <a-row gutter="16">
        <a-col :span="24">
          <a-card title="학습 데이터 선택" class="small-card height-25" size="small">
            <!-- 잔여수명 차트 위치 -->
          </a-card>
        </a-col>
        <a-col :span="24" style="margin-top: 18px;">
          <a-card title="AI 모델 구성" class="small-card height-61" size="small">
            <!-- 고장 발생 종류 및 빈도 차트 위치 -->
          </a-card>
        </a-col>
      </a-row>
    </a-col>

    <!-- 오른쪽: 엔진 정보 (세로로 긴 카드) -->
    <a-col :span="12">
      <a-row gutter="16">
        <a-col :span="24">
          <a-card title="AI 모델 형상" class="small-card height-46" size="small">
            <!-- 잔여수명 차트 위치 -->
          </a-card>
        </a-col>
        <a-col :span="24" style="margin-top: 18px;">
          <a-card title="AI 학습 현황" class="small-card height-40" size="small">
            <!-- 고장 발생 종류 및 빈도 차트 위치 -->
          </a-card>
        </a-col>
      </a-row>
    </a-col>
  </a-row>

</template>

<script setup>
// Ant Design Vue 컴포넌트를 사용하므로 별도의 스크립트 로직은 현재 필요 없습니다.
</script>

<style scoped>
.small-card {
  text-align: center;
}

.height-25 {
  height: 25vh;
}

.height-61 {
  height: 61vh;
}

.height-46 {
  height: 46vh;
}

.height-40 {
  height: 40vh;
}
</style>
