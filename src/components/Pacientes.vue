<template>
    <section class="container-fluid">
        <h2>Pacientes</h2>
        <div class="d-flex flex-sm-wrap justify-content-sm-between align-items-center mx-5" id="divPacient">
            <div id="texto-paciente">
                <h3 class="text-left">Nosso foco é saude</h3>
                <p>
                    Pensando nos pacientes com dificuldade de locomoção ou falta de tempo em se deslocar até um consultório médico para uma consulta ou exame, oferecemos a praticidade de realização deste serviço em sua residência ou local de preferência.
                </p>
            </div>
            <img src="@/assets/pacientes.jpg" alt="imagem de estetoscópio" class="img-fluid">
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
        max-width: 49%;
    }

    #texto-paciente {
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
        #divPacient {
            flex-direction: column;
            text-align: center;

            #texto-paciente {
                max-width: 100%;
                line-height: 2;
            }

            img {
                max-width: 80%;
            }
        }
    }

</style>