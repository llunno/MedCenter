import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

import { initializeApp } from "firebase/app";

// declarado mas nunca usado
import { getAnalytics } from "firebase/analytics";

// declarado mas nunca usado
const firebaseConfig = {
  apiKey: "AIzaSyCN1WIQOQCiKK4dc8yu_3SdlAreLf36lbQ",
  authDomain: "infnet-at-front.firebaseapp.com",
  projectId: "infnet-at-front",
  storageBucket: "infnet-at-front.appspot.com",
  messagingSenderId: "342341795836",
  appId: "1:342341795836:web:e9acc183d3f3fcde4a7c79",
  measurementId: "G-LBZBTVYDCC"
};

// declarado mas nunca usado
const app = initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
