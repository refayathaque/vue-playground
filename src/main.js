import { createApp } from 'vue'
import App from './App.vue'
// bootstrap https://travishorn.com/adding-bootstrap-to-a-vue-cli-project-98c2a30e0ed0
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { VuelidatePlugin } from '@vuelidate/core'

const app = createApp(App);

app.use(VuelidatePlugin)
app.mount("#app");