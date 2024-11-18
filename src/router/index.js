import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "@/stores/auth";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import Analysis from "@/views/Analysis.vue";
import MachineLearning from "@/views/MachineLearning.vue";
import Test from "@/components/charts/CandlestickChart.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: DefaultLayout,
    children: [
      {
        path: "dashboard",
        component: Dashboard,
        meta: { requiresAuth: true }, // 로그인 필요
      },
      {
        path: "analysis",
        component: Analysis,
        meta: { requiresAuth: true }, // 로그인 필요
      },
      {
        path: "machineLearning",
        component: MachineLearning,
        meta: { requiresAuth: true }, // 로그인 필요
      },
      {
        path: "test",
        component: Test,
        meta: { requiresAuth: true }, // 로그인 필요
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 가드 설정
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // 로그인이 필요한데 로그인 상태가 아니라면 로그인 페이지로 리디렉션
    next("/login");
  } else {
    next(); // 그 외의 경우는 정상적으로 진행
  }
});

export default router
