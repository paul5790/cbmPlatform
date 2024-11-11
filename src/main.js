import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./main.css";
// Ant Design Vue 및 스타일 임포트
import Antd from "ant-design-vue";

import App from './App.vue'
import router from './router'
import VueECharts from "vue-echarts";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.component("v-chart", VueECharts);
app.mount('#app')
