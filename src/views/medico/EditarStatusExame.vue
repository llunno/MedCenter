<template>
	<main class="d-flex flex-column align-items-center justify-content-center gap-4 text-center container-fluid my-auto">
		<div id="tableContainer" class="text-center container-fluid my-auto">
			<table class="table table-responsive table-hover table-borderless align-middle">
				<thead>
					<tr>
						<th scope="col">
							<p>Tipo</p>
						</th>
						<th scope="col">
							<p>Hora Marcada</p>
						</th>
						<th scope="col" v-if="!user.user_metadata.medico">
							<p>Médico</p>
						</th>
						<th scope="col" v-else>
							<p>Paciente</p>
						</th>
						<th scope="col">
							<p>Observações</p>
						</th>
						<th scope="col">
							<p>Status</p>
						</th>
						<th scope="col">
							<p>Alterações</p>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(c,index) in consultas" :key="index">
						<td>
							{{c.consulta}}
						</td>
						<td>
							<input class="form-control" type="datetime-local" v-model="this.hora_marcada[index].hora_marcada"
								@change="onChangeHora(index,c)" />
						</td>
						<td v-if="!user.user_metadata.medico">
							{{c.pego? c.medico ? (c.medico.data.nome + " " + c.medico.data.sobrenome) : "-" : "Sem Médico"}}
						</td>
						<td v-else>
							{{c.pego? c.usuario ? (c.usuario.data.nome + " " + c.usuario.data.sobrenome): "-" : "Sem Médico"}}
						</td>
						<td>
							<input class="form-control" type="text" v-model="this.observacoes" />
						</td>
						<td>
							{{c.pego ? (!!c.hora_marcada ? (c.situacao ? "Definido" : "Agendado") : "Não agendado")
							: "Não Obtido" }}
						</td>
						<td v-show="this.alterado[index].value">
							<button class="btn btn-primary" id="marcarBtn" @click.prevent="acertarHora(c.id,index)">Confirmar</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<button class="btn btn-primary btn-voltar" @click="getBack">Voltar</button>
	</main>
</template>
  
<script>
import useAuthUser from '@/useAuthUser';
import useDatabase from '@/useDatabase';

const { logout, user } = useAuthUser()
const { fetchConsultaMedico, fetchConsultaPaciente, marcarHora } = useDatabase();

export default {
	name: 'App',
	data() {
		return {
			user,
			consultas: null,
			alterado: [],
			hora_marcada: [],
			observacoes: ""
		};
	},
	methods: {
		async signOut() {
			try {
				await logout();
				this.$router.replace("/");
			}
			catch (error) {
				alert(error.error_description || error.message)
				this.errorMessage = error.message;
			}
			finally {
				alert("Logged Out")
			}
		},
		getBack() {
			this.$router.replace("/dashboard");
		},
		onChangeHora(index, c) {
			if (this.hora_marcada[index].hora_marcada == !!c.hora_marcada) {
				this.alterado[index].value = false
			}
			else {
				this.alterado[index].value = true
			}
		},
		async acertarHora(passId, index) {
			try {
				await marcarHora(passId, this.hora_marcada[index].hora_marcada);
				this.$router.go();
			}
			catch (error) {
				alert(error.error_description || error.message)
				this.errorMessage = error.message;
			}
		}
	},
	async mounted() {
		if (user.value.user_metadata.medico) {
			try {
				const data = await fetchConsultaMedico();
				this.consultas = data
				data.forEach(c => {
					this.alterado.push({ alter: false })
					if (c.hora_marcada) {
						this.hora_marcada.push({ hora_marcada: c.hora_marcada })
					}
					else {
						this.hora_marcada.push({ hora_marcada: "" })
					}
				});
			}
			catch (error) {
				alert(error.error_description || error.message)
			}
		}
		else {
			try {
				const data = await fetchConsultaPaciente();
				this.consultas = data
				data.forEach(c => {
					this.alterado.push({ alter: false })
					if (c.hora_marcada) {
						this.hora_marcada.push({ hora_marcada: c.hora_marcada })
					}
					else {
						this.hora_marcada.push({ hora_marcada: "" })
					}
				});
			}
			catch (error) {
				alert(error.error_description || error.message)
			}
		}
		console.log(this.consultas)
	}
}
</script>
  
<style scoped lang="scss">
#tableContainer {
	max-width: 75%;
	border: 1px solid black;
	padding: 2rem 3rem 2rem 3rem;
	min-height: 20rem;
	overflow-x: auto;
	max-height: 27rem;
	overflow-y: auto;
	background-color: white;
}

.btn-voltar {
	width: 15rem;
	padding: 1rem;
	color: white !important;
}



table {
	min-width: 20rem !important;

	th {
		color: white;
		font-weight: normal;
	}

	thead {
		p {
			background-color: #008894;
			padding: 1rem;
			margin: 0;
			min-width: 10rem;
		}
	}
}
</style>