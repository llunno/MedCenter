<template>
  <div id="app">
  <router-link to="/" aria-current="page"/>
  <router-view/>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"
import { store } from './store'
import { supabase } from './supabase'

store.user = supabase.auth.user()
supabase.auth.onAuthStateChange((_, session) => {
  store.user = session.user
})
export default {
  name: 'app',
  data(){
    return {
      store
    }
  }
  
}

const router = useRouter();
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = store.user;
  supabase.auth.onAuthStateChange(auth, (user) => {
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
  @font-face {
    font-family: "Montserrat";
    src: local('Montserrat'), 
    url('@/fonts/Montserrat-Medium.ttf')  format('truetype');
  }
</style>