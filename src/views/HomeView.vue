<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-fixed-top navbar-nav">
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
    <pacientes/>
    <medicos/>
    <sobre/>
    <contato/>
  </main>
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
  }
}
</script>

<style scoped lang="scss">

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
    text-color: black;
  }

  header {
    background-image: url(@/assets/doctor.jpg);
    font-family: 'Montserrat', sans-serif;
    height: 62rem;
    background-attachment: scroll;
    background-size: cover;
    width: 100%;
    background-repeat: no-repeat;
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

  h1,h2 {
    font-weight: bold;
    margin-top: 100px;
    margin-left: 60px;
    max-width: 50%;
    color: #FFF;
    text-shadow: black 0.1em 0.1em 0.2em;
    line-height: 1.5;
  }
</style>