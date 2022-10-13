<template>
  <div class="main-page-container">
    <header>
      <nav class="navbar navbar-expand-lg navbar-nav" id="navElement">
        <div id="containerNavItems" class="container-fluid">
          <a class="navbar-brand" href="#" id="brandHOmea">
            <img src="@/assets/logo.png" alt="logo-sistema" width="24" height="24"
              class="d-inline-block align-text-top" />
            MedCenter
          </a>
          <button id="menuSidebarHome" class="navbar-toggler" v-show="shouldShowMenuSidebar"
            @click="toggleShowSidebarDiv" type="button" data-bs-target="#offcanvasNavbarHome"
            aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation" role="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasNavbarHome"
            aria-labelledby="offcanvasNavbarLabelHome">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title">Menus</h5>
              <button type="button" class="btn-close" id="btn-close-offcanvas" @click="toggleShowSidebarDiv"
                data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div id="corpoSidebarHome" class="offcanvas-body">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a href="#produtos-component" class="nav-link" @click="closeSideBaronLinkClick"
                    tabindex="0">Produtos</a>
                </li>
                <li class="nav-item">
                  <a href="#pacientes-component" class="nav-link" @click="closeSideBaronLinkClick"
                    tabindex="0">Pacientes</a>
                </li>
                <li class="nav-item">
                  <a href="#medicos-component" class="nav-link" @click="closeSideBaronLinkClick"
                    tabindex="0">Médicos</a>
                </li>
                <li class="nav-item">
                  <a href="#sobre-component" class="nav-link" @click="closeSideBaronLinkClick" tabindex="0">Sobre</a>
                </li>
                <li class="nav-item">
                  <a href="#contato-component" class="nav-link" @click="closeSideBaronLinkClick"
                    tabindex="0">Contato</a>
                </li>
              </ul>
              <div>
                <div class="div-buttons" v-if="!logado">
                  <router-link class="btn btn-primary text-light btn-home" to="/signup" tabindex="0">Cadastre-se
                  </router-link>
                  <router-link type="button" class="btn btn-primary text-light btn-home" to="/login" tabindex="0">Log-in
                  </router-link>
                </div>
                <div class="div-buttons" v-else>
                  <router-link class="btn btn-primary text-light btn-home" to="/dashboard" tabindex="0">Dashboard
                  </router-link>
                  <button @click="signOut" class="btn btn-primary text-light btn-home" tabindex="0">Log-out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="backgroundlayer" v-if="shouldShowDivSidebar"></div>
      <router-view />
      <div class="home">
        <h1>Uma solução ideal para conectar necessidade e oportunidade</h1>
        <h2>
          <span class="span-text">Considerando a necessidade de diversas pessoas para agendar uma colsulta ou exame à
            domicílio, oferecemos a você médico, a oportunidade de impulsionar a sua carreira e ser referência para a
            promoção e garantia do exercício ético da medicina</span>
        </h2>
      </div>
    </header>
    <main>
      <produtos id="produtos-component" />
      <pacientes id="pacientes-component" />
      <medicos id="medicos-component" />
      <sobre id="sobre-component" />
      <contato id="contato-component" />
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
          <font-awesome-icon id="icon-gplay" icon="fa-brands fa-google-play" />
          <p>Google Play</p>
        </div>
        <div id="apple-store" class="d-flex justify-content-center gap-2 align-items-center btn btn-success">
          <font-awesome-icon icon="fa-brands fa-app-store" />
          <p>App Store</p>
        </div>
      </section>
      <section id="faqc" class="text-end">
        <p>FAQ</p>
        <p>Copyright</p>
      </section>
    </footer>
    <font-awesome-icon @click="scrollBack" id="rollback-btn" v-show="shouldShow" icon="fa-solid fa-circle-chevron-up" />
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
      logado,
      shouldShowMenuSidebar: true,
      shouldShowDivSidebar: false,
    }
  },
  mounted() {
    window.onscroll = () => {
      this.showScroll();
      this.showMenuSidebar();
    },
      this.logado = isLoggedIn();


  },
  methods: {
    scrollBack: function () {
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
    showMenuSidebar() {
      if (window.scrollY > 5) {
        this.shouldShowMenuSidebar = false;
      }
      else {
        this.shouldShowMenuSidebar = true;
      }
    },
    async signOut() {
      try {
        await logout();
        this.$router.go();
      }
      catch {
        alert(error.error_description || error.message)
        this.errorMessage = error.message;
      }
    },
    toggleShowSidebarDiv() {
      const divSidebarElement = document.querySelector("#offcanvasNavbarHome");
      if (this.shouldShowDivSidebar === false) {
        divSidebarElement.classList.remove("offcanvasHide");
        divSidebarElement.classList.add("offcanvasShow");
      } else {
        divSidebarElement.classList.add("offcanvasHide");
      }
      this.shouldShowDivSidebar = !this.shouldShowDivSidebar;
    },
    closeSideBaronLinkClick() {
      if (window.matchMedia("(max-width: 991px)").matches) {
        this.toggleShowSidebarDiv();
      }
    }
  },
};

</script>

<style scoped lang="scss">
@import "@/css/HomeViewBaseStyle.scss";

.backgroundlayer {
  background-color: rgba(0, 0, 0, 0.589);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.offcanvasShow {
  transform: translateX(0%) !important;
  visibility: visible;
}

.offcanvasHide {
  transform: translateX(100%) !important;
}

@media (max-width: 991px) {
  a:not(#brandHOmea) {
    color: white;
    text-align: center;

    &:active {
      background-color: #283f3d75;
    }
  }

  .div-buttons {
    justify-content: center;
    gap: 5px;
  }

  #corpoSidebarHome {
    ul {
      li {
        padding: 0.5rem 0 0.5rem 0;
      }
    }
  }

  .btn-home {
    background-color: #395b59;
    margin: 0;
    justify-content: center;
    align-items: center;
    width: 70%;

    &:hover {
      background-color: #283f3d !important;
    }

    &:active {
      background-color: #283f3d !important;
    }
  }
}

@media (max-width: 970px) {
  .home * {
    max-width: 75%;
  }
}

@media (max-width: 903px) {
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

@media (max-width: 830px) {
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

    #faqc {
      text-align: center !important;
    }
  }
}

@media (max-width: 553px) {
  .home * {
    font-size: 1.5rem;
  }
}

@media (max-width: 553px) {
  .home * {
    font-size: 1.25rem;
  }
}
</style>

<!-- Credits
Assets:
<a href="https://www.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_6190059.htm#query=doctor&position=21&from_view=keyword"> - Image by senivpetro</a> on Freepik

<a href="https://www.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_2769131.htm#query=medico&position=17&from_view=search&track=sph"> Image by rawpixel.com</a> on Freepik

<a href="https://www.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_861960.htm#query=doctor&position=17&from_view=search&track=sph"> Image by pressfoto</a> on Freepik
-->