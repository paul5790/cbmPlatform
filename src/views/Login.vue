<template>
  <div class="login-container">
    <div class="login-box">
      <img src="../../public/xinnos_logo.png" alt="Logo" class="logo" />
      <a-form
        :model="formState"
        name="login_form"
        class="login-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" placeholder="ID">
            <template #prefix>
              <UserOutlined />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password
            v-model:value="formState.password"
            placeholder="Password"
          >
            <template #prefix>
              <LockOutlined />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item>
          <a-form-item name="remember" no-style>
            <a-checkbox v-model:checked="formState.remember"
              >Remember me</a-checkbox
            >
          </a-form-item>
          <a class="login-form-forgot" href="">Forgot password</a>
        </a-form-item>

        <a-form-item>
          <a-button
            @click="handleLogin"
            type="primary"
            html-type="submit"
            class="login-form-button"
            :disabled="disabled"
          >
            Log in
          </a-button>
          Or
      <a href="">register now!</a>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

function handleLogin() {
  authStore.login(); // 로그인 상태를 true로 변경
  router.push("/dashboard"); // 로그인 후 대시보드로 이동
}

const formState = reactive({
  username: "",
  password: "",
  remember: false,
});

const onFinish = (values) => {
  console.log("Login Successful:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Login Failed:", errorInfo);
};

const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../public/backimg.png") no-repeat center center fixed;
  background-size: cover;
}

.login-box {
  width: 360px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.logo {
  width: 150px;
  margin-bottom: 20px;
}

.login-form {
  text-align: left;
}

.login-form-button {
  width: 100%;
}

.remember-forgot-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-form-forgot {
  float: right;
}
</style>

<!-- <template>
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
</script> -->
