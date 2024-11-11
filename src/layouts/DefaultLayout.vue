<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" style="background: #ffffff; border-right: 1px solid #e8e8e8;">
      <div class="logo" style="background: #f0f2f5; height: 32px; margin: 16px; display: flex; align-items: center; justify-content: center;">
        XINNOS ICON
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" >
        <!-- 대메뉴 - 클릭 불가능한 제목 역할 -->
        <a-menu-item-group key="dashboard" title="Dashboard">
          <!-- 소메뉴 - 클릭 가능한 항목들 -->
          <a-menu-item key="1" @click="menuClick('dashboard')">
            <span>Pureun Pado Ho</span>
          </a-menu-item>
          <a-menu-item key="2" @click="menuClick('dashboard')">
            <span>Emerald Sun</span>
          </a-menu-item>
          <a-menu-item key="3" @click="menuClick('dashboard')">
            <span>Ocean Dream Ho</span>
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="analysis" title="Analysis & Comparison">
          <!-- 소메뉴 - 클릭 가능한 항목들 -->
          <a-menu-item key="4" @click="menuClick('analysis')">
            <span>Engine</span>
          </a-menu-item>
          <a-menu-item key="5" @click="menuClick('analysis')">
            <span>Propulsion</span>
          </a-menu-item>
          <a-menu-item key="6" @click="menuClick('analysis')">
            <span>Generator</span>
          </a-menu-item>
          <a-menu-item key="7" @click="menuClick('analysis')">
            <span>ESS</span>
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group key="machineLearning" title="MachineLearning">
          <!-- 소메뉴 - 클릭 가능한 항목들 -->
          <a-menu-item key="8" @click="menuClick('machineLearning')">
            <span>Learning</span>
          </a-menu-item>
          <a-menu-item key="9" @click="menuClick('machineLearning')">
            <span>Status</span>
          </a-menu-item>
        </a-menu-item-group>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <div class="header-left">
          <bar-chart-outlined style="margin-right: 8px;" />
          데이터 분석 및 비교 - 엔진
        </div>
        <div class="header-right">
          <a-space >
            <span class="admin-name">Admin</span>
            <a-dropdown>
              <a class="ant-dropdown-link" @click="handleMenuClick">
                <a-avatar src="https://avatars.githubusercontent.com/u/60" />
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="1">Profile</a-menu-item>
                  <a-menu-item key="2">Settings</a-menu-item>
                  <a-menu-item key="3">Logout</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </a-space>
        </div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <!-- 여기서 자식 페이지가 렌더링 됩니다 -->
        <RouterView />
      </a-layout-content>
      <a-layout-footer style="text-align: center; padding: 5px;">
        ©2022 Created by Xinnos
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { BarChartOutlined } from '@ant-design/icons-vue';

const collapsed = ref(false);
const selectedKeys = ref(['1']);
const router = useRouter();

const menuClick = (menu) => {
  console.log(menu);
  router.push(`/${menu}`);
}

const handleMenuClick = () => {
  // Dropdown 메뉴 클릭 시 동작 설정 (필요시 추가)
};
</script>

<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f2f5;
  padding: 0 16px;
}

.header-left {
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.header-right {
  display: flex;
  align-items: center;
}

.admin-name {
  font-size: 16px;
  color: #1890ff;
}
</style>
