<template>
    <section class="container-fluid text-center">
        <h2 class="mx-5" tabindex="0">Sobre</h2>
        <p class="mx-5" tabindex="0">"Somos uma empresa voltada para o atendimento do público, visando praticidade e facilidade, através de atendimento a domicílio, para suas consultas, exames e especialidades. </p>
        <article>
            <div class="d-flex justify-content-sm-center flex-wrap">
                <div class="card m-2">
                    <div class="card-body">
                        <h5 class="card-title" tabindex="0">Missão</h5>
                        <p class="card-text" tabindex="0">Prover soluções cada vez mais completas e integradas para a gestão da saúde e o bem-estar das pessoas, com excelência, humanidade e sustentabilidade.</p>
                    </div>
                </div>
                <div class="card m-2">
                    <div class="card-body">
                        <h5 class="card-title" tabindex="0">Visão</h5>
                        <p class="card-text" tabindex="0">Ser referência para a promoção e garantia do exercício ético da medicina, da valorização e dignidade profissional do médico, tendo por princípio a melhoria das condições de vida e saúde da sociedade.</p>
                    </div>
                </div>
                <div class="card m-2">
                    <div class="card-body">
                        <h5 class="card-title" tabindex="0">Valores</h5>
                        <p class="card-text" tabindex="0">Ética, justiça, equidade, sustentabilidade, credibilidade, comprometimento com o cliente e interesse público.</p>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>

<style scoped lang="scss">
    h2 {
        margin-top: 40px;
        margin-bottom: 40px;
        text-align: center;
        color: #395B59;
        text-decoration: underline;
    }

    p {
        color: #395B59;
        font-size: 24px;
    }

    section {
        font-family: 'Montserrat', sans-serif;
    }

    .card {
        width: 37rem;
        background-color: #008894;
        color: white;
        border: 0px;
        border-radius: 0;
        padding-bottom: 2.4rem;
        padding-top: 1rem;

        p {
            font-size: 1.12rem;
            color: white;
            line-height: 2;
        }
    }

    h5 {
        margin-bottom: 2.2rem;
    }
</style>