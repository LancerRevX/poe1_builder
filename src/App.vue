<template>
    <div id="app">
        <h1 class="title">Pillars of Eternity 1 Builder</h1>
        <span class="version">v.1</span>
        <character-switcher :selected="selected"></character-switcher>
        <div id="tables-block">
            <race-table v-bind="{selected}"></race-table>
            <culture-and-background-table v-bind="{selected}"></culture-and-background-table>
            <class-table v-bind="{selected}"></class-table>
            <spirit-form-table v-bind="{selected}"></spirit-form-table>
            <animal-companion-table v-bind="{selected}"></animal-companion-table>
            <attributes-table v-bind="{selected}"></attributes-table>
            <skills-table  v-bind="{selected}"></skills-table>
        </div>
        <abilities-block v-bind="{selected}"></abilities-block>
        <levels-table v-bind="{selected}"></levels-table>
        <comment-block :selected="selected"></comment-block>
    </div>
</template>

<script>
    import CharacterSwitcher from './components/CharacterSwitcher.vue';
    import AttributesTable from './components/AttributesTable.vue';
    import LevelsTable from './components/LevelsTable.vue';
    import SkillsTable from './components/SkillsTable.vue';
    import ClassTable from './components/ClassTable.vue';
    import RaceTable from './components/RaceTable.vue';
    import CultureAndBackgroundTable from './components/CultureAndBackgroundTable.vue';
    import SpiritFormTable from './components/SpiritFormTable.vue';
    import AnimalCompanionTable from './components/AnimalCompanionTable.vue';
    import AbilitiesBlock from './components/AbilitiesBlock.vue';
    import CommentBlock from './components/CommentBlock.vue';
    import Character from './model/character.js';
    import * as companions from './model/companions.js';

    export default {
        name: 'App',
        components: {
            CharacterSwitcher,
            AttributesTable,
            LevelsTable,
            SkillsTable,
            ClassTable,
            RaceTable,
            CultureAndBackgroundTable,
            SpiritFormTable,
            AnimalCompanionTable,
            AbilitiesBlock,
            CommentBlock,
        },
        data: () => ({
            selected: {
                character: undefined,
                level: undefined
            }
        }),
        created: function() {
            let urlSearchParams = new URLSearchParams(window.location.search);
            console.log(urlSearchParams.get('party'));
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
        grid-template-rows: auto auto 1fr 1fr;
        grid-template-columns: 2fr 1fr 1fr;
    }

    h1.title {
        text-align: center;
        grid-column: span 3;
    }

    span.version {
        position: absolute;
        right: 4px;
    }

    #tables-block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 0px 16px;
        gap: 16px;
    }

    table caption {
        font-weight: bold;
        font-size: 18px;
    }

    table {
        border: 1px outset black;
        padding: 4px;
    }
</style>
