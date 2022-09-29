<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-fixed-top navbar-dark main-nav">
      <router-link id="logo-url" to="/">
        <img id="logo" src="../src/assets/logo.png" alt="alt">        
      </router-link>
      <div class="nav navbar-nav mx-auto">
        <input type="text" v-model="search" placeholder="Pesquisar" /> <br> <br> 
      </div>
      <ul class="nav navbar-nav mx-right">
        <li class="nav-item">
          <router-link class="nav-link text-dark btn btn-light" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark btn btn-light ml-3" to="/dashboard">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white btn btn-primary ml-3" to="/login" v-if="isLoggedIn === false">Login</router-link>
          <button class="btn btn-primary ml-3 pl-3 pr-3 pb-2 pt-2" @click="handleSignOut" v-else-if="isLoggedIn">Sign Out</button>
        </li>
        <li class="nav-item">
          <router-link 
            class="nav-link text-white btn btn-primary ml-3" 
            to="/signup"
            v-if="isLoggedIn === false"
          >
          Sign Up</router-link
          >
        </li>
      </ul>
    </nav>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router"

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  })
}

</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #logo {
    width: 40px;
    height: 40px;
  }

  nav {
    background-color: #008894;
  }

  p {
    font-weight: bold;
    color: #000;
  }
</style>