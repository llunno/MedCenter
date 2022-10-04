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
      <div class="container mb-auto mt-auto" id="containerMainContent">
        <h1 class="titulo">Selecione o tipo de consulta que deseja:</h1>
        <button type="button" class="button small-btn cel cel-1" @click.prevent="selectConsulta('Coleta de Sangue')">Coleta de sangue</button>
        <button type="button" class="button small-btn cel cel-2" @click.prevent="selectConsulta('Exame geral')">Exame geral</button>
        <button type="button" class="button small-btn cel cel-3" @click.prevent="selectConsulta('Exame dermatológico')">Exame dermatológico</button>
        <button type="button" class="button small-btn cel cel-4" @click.prevent="selectConsulta('ASO (Atestado de Saúde Ocupacional)')">ASO (Atestado de Saúde Ocupacional)</button>
        <button type="button" class="button small-btn cel cel-5" @click.prevent="selectConsulta('Vacinação')">Vacinação</button>
        <button type="button" class="button small-btn cel cel-6" @click.prevent="selectConsulta('Fisioterapia')">Fisioterapia</button>
        <button type="button" class="button small-btn cel cel-7" @click.prevent="selectConsulta('Nutricionista')">Nutricionista</button>
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
const { novaConsulta } = useDatabase();

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
    selectConsulta(consulta) {
      try{
        novaConsulta.value.consulta = consulta ;
        console.log(novaConsulta.value);
        this.$router.replace("/confirmarendereço");
      }
      catch(error){
        alert(error.error_description || error.message)
        console.log(error)
      }
    },

  }
}
</script>

<style scoped lang="scss">
  $success: #395B59;

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
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 50%;
    align-items: center;
    grid-gap: 1rem;
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
    }
    
    .small-btn {
        line-height: 50px;
        width: 300px;
        height: 50px;
        font-size: 10px;
        text-align: center;
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
</style>