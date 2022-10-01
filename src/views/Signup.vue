<template>
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card border-0 shadow rounded-3 my-5">
        <div class="card-body p-4 p-sm-5">
          <h5 class="card-title text-center mb-5 fw-light fs-5">Cadastro</h5>
          <form @submit.prevent="signupRequest">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
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

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
    data() {
        return {
            email: "",
            password: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: "",
        };
    },

    methods: {
        signupRequest() {
            let v = this;
            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            const auth = getAuth();
            createUserWithEmailAndPassword(auth, v.email, v.password)
                .then((userCredential) => {
                v.successMessage = "Register Successfully.";
                v.xhrRequest = false;
                })
                .catch((error) => {
                let errorResponse = JSON.parse(error.message);
                v.errorMessage = errorResponse.error.message;
                v.xhrRequest = false;
                });
        },
    },
};
</script>

<style scoped>
    .btn-spn {
        position: relative;
        top: -3px;
    }
</style>