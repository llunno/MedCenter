<template>
    <div id="containerAll" class="container-fluid text-center">
        <h2>Confirmação da solicitação</h2>
        <main class="container-content d-flex justify-content-between align-items-start container-fluid">
            <section id="containerCards" class="text-center d-flex flex-wrap justify-content-center align-items-center">
                <article class="card">
                    <h3 class="card-header">Tipo de Consulta</h3>
                    <p class="card-body d-flex justify-content-center align-items-center">Coleta de Sangue</p>
                </article>
                <article class="card">
                    <h3 class="card-header">Endereço</h3>
                    <div class="card-body">
                        <p>Rua Lapada Paiva Souza, 467. Centro, Mogi das Cruzes - MG</p>
                        <p>CEP: 12456-543</p>
                    </div>
                </article>
                <article class="card">
                    <h3 class="card-header">Método de Pagamento</h3>
                    <p class="card-body d-flex justify-content-center align-items-center">Cartão de crédito 5x</p>
                </article>
                <article class="card">
                    <h3 class="card-header">Horário</h3>
                    <div class="card-body d-flex justify-content-center align-items-center">
                        <div class="horarioDiv d-flex">
                            <p>De</p>
                            <div class="coreHorarioDiv">
                                <p id="horarioInicial" class="horarioText">00:00</p>
                            </div>
                        </div>
                        <div class="horarioDiv d-flex">
                            <p>Até</p>
                            <div class="coreHorarioDiv">
                                <p id="horarioFinal" class="horarioText">00:00</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section class="d-flex flex-column justify-content-center" id="section-horarios">
                <div class="d-flex justify-content-between gap-2">
                    <p class="text-start">Valor da consulta: </p>
                    <p class="text-end">R$ 200,00</p>
                </div>
                <div class="d-flex justify-content-between gap-2">
                    <p class="text-start">Descontos: </p>
                    <p class="text-end">R$ 18,00</p>
                </div>
                <div class="d-flex justify-content-between gap-2">
                    <p class="text-start">Juros: </p>
                    <p class="text-end">R$ 10,00</p>
                </div>
                <div class="d-flex justify-content-between gap-2">
                    <p class="text-start total-text">Total: </p>
                    <p class="text-end">R$ 192,00</p>
                </div>
                <button class="btn btn-primary">Confirmar solicitação</button>
            </section>
        </main>
    </div>
</template>

<styles lang="scss" scoped>

    $primary: #008894;
    @import "../../../node_modules/bootstrap/scss/bootstrap";
    div#containerAll {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        position: relative;
        justify-content: center;

        .container-content {
            border: 1px solid black;
            border-radius: 0.7rem;
            gap: 2rem;
            padding: 4rem 1.3rem 4rem 1.3rem;
            max-width: 70%;
            margin: 0rem auto 2rem auto;
        }
    }

    p {
        margin: 0;
        padding: 0.2rem;
    }

    #containerCards {
        max-width: 52rem;
        height: 100%;
        gap: 1rem;
        
        p {
            font-size: 1.2rem;
        }

        .card, .card-body {
            width: 25rem;
            height: 11rem;
            border-radius: 0;

            .card-body {
                background-color: #008894c5;
                color: white;
            }

            .card-header {
                background-color: #008894;
                font-size: 1.3rem;
                font-weight: normal;
                color: white;
                border-radius: 0;
                width: 25rem;
            }
        }
    }

    .total-text {
        font-weight: bold;
    }

    span {
        display: block;
    }

    #section-horarios {
        height: 100%;
        vertical-align: middle;
        justify-content:flex-start;
        line-height: 2;
        width: 24%;
        min-width: 14rem;
    }

    .btn {
        margin-top: 1.3rem;
        color: white !important;
        padding: 1.2rem;
    }

    h2 {
        font-weight: normal;
        margin-bottom: 2rem;
    }

    @media(max-width: 1643px) {
        #containerCards {
            .card {
                width: 20rem;

                .card-body {
                    width: 20rem;
                }

                .card-header {
                    width: 20rem;
                }
            }
        }
    }

    @media(max-width: 1412px) {
        div#containerAll {
            .container-content {
                max-width: 90%;
            }
        }
    }

    @media(max-width: 926px) {
        .container-content {
            flex-direction: column;
            align-items: center !important;
        }

        #section-horarios {
            width: 70%;
        }

        #containerCards {
            .card {
                width: 99%;

                .card-body {
                    width: 99%;
                }

                .card-header {
                    width: 99%;
                }
            }
        }

        h2 {
            margin-top: 2rem;
        }
    }
</styles>