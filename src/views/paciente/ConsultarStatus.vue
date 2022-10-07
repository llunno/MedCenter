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
              <p>Hora Marcada</p>
            </th>
            <th scope="col" v-if="!user.user_metadata.medico">
              <p>Médico</p>
            </th>
            <th scope="col" v-else>
              <p>Paciente</p>
            </th>
            <th scope="col">
              <p>Observações</p>
            </th>
            <th scope="col">
              <p>Status</p>
            </th>
            <th scope="col" v-show="!user.user_metadata.medico">
              <p>Pego?</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in consultas" :key="c.id">
            <td>
              {{c.consulta}}
            </td>
            <td>
              {{c.pego ? c.hora_marcada : "-"}}
            </td>
            <td v-if="!user.user_metadata.medico">
              {{c.pego? c.medico ? (c.medico.data.nome + " " + c.medico.data.sobrenome) : "-" : "Sem Médico"}}
            </td>
            <td v-else>
              {{c.pego? c.usuario ? (c.usuario.data.nome + " " + c.usuario.data.sobrenome): "-" : "Sem Médico"}}
            </td>
            <td>
              Sem informações
            </td>
            <td>
              {{c.pego ? (c.data_marcada ? (c.situacao ? "Definido" : "Agendado") : "Não agendado") : "Não Obtido" }}
            </td>
            <td v-show="!user.user_metadata.medico">
              <input class="form-check-input" type="checkbox" v-model="c.pego" />
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
const { fetchConsultaMedico, fetchConsultaPaciente } = useDatabase();

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
  },
  async mounted() {
    if (user.value.user_metadata.medico) {
      try {
        const data = await fetchConsultaMedico();
        console.log(data);
        this.consultas = data
      }
      catch (error) {
        alert(error.error_description || error.message)
      }
    }
    else {
      try {
        const data = await fetchConsultaPaciente();
        console.log(data);
        this.consultas = data
      }
      catch (error) {
        alert(error.error_description || error.message)
      }
    }
  }
}
</script>

<style scoped lang="scss">
#tableContainer {
  max-width: 70%;
  border: 1px solid black;
  padding: 2rem 3rem 2rem 3rem;
  min-height: 20rem;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 40rem;
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
    height: 25rem;
  }
}
</style>