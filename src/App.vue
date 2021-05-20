<template>
    <div id="app">
        <language-switcher></language-switcher>
        <save-character-block :character="character"></save-character-block>
        <attributes-table :character="character"></attributes-table>
        <levels-table :character="character"></levels-table>
    </div>
</template>

<script lang="ts">
    import LanguageSwitcher from './components/LanguageSwitcher.vue';
    import AttributesTable from './components/AttributesTable.vue';
    import LevelsTable from './components/LevelsTable.vue';
    import SaveCharacterBlock from './components/SaveCharacterBlock.vue';
    import Character from './model/character.js';



    export default {
        name: 'App',
        components: {
            LanguageSwitcher,
            AttributesTable,
            LevelsTable,
            SaveCharacterBlock
        },
        data: () => ({
            character: new Character
        })
    };
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

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
