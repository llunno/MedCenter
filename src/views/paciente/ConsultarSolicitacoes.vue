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
		<main class="d-flex flex-column align-items-center justify-content-center gap-4 text-center container-fluid my-auto">
    <div id="tableContainer" class="text-center container-fluid my-auto">
      <table class="table table-responsive table-hover table-borderless align-middle">
        <thead>
          <tr>
            <th scope="col">
              <p>Tipo</p>
            </th>
            <th scope="col">
              <p>Data</p>
            </th>
            <th scope="col">
              <p>Horário (24h)</p>
            </th>
            <th scope="col">
              <p>Médico</p>
            </th>
            <th scope="col">
             <p>Observações</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in consultas" :key="c.id">
            <td>
              {{c.consulta}}
            </td>
            <td>
              {{c.hora_ate}}
            </td>
            <td>
              {{c.pego ? c.hora_marcada : "-"}}
            </td>
            <td>
              {{c.pego? c.medico.data.nome + " " + c.medico.data.sobrenome  : "Sem Médico"}}
            </td>
            <td>
              Sem informações
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-primary btn-voltar" @click="getBack">Voltar</button>
  </main>
		<footer class="footer-dashboard">
			<p class="m-0">Sistema para Médicos &copy; 2022</p>
		</footer>
		<router-view></router-view>
	</div>
</template>

<script>
import useAuthUser from '@/useAuthUser';
import useDatabase from '@/useDatabase';

const { logout, user } = useAuthUser()
const { fetchConsultaLivre } = useDatabase();

export default {
	name: 'App',
	data() {
	return {
		user,
		consultas: null
	};
	},
	methods: {
	async signOut(){
		try{
		await logout();
		this.$router.replace("/");
		}
		catch (error){
		alert(error.error_description || error.message)
		this.errorMessage = error.message;
		}
		finally{
		alert("Logged Out")
		}
	},
	getBack(){
		this.$router.replace("/dashboard");
	},
	},
	async mounted(){
		try{
		const data = await fetchConsultaLivre();   
		console.log(data); 
		this.consultas = data
		}
		catch(error){
			alert(error.error_description || error.message)
		}
	}
}
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
