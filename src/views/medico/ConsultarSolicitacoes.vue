<template>
  <main class="d-flex flex-column align-items-center justify-content-center gap-4 text-center container-fluid my-auto">
    <div id="tableContainer" class="text-center container-fluid my-auto">
      <table class="table table-responsive table-hover table-borderless align-middle">
        <thead>
          <tr>
            <th scope="col">
              <p>Tipo</p>
            </th>
            <th scope="col">
              <p>Horário Inicial</p>
            </th>
            <th scope="col">
              <p>Horário Final</p>
            </th>
            <th scope="col">
              <p>Paciente</p>
            </th>
            <th scope="col">
              <p>Adquirir</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in consultas" :key="c.id">
            <td>
              {{c.consulta}}
            </td>
            <td>
              {{c.hora_ate}}
            </td>
            <td>
              {{c.hora_ate}}
            </td>
            <td>
              {{c.usuario.data.nome + " " + c.usuario.data.sobrenome}}
            </td>
            <td>
              <button class="btn btn-primary" id="marcarBtn" @click.prevent="updatePego(c.id)">Obter</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button class="btn btn-primary btn-voltar" @click="getBack">Voltar</button>
  </main>
</template>

<script>
import useAuthUser from '@/useAuthUser';
import useDatabase from '@/useDatabase';

const { logout, user } = useAuthUser()
const { fetchConsultaLivre, pegarConsulta } = useDatabase();

export default {
  name: 'App',
  data() {
    return {
      user,
      consultas: null
    };
  },
  methods: {
    async signOut() {
      try {
        await logout();
        this.$router.replace("/");
      }
      catch (error) {
        alert(error.error_description || error.message)
        this.errorMessage = error.message;
      }
      finally {
        alert("Logged Out")
      }
    },
    getBack() {
      this.$router.replace("/dashboard");
    },
    async updatePego(consulta_id) {
      try {
        await pegarConsulta(consulta_id);
        //console.log(data)
        this.$router.go();
      }
      catch (error) {
        alert(error.error_description || error.message)
        this.errorMessage = error.message;
      }
    },

  },
  async mounted() {
    try {
      const data = await fetchConsultaLivre();
      console.log(data);
      this.consultas = data
    }
    catch (error) {
      alert(error.error_description || error.message)
    }
  }
}
</script>

<style scoped lang="scss">
#marcarBtn {
  color: white !important;
}

#tableContainer {
  max-width: 75%;
  border: 1px solid black;
  padding: 2rem 3rem 2rem 3rem;
  min-height: 20rem;
  max-height: 45rem;
  overflow-x: auto;
  overflow-y: auto;
  background-color: white;
}

.btn-voltar {
  width: 15rem;
  padding: 1rem;
  color: white !important;
}

table {
  min-width: 20rem !important;

  th {
    color: white;
    font-weight: normal;
  }

  thead {
    p {
      background-color: #008894;
      padding: 1rem;
      margin: 0;
      min-width: 10rem;
    }
  }
}

@media(max-height: 800px) {
  #tableContainer {
    max-height: 27rem;
  }
}
</style>
