<template>
  <a-row gutter="16" style="margin-top: 10px">
    <!-- 왼쪽 상단: 선박 별 엔진 잔여수명과 고장 발생 종류 및 빈도를 상하로 배치 -->
    <a-col :span="12">
      <a-row gutter="16">
        <a-col :span="24">
          <a-card
            title="학습 데이터 선택"
            class="small-card height-15"
            size="small"
          >
            <!-- 잔여수명 차트 위치 -->
            <a-row gutter="16">
              <!-- 첫 번째 줄: 대상 시스템 선택과 Optimizer 선택 -->
              <a-col :span="8">
                <a-select placeholder="대상 시스템 선택" style="width: 100%">
                  <a-select-option value="system1">System 1</a-select-option>
                  <a-select-option value="system2">System 2</a-select-option>
                  <a-select-option value="system3">System 3</a-select-option>
                </a-select>
              </a-col>
              <a-col :span="8">
                <a-select placeholder="Optimizer 선택" style="width: 100%">
                  <a-select-option value="optimizer1"
                    >Optimizer 1</a-select-option
                  >
                  <a-select-option value="optimizer2"
                    >Optimizer 2</a-select-option
                  >
                  <a-select-option value="optimizer3"
                    >Optimizer 3</a-select-option
                  >
                </a-select>
              </a-col>
              <a-col :span="8">
                <a-date-picker style="width: 100%" />
              </a-col>
            </a-row>

            <a-row gutter="16" style="margin-top: 10px">
              <!-- 두 번째 줄: 데이터 선택과 Loss Function 선택 -->
              <a-col :span="8">
                <a-select placeholder="데이터 선택" style="width: 100%">
                  <a-select-option value="data1">Data 1</a-select-option>
                  <a-select-option value="data2">Data 2</a-select-option>
                  <a-select-option value="data3">Data 3</a-select-option>
                </a-select>
              </a-col>
              <a-col :span="8">
                <a-select placeholder="Loss Function 선택" style="width: 100%">
                  <a-select-option value="loss1"
                    >Loss Function 1</a-select-option
                  >
                  <a-select-option value="loss2"
                    >Loss Function 2</a-select-option
                  >
                  <a-select-option value="loss3"
                    >Loss Function 3</a-select-option
                  >
                </a-select>
              </a-col>
              <a-col :span="8">
                <a-button type="primary" style="width: 100%">Set</a-button>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
        <a-col :span="24" style="margin-top: 18px">
          <a-card
            title="AI 모델 구성"
            class="small-card height-71"
            size="small"
          >
            <!-- 고장 발생 종류 및 빈도 차트 위치 -->
            <a-table
              :columns="columns"
              :data-source="modelData"
              :row-selection="rowSelection"
              :pagination="false"
              :scroll="{ y: 540 }"
              :row-key="(record) => record.name"
              bordered
              :customRow="customRow"
              size="small"
            >
            </a-table>
          </a-card>
        </a-col>
      </a-row>
    </a-col>

    <!-- 오른쪽: 엔진 정보 (세로로 긴 카드) -->
    <a-col :span="12">
      <a-row gutter="16">
        <a-col :span="24">
          <a-card
            title="AI 모델 형상"
            class="small-card height-46"
            size="small"
          >
            <!-- 잔여수명 차트 위치 -->
            <DynamicGraph />
          </a-card>
        </a-col>
        <a-col :span="24" style="margin-top: 18px">
          <a-card
            title="AI 학습 현황"
            class="small-card height-40"
            size="small"
          >
            <!-- 고장 발생 종류 및 빈도 차트 위치 -->
            <div class="status-container">
              <AIBarChart />
              <RegressionChart />
            </div>
          </a-card>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>

<script setup>
import DynamicGraph from "../components/charts/DynamicGraph.vue";
import AIBarChart from "../components/charts/AIBarChart.vue";
import RegressionChart from "../components/charts/RegressionChart.vue";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: "8%",
  },
  {
    title: "Type",
    dataIndex: "type",
    width: "8%",
  },
  {
    title: "Activations",
    dataIndex: "activations",
    width: "10%",
  },
  {
    title: "Learning Properties",
    dataIndex: "properties",
    width: "20%",
  },
];

const modelData = [
  {
    name: `Data`,
    type: `Data Input`,
    activations: `224 x 224 x 3 x 1`,
    properties: `-`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `112 x 112 x 64 x 1`,
    properties: `Weight 7 x 7 x 3 x 64 Bias 1 x 1 x 64`,
  },
  {
    name: `Conv1-relu-7x7`,
    type: `ReLu`,
    activations: `112 x 112 x 64 x 1`,
    properties: `-`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `56 x 56 x 64 x 1`,
    properties: `-`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `56 x 56 x 64 x 1`,
    properties: `Weight 1 x 1 x 64 x 64 Bias 1 x 1 x 192`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `112 x 112 x 64 x 1`,
    properties: `Weight 7 x 7 x 3 x 64 Bias 1 x 1 x 64`,
  },
  {
    name: `Conv1-relu-7x7`,
    type: `ReLu`,
    activations: `112 x 112 x 64 x 1`,
    properties: `-`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `56 x 56 x 64 x 1`,
    properties: `-`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `56 x 56 x 64 x 1`,
    properties: `Weight 1 x 1 x 64 x 64 Bias 1 x 1 x 192`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `112 x 112 x 64 x 1`,
    properties: `Weight 7 x 7 x 3 x 64 Bias 1 x 1 x 64`,
  },
  {
    name: `Conv1-relu-7x7`,
    type: `ReLu`,
    activations: `112 x 112 x 64 x 1`,
    properties: `-`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `56 x 56 x 64 x 1`,
    properties: `-`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `56 x 56 x 64 x 1`,
    properties: `Weight 1 x 1 x 64 x 64 Bias 1 x 1 x 192`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `112 x 112 x 64 x 1`,
    properties: `Weight 7 x 7 x 3 x 64 Bias 1 x 1 x 64`,
  },
  {
    name: `Conv1-relu-7x7`,
    type: `ReLu`,
    activations: `112 x 112 x 64 x 1`,
    properties: `-`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `56 x 56 x 64 x 1`,
    properties: `-`,
  },
  {
    name: `Conv1-7x7_S2`,
    type: `Convolution`,
    activations: `56 x 56 x 64 x 1`,
    properties: `Weight 1 x 1 x 64 x 64 Bias 1 x 1 x 192`,
  },
];
</script>

<style scoped>
.small-card {
  text-align: center;
}

.height-15 {
  height: 15vh;
}

.height-71 {
  height: 71vh;
}

.height-46 {
  height: 46vh;
}

.height-40 {
  height: 40vh;
}

.status-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
</style>
