<template>
	<div class="container mb-auto mt-auto" id="containerMainContent">
		<router-link type="button" class="btn btn-primary btn-cel cel cel-1" to="/dashboard/consultaspaciente">Minhas
			Consultas</router-link>
		<router-link type="button" class="btn btn-primary btn-cel cel cel-2" to="/dashboard/novaconsulta"
			v-if="!user.user_metadata.medico">Agendar Nova Consulta</router-link>
		<router-link type="button" class="btn btn-primary btn-cel cel cel-2" to="/dashboard/consultarsolicitacoes" v-else>
			Consultar
			Solicitações de consulta</router-link>
		<router-link type="button" class="btn btn-primary btn-cel cel cel-3" to="/dashboard/consultarstatus"
			v-if="!user.user_metadata.medico">Acompanhar Status do Exame</router-link>
		<router-link type="button" class="btn btn-primary btn-cel cel cel-3" to="/dashboard/editarstatusexame" v-else>Editar
			status de
			exame</router-link>
		<router-link type="button" class="btn btn-primary btn-cel cel cel-4" to="/dashboard/clinicasprox">Consultar Clínicas
			Próximas
		</router-link>
		<router-link type="button" class="btn btn-primary btn-cel cel cel-5" to="/dashboard/atualizarcadastro">Atualização
			Cadastral</router-link>
		<div class="cel cel-6">
			<small-map id="mapsGoogle" />
		</div>
	</div>
</template>

<!-- eslint-disable no-undef -->
<script>
import SmallMap from "@/components/SmallMap.vue";
import useAuthUser from "@/useAuthUser";

const { user } = useAuthUser();

export default {
	name: "Dashboard",
	props: {},
	components: {
		SmallMap,
	},
	data() {
		return {
			user,
		};
	},
};
</script>

<style scoped lang="scss">
@import "@/css/DashBoardBaseStyle.scss";

@media (max-height: 900px) {
	#containerMainContent {
		width: 70%;

		.cel-6 {
			grid-row: 2/6;
		}

		.btn-cel {
			padding-top: 2rem;
			padding-bottom: 2rem;
			font-size: 0.9rem;
		}
	}
}

@media (max-width: 1200px) {
	#containerMainContent {
		.cel-6 {
			grid-row: 2/6;
		}
	}
}

@media (max-width: 995px) {
	#containerMainContent {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		padding-bottom: 3rem;
		padding-top: 3rem;

		.cel {
			width: 90%;
		}

		.cel-6 {
			height: 30rem;
		}
	}
}
</style>
