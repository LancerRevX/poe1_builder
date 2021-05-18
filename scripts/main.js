import {translations} from './translations.js';
import {Character} from './character.js';

Vue.component('attributes-table', {
    props: {
        character: Character
    },
    template: `<div class="attributes-table">
        <h1>{{ $t('attributes') }}</h1>
        {{ character.attributes[0] }}
    </div>`
});

Vue.component('language-switch', {
    data: () => ({

    }),
    template: `<div class="language-switch">
        <h1>{{ $t('language') }}</h1>
        <select v-model="$i18n.locale">
            <option value="en">English</option>
            <option value="ru">Русский</option>
        </select>
    </div>`
});

let app = new Vue({
    el: '#app',
    i18n: new VueI18n({
        locale: 'en',
        messages: translations,
    }),
    data: {
        character: new Character
    }
});

