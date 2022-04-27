import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.mixin({
    data: () => ({
        MAX_COMMENT_LENGTH: 512,
        VERSION: 1
    })
});

new Vue({
    render: createElement => createElement(App)
}).$mount('#app');
