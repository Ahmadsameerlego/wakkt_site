import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n';
import i18n from './i18n'
// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "normalize.css";

// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();




// import axios
import axios from 'axios';
axios.defaults.baseURL = '';
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');   
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.lang = sessionStorage.getItem('lang');


createApp(App).use(store).use(router).use(VueI18n).use(i18n).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
