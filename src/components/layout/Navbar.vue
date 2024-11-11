<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <span>XINNOS</span>
    </div>
    <div class="navbar-menu">
      <a href="#" class="navbar-item">Dashboard</a>
      <a href="#" class="navbar-item">Analysis</a>
      <a href="#" class="navbar-item">Machine Learning</a>
    </div>
    <div class="navbar-profile">
      <button @click="handleNotification" class="navbar-icon">
        <i class="icon-notification">🔔</i>
      </button>
      <button @click="handleProfile" class="navbar-icon">
        <i class="icon-user">👤</i>
      </button>
    </div>
  </nav>
</template>

<script setup>
function handleNotification() {
  alert('Notifications clicked!');
}

function handleProfile() {
  alert('Profile clicked!');
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  height: 60px;
}

.navbar-logo {
  display: flex;
  align-items: center;
}

.navbar-logo img {
  height: 40px;
  margin-right: 10px;
}

.navbar-menu {
  display: flex;
  gap: 20px;
}

.navbar-item {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
}

.navbar-item:hover {
  text-decoration: underline;
}

.navbar-profile {
  display: flex;
  gap: 10px;
}

.navbar-icon {
  background: none;
  border: none;
  color: #ecf0f1;
  font-size: 20px;
  cursor: pointer;
}

.navbar-icon:hover {
  color: #bdc3c7;
}
</style>
