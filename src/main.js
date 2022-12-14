/*
Copyright ©

All files, resources, and documentation presented in the entire project are licensed under the terms specified in the file named "LICENSE" under the project root directory.

Copyright holders and authorship:

Lucas Nogueira <https://github.com/llunno>;
Matias Reinke <https://github.com/MatyOS25>;
Bruno Rudy <https://github.com/BK-Rudy>;
Pedro Fonseca <https://github.com/pefonseca>;

Attribution Required.
*/

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import "@/css/global.scss"

import VueGoogleMaps from '@fawmi/vue-google-maps'

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faAppStore } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'

//font-awesome
library.add([faGooglePlay, faAppStore, faChevronCircleUp, faUserCircle, faPlus, faCircleCheck, faClockRotateLeft]);

createApp(App)
.use(store)
.use(router)
.use(VueGoogleMaps, {
  load: {
      key: 'AIzaSyDGTj3uANtQSKlu4_-CSYTH0oAwU5qC8RY',
      libraries: 'places'
  },
}).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
