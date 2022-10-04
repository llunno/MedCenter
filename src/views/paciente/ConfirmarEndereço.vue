<template>
	<main class="container-fluid d-flex flex-column align-items-center justify-content-center" id="container-all">
		<h2 class="mb-5 my-2">Confirmar Endereço</h2>
		<section id="manageEnderecos" class="container-fluid d-flex gap-2 mx-auto justify-content-center">
			<div class="card actualEndereço p-2 justify-content-center m-2">
				<div class="card-body">
					<h5 class="card-title">Rua Lapada Paiva de Souza, 487</h5>
					<p class="card-text">Bairro: Centro</p>
					<p class="card-text">Cidade: Mogi das Cruzes</p>
					<p class="card-text">Estado: Minas Gerais</p>
					<p class="card-text">CEP: 12456-543</p>
				</div>
			</div>
			<div class="card newEndereço p-4 text-center justify-content-center m-2">
				<h5 class="card-title"></h5>
				<div class="card-body">
					<font-awesome-icon id="idconPlus" icon="fa-solid fa-plus" />
					<p class="card-text">Adicionar outro endereço...</p>
				</div>
			</div>
		</section>
		<h2 class="mb-4 my-5">Insira um horário de preferência</h2>
		<section id="manageHorarios" class="d-flex text-center justify-content-center m-2 align-items-center gap-4 mb-5 my-5">
			<div id="startHorario" class="d-flex align-items-center justify-content-center gap-2">
				<p class="m-0">De</p>
				<input class="form-control" type="text" />
			</div>
			<div id="endHorario" class="d-flex align-items-center justify-content-center gap-2">
				<p class="m-0">Até</p>
				<input class="form-control" type="text" />
			</div>
		</section>
		<router-link class="btn btn-primary mb-4" to="/confirmarpagamento">Confirmar</router-link>
	</main>
	<router-view/>
</template>

<styles lang="scss" scoped>
$primary: #008894;

@import "../../../node_modules/bootstrap/scss/bootstrap";

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

.card {
	background-color: #008894;
	color: white;
	border-radius: 0;
	min-width: 30rem;
}

input {
	border-radius: 0 !important;
}

.actualEndereço,
.newEndereço {
	cursor: pointer;
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
