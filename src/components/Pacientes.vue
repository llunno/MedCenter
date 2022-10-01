<template>
    <section class="container-fluid">
        <h2>Pacientes</h2>
        <div class="d-flex flex-sm-wrap justify-content-sm-between align-content-center mx-5" id="divPacient">
            <div id="texto-paciente">
                <h3 class="text-left">Nosso foco é saude</h3>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”
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

</style>