<template>
  <main class="mx-auto">
    <div class="card shadow rounded-3 my-5" id="containerAll">
      <div class="card-body p-4 p-sm-5">
        <form @submit.prevent="supabaseLogin">
          <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
          <div class="form-floating mb-5">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="this.email">
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-5">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="this.password">
            <label for="floatingPassword">Senha</label>
          </div>
          <div class="d-grid">
            <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit" :value="loading ? 'Loading' : 'Login'">Login</button>
          </div>
          <hr class="my-4">
          <div class="d-grid mb-2">
            <!-- <button class="btn btn-danger btn-login text-uppercase fw-bold" type="submit" @click="loginGoogle" >
              <i class="fab fa-google me-2"></i> Sign in with Google
            </button> -->
          </div>
        </form>
      </div>
    </div>
  </main>
</template>
<script>
import useAuthUser from '@/useAuthUser';


const {login, loginWithSocialProvider} = useAuthUser();

export default {
  name: "Login",    
  data() {
    return {
      email: "",
      password: "",
      xhrRequest: false,
      errorMessage: "",
      successMessage: "",
      loading: false
    };
  },
  methods: {
    async supabaseLogin(){
      try {
          await login({ email: this.email,password: this.password });
          this.$router.replace("dashboard");
        } 
      catch (error) {
          alert(error.error_description || error.message)
          this.errorMessage = error.message;
        } 
    },
    async loginGoogle(){
      try {
          await loginWithSocialProvider("google");
          this.$router.replace("dashboard");
        } 
      catch (error) {
          alert(error.error_description || error.message)
          this.errorMessage = error.message;
        } 
    },
  },
};
</script>
<style scoped lang="scss">

  main {
    width: 50%;
  }

  button {
    width: 50%;
    padding: 0.6rem !important;
    margin: auto;
  }

  #containerAll{
    border: 1px solid rgba(131, 131, 131, 0.616);
    border-radius: 0 !important;
  }

  form {
	input {
		border-radius: 0 !important;
	}
}

  .loader {
    position: relative;
    top: 6px;
    left: 10px;
  }

  .btn {
    color: white !important;
  }
</style> 