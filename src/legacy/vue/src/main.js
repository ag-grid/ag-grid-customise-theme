import Vue from 'vue';
import 'ag-grid-enterprise';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');
