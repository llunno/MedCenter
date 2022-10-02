<template>
  <div class="main-page-container">
    <header>
      <nav class="navbar navbar-expand-md navbar-fixed-top navbar-nav" id="navElement">
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
                <a href="#produtos-component" class="nav-link">Produtos</a>
              </li>
              <li class="nav-item">
                <a href="#pacientes-component" class="nav-link">Pacientes</a>
              </li>
              <li class="nav-item">
                <a href="#medicos-component" class="nav-link">Médicos</a>
              </li>
              <li class="nav-item">
                <a href="#sobre-component" class="nav-link">Sobre</a>
              </li>
              <li class="nav-item">
                <a href="#contato-component" class="nav-link">Contato</a>
              </li>
            </ul>
            <div class="div-buttons">
                <router-link class="btn btn-success text-light" to="/signup">Cadastre-se</router-link>
                <router-link type="button" class="btn btn-success text-light" to="/login">Log-in</router-link>
            </div>
          </div>
        </div>
      </nav>
      <router-view/>
      <div class="home">
        <h1>Uma solução ideal para conectar necessidade e oportunidade</h1>
        <h2>
          <span class="span-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
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
        <div id="gplay" class="d-flex justify-content-center gap-2 align-items-center mb-2 btn btn-primary">
          <font-awesome-icon  id="icon-gplay" icon="fa-brands fa-google-play" />
          <p>Google Play</p>
        </div>
        <div id="apple-store" class="d-flex justify-content-center gap-2 align-items-center btn btn-primary">
          <font-awesome-icon icon="fa-brands fa-app-store" />
          <p>App Store</p>
        </div>
      </section>
      <section  id="faqc" class="text-end">
        <p>FAQ</p>
        <p>Copyright</p>
      </section>
    </footer>
    <font-awesome-icon @click="scrollBack" id="rollback-btn" icon="fa-solid fa-circle-chevron-up"/>
  </div>
</template>

<script>
  import Produtos from "@/components/Produtos";
  import Pacientes from "@/components/Pacientes";
  import Medicos from "@/components/Medicos";
  import Sobre from "@/components/Sobre";
  import Contato from "@/components/Contato";

  export default {
    
  name: 'app',
  components: {
    produtos: Produtos,
    pacientes: Pacientes,
    medicos: Medicos,
    sobre: Sobre,
    contato: Contato
  },
  methods: {
    scrollBack: function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      console.log(this.scrollNumber)
    }
  }

}
</script>

<style scoped lang="scss">

  #scrollNumber {
    position: fixed;
  }

  $primary: rgba(58, 58, 58, 0.329);
  $success: #008894;

  @import "../../node_modules/bootstrap/scss/bootstrap";

  #logo {
    width: 40px;
    height: 40px;
  }

  a { 
    color: black;
  }

  .div-buttons {
    flex-wrap: wrap;
    display: flex;
    gap: 1rem;
  }

  .nav-item {
    font-weight: bold;
    color: black;
  }

  header {
    background-image: url(@/assets/doctor.jpg);
    font-family: 'Montserrat', sans-serif;
    height: 62rem;
    background-attachment: scroll;
    background-size: cover;
    width: 100%;
    background-repeat: no-repeat;

    h1,h2 {
      font-weight: bold;
      margin-top: 100px;
      margin-left: 60px;
      max-width: 50%;
      color: #FFF;
      text-shadow: black 0.1em 0.1em 0.2em;
      line-height: 1.5;
    }
  }

  .main-page-container {
    background-color: #eeee;
  }

  .home h1 {
    text-align: left;
    align-items: center;
    justify-content: center;
    margin: 150px 50px 10px;

  }

  .home h2 {
    text-align: left;
    align-items: center;
    justify-content: center;
    margin: 0px 50px;
  }

  footer {
    background-color: #395B59;
    margin-top: 4.4rem;
    padding: 4rem;
    padding-top: 4.4rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    color: white;

    ul {

      li {
        line-height: 2.4;
      }
    }

    #section-legal {
      max-width: 30%;

      ul {
        list-style: none;
        padding-left: 0;
      }
    }

    #gplay, #apple-store {
      border-radius: 4rem;
      background-color: rgba(0, 0, 0, 0.329);
      max-width: 8rem;
      margin-left: auto;
      margin-right: auto;
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      
    }

    #icon-gplay, #icon-apple{
      margin: 0;
      padding: 0;
    }

    div {
      p {
        padding: 0;
        margin: 0;
        font-size: 0.75rem;
      }
    }

    #faqc{
      font-weight: bold;
    }
  }

  #rollback-btn {
    position: fixed;
    right: 30px;
    bottom: 20px;
    z-index: 99;
    cursor: pointer;
    outline: none;
    font-size: 3.5rem;
    color: #395B59;
    background-color: rgba(255, 255, 255, 0.596);
    border-radius: 100px;
    border: none;
    box-shadow: 5px 5px  10px rgba(0, 0, 0, 0.452);
  }

  #rollback-btn:hover {
    color: #2f4b49;
  }
</style>