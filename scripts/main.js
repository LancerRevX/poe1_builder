import translations from './translations.js';
import Character from './character.js';

function setLanguage(locale) {
    if (!translations.hasOwnProperty(locale)) {
        locale = Object.keys(translations)[0];
    }
    document.querySelectorAll('[data-i18n]').forEach(element => {
        console.log(element);
        element.innerHTML = translations[locale][element.dataset.i18n];
    });
}

setLanguage(navigator.language);
let languageSelect = document.querySelector('#language-select');
languageSelect.value = navigator.language;
languageSelect.onchange = function(event) {
    setLanguage(this.value);
};

let character = new Character;
for (let attribute in character.attributes) {
    let attributeSpan = document.querySelector('#' + attribute + '-span');
    attributeSpan.innerHTML = character.attributes[attribute];
    Object.defineProperty(character.attributes, attribute, {
        get: () => attributeSpan.innerHTML,
        set: newValue => {
            attributeSpan.innerHTML = newValue;
        }
    });
}

console.log(character);
setTimeout(() => {
    character.attributes['strength'] = 20;
}, 1000);




