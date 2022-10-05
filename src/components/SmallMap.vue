<template>
    <GMapMap class="mapa"
        :center="center"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 100%;"
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
  </template>
  <script>
  export default {
    name: 'App',
    data() {
      return {
        center: {lat: -15.79, lng: -47.89},
        markers: [
          {
            position: {
              lat:-15.79, lng: -47.89
            },
          }
          , // Along list of clusters
        ]
      }
    }
  }
  </script>

  <style>
    .mapa {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  </style>