<template>
    <table class="levels-table">
        <caption>{{ $t('levels') }}</caption>
        <tr
            v-for="level in character.levels"
            v-bind:key="level.number"
            class="level"
            v-bind:class="{selected: selected.level.number == level.number}"
        >
            <td
                class="level-number"
                v-on:click="selected.level = level"
            >
                {{ level.number }}
            </td>
        </tr>
    </table>
</template>

<script>
    import Character from '../model/character.js';

    export default {
        name: 'levels-table',
        props: {
            character: Character,
            selected: Object
        }
    };
</script>

<style>
    table {
        border-collapse: collapse;
    }

    tr.level {
        border: 1px solid black;
    }

    tr.level.selected {
        border-color: red;
    }

    td.level-number {
        cursor: pointer;
    }

    tr.level.selected > td.level-number {
        background-color: red;
        color: white;
    }
</style>

<i18n>
{
    "en-US": {
        "levels": "Levels"
    },
    "ru-RU": {
        "levels": "Уровни"
    }
}
</i18n>
