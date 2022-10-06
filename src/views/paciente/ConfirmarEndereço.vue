<template>
	<main class="container-fluid d-flex flex-column align-items-center justify-content-center" id="container-all">
		<h2 class="mb-5 my-2" tabindex="0">Confirmar Endereço</h2>
		<section id="manageEnderecos" class="container-fluid d-flex gap-2 mx-auto justify-content-center">
			<div id="actualEndereco" class="card p-2 justify-content-center m-2">
				<div class="card-body" tabindex="0">
					<h5 class="card-title">Endereço: {{user.user_metadata.endereco}}</h5>
					<p class="card-text">Bairro: {{user.user_metadata.bairro}}</p>
					<p class="card-text">Cidade: {{user.user_metadata.cidade}}</p>
					<p class="card-text">Estado: {{user.user_metadata.uf}}</p>
					<p class="card-text">CEP: {{user.user_metadata.cep}}</p>
				</div>
			</div>
			<div id="newEndereco" class="card p-4 text-center justify-content-center m-2">
				<h5 class="card-title"></h5>
				<div class="card-body" tabindex="0">
					<font-awesome-icon id="idconPlus" icon="fa-solid fa-plus" />
					<p class="card-text">Adicionar outro endereço...</p>
				</div>
			</div>
		</section>
		<h2 class="mb-4 my-5" tabindex="0">Insira um horário de preferência</h2>
		<section id="manageHorarios" class="d-flex text-center justify-content-center m-2 align-items-center gap-4 mb-5 my-5">
			<div id="startHorario" class="d-flex align-items-center justify-content-center gap-2" tabindex="0">
				<p class="m-0">De</p>
				<input class="form-control" type="datetime-local" v-model="this.hora_de" />
			</div>
			<div id="endHorario" class="d-flex align-items-center justify-content-center gap-2" tabindex="0">
				<p class="m-0">Até</p>
				<input class="form-control" type="datetime-local" v-model="this.hora_ate" />
			</div>
		</section>
		<button class="btn btn-primary mb-4" @click.prevent="selectHorario" tabindex="0">Confirmar</button>
	</main>
	<router-view/>
</template>
<script>
import useAuthUser from '@/useAuthUser';

const { user } = useAuthUser()

import useDatabase from '@/useDatabase';

const { novaConsulta } = useDatabase();

export default {
  name: 'App',
  data() {
    return {
		user,
		hora_de: "",
		hora_ate:""
    };
  },
  methods: {
    selectHorario() {
      try{
        novaConsulta.value.hora_de = this.hora_de ;
		novaConsulta.value.hora_ate = this.hora_ate ;
        console.log(novaConsulta.value);
        this.$router.replace("/confirmarpagamento");
      }
      catch(error){
        alert(error.error_description || error.message)
        console.log(error)
      }
    },
  },
  mounted(){
	const { user } = useAuthUser();
	this.user = user;
  }
}

</script>

<styles lang="scss" scoped>
@import "../../../node_modules/bootstrap/scss/bootstrap";
$primary: #008894;

#actualEndereco {
	background-color: #008894;
	color: white;
	border-radius: 0;
	min-width: 30rem;
}
#newEndereco{
	background-color: #008894;
	color: white;
	border-radius: 0;
	min-width: 30rem;
	cursor: pointer;
}
//@import "../../../node_modules/bootstrap/scss/functions";
//@import "../../../node_modules/bootstrap/scss/variables";
//@import "../../../node_modules/bootstrap/scss/mixins";

* {
	font-family: "Montserrat", sans-serif;
}

#container-all {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	max-width: 100%;
	max-height: 100%;
}

.btn {
	color: white !important;
}

h1 {
	color: rgba(0, 0, 0, 0.801);
}

#idconPlus {
	font-size: 6rem;
}


input {
	border-radius: 0 !important;
}



@media(max-width: 1413px) {
	.card {
		min-width: 40%;
	}
}

@media(max-width: 960px) {
	#manageEnderecos {
		flex-direction: column;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	.card {
		width: 70%;
	}
}
</styles>
