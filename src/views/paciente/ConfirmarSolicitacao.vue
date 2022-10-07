<template>
	<div id="containerSolicitacoes" class="container-fluid text-center">
		<h2 tabindex="0">Confirmação da solicitação</h2>
		<main class="container-content d-flex justify-content-between align-items-start container-fluid">
			<section id="containerCardsSolicitacao"
				class="text-center d-flex flex-wrap justify-content-center align-items-center">
				<article class="card item-card-solicitacao" tabindex="0">
					<h3 class="card-header head-card-solicitacao">Tipo de Consulta</h3>
					<p class="card-body d-flex justify-content-center align-items-center corpo-card-solicitacao">
						{{novaConsulta.consulta}}</p>
				</article>
				<article class="card item-card-solicitacao" tabindex="0">
					<h3 class="card-header head-card-solicitacao">Endereço</h3>
					<div class="card-body corpo-card-solicitacao corpo-card-solicitacao">
						<p>{{user.user_metadata.endereco}}. {{user.user_metadata.bairro}}, {{user.user_metadata.cidade}}
							- {{user.user_metadata.uf}}</p>
						<p>CEP: {{user.user_metadata.cep}}</p>
					</div>
				</article>
				<article class="card item-card-solicitacao" tabindex="0">
					<h3 class="card-header head-card-solicitacao">Método de Pagamento</h3>
					<p class="card-body d-flex justify-content-center align-items-center corpo-card-solicitacao">
						{{novaConsulta.pagamento}}</p>
				</article>
				<article class="card item-card-solicitacao" tabindex="0">
					<h3 class="card-header head-card-solicitacao">Horário</h3>
					<div class="card-body d-flex justify-content-center align-items-center corpo-card-solicitacao">
						<div class="horarioDiv d-flex">
							<p>De</p>
							<div class="coreHorarioDiv">
								<p id="horarioInicial" class="horarioText">{{novaConsulta.hora_de}}</p>
							</div>
						</div>
						<div class="horarioDiv d-flex">
							<p>Até</p>
							<div class="coreHorarioDiv">
								<p id="horarioFinal" class="horarioText">{{novaConsulta.hora_ate}}</p>
							</div>
						</div>
					</div>
				</article>
			</section>
			<section class="d-flex flex-column justify-content-center" id="section-horarios">
				<div class="d-flex justify-content-between gap-2" tabindex="0">
					<p class="text-start">Valor da consulta: </p>
					<p class="text-end">R$ 200,00</p>
				</div>
				<div class="d-flex justify-content-between gap-2" tabindex="0">
					<p class="text-start">Descontos: </p>
					<p class="text-end">R$ 18,00</p>
				</div>
				<div class="d-flex justify-content-between gap-2" tabindex="0">
					<p class="text-start">Juros: </p>
					<p class="text-end">R$ 10,00</p>
				</div>
				<div class="d-flex justify-content-between gap-2" tabindex="0">
					<p class="text-start total-text">Total: </p>
					<p class="text-end">R$ 192,00</p>
				</div>
				<button id="confirmSolicitacaoBtn" class="btn btn-primary" @click.prevent="confirmar" tabindex="0">Confirmar
					solicitação</button>
			</section>
			<router-view />
		</main>
	</div>
</template>
<script>
import useDatabase from '@/useDatabase';

import useAuthUser from '@/useAuthUser';

const { user } = useAuthUser()


const { insertConsulta, novaConsulta } = useDatabase();

export default {
	name: 'App',
	data() {
		return {
			novaConsulta,
			user
		};
	},
	methods: {
		async confirmar() {
			try {
				await insertConsulta();
				this.$router.replace("/solicitacaoefetuada");
			}
			catch (error) {
				alert(error.error_description || error.message)
				console.log(error)
			}
		},

	},
	mounted() {
		const { user } = useAuthUser();
		const { novaConsulta } = useDatabase();
		this.user = user;
		this.novaConsulta = novaConsulta;
	}
}
</script>
<styles lang="scss" scoped>
div#containerSolicitacoes {
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
	padding: 0.2rem;
}

#containerCardsSolicitacao {
	max-width: 52rem;
	height: 100%;
	gap: 1rem;

	.item-card-solicitacao {
		width: 25rem;
		min-height: 11rem;
		border-radius: 0;

		.corpo-card-solicitacao {
			background-color: #008894c5;
			color: white;
			width: 25rem;
			font-size: 1rem;
		}

		.head-card-solicitacao {
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
	justify-content: flex-start;
	line-height: 2;
	width: 24%;
	min-width: 14rem;
}

#confirmSolicitacaoBtn {
	margin-top: 1.3rem;
	color: white !important;
	padding: 1.2rem;
}

h2 {
	font-weight: normal;
	margin-bottom: 2rem;
}

@media(max-width: 1643px) {
	#containerCardsSolicitacao {

		.item-card-solicitacao {
			width: 20rem;
			height: 11rem;

			.corpo-card-solicitacao {
				width: 20rem;

			}

			.head-card-solicitacao {
				width: 20rem;
			}
		}
	}
}

@media(max-width: 1412px) {
	div#containerSolicitacoes {
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

	#containerCardsSolicitacao {
		.item-card-solicitacao {
			width: 99%;
			min-height: 100%;
			height: 100%;

			.corpo-card-solicitacao {
				width: 99%;
			}

			.head-card-solicitacao {
				width: 99%;
			}
		}
	}

	h2 {
		margin-top: 2rem;
	}
}
</styles>