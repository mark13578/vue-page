import { createRouter, createWebHistory } from "vue-router"
// component A
const Home = { template: "<div>Home</div>" };

// component B
const About = { template: "<div>About</div>" };

// 定義 router 的內容
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");