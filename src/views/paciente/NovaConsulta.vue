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
							<p class="m-0">{{ user.user_metadata.nome ? user.user_metadata.nome : user.email }}</p>
							<font-awesome-icon id="userIcon" icon="fa-solid fa-circle-user" />
							<button class="btn btn-sm" id="signout-btn" @click="signOut">Sign-Out</button>
              <button class="btn btn-sm" id="signout-btn" @click="test">Sign-Out</button>
						</div>
					</div>
				</div>
			</nav>
		</header>
      <div class="container-fluid mb-auto mt-auto d-flex flex-column" id="containerMainContent">
        <h2 class="titulo">Selecione o tipo de consulta que deseja:</h2>
        <router-link type="button" class="btn btn-primary" to="/confirmarendereço">Coleta de sangue</router-link>
        <router-link type="button" class="btn btn-primary" to="/confirmarendereço">Exame geral</router-link>
        <router-link type="button" class="btn btn-primary" to="/confirmarendereço">Exame dermatológico</router-link>
        <router-link type="button" class="btn btn-primary" to="/confirmarendereço">ASO (Atestado de Saúde Ocupacional)</router-link>
        <router-link type="button" class="btn btn-primary" to="/confirmarendereço">Vacinação</router-link>
        <router-link type="button" class="btn btn-primary" to="/confirmarendereço">Fisioterapia</router-link>
        <router-link type="button" class="btn btn-primary" to="/confirmarendereço">Nutricionista</router-link>
      </div>
      <footer class="footer-dashboard">
        <p class="m-0">Sistema para Médicos &copy; 2022</p>
      </footer>
    </div>
</template>

<script>
import useAuthUser from '@/useAuthUser';
import useDatabase from '@/useDatabase';

const { logout, user } = useAuthUser()
const { fetchConsultaMedico } = useDatabase();

export default {
  name: 'App',
  data() {
    return {
      user
    };
  },
  methods: {
    async signOut(){
      try{
        await logout();
        this.$router.replace("/");
      }
      catch{
        alert(error.error_description || error.message)
        this.errorMessage = error.message;
      }
      finally{
        alert("Logged Out")
      }
    },
    async test() {
      try{
        const data = await fetchConsultaMedico();   
        console.log(data);     
      }
      catch{
        alert(error.error_description || error.message)
        console.log(error)
      }
    },
  }
}
</script>

<style scoped lang="scss">
  $success: #395B59;
  $primary: #008894;

  @import "../../../node_modules/bootstrap/scss/bootstrap";

  header, div, footer {
    font-family: 'Montserrat', sans-serif;
  }

  footer {
    margin-top: auto;
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

  #formContainer {
    max-width: 50%;

    form * {
      border-radius: 0;
    }
  }

  #containerAll {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(@/assets/backgroundDashboard.png);
    background-attachment: scroll;
    background-size: cover;
  }

  #containerMainContent {
    margin-left: auto;
    margin-right: auto;
    max-width: 60%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .button {
    background-color: #008894;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 10px;
    margin: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    line-height: 50px;
    width: 300px;
    height: 50px;
    font-size: 10px;
    text-align: center;
  }

  .btn {
    width: 60%;
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;
    border-radius: 0;
  }

  .footer-dashboard {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #008894;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-dashboard p {
    color: #EEEEEE;
  }

  @media(max-width: 890px) {
    #containerMainContent {
      max-width: 90%;
    }

    .btn {
      width: 90%;
    }
  }
</style>