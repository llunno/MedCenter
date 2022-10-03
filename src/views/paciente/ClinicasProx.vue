<template>
  <div id="containerAll">
    <header>
        <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-nav" style="background-color: #008894" id="navElement">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src="@/assets/logo.png" alt="logo-sistema" width="24" height="24" class="d-inline-block align-text-top"/>
              MedCenter
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
              <div class="container-fluid" id="formContainer">
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search">
                  <button class="btn btn-success" type="submit">Buscar</button>
                </form>
              </div>
              <div class="div-User d-flex align-items-center gap-2">
                  <p class="m-0">{{user.user_metadata.nome ? user.user_metadata.nome : user.email}}</p>
                  <font-awesome-icon id="userIcon" icon="fa-solid fa-circle-user"/>
                  <!-- Provisório, favor fazer como preferirem -->
                  <button @click="signOut">Sign-Out</button>
              </div>
            </div>
          </div>
        </nav>
    </header>
    <locations />
    <google-map />
    <footer class="footer-dashboard">
      <p class="m-0">Sistema para Médicos &copy; 2022</p>
    </footer>
  </div>
</template>

<script>
import Locations from '../../components/Locations.vue'
import GoogleMap from '../../components/GoogleMap.vue'
import useAuthUser from '@/useAuthUser';

const { logout, user } = useAuthUser()
export default {
  name: 'App',
  components: {
    Locations,
    GoogleMap
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

  #containerAll {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url(@/assets/backgroundDashboard.png);
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
</style>