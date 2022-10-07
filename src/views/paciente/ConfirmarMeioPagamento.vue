<template>
  <main class="d-flex flex-column justify-content-center align-items-center gap-3 text-center">
    <h2 tabindex="0">Confirme o meio de pagamento</h2>
    <button class="btn btn-primary p-3 btn-payment" v-for="item in metodosPagamento" :key="item"
      @click.prevent="selectPagamento(item)" tabindex="0">{{item}}</button>
  </main>
  <router-view />
</template>

<script>
import useDatabase from '@/useDatabase';

const { novaConsulta } = useDatabase();

export default {
  name: 'App',
  data() {
    return {
      metodosPagamento: ["Cartão de Crédito", "Cartão de Débito", "Boleto", "PIX"]
    };
  },
  methods: {
    selectPagamento(pagamento) {
      try {
        novaConsulta.value.pagamento = pagamento;
        console.log(novaConsulta.value);
        this.$router.replace("/dashboard/novaconsulta/endereco/pagamento/resumo-solicitacao");
      }
      catch (error) {
        alert(error.error_description || error.message)
        console.log(error)
      }
    },

  }
}
</script>

<style lang="scss" scoped>
.btn-payment {
  color: white !important;
  width: 35rem;
  border-radius: 0 !important;
}

main {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}

@media(max-width: 644px) {
  .btn-payment {
    width: 85%;
  }
}
</style>