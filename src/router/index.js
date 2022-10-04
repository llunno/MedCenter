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
    component: () => import("../views/paciente/Dashboard.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/consultaspaciente",
    name: "ConsultasPaciente",
    component: () => import("../views/paciente/ConsultasPaciente.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/novaconsulta",
    name: "NovaConsulta",
    component: () => import("../views/paciente/NovaConsulta.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/consultarstatus",
    name: "ConsultarStatus",
    component: () => import("../views/paciente/ConsultarStatus.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/clinicasprox",
    name: "ClinicasProx",
    component: () => import("../views/paciente/ClinicasProx.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/atualizarcadastro",
    name: "AtualizarCadastro",
    component: () => import("../views/paciente/AtualizarCadastro.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/confirmarendereço",
    name: "ConfirmarEndereço",
    component: () => import("../views/paciente/ConfirmarEndereço.vue"),
    meta: {
      requiresAuth: true
    }
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
