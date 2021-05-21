<template>
    <div id="app">
        <language-switcher></language-switcher>
        <save-character-block :character="character"></save-character-block>
        <class-table :character="character"></class-table>
        <attributes-table :character="character"></attributes-table>
        <skills-table :character="character" :selected="selected"></skills-table>
        <levels-table :character="character" :selected="selected"></levels-table>
    </div>
</template>

<script>
    import LanguageSwitcher from './components/LanguageSwitcher.vue';
    import AttributesTable from './components/AttributesTable.vue';
    import LevelsTable from './components/LevelsTable.vue';
    import SaveCharacterBlock from './components/SaveCharacterBlock.vue';
    import SkillsTable from './components/SkillsTable.vue';
    import ClassTable from './components/ClassTable.vue';
    import Character from './model/character.js';



    export default {
        name: 'App',
        components: {
            LanguageSwitcher,
            AttributesTable,
            LevelsTable,
            SaveCharacterBlock,
            SkillsTable,
            ClassTable
        },
        data: () => ({
            character: new Character,
            selected: {
                level: null
            }
        }),
        created: function() {
            this.selected.level = this.character.level(1);
        }
    };
</script>

<style>
    #app {

    }
</style>

<i18n>
{
    "en-US": {

    },
    "ru-RU": {

    }
}
</i18n>
