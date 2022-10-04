<template>
	<div id="containerAll">
		<header>
			<nav class="navbar navbar-expand-lg navbar-fixed-top navbar-nav" style="background-color: #008894" id="navElement">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<router-link to="/">
							<img src="@/assets/logo.png" alt="logo-sistema" width="24" height="24" class="d-inline-block align-text-top" />
						</router-link>
						MedCenter 
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse">
						<div class="container-fluid" id="formContainer">
							<form class="d-flex" role="search" @submit.prevent>
								<input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search" />
								<button class="btn btn-success">Buscar</button>
							</form>
						</div>
						<div class="div-User d-flex align-items-center gap-2">
							<p class="m-0">{{ user.user_metadata.medico ? "Médico:" : "Paciente:" }}</p>
							<p class="m-0">{{ user.user_metadata.nome ? user.user_metadata.nome + " " + user.user_metadata.sobrenome : user.email }}</p>
							<font-awesome-icon id="userIcon" icon="fa-solid fa-circle-user" />
							<button class="btn btn-sm" id="signout-btn" @click="signOut">Sign-Out</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
		<div class="container mb-auto mt-auto" id="containerMainContent">
			<router-link type="button" class="btn btn-primary btn-cel cel cel-1" to="/consultaspaciente">Minhas Consultas</router-link>
			<router-link type="button" class="btn btn-primary btn-cel cel cel-2" to="/novaconsulta">Agendar Nova Consulta</router-link>
			<router-link type="button" class="btn btn-primary btn-cel cel cel-3" to="/consultarstatus">Acompanhar Status do Exame</router-link>
			<router-link type="button" class="btn btn-primary btn-cel cel cel-4" to="/clinicasprox">Consultar Clínicas Próximas</router-link>
			<router-link type="button" class="btn btn-primary btn-cel cel cel-5" to="/atualizarcadastro">Atualização Cadastral</router-link>
			<div class="cel cel-6">
				<small-map id="mapsGoogle" />
			</div>
		</div>
		<footer class="footer-dashboard">
			<p class="m-0">Sistema para Médicos &copy; 2022</p>
		</footer>
		<router-view></router-view>
	</div>
</template>

<script>
import SmallMap from "../../components/SmallMap.vue";
import useAuthUser from "@/useAuthUser";

const { logout, user } = useAuthUser();

export default {
	name: "App",
	components: {
		SmallMap,
	},
	data() {
		return {
			user,
		};
	},
	methods: {
		async signOut() {
			try {
				await logout();
				this.$router.replace("/");
			} catch {
				alert(error.error_description || error.message);
				this.errorMessage = error.message;
			} finally {
				alert("Logged Out");
			}
		},
	},
};
</script>

<style scoped lang="scss">
$success: #395b59;
$primary: #008894;

@import "../../../node_modules/bootstrap/scss/bootstrap";

@import "@/css/DashBoardBaseStyle.scss";

@media (max-height: 900px) {
	#containerAll {
		#containerMainContent {
			width: 70%;

			.cel-6 {
				grid-row: 2/6;
			}

			.btn-cel {
				padding-top: 2rem;
				padding-bottom: 2rem;
			}
		}
	}
}

@media (max-width: 1200px) {
	#containerAll {
		#containerMainContent {
			.cel-6 {
				grid-row: 2/6;
			}
		}
	}
}

@media (max-width: 995px) {
	#containerAll {
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

		&::before {
			-webkit-filter: blur(10px);
			-moz-filter: blur(10px);
			-o-filter: blur(10px);
			-ms-filter: blur(10px);
			filter: blur(10px);
		}
	}
}
</style>
