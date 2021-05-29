<template>
    <div id="app">
        <div id="upper-block">
            <character-switcher :selected="selected"></character-switcher>
        </div>
        <div id="lower-block">
            <div id="left-block">
                <!-- <save-character-block :character="character"></save-character-block> -->
                <class-table :selected="selected"></class-table>
                <!-- <spirit-form-table :character="character" :selected="selected"></spirit-form-table> -->
                <!-- <attributes-table :character="character"></attributes-table> -->
                <!-- <skills-table :selected="selected"></skills-table> -->
            </div>
            <!-- <abilities-block :selected="selected"></abilities-block> -->
            <div id="right-block">
                <!-- <levels-table :selected="selected"></levels-table> -->
            </div>
        </div>
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
        display: flex;
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
