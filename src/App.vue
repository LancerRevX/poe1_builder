<template>
    <div id="app">
        <div class="title-block">
            <a :href="homeLink" class="title">Pillars of Eternity 1 Builder</a>
            <span class="version">v.{{ VERSION }}</span>
        </div>
        <character-switcher :selected="selected"></character-switcher>
        <tables-block v-bind="{selected}"></tables-block>
        <abilities-block v-bind="{selected}"></abilities-block>
        <levels-block v-bind="{selected}"></levels-block>
        <comment-block :selected="selected"></comment-block>
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
    html, body, #app {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    #app {
        display: grid;
        grid-template-rows: auto auto 3fr 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas:
            "title title title"
            "switcher switcher switcher"
            "tables abilities levels"
            "comment abilities levels";
    }

    .title-block {
        grid-area: title;

        display: flex;
        padding: 0 8px 0 16px;
        align-items: flex-start;
    }

    .title, .title:visited {
        color: black;
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

        #app {
            grid-template-columns: 1fr 1fr;
            grid-template-areas:
                "title title"
                "switcher switcher"
                "tables tables"
                "abilities levels"
                "comment comment";
        }

        .levels-outer-block {
            margin: 0 16px 0 8px;
        }

        .abilities-block {
            margin: 0 8px 0 16px;
        }
    }

    @media (max-width: 600px) {
        .title-block {
            justify-content: center;
            gap: 8px;
        }

        .title {
            font-size: 16px;
        }

        .version {
            flex-grow: 0;
        }

        .levels-outer-block {
            margin: 0 16px;
        }

        .abilities-block {
            margin: 0 16px;
        }

        #app {
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            grid-template-areas:
                "title"
                "switcher"
                "tables"
                "levels"
                "abilities"
                "comment";
        }
    }

</style>
