<template>    
      <div class="container-fluid mb-auto mt-auto d-flex flex-column" id="containerNovaConsulta">
        <h2 class="titulo">Selecione o tipo de consulta que deseja:</h2>
        <button type="button" class="btn btn-primary btn-exame" @click.prevent="selectConsulta('Coleta de Sangue')">Coleta de sangue</button>
        <button type="button" class="btn btn-primary btn-exame" @click.prevent="selectConsulta('Exame geral')">Exame geral</button>
        <button type="button" class="btn btn-primary btn-exame" @click.prevent="selectConsulta('Exame dermatológico')">Exame dermatológico</button>
        <button type="button" class="btn btn-primary btn-exame" @click.prevent="selectConsulta('ASO (Atestado de Saúde Ocupacional)')">ASO (Atestado de Saúde Ocupacional)</button>
        <button type="button" class="btn btn-primary btn-exame" @click.prevent="selectConsulta('Vacinação')">Vacinação</button>
        <button type="button" class="btn btn-primary btn-exame" @click.prevent="selectConsulta('Fisioterapia')">Fisioterapia</button>
        <button type="button" class="btn btn-primary btn-exame" @click.prevent="selectConsulta('Nutricionista')">Nutricionista</button>
      </div>
</template>

<!-- eslint-disable no-undef -->
<script>
import useAuthUser from '@/useAuthUser';
import useDatabase from '@/useDatabase';

const { logout, user } = useAuthUser()
const { novaConsulta } = useDatabase();

export default {
  name: 'App',
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
    selectConsulta(consulta) {
      try{
        novaConsulta.value.consulta = consulta ;
        console.log(novaConsulta.value);
        this.$router.replace("/dashboard/novaconsulta/endereco");
      }
      catch(error){
        alert(error.error_description || error.message)
        console.log(error)
      }
    },

  }
}
</script>

<style scoped lang="scss">

  #containerNovaConsulta {
    margin-left: auto;
    margin-right: auto;
    max-width: 60%;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1.2rem;
  }

  .btn-exame {
    width: 60%;
    padding: 0.6rem 1.2rem 0.6rem 1.2rem;
    border-radius: 0;
    color: #FFFFFF !important;
  }


  @media(max-width: 890px) {
    #containerNovaConsulta {
      max-width: 90%;
    }

    .btn-exame {
      width: 90%;
    }
  }
</style>