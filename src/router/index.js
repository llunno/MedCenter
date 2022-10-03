import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import useAuthUser from '@/useAuthUser';

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
  },
  {
    path: "/clinicasprox",
    name: "ClinicasProx",
    component: () => import("../views/ClinicasProx.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

 router.beforeEach((to,from,next) => {
   const { isLoggedIn } = useAuthUser();
    if (!isLoggedIn() && to.meta.requiresAuth) {      
      next("/login");
         } 
    else {
      next();
         }
 });


export default router;
