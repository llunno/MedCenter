<template>
    <main class="container-fluid d-flex align-items-center justify-content-center">
        <div id="solicitacaoEfetuadaTexto">
            <h4>Solicitação Efetuada!</h4>
            <p>Em breve você poderá verificar mais informações sobre sua consulta em “Minhas consultas”</p>
        </div>
        <font-awesome-icon id="iconCheck" icon="fa-solid fa-circle-check" />
    </main>
    <routerview/>
</template>

<style lang="scss" scoped>
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

    #solicitacaoEfetuadaTexto {
        max-width: 17rem;
    }

    #iconCheck {
        color: green;
        font-size: 7rem;
    }

    @media(max-width: 445px) {
        main {
            flex-direction: column;
            text-align: center;
        }
    }

</style>