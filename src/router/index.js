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
    path: "/confirmarendereco",
    name: "ConfirmarEndereco",
    component: () => import("../views/paciente/ConfirmarEndereço.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/confirmarpagamento",
    name: "ConfirmarPagamento",
    component: () => import("../views/paciente/ConfirmarMeioPagamento.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/confirmarsolicitacao",
    name: "ConfirmarSolicitacao",
    component: () => import("../views/paciente/ConfirmarSolicitacao.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/consultarsolicitacoes",
    name: "ConsultarSolicitacoes",
    component: () => import("../views/paciente/ConsultarSolicitacoes.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/editarstatusexame",
    name: "EditarStatusExame",
    component: () => import("../views/paciente/EditarStatusExame.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/solicitacaoefetuada",
    name: "SolicitacaoEfetuada",
    component: () => import("../views/paciente/SolicitacaoEfetuada.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/confirmarsolicitacao",
    name: "ConfirmarSolicitacao",
    component: () => import("../views/paciente/ConfirmarSolicitacao.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/atualizacaocadastral",
    name: "AtualizacaoCadastral",
    component: () => import("../views/paciente/AtualizarCadastro.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/arealogada",
    name: "ContainerAreaLogada",
    component: () => import("../views/ContainerAreaLogada.vue"),
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
