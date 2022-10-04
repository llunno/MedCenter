<template>
    <main class="d-flex flex-column justify-content-center align-items-center gap-3 text-center">
        <h2>Confirme o meio de pagamento</h2>
        <button class="btn btn-primary p-3" v-for="item in metodosPagamento" :key="item">{{item}}</button>
    </main>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                metodosPagamento: ["Cartão de Crédito", "Cartão de Débito", "Boleto", "PIX"]
            };
        }
    }
</script>

<style lang="scss" scoped>
    $primary: #008894;

    @import "../../../node_modules/bootstrap/scss/bootstrap";

    * {
        font-family: "Montserrat", sans-serif;
    }

    button {
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
        button {
            width: 85%;
        }
    }
</style>