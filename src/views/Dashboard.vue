<template>
  <div class="conteudo">
    <div class="botoes mt-5">
      <div class="button medium-btn" href="#">Minhas Consultas</div>
      <div class="button medium-btn" href="#">Agendar Nova Consulta</div>
      <div class="button medium-btn" href="#">Acompanhar Status do Exame</div>
    </div>
    <div class="botoes mt-5">
      <div class="button medium-btn" href="#">Consultar Clínicas Próximas</div>
      <GMapMap
      :center="center"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
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
    </div>
    <div class="botoes mt-5">
      <div class="button medium-btn" href="#">Atualização Cadastral</div>
    </div>
  </div>
    <div class="footer-dashboard">
    <p>Sistema para Médicos &copy; 2022</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        center: {lat: 51.093048, lng: 6.842120},
        markers: [
          {
            position: {
              lat: 51.093048, lng: 6.842120
            },
          }
          , // Along list of clusters
        ]
      }
    }
  }
</script>

<style>
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
    margin: 10px;
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