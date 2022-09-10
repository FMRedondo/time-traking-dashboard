import { createRouter, createWebHistory } from "vue-router";

import DailyView from "../views/DailyView.vue";
import WeeklyView from "../views/WeeklyView.vue";
import MonthlyView from "../views/MonthlyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "daily",
      component: DailyView,
    },
    {
      path: "/weekly",
      name: "weekly",
      component: WeeklyView,
    },
    {
      path: "/monthly",
      name: "monthly",
      component: MonthlyView,
    }
  ],
});

export default router;
