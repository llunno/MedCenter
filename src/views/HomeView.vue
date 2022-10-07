<template>
  <div class="main-page-container">
    <header>
      <nav class="navbar navbar-expand-lg navbar-fixed-top navbar-nav" id="navElement">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">            
            <img src="@/assets/logo.png" alt="logo-sistema" width="24" height="24" class="d-inline-block align-text-top"/>
            MedCenter
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a href="#produtos-component" class="nav-link" tabindex="0">Produtos</a>
              </li>
              <li class="nav-item">
                <a href="#pacientes-component" class="nav-link" tabindex="0">Pacientes</a>
              </li>
              <li class="nav-item">
                <a href="#medicos-component" class="nav-link" tabindex="0">Médicos</a>
              </li>
              <li class="nav-item">
                <a href="#sobre-component" class="nav-link" tabindex="0">Sobre</a>
              </li>
              <li class="nav-item">
                <a href="#contato-component" class="nav-link" tabindex="0">Contato</a>
              </li>
            </ul>
            <div>
              <div class="div-buttons" v-if="!logado" >
                <router-link class="btn btn-primary text-light" to="/signup" tabindex="0">Cadastre-se</router-link>
                <router-link type="button" class="btn btn-primary text-light" to="/login" tabindex="0">Log-in</router-link>
              </div>
              <div class="div-buttons" v-else>
                <router-link class="btn btn-primary text-light" to="/dashboard" tabindex="0">Dashboard</router-link>
                <button @click="signOut" class="btn btn-primary text-light" tabindex="0">Log-out</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <router-view/>
      <div class="home">
        <h1>Uma solução ideal para conectar necessidade e oportunidade</h1>
        <h2>
          <span class="span-text">Considerando a necessidade de diversas pessoas para agendar uma colsulta ou exame à domicílio, oferecemos a você médico, a oportunidade de impulsionar a sua carreira e ser referência para a promoção e garantia do exercício ético da medicina</span>
        </h2>
      </div>
    </header>
    <main>
      <produtos id="produtos-component"/>
      <pacientes id="pacientes-component"/>
      <medicos id="medicos-component"/>
      <sobre id="sobre-component"/>
      <contato id="contato-component"/>
    </main>
    <footer>
      <section id="section-contatos">
        <h4>Contatos</h4>
        <ul>
          <li>Contato 1</li>
          <li>Contato 2</li>
          <li>COntato 3</li>
        </ul>
      </section>
      <section id="section-legal">
        <h4>Legal</h4>
        <ul>
          <li>Política de Privacidade</li>
          <li>Lei Geral da Proteção de Dados - LGPD</li>
          <li>Termos e condições de uso</li>
        </ul>
      </section>
      <section id="section-app" class="text-center">
        <h4>Baixe nosso app</h4>
        <div id="gplay" class="d-flex justify-content-center gap-2 align-items-center mb-2 btn btn-success">
          <font-awesome-icon  id="icon-gplay" icon="fa-brands fa-google-play" />
          <p>Google Play</p>
        </div>
        <div id="apple-store" class="d-flex justify-content-center gap-2 align-items-center btn btn-success">
          <font-awesome-icon icon="fa-brands fa-app-store" />
          <p>App Store</p>
        </div>
      </section>
      <section  id="faqc" class="text-end">
        <p>FAQ</p>
        <p>Copyright</p>
      </section>
    </footer>
    <font-awesome-icon @click="scrollBack" id="rollback-btn" v-show="shouldShow" icon="fa-solid fa-circle-chevron-up"/>
  </div>
</template>

<!-- eslint-disable no-undef -->
<script>
  import Produtos from "@/components/Produtos";
  import Pacientes from "@/components/Pacientes";
  import Medicos from "@/components/Medicos";
  import Sobre from "@/components/Sobre";
  import Contato from "@/components/Contato";
  import useAuthUser from '@/useAuthUser';

  const { logout, isLoggedIn, user, session } = useAuthUser();

  let logado = isLoggedIn()
  export default {
  name: 'app',
  components: {
    produtos: Produtos,
    pacientes: Pacientes,
    medicos: Medicos,
    sobre: Sobre,
    contato: Contato
  },
  data() {
    return {
      shouldShow: false,
      logado
    }
  },
  mounted() {
    window.onscroll = () => {
      this.showScroll();
    }
    this.logado = isLoggedIn()
  },
  methods: {
    scrollBack: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    },
    showScroll() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        this.shouldShow = true;
      } else {
        this.shouldShow = false;
      }
    },
    async signOut(){
      try{
        await logout();
        this.$router.go();
      }
      catch{
        alert(error.error_description || error.message)
        this.errorMessage = error.message;
      }
    },
    // função teste user
    // getUser(){
    //   if (user){
    //     alert(user.value.email)
    //     console.log(user.value.email)
    //     if (isLoggedIn){
    //       console.log("logado")
    //     }
    //     else{
    //       console.log("não")
    //     }
    //   }else{
    //     alert("Dont have user")
    //   }
    // }
  }
}
</script>

<style scoped lang="scss">

  @import "@/css/HomeViewBaseStyle.scss";

  @media(max-width: 970px) {
    .home * {
      max-width: 75%;
    }
  }

  @media(max-width: 903px) {
    .home * {
      text-align: center !important;
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
      line-height: 2;
    }

    .home h1 {
      margin-bottom: 4rem;
    }
  }

  @media(max-width: 830px) {
    footer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding: 2rem;

      #section-legal {
        max-width: 100%;
        text-align: center;
      }

      #section-contatos {
        text-align: center;
        max-width: 100%;

        ul {
          list-style: none;
          padding-left: 0;
        }
      }

      #faqc{
        text-align: center !important;
      }
    }
  }

  @media(max-width: 553px) {
    .home * {
      font-size: 1.5rem;
    }
  }

  @media(max-width: 553px) {
    .home * {
      font-size: 1.25rem;
    }
  }
</style>