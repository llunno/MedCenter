<template>
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card border-0 shadow rounded-3 my-5">
        <div class="card-body p-4 p-sm-5">
          <h5 class="card-title text-center mb-5 fw-light fs-5">Login</h5>
          <form @submit.prevent="loginRequest">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Senha</label>
            </div>
            <div class="d-grid">
              <button class="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Login</button>
            </div>
            <hr class="my-4">
            <div class="d-grid mb-2">
              <button class="btn btn-danger btn-login text-uppercase fw-bold" type="submit" @click="signInWithGoogle" >
                <i class="fab fa-google me-2"></i> Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";
export default {
  name: "Login",    
  data() {
    return {
      email: "",
      password: "",
      xhrRequest: false,
      errorMessage: "",
      successMessage: "" 
    };
  },
  methods: {
    loginRequest() {
      let v = this;
      v.xhrRequest = true;
      v.errorMessage = "";
      v.successMessage = "";

      const auth = getAuth();
      signInWithEmailAndPassword(auth, v.email, v.password)
        .then(() => {
          this.$router.replace("dashboard");
          v.xhrRequest = false;
        })
        .catch((error) => {
          v.errorMessage = error.message;
          v.xhrRequest = false;
        });
    },

    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user);
        this.$router.push("dashboard");
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      })
    }
  },
};
</script>
<style scoped>
  .loader {
    position: relative;
    top: 6px;
    left: 10px;
  }
</style> 