import Vue from 'vue';
import VueI18n from 'vue-i18n';

import App from './App.vue';

import translations from './translations.js';

Vue.use(VueI18n);
Vue.config.productionTip = false;

let i18n = new VueI18n({
    locale: navigator.language,
    fallbackLocale: 'en-US',
    messages: translations
});

Vue.mixin({
    data: () => ({
        MAX_COMMENT_LENGTH: 512,
        VERSION: 1
    })
});

new Vue({
    i18n,
    render: createElement => createElement(App)
}).$mount('#app');
