import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'

import VueGoogleMaps from '@fawmi/vue-google-maps'

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCN1WIQOQCiKK4dc8yu_3SdlAreLf36lbQ",
  authDomain: "infnet-at-front.firebaseapp.com",
  projectId: "infnet-at-front",
  storageBucket: "infnet-at-front.appspot.com",
  messagingSenderId: "342341795836",
  appId: "1:342341795836:web:e9acc183d3f3fcde4a7c79",
  measurementId: "G-LBZBTVYDCC"
};

//font-awesome
library.add([faGooglePlay, faAppStore, faChevronCircleUp]);

initializeApp(firebaseConfig);

createApp(App).use(router).use(VueGoogleMaps, {
  load: {
      key: 'AIzaSyDGTj3uANtQSKlu4_-CSYTH0oAwU5qC8RY',
  },
}).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
