<template>
    <div id="app">
        <div id="left-block">
            <save-character-block :character="character"></save-character-block>
            <class-table :character="character"></class-table>
            <attributes-table :character="character"></attributes-table>
            <skills-table :selected="selected"></skills-table>
        </div>
        <abilities-block :selected="selected"></abilities-block>
        <div id="right-block">
            <levels-table :character="character" :selected="selected"></levels-table>
        </div>
    </div>
</template>

<script>
    import AttributesTable from './components/AttributesTable.vue';
    import LevelsTable from './components/LevelsTable.vue';
    import SaveCharacterBlock from './components/SaveCharacterBlock.vue';
    import SkillsTable from './components/SkillsTable.vue';
    import ClassTable from './components/ClassTable.vue';
    import AbilitiesBlock from './components/AbilitiesBlock.vue';
    import Character from './model/character.js';

    export default {
        name: 'App',
        components: {
            AttributesTable,
            LevelsTable,
            SaveCharacterBlock,
            SkillsTable,
            ClassTable,
            AbilitiesBlock
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
    html, body, #app {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    #app {
        display: flex;
        padding-left: 2%;
    }

    #left-block {
        flex: 2;
    }

    #right-block {
        flex: 1;
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
