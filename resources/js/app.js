require('./bootstrap');
import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
window.Vue = require('vue');

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('dashboard-component', require('./components/DashboardComponent.vue').default);

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
});
