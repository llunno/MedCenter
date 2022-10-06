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
            <p>Hora Marcada</p>
          </th>
          <th scope="col" v-if="!user.user_metadata.medico">
            <p >Médico</p>
          </th>
          <th scope="col" v-else>
            <p >Paciente</p>
          </th>
          <th scope="col">
           <p>Observações</p>
          </th>
          <th scope="col">
           <p>Status</p>
          </th>
          <th scope="col" v-show="!user.user_metadata.medico">
           <p>Pego?</p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in consultas" :key="c.id">
          <td>
            {{c.consulta}}
          </td>
          <td>
            {{c.pego ? c.hora_marcada : "-"}}
          </td>
          <td v-if="!user.user_metadata.medico">
            {{c.pego? c.medico ? (c.medico.data.nome + " " + c.medico.data.sobrenome) : "-"  : "Sem Médico"}}
          </td>
          <td v-else>
            {{c.pego? c.usuario ? (c.usuario.data.nome + " " + c.usuario.data.sobrenome): "-"  : "Sem Médico"}}
          </td>
          <td>
            Sem informações
          </td>
          <td>
            {{c.pego ? (c.data_marcada ? (c.situacao ? "Definido" : "Agendado") : "Não agendado")   : "Não Obtido" }}
          </td>
          <td v-show="!user.user_metadata.medico">
            <input class="form-check-input" type="checkbox" v-model="c.pego"/>
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
  </div>
</template>

<script>
import useAuthUser from '@/useAuthUser';
import useDatabase from '@/useDatabase';

const { logout, user } = useAuthUser()
const { fetchConsultaMedico,fetchConsultaPaciente } = useDatabase();

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
    if (user.value.user_metadata.medico){
      try{
      const data = await fetchConsultaMedico();   
      console.log(data); 
      this.consultas = data
      }
      catch(error){
        alert(error.error_description || error.message)
      }
    }
    else{
      try{
      const data = await fetchConsultaPaciente();   
      console.log(data); 
      this.consultas = data
      }
      catch(error){
        alert(error.error_description || error.message)
      }
    }
  }
}
</script>

<style scoped lang="scss">

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
  max-width: 70%;
  border: 1px solid black;
  padding: 2rem 3rem 2rem 3rem;
  min-height: 20rem;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 40rem;
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

@media(max-height: 800px) {
  #tableContainer {
    height: 25rem;
  }
}
</style>