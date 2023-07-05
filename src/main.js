import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./view/Home.vue";
import About from "./view/About.vue";
import Html from "./components/about/html.vue";
import Css from "./components/about/css.vue";
import Js from "./components/about/js.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/about",
    component: About,
    children: [
      {
        path: "",
        component: Html
      },
      {
        path: "css",
        component: Css
      },
      {
        path: "js",
        component: Js
      }
    ]
  },
  { path: "/*", redirect: "/" }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount("#app");
