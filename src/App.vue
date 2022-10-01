<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-fixed-top navbar-nav bg-light">
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
              <a href="produtos-component" class="nav-link">Produtos</a>
            </li>
            <li class="nav-item">
              <a href="pacientes-component" class="nav-link">Pacientes</a>
            </li>
            <li class="nav-item">
              <a href="medicos-component" class="nav-link">Médicos</a>
            </li>
            <li class="nav-item">
              <a href="sobre-component" class="nav-link">Sobre</a>
            </li>
            <li class="nav-item">
              <a href="contato-component" class="nav-link">Contato</a>
            </li>
          </ul>
          <div class="div-buttons">
            <button type="button" class="btn btn-success text-light">Cadastre-se</button>
            <button type="button" class="btn btn-success text-light">Log-in</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router"
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

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  })
}

</script>

<style scoped lang="scss">

  $success: #008894;

  @import "../node_modules/bootstrap/scss/bootstrap";

  #logo {
    width: 40px;
    height: 40px;
  }

  .btn-success {

  }

  p {
    font-weight: bold;
    color: #000;
  }

  a { 
    color: black;
  }

  .div-buttons {
    flex-wrap: wrap;
    display: flex;
    gap: 1rem;
  }
</style>