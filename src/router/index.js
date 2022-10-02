import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import { getAuth } from "firebase/auth";
import { store } from '../store'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const userSession = store.user
  if (!userSession) {
    alert("Você não tem autorização para acessar essa tela, faça o login!");
    next("/login");
  } else {
    next();
  }
});

export default router;
