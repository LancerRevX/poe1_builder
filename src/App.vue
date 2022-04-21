<template>
    <div id="app">
        <div class="title-block">
            <h1 class="title">Pillars of Eternity 1 Builder</h1>
            <span class="version">v.1</span>
        </div>
        <character-switcher :selected="selected"></character-switcher>
        <div class="tables-block">
            <race-table v-bind="{selected}"></race-table>
            <culture-table v-bind="{selected}"></culture-table>
            <background-table v-bind="{selected}"></background-table>
            <class-table v-bind="{selected}"></class-table>
            <spirit-form-table v-bind="{selected}"></spirit-form-table>
            <animal-companion-table v-bind="{selected}"></animal-companion-table>
            <attributes-table v-bind="{selected}"></attributes-table>
            <skills-table v-bind="{selected}"></skills-table>
            <!-- <weapon-table v-bind="{selected}"></weapon-table> -->
            <stats-table v-bind="{selected}"></stats-table>
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
    import CultureTable from './components/CultureTable.vue';
    import BackgroundTable from './components/BackgroundTable.vue';
    import SpiritFormTable from './components/SpiritFormTable.vue';
    import AnimalCompanionTable from './components/AnimalCompanionTable.vue';
    import WeaponTable from './components/WeaponTable.vue';
    import StatsTable from './components/StatsTable.vue';
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
            CultureTable,
            BackgroundTable,
            SpiritFormTable,
            AnimalCompanionTable,
            WeaponTable,
            StatsTable,
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
        grid-template-rows: auto auto 2fr 1fr;
        grid-template-columns: 2fr 1fr 1fr;
    }

    .title-block {
        display: flex;
        grid-column: span 3;
        padding: 0 8px 0 16px;
        align-items: flex-start;
    }

    .title {
        text-align: center;
        grid-column: span 3;
    }

    .version {
        flex-grow: 1;
        text-align: right;
    }

    .tables-block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        padding: 0px 16px;
        gap: 16px;
        overflow: scroll;
        margin-right: 16px;
<<<<<<< HEAD
        align-items: flex-start;
=======
>>>>>>> 92257017a98b759c2a5e8101d7d40e4e8483bf83

        /* display: grid;
        grid-auto-flow: dense;
        grid-auto-rows: 100px;
        grid-auto-columns: 100px; */
    }

    table caption {
        font-weight: bold;
        font-size: 18px;
    }

    table {
        border: 1px outset black;
        padding: 4px;
    }

    abilities-block {
        margin-left: 16px;
    }
</style>
