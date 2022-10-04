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
          <tr>
            <td>
              Coleta de Sangue
            </td>
            <td>
              18/08/2022
            </td>
            <td>
              11:00
            </td>
            <td>
              Carlos Januzzi
            </td>
            <td>
              Pode atrasar 15 minutos
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-primary btn-voltar">Voltar</button>
  </main>
    <footer class="footer-dashboard">
      <p class="m-0">Sistema para Médicos &copy; 2022</p>
    </footer>
    </div>
</template>

<script>
import useAuthUser from '@/useAuthUser';

const { logout, user } = useAuthUser()
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

  #containerAll {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-attachment: scroll;
    background-size: cover;
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

  #signout-btn {
	color: rgb(236, 236, 236);
	font-size: 0.7rem;
	text-decoration: underline;
}

#tableContainer {
  max-width: 75%;
  border: 1px solid black;
  padding: 2rem 3rem 2rem 3rem;
  min-height: 20rem;
  overflow-x: auto;
}

.btn-voltar {
  width: 15rem;
  padding: 1rem;
  color: white !important;
}



table {
  min-width: 20rem !important;
  th {
    color: white;
    font-weight: normal;
  }

  thead {
    p {
      background-color: #008894;
      padding: 1rem;
      margin: 0;
      min-width: 10rem;
    }
  }
}
</style>