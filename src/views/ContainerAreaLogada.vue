<template>
	<div id="containerAreaLogada">
		<header>
			<nav class="navbar navbar-expand-lg navbar-fixed-top navbar-nav" style="background-color: #008894" id="navElement">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						<router-link to="/">
							<img src="@/assets/logo.png" alt="logo-sistema" width="24" height="24" class="d-inline-block align-text-top" />
						</router-link>
						MedCenter
					</a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
		<router-view/>
		<footer class="footer-dashboard">
			<p class="m-0">Sistema para Médicos &copy; 2022</p>
		</footer>
	</div>
</template>

<!-- eslint-disable no-undef -->
<script>
//import Dashboard from "@/components/Dashboard";
import useAuthUser from "@/useAuthUser";

const { logout, user } = useAuthUser();

export default {
	name: "app",
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
#containerAreaLogada {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: auto;
	position: relative;
	justify-content: center;

	&::before {
		content: "";
		position: fixed;
		left: 0;
		right: 0;
		z-index: -1;

		display: block;
		background-image: url(@/assets/backgroundDashboard.png);
		background-size: cover;
		background-attachment: cover;
		width: 100%;
		height: 100%;

		-webkit-filter: blur(2px);
		-moz-filter: blur(2px);
		-o-filter: blur(2px);
		-ms-filter: blur(2px);
		filter: blur(2px);
	}
}

.footer-dashboard {
	margin-top: 0;
	position: relative;
	bottom: 0;
	width: 100%;
	height: 50px;
	background-color: #008894;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		color: #eeeeee;
	}
}

.div-User {
	#userIcon {
		font-size: 2.4rem;
		color: white;
	}

	p {
		color: white;
	}
}

#signout-btn {
	color: rgb(236, 236, 236);
	font-size: 0.7rem;
	text-decoration: underline;
}

#formContainer {
	max-width: 50%;

	form * {
		border-radius: 0;
	}
}

@media (max-width: 995px) {
	#containerAreaLogada {
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
