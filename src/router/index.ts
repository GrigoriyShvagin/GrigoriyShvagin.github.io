import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../Pages/MainPage.vue"),
  },
  {
    path: "/resume",
    component: () => import("../Pages/ResumePage.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
