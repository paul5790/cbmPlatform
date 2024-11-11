<template>
  <div class="login">
    <h1>Login</h1>
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

function handleLogin() {
  authStore.login(); // 로그인 상태를 true로 변경
  router.push('/dashboard'); // 로그인 후 대시보드로 이동
}
</script>
