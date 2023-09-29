import './assets/main.css'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'; // Import your router configuration

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faMagnifyingGlass,faUser} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faMagnifyingGlass, faUser)

// Create the Vue 3 app instance and mount it to '#app'
const app = createApp(App);
app.use(bootstrap);
app.use(router); // Use Vue Router
app.component('font-awesome-icon', FontAwesomeIcon); // Register FontAwesomeIcon component
app.mount('#app'); // Mount your Vue app to the HTML element with id 'app'

