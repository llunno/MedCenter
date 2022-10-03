<template>
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card border-0 shadow rounded-3 my-5">
        <div class="card-body p-4 p-sm-5">
          <h5 class="card-title text-center mb-5 fw-light fs-5">Cadastro</h5>
          <form @submit.prevent="supabaseSignUp">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.email">
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="this.password">
              <label for="floatingPassword">Senha</label>
            </div>
            <div class="d-grid">
              <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useAuthUser from '@/useAuthUser';
const {register} = useAuthUser();
export default {
    data() {
        return {
            email: "",
            password: "",
            medico: false,
            nome: "",
            sobrenome: "",
            cpf:  "",
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
      async supabaseSignUp(){
      try {
          this.loading = true
          await register({ 
                email: this.email,
                password: this.password,
                medico: this.medico,
                nome: this.nome,
                sobrenome: this.sobrenome,
                cpf:  this.cpf,
                nascimento: this.nascimento,
                rg: this.rg,
                endereco: this.endereco,
                bairro: this.bairro,
                cidade: this.cidade,
                uf: this.uf,
                cep:this.cep,
                crm:this.crm,
                ufemissao: this.ufemissao,
                })
          this.successMessage = "Register Sucessfully"
          this.$router.replace("/login");
        } catch (error) {
          alert(error.error_description || error.message)
          this.errorMessage = error.message;
        } finally {
          this.loading = false
        }
    }
  }
};
</script>

<style scoped>
    .btn-spn {
        position: relative;
        top: -3px;
    }
</style>