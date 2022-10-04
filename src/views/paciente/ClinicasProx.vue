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
  </div>
  <h2>Consulte aqui as clínicas próximas a sua localização.</h2>
  <section class="map">
    <div class="searching-section">
      <div class="searching-component">
        <img class="search-icon" src="../../assets/icon-search.svg" />
        <input type="text" @input="handleInput" v-model="inputSearchValue" placeholder="Search..."/>
      </div>
      <div v-if="resultList.length > 0" class="searching-list-component">
        <div class="searching-message">
          <b>{{ resultMessage }}</b>
        </div>
        <div class="searching-list">
          <li v-for="item in resultList" :key="item.id">
            <SearchingItem
              @item-onclick="handleItemOnClick(item)"
              :item="item"
              :enableButton="false"
            />
          </li>
        </div>
      </div>
      <div v-if="showNotFoundMessage" class="searching-not-found-component">
        <img v-bind:src="imgURL" />
        <p class="searching-not-found-message">{{ resultMessage }}</p>
      </div>
    </div>
    <div ref="mapDiv" style="width: 100%; height: 98vh" />
    <MapModal
      v-show="showModal"
      @closed-modal="handleCloseModal"
      :item="itemDataSelected"
    />
  </section>
</template>
<!-- eslint-disable no-undef -->
<script>

import useAuthUser from '@/useAuthUser';
import { computed, onMounted, ref } from "@vue/runtime-core";
import { getLocation } from "../../services/MapServices";
// import { Loader } from "@googlemaps/js-api-loader";
import {
  getSearchingData,
  getResultMessage,
} from "../../services/SearchingServices";
import MapModal from "@/components/MapModal.vue";
import SearchingItem from "@/components/SearchingItem.vue";
import {NO_FOUND_IMAGE_URL, SVG_PIN_PATH} from "../../utils/constants"

const { logout, user } = useAuthUser()
export default {
  name: "App",
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
  },
  components: {
    SearchingItem,
    MapModal,
  },
  setup() {
    const loader = new Loader({ apiKey: "AIzaSyDGTj3uANtQSKlu4_-CSYTH0oAwU5qC8RY" });
    const mapDiv = ref(null);
    const inputSearchValue = ref("");
    const resultList = ref([]);
    const resultMessage = ref("");
    const map = ref(null);
    const mapMarker = ref(null);
    const showModal = ref(false);
    const itemDataSelected = ref({});
    const showNotFoundMessage = ref(false);
    const imgURL = ref(
      NO_FOUND_IMAGE_URL
    );
    const { coords } = getLocation();
    const currentPosition = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));
    onMounted(async () => {
      await loader.load();
      const svgMarker = {
        path: SVG_PIN_PATH,
        fillColor: "rgb(68, 127, 239)",
        fillOpacity: 2,
        strokeWeight: 0,
        rotation: 0,
        scale: 3,
        anchor: new google.maps.Point(15, 15),
      };
      map.value = new google.maps.Map(mapDiv.value, {
        center: currentPosition.value,
        zoom: 10,
        disableDefaultUI: true,
      });
      mapMarker.value = new google.maps.Marker({
        position: currentPosition.value,
        map: map.value,
        icon: svgMarker,
      });
    });
    const handleInput = () => {
      if(inputSearchValue.value) {
        const searchingDataResult = getSearchingData(inputSearchValue.value);
        resultList.value = searchingDataResult;
        resultMessage.value = getResultMessage(searchingDataResult);
        showNotFoundMessage.value = searchingDataResult.length == 0;
      } else {
        resultList.value = [];
      } 
    }
    const handleItemOnClick = (item) => {
      const itemFormated = JSON.parse(JSON.stringify(item));
      map.value.setCenter({
        lat: itemFormated.location.lat,
        lng: itemFormated.location.lon,
      });
      map.value.setZoom(14);
      mapMarker.value.setPosition({
        lat: itemFormated.location.lat,
        lng: itemFormated.location.lon,
      });
      mapMarker.value.addListener("click", () => {
        showModal.value = true;
      });
      itemDataSelected.value = itemFormated;
    };
    const handleCloseModal = () => {
      showModal.value = false;
    };
    return {
      mapDiv,
      inputSearchValue,
      resultList,
      resultMessage,
      handleItemOnClick,
      handleInput,
      showModal,
      handleCloseModal,
      itemDataSelected,
      showNotFoundMessage,
      imgURL,
    };
  },
};
</script>

<style scoped lang="scss">
  $success: #395B59;

  @import "../../../node_modules/bootstrap/scss/bootstrap";

  header, div, footer {
    font-family: 'Montserrat', sans-serif;
  }

  #containerAll {
    display: flex;
    flex-direction: column;
    background-image: url(@/assets/backgroundDashboard.png);
    background-attachment: scroll;
    background-size: cover;
  }

  h2 {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        color: #395B59;
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

  html {
    height: 100%;
  }
  li {
   list-style-type: none;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    padding-left: 15px;
  }
  b {
    font-family: Arial, Helvetica, sans-serif;
  }
  .map {
  width: 100%;
  height: 98%;
  position: relative;
  }
  .searching-section {
    float: left;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    padding: 5px;
    color: #ffffff;
    font-weight: bold;
  }
  .search-icon {
    filter: invert(45%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);
  }
  .searching-component {
    width: 400px;
    height: 25px;
    background: #ffffff;
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 10px;
    margin: 10px;
  }
  .searching-list-component {
    width: 400px;
    height: auto;
    background: #ffffff;
    margin: 10px;
    color: black;
  }
  .searching-not-found-component {
    width: 420px;
    height: 300px;
    background: #ffffff;
    margin: 10px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }
  .searching-not-found-message {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
  .searching-message {
    width: 100%;
    height: 10px;
    color: #ffffff;
    background: rgb(68, 127, 239);
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
  }
  .searching-list {
    width: 100%;
    height: auto;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
  }
  .search-item:hover {
    background: rgb(236, 241, 249);
  }
</style>