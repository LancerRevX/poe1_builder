<template>
    <div id="app">
        <character-switcher :selected="selected"></character-switcher>
        <div id="tables-block">
            <!-- <save-character-block :character="character"></save-character-block> -->
            <class-table v-bind="{selected}"></class-table>
            <!-- <spirit-form-table :character="character" :selected="selected"></spirit-form-table> -->
            <attributes-table v-bind="{selected}"></attributes-table>
            <skills-table  v-bind="{selected}"></skills-table>
        </div>
        <abilities-block v-bind="{selected}"></abilities-block>
        <levels-table v-bind="{selected}"></levels-table>
    </div>
</template>

<script>
    import CharacterSwitcher from './components/CharacterSwitcher.vue';
    import AttributesTable from './components/AttributesTable.vue';
    import LevelsTable from './components/LevelsTable.vue';
    import SaveCharacterBlock from './components/SaveCharacterBlock.vue';
    import SkillsTable from './components/SkillsTable.vue';
    import ClassTable from './components/ClassTable.vue';
    import SpiritFormTable from './components/SpiritFormTable.vue';
    import AbilitiesBlock from './components/AbilitiesBlock.vue';
    import Character from './model/character.js';
    import * as companions from './model/companions.js';

    export default {
        name: 'App',
        components: {
            CharacterSwitcher,
            AttributesTable,
            LevelsTable,
            SaveCharacterBlock,
            SkillsTable,
            ClassTable,
            SpiritFormTable,
            AbilitiesBlock
        },
        data: () => ({
            selected: {
                character: undefined,
                level: undefined
            }
        }),
        created: function() {
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
        display: grid;
        grid-template-rows: auto 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        flex-direction: column;
    }

    #lower-block {
        flex-grow: 1;
        display: flex;
        flex-direction: row;
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
