import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import useAuthUser from "@/useAuthUser";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/signup",
		name: "Signup",
		component: () => import("../views/Signup.vue"),
	},
	{
		path: "/atualizarcadastro",
		name: "AtualizarCadastro",
		component: () => import("../views/paciente/AtualizarCadastro.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/novaconsulta/endereco",
		name: "ConfirmarEndereco",
		component: () => import("../views/paciente/ConfirmarEndereço.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/novaconsulta/endereco/pagamento",
		name: "ConfirmarPagamento",
		component: () => import("../views/paciente/ConfirmarMeioPagamento.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard/novaconsulta/endereco/pagamento/resumo-solicitacao",
		name: "ConfirmarSolicitacao",
		component: () => import("../views/paciente/ConfirmarSolicitacao.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/consultarsolicitacoes",
		name: "ConsultarSolicitacoes",
		component: () => import("../views/paciente/ConsultarSolicitacoes.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/editarstatusexame",
		name: "EditarStatusExame",
		component: () => import("../views/paciente/EditarStatusExame.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/solicitacaoefetuada",
		name: "SolicitacaoEfetuada",
		component: () => import("../views/paciente/SolicitacaoEfetuada.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/atualizacaocadastral",
		name: "AtualizacaoCadastral",
		component: () => import("../views/paciente/AtualizarCadastro.vue"),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: "/dashboard",
		name: "ContainerAreaLogada",
		component: () => import("../views/ContainerAreaLogada.vue"),
		meta: {
			requiresAuth: true,
		},
		children: [
			{
				path: "",
				name: "Dashboard",
				component: () => import("../views/Dashboard.vue"),
				meta: {
					requiresAuth: true,
				},
			},
			{
				path: "/dashboard/novaconsulta",
				name: "NovaConsulta",
				component: () => import("../views/paciente/NovaConsulta.vue"),
				meta: {
					requiresAuth: true,
				},
			},
			{
				path: "/dashboard/consultaspaciente",
				name: "ConsultasPaciente",
				component: () => import("../views/paciente/ConsultasPaciente.vue"),
				meta: {
					requiresAuth: true,
				},
			},
			{
				path: "/dashboard/consultarstatus",
				name: "ConsultarStatus",
				component: () => import("../views/paciente/ConsultarStatus.vue"),
				meta: {
					requiresAuth: true,
				},
			},
			{
				path: "/dashboard/clinicasprox",
				name: "ClinicasProx",
				component: () => import("../views/paciente/ClinicasProx.vue"),
				meta: {
					requiresAuth: true,
				},
			},
			{
				path: "/dashboard/testgmap",
				name: "testGmap",
				component: () => import("../views/paciente/testGmap.vue"),
			},

		]
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const { isLoggedIn } = useAuthUser();
	if (!isLoggedIn() && to.meta.requiresAuth) {
		next("/login");
	} else {
		next();
	}
});

export default router;
