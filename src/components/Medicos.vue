<template>
    <section class="container-fluid">
        <h2>Médicos</h2>
        <div class="d-flex flex-sm-wrap justify-content-sm-between align-items-center mx-5" id="divMedico">
            <img src="@/assets/medico.jpg" alt="imagem de estetoscópio" class="img-fluid"/>
            <div id="texto-medico">
                <h3 class="text-end">Te ajudamos a mostrar a qualidade do seu trabalho</h3>
                <p class="text-end">
                Nós oferecemos uma oportunidade para os Médicos que procuram ganhar uma renda extra ou para aqueles que buscar fazer seu nome no mercado profissional.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    h2 {
        margin-top: 40px;
        margin-bottom: 35px;
        text-align: center;
        color: #395B59;
        text-decoration: underline;
    }

    h3 { 
        color: #395B59;
        margin-bottom: 2rem;
        font-weight: bold;
    }

    img {
        border: 8px solid #008894;
        border-radius: 20px;
        width: 49%;
    }

    #texto-medico {
        max-width: 50%;
        line-height: 2;
    }

    section {
        font-family: 'Montserrat', sans-serif;
    }

    p {
        color: #395B59;
        font-size: 24px;
    }

    @media(max-width: 1172px) {
        #divMedico {
            flex-direction: column-reverse;

            #texto-medico {
                max-width: 100%;
                line-height: 2;

                h3, p {
                    text-align: center !important;
                }
            }

            img {
                width: 80%;
            }
        }
    }

</style>