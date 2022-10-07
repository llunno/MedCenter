<template>
    <div id="containerMaps">
      <h2>Consulte aqui as clínicas próximas a sua localização.</h2>
      <section class="map">
        <div class="searching-section">
          <div class="searching-component">
            <img class="search-icon" src="../../assets/icon-search.svg" />
            <input type="text" @input="handleInput" v-model="inputSearchValue" placeholder="Search..." />
            <GMapAutocomplete
                placeholder="This is a placeholder"
                @place_changed="setPlace"
                :options="{
                        types: ['hospital','health']
                }"
                >
            </GMapAutocomplete>
            <button
                @click='addMarker'
            >
                Add
            </button>
          </div>
        </div>
        <div ref="mapDiv" style="width: 100%; height: 98vh" />
        <GMapMap
            :center="center"
            :zoom="12"
            map-type-id="terrain"
            style="width: 100%; height: 98vh"
            >
                <GMapCluster>
                <GMapMarker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m.position"
                    :clickable="true"
                    :draggable="true"
                    @click="center=m.position"
                />
                </GMapCluster>
            </GMapMap>
      </section>
    </div>
  </template>
  
  <script>
  
  import useAuthUser from '@/useAuthUser';
  const { logout, user } = useAuthUser()
  export default {
    name: "App",
    data() {
      return {
        user,
        center: {lat: 51.093048, lng: 6.842120},
        currentPlace: null,
        markers: [
        {
          position: {
            lat: 51.093048, lng: 6.842120
          },
            },],
        places: [],
      };
    },
    mounted(){
        this.geolocate();
    },
    methods: {
      async signOut() {
        try {
          await logout();
          this.$router.replace("/");
        }
        catch {
          alert(error.error_description || error.message)
          this.errorMessage = error.message;
        }
        finally {
          alert("Logged Out")
        }
      },
      geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
            };
            });
        },
        setPlace(place) {
            this.currentPlace = place;
            },

        addMarker() {
        if (this.currentPlace) {
            const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng(),
            };
            this.markers.push({ position: marker });
            this.places.push(this.currentPlace);
            this.center = marker;
            this.currentPlace = null;
        }
        },

    },
    
  };
  </script>
  
  <style scoped lang="scss">
  #containerMaps {
    display: flex;
    flex-direction: column;
    background-color: white;
  }
  
  h2 {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: #395B59;
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
    filter: invert(45%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
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
