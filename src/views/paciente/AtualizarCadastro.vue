<template>
     <div>
  <transition name="paciente">
    <main class="mx-auto" v-show="cadastroAtivo && !medico">
      <div class="card shadow my-5" id="formContainer">
        <div class="card-body p-4 p-sm-5">
          <form @submit.prevent="supabaseSignUp">
            <h5 class="card-title text-start fw-light fs-5">Atualizar dados</h5>
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
              <input type="text" class="form-control" id="floatingCPF" v-model="this.cpf" />
              <label for="floatingCPF">CPF</label>
            </div>
            <div class="form-floating input-container">
              <input type="date" class="form-control" id="floatingNascimento" v-model="this.nascimento" />
              <label for="floatingNascimento">Data de Nascimento</label>
            </div>
            <div class="form-floating input-container">
              <input type="text" class="form-control" id="floatingRg" v-model="this.rg" />
              <label for="floatingRg">RG</label>
            </div>
            <div class="form-floating input-container">
              <input type="text" class="form-control" id="floatingEndereço" v-model="this.endereco" />
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
              <button class="btn btn-success btn-login p-3" type="submit" id="cadastrarBtn">Atualizar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </transition>
  <transition name="medico">
    <main class="mx-auto" v-show="cadastroAtivo && medico">
      <div class="card shadow my-5" id="formContainer">
        <div class="card-body p-4 p-sm-5">
          <form @submit.prevent="supabaseSignUp">
            <h5 class="card-title text-start fw-light fs-5">Atualizar dados</h5>
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
              <input type="text" class="form-control" id="floatingCPF" v-model="this.cpf" />
              <label for="floatingCPF">CPF</label>
            </div>
            <div class="form-floating input-container">
              <input type="date" class="form-control" id="floatingNascimento" v-model="this.nascimento" />
              <label for="floatingNascimento">Data de Nascimento</label>
            </div>
            <div class="form-floating input-container">
              <input type="text" class="form-control" id="floatingRg" v-model="this.rg" />
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
              <input type="text" class="form-control" id="floatingEndereço" v-model="this.endereco" />
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
              <button class="btn btn-success btn-login p-3" type="submit" id="cadastrarBtn">Atualizar</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </transition>
  </div>
</template>

<script>
import useAuthUser from "@/useAuthUser";
  const { register, user } = useAuthUser();
  export default {
    data() {
      return {
        email: user.value.email,
        medico: user.value.user_metadata.medico,
        nome: user.value.user_metadata.nome,
        sobrenome: user.value.user_metadata.sobrenome,
        cpf: user.value.user_metadata.cpf,
        nascimento: user.value.user_metadata.nascimento,
        rg: user.value.user_metadata.rg,
        endereco: user.value.user_metadata.endereco,
        bairro: user.value.user_metadata.bairro,
        cidade: user.value.user_metadata.cidade,
        uf: user.value.user_metadata.uf,
        cep: user.value.user_metadata.cep,
        crm: user.value.user_metadata.crm,
        ufemissao: user.value.user_metadata.ufemissao,
  
        xhrRequest: false,
        errorMessage: "",
        successMessage: "",
        cadastroAtivo: false
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
      setPaciente (){
        if(!this.medico){
          this.cadastroAtivo = !this.cadastroAtivo
        }
        else{
          this.medico = false
          if (!this.cadastroAtivo){
            this.cadastroAtivo = !this.cadastroAtivo
          }
        }
        // this.medico == false ? this.cadastroAtivo = !this.cadastroAtivo : this.medico = true
      },
      setMedico (){
        if(this.medico){
          this.cadastroAtivo = !this.cadastroAtivo
        }
        else{
          this.medico = true
          if (!this.cadastroAtivo){
            this.cadastroAtivo = !this.cadastroAtivo
          }
        }
        // this.medico == false ? this.cadastroAtivo = !this.cadastroAtivo : this.medico = true
      },
    },
    mounted(){
      this.cadastroAtivo = true
    },
    Unmount() {
      const divContainers = document.querySelectorAll(".container");
      divContainers.style.display = "none";
    }
  };
</script>

<style scoped lang="scss">
  .paciente-enter-from{
    opacity: 0;
  }
  .paciente-enter-to {
    opacity: 1;
  }
  .paciente-enter-active {
    transition: opacity 0.5s ease;
  }

  .paciente-leave-from {
    opacity: 1;
  }
  .paciente-leave-to {
    opacity: 0;
  }
  .paciente-leave-active {
    transition: opacity 0.5s ease;
  }


  .medico-enter-from{
    opacity: 0;
  }
  .medico-enter-to {
    opacity: 1;
  }
  .medico-enter-active {
    transition: opacity 0.5s ease;
  }

  .medico-leave-from {
    opacity: 1;
  }
  .medico-leave-to {
    opacity: 0;
  }
  .medico-leave-active {
    transition: opacity 0.5s ease;
  }

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