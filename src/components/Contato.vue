<template>
    <section id="container">
        <section class="container text-center">
            <h2 class="mx-5" tabindex="0">Contato</h2>
            <p class="mx-5" tabindex="0">Para dúvidas, reclamações, ouvidoria, elogios e sugestões. Nos envie uma mensagem abaixo, detalhando o fato.</p>
        </section>
        <div id="container-form">
            <form @submit.prevent class="mx-auto">
                <div class="row mb-5">
                    <label class="col-sm-2 col-form-label" role="Input nome">Nome:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control rounded-4" tabindex="0" aria-required>
                    </div>
                </div>
                <div class="row mb-5">
                    <label class="col-sm-2 col-form-label" role="Input email">E-mail:</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control rounded-4" tabindex="0" aria-required>
                    </div>
                </div>
                <div class="row mb-5">
                    <label class="col-sm-2 col-form-label" role="Input telefone">Telefone:</label>
                    <div class="col-sm-10">
                        <input class="form-control rounded-4" tabindex="0" aria-required>
                    </div>
                </div>
                <div class="row mb-5">
                    <label class="col-sm-2 col-form-label" role="Descrição enviar">Descrição:</label>
                    <div class="col-sm-10">
                        <textarea class="form-control rounded-4" tabindex="0" required aria-required></textarea>
                    </div>
                </div>
                <div class="container-fluid mx-auto" id="containerBtn">
                    <button class="btn btn-success" id="sbmt-btn" tabindex="0" role="Botão Input enviar">Enviar</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped lang="scss">

    #container {
        padding-bottom: 4rem;

    }

    button {
        width: 35%;
        
    }

    p {
        color: #395B59;
        font-size: 24px;
    }

    h2 {
        margin-top: 40px;
        margin-bottom: 40px;
        text-align: center;
        color: #395B59;
        text-decoration: underline;
    }

    #container-form {
        margin-left: 2rem;
        margin-right: 2rem;
    }

    form {
        max-width: 64rem;
        border: 1px solid black;
        margin-top: 4rem;
        padding: 1.5rem;
        border-radius: 12px;
        background-color: #ffffffbe;

        textarea {
            height: 20rem;
        }
    }

    #containerBtn {
        text-align: center;
    }

    label {
        color: #395B59;
    }

</style>