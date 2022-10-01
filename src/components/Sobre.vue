<template>
    <section class="container-fluid text-center">
        <h2 class="mx-5">Sobre</h2>
        <p class="mx-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat”</p>
        <article>
            <div class="d-flex justify-content-sm-center flex-wrap">
                <div class="card m-2">
                    <div class="card-body">
                        <h5 class="card-title">Missão</h5>
                        <p class="card-text">“Ut enim ad minim veniam, quis nostrud exerci ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exerci ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exerci ex ea commodo consequat”</p>
                    </div>
                </div>
                <div class="card m-2">
                    <div class="card-body">
                        <h5 class="card-title">Visão</h5>
                        <p class="card-text">“Ut enim ad minim veniam, quis nostrud exerci ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exerci ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exerci ex ea commodo consequat”</p>
                    </div>
                </div>
                <div class="card m-2">
                    <div class="card-body">
                        <h5 class="card-title">Valores</h5>
                        <p class="card-text">“Ut enim ad minim veniam, quis nostrud exerci ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exerci ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exerci ex ea commodo consequat”</p>
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