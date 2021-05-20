<template>
    <div class="save-character-block">
        <ol>
            <li v-for="character in savedCharactersList" v-bind:key="character.name">
                {{ character.name + ': ' + $root.$t('classes.' + character.class) }}
            </li>
        </ol>
        <label>
            {{ $t('name') }}
            <input type="text" v-model="character.name">
        </label>
        <button v-on:click="saveCharacterInBrowser()">{{ $t('save-in-browser') }}</button>
        <button>{{ $t('get-link') }}</button>
    </div>
</template>

<script>
    import Character from '../model/character.js';

    const characterKeyPrefix = 'Poe1BuilderCharacter_';

    export default {
        name: 'save-character-block',
        props: {
            character: Character
        },
        data: () => ({
            savedCharactersList: []
        }),
        mounted: function() {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).match(`^${characterKeyPrefix}`)) {
                    let character = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    this.savedCharactersList.push({
                        name: character.name,
                        class: character.class.name
                    });
                }
            }
        },
        methods: {
            saveCharacterInBrowser: function() {
                if (
                    localStorage.getItem(characterKeyPrefix + this.character.name) &&
                    !confirm(this.$t('name-exists', {name: this.character.name}))
                ) {
                    return;
                }
                localStorage.setItem(characterKeyPrefix + this.character.name, JSON.stringify(this.character));
                this.savedCharactersList.push({
                    name: this.character.name,
                    class: this.character.class.name
                });
            }
        }
    };
</script>

<i18n>
{
    "en-US": {
        "name": "Name",
        "save-in-browser": "Save in browser",
        "get-link": "Get link",
        "name-exists": "Character with name \"{name}\" already exists in your LocalStorage. Do you want to overwrite it?"
    },
    "ru-RU": {
        "name": "Имя",
        "save-in-browser": "Сохранить в браузере",
        "get-link": "Получить ссылку",
        "name-exists": "В вашем браузере уже сохранён персонаж с именем \"{name}\". Перезаписать его?"
    }
}
</i18n>
