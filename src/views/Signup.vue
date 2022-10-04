<template>
	<header class="container-fluid mx-auto my-4 d-flex align-items-center justify-content-around gap-2">
		<section id="paciente-signup" class="d-flex align-items-center justify-content-center gap-4">
			<h2>Sou Paciente...</h2>
			<button class="btn btn-success">Cadastre-se</button>
		</section>
		<section id="medico-signup" class="d-flex align-items-center justify-content-center gap-4">
			<h2>Sou Médico...</h2>
			<button class="btn btn-success">Associe-se</button>
		</section>
	</header>
	<main class="mx-auto">
		<div class="card shadow my-5" id="formContainer">
			<div class="card-body p-4 p-sm-5">
				<form @submit.prevent="supabaseSignUp">
					<h5 class="card-title text-start fw-light fs-5">Criar nova conta</h5>
					<div class="d-flex gap-3">
						<div class="col form-floating input-container flex-form">
							<input type="text" id="floatingFirstName" class="form-control" v-model="this.nome" />
							<label for="floatingFirstName">Nome</label>
						</div>
						<div class="col form-floating input-container flex-form">
							<input type="text" id="floatingSecondName" class="form-control" v-model="this.sobrenome" />
							<label for="floatingSecondName">Sobrenome</label>
						</div>
					</div>
					<div class="form-floating input-container">
						<input type="email" class="form-control" id="floatingInput" v-model="this.email" />
						<label for="floatingInput">Email</label>
					</div>
					<div class="form-floating input-container">
						<input type="email" class="form-control" id="floatingCPF" v-model="this.cpf" />
						<label for="floatingCPF">CPF</label>
					</div>
					<div class="form-floating input-container">
						<input type="email" class="form-control" id="floatingNascimento" v-model="this.nascimento" />
						<label for="floatingNascimento">Data de Nascimento</label>
					</div>
					<div class="form-floating input-container">
						<input type="email" class="form-control" id="floatingRg" v-model="this.rg" />
						<label for="floatingRg">RG</label>
					</div>
					<div class="d-flex gap-3">
						<div class="col form-floating input-container flex-form">
							<input type="text" id="floatingCRM" class="form-control" v-model="this.crm" />
							<label for="floatingCRM">CRM</label>
						</div>
						<div class="col form-floating input-container flex-form">
							<input type="text" id="floatingUfEmissao" class="form-control" v-model="this.ufemissao" />
							<label for="floatingUfEmissao">UF de Emissão</label>
						</div>
					</div>
					<div class="form-floating input-container">
						<input type="password" class="form-control" id="floatingPassword" v-model="this.password" />
						<label for="floatingPassword">Senha</label>
					</div>
					<div class="form-floating input-container">
						<input type="password" class="form-control" id="floatingEndereço" v-model="this.endereco" />
						<label for="floatingEndereço">Endereço</label>
					</div>
					<div class="d-flex gap-3">
						<div class="col form-floating input-container flex-form">
							<input type="text" id="floatingBairro" class="form-control" v-model="this.bairro" />
							<label for="floatingBairro">Bairro</label>
						</div>
						<div class="col form-floating input-container flex-form">
							<input type="text" id="floatingCidade" class="form-control" v-model="this.cidade" />
							<label for="floatingCidade">Cidade</label>
						</div>
					</div>
					<div class="d-flex gap-3">
						<div class="col form-floating input-container flex-form">
							<input type="text" id="floatingUF" class="form-control" v-model="this.uf" />
							<label for="floatingUF">UF</label>
						</div>
						<div class="col form-floating input-container flex-form">
							<input type="text" id="floatingCEP" class="form-control" v-model="this.cep" />
							<label for="floatingCEP">CEP</label>
						</div>
					</div>
					<div class="">
						<button class="btn btn-success btn-login p-3" type="submit" id="cadastrarBtn">Cadastrar</button>
					</div>
				</form>
			</div>
		</div>
	</main>
</template>

<script>
import useAuthUser from "@/useAuthUser";
const { register } = useAuthUser();
export default {
	data() {
		return {
			email: "",
			password: "",
			medico: false,
			nome: "",
			sobrenome: "",
			cpf: "",
			nascimento: "",
			rg: "",
			endereco: "",
			bairro: "",
			cidade: "",
			uf: "",
			cep: "",
			crm: "",
			ufemissao: "",

			xhrRequest: false,
			errorMessage: "",
			successMessage: "",
		};
	},

	methods: {
		async supabaseSignUp() {
			try {
				this.loading = true;
				await register({
					email: this.email,
					password: this.password,
					medico: this.medico,
					nome: this.nome,
					sobrenome: this.sobrenome,
					cpf: this.cpf,
					nascimento: this.nascimento,
					rg: this.rg,
					endereco: this.endereco,
					bairro: this.bairro,
					cidade: this.cidade,
					uf: this.uf,
					cep: this.cep,
					crm: this.crm,
					ufemissao: this.ufemissao,
				});
				this.successMessage = "Register Sucessfully";
				this.$router.replace("/login");
			} catch (error) {
				alert(error.error_description || error.message);
				this.errorMessage = error.message;
			} finally {
				this.loading = false;
			}
		},
	},
};
</script>

<style scoped lang="scss">
$success: #008894;

@import "../../node_modules/bootstrap/scss/bootstrap";

main {
	width: 50%;
}

#cadastrarBtn {
	padding-left: 5rem !important;
	padding-right: 5rem !important;
}

.input-container {
	margin-bottom: 1.7rem;
}

#formContainer {
	border-radius: 0;
	border: 1px solid rgba(131, 131, 131, 0.616);
}

form {
	input {
		border-radius: 0 !important;
	}
}

.container-nome {
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	align-items: center;
	justify-content: center;

	.col {
		width: 100%;
		margin: 0;
	}
}

.flex-form {
	padding-left: 1px;
}

* {
	font-family: "Montserrat", sans-serif;
}

.btn-spn {
	position: relative;
	top: -3px;
}

.btn {
	color: white !important;
}

header {
	border: 1px solid rgba(88, 88, 88, 0.63);
	padding: 3rem;
	width: 70% !important;

	h2 {
		font-size: 2rem;
		font-family: "Montserrat-Regular", sans-serif;
	}
}

h5 {
	margin-bottom: 5rem !important;
}

@media (max-width: 1300px) {
	header {
		width: 90% !important;
	}
	main {
		width: 80%;
	}
}

@media (max-width: 940px) {
	header {
		flex-direction: column;
	}
}
</style>
