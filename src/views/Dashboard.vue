<template>
  <div id="containerAll">
    <header>
      <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-nav" style="background-color: #008894" id="navElement">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <router-link to="/">
              <img src="@/assets/logo.png" alt="logo-sistema" width="24" height="24" class="d-inline-block align-text-top"/>              
            </router-link>    
            MedCenter
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <div class="container-fluid" id="formContainer">
              <form class="d-flex" role="search" @submit.prevent>
                <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search">
                <button class="btn btn-light btn-sm">Buscar</button>
              </form>
            </div>
            <div class="div-User d-flex align-items-center gap-2">
                <p class="m-0">{{user.user_metadata.nome ? user.user_metadata.nome : user.email}}</p>
                <font-awesome-icon id="userIcon" icon="fa-solid fa-circle-user"/>
                  <!-- Provisório, favor fazer como preferirem -->
                <button class="btn btn-light btn-sm" @click="signOut">Sign-Out</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div class="container mb-auto mt-auto" id="containerMainContent">
        <div class="button medium-btn cel cel-1" href="#">Minhas Consultas</div>
        <div class="button medium-btn cel cel-2" href="#">Agendar Nova Consulta</div>
        <div class="button medium-btn cel cel-3" href="#">Acompanhar Status do Exame</div>
        <div class="button medium-btn cel cel-4">Consultar Clínicas Próximas</div>
        <div class="button medium-btn cel cel-5" href="#">Atualização Cadastral</div>
        <div class="cel cel-6">
          <small-map id="mapsGoogle"/>
        </div>
    </div>
    <footer class="footer-dashboard">
      <p class="m-0">Sistema para Médicos &copy; 2022</p>
    </footer>
  </div>
</template>

<script>
  import SmallMap from '../components/SmallMap.vue'
  import useAuthUser from '@/useAuthUser';

  const { logout, user } = useAuthUser();

  export default {
  name: 'App',
  components: {
    SmallMap
  },
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
    }
  }
}
</script>

<style scoped lang="scss">

  $success: #395B59;

  @import "../../node_modules/bootstrap/scss/bootstrap";

  header, div, footer {
    font-family: 'Montserrat', sans-serif;
  }

  #containerAll {
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
      background-size:cover;
      width: 100%;
      height: 100%;

      -webkit-filter: blur(2px);
      -moz-filter: blur(2px);
      -o-filter: blur(2px);
      -ms-filter: blur(2px);
      filter: blur(2px);
    }

    #containerMainContent {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      margin-left: auto;
      margin-right: auto;
      max-width: 50%;
      align-items: center;
      grid-gap: 1rem;
      justify-content: center;
      text-align: center;

      .cel {
        margin: 0;
      }

      .cel-5 {
        grid-column: 1;
      }

      .cel-6 {
        grid-column: 2/4;
        grid-row: 2/5;
        width: 100%;
        box-shadow: 1px 1px 1px black;

        #mapsGoogle {
          width: 10%;
          height: 100%;
        }
      }
    }
  }

  footer {
    margin-top: 0;
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

  .minhas-consultas {
    display: inline-block;
    cursor: pointer;
    width: 300px;
    padding: 5px 10px;
  }

  .nova-consulta {
    display: inline-block;
    cursor: pointer;
    width: 300px;
    padding: 5px 10px;
  }

  .button {
    display: inline-block;
    background-color: #008894;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    }
    
    .small-btn {
        width: 50px;
        height: 25px;
    }
    
    .medium-btn {
        line-height: 100px;
        text-align: center;
        width: 300px;
        height: 100px;
    }
    
    .big-btn {
        width: 620px;
        height: 300px;
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