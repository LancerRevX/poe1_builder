<template>
    <div id="app">
        <div class="title-block">
            <a :href="homeLink" class="title">Pillars of Eternity 1 Builder</a>
            <span class="version">v.{{ VERSION }}</span>
        </div>
        <character-switcher :selected="selected"></character-switcher>
        <div class="main-block">
            <tables-block v-bind="{selected}"></tables-block>
            <abilities-block v-bind="{selected}"></abilities-block>
            <levels-block v-bind="{selected}"></levels-block>
            <comment-block :selected="selected"></comment-block>
        </div>
    </div>
</template>

<script>
    import CharacterSwitcher from './components/CharacterSwitcher.vue';
    import LevelsBlock from './components/LevelsBlock.vue';
    import TablesBlock from './components/tables-block/TablesBlock.vue';
    import AbilitiesBlock from './components/AbilitiesBlock.vue';
    import CommentBlock from './components/CommentBlock.vue';
    import Character from './model/character.js';
    import * as companions from './model/companions.js';

    export default {
        name: 'App',
        components: {
            CharacterSwitcher,
            LevelsBlock,
            TablesBlock,
            AbilitiesBlock,
            CommentBlock,
        },
        data: () => ({
            selected: {
                character: undefined,
                level: undefined,
                comment: ''
            },
        }),
        created: function() {
            let urlSearchParams = new URLSearchParams(window.location.search);
            console.log(urlSearchParams.get('party'));
        },
        computed: {
            homeLink() {
                return window.location.href.split('?')[0];
            }
        }
    };
</script>

<style>
    @import './styles/global.css';

    #app {
        height: 100%;

        display: flex;
        flex-direction: column;
    }

    .main-block {
        min-height: 0;
        flex-grow: 1;

        display: grid;
        grid-template: auto 1fr / 2fr 1fr 1fr;
        grid-template-areas:
            "comment abilities levels"
            "tables abilities levels";
        padding: 8px 16px 0 16px;
        gap: 16px;
    }

    .title-block {
        grid-area: title;

        display: flex;
        padding: 0 8px 0 16px;
        align-items: flex-start;
        color: white;
        background-color: black;
    }

    .title, .title:visited {
        color: inherit;
        font-size: 32px;
        text-align: center;
        grid-column: span 3;
        margin: 4px 0;
        text-decoration: none;
    }

    .version {
        flex-grow: 1;
        text-align: right;
    }

    @media (max-width: 1800px) {
        .main-block {
            min-height: auto;
            /* height: 120vh; */
        
            grid-template: auto auto 1fr / 1fr;
            grid-template-areas:
                "comment"
                "tables"
                "levels"
                "abilities";
        }

        .character-switcher {
            grid-template: auto auto / auto 1fr auto;
            grid-template-areas:
                "party single-card saveload"
                "cards cards cards";
        }

        .characters-cards {
            margin-top: 8px;
            overflow-x: scroll;
        }
    }

    @media (max-width: 900px) {
        .title-block {
            justify-content: center;
            align-items: center;
            gap: 8px;
        }

        .title {
            font-size: 16px;
        }

        .version {
            flex-grow: 0;
        }

        .character-switcher {
            grid-template: auto auto auto / 1fr auto;
            grid-template-areas:
                "party saveload"
                "single-card single-card"
                "cards cards";
        }

        .character-card {
            margin-top: 8px;
            justify-self: center;
        }

        .characters-cards {
            margin-top: 0;
        }

        .main-block {
            min-height: auto;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            grid-template-areas:
                "comment"
                "tables"
                "levels"
                "abilities";
        }
    }

</style>
