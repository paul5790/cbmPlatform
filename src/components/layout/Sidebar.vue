<template>
  <aside class="sidebar">
    <div class="sidebar-logo">
      <span>XINNOS</span>
    </div>
    <nav class="sidebar-menu">
      <router-link to="/dashboard" class="sidebar-item" active-class="active">Dashboard</router-link>
      <router-link to="/analysis" class="sidebar-item" active-class="active">Analysis & Comparison</router-link>
      <router-link to="/machine-learning" class="sidebar-item" active-class="active">Machine Learning</router-link>
      <router-link to="/user-management" class="sidebar-item" active-class="active">User Management</router-link>
    </nav>
  </aside>
</template>

<script setup>
// 사이드바 컴포넌트에는 특별한 스크립트 로직이 필요하지 않습니다.
</script>

<style scoped>
.sidebar {
  width: 220px;
  height: 100vh;
  background-color: #2c3e50;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.sidebar-logo img {
  height: 40px;
  margin-right: 10px;
}

.sidebar-menu {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.sidebar-item {
  padding: 15px 20px;
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
}

.sidebar-item:hover {
  background-color: #34495e;
}

.active {
  background-color: #1abc9c;
}
</style>
