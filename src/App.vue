<template>
  <div id="app">
  <router-link to="/" aria-current="page"/>
  <router-view/>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"
import useAuthUser from "./useAuthUser";

export default {
  name: 'app'
}

const router = useRouter();


//  const {isLoggedIn} = useAuthUser();
//  const auth = ref(false);
//  onMounted(() => {
//    auth = isLoggedIn;
//  });

// const handleSignOut = () => {
//   signOut(auth).then(() => {
//     router.push("/");
//   })
// }

</script>

<style>
  @font-face {
    font-family: "Montserrat";
    src: local('Montserrat'), 
    url('@/fonts/Montserrat-Medium.ttf')  format('truetype');
  }
</style>