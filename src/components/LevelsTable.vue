<template>
    <div class="levels-outer-block">
        <h2>{{ $t('levels') }}</h2>
        <div class="levels-inner-block">
            <table class="levels-table">
                <thead>
                    <tr>
                        <th>{{ $t('level') }}</th>
                        <th>{{ $t('selectedAbilities') }}</th>
                        <th>{{ $t('upgradedSkills') }}</th>
                        <th>{{ $t('weapon') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="level in character.levels"
                        v-bind:key="level.number"
                        class="level"
                        v-bind:class="{selected: selected.level.number == level.number}"
                        v-on:click="selected.level = level"
                    >
                        <td>{{ level.number }}</td>
                        <td>
                            <ul>
                                <li v-for="ability in level.selectedAbilities" :key="ability.name">
                                    {{ $root.$t('abilities.' + selected.level.character.class.name + '.' + ability.name) }}
                                </li>
                            </ul>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
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
    div.levels-outer-block {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    div.levels-inner-block {
        overflow: scroll;
        flex-grow: 1;
    }

    table.levels-table {
        border-collapse: collapse;
        width: 100%;
    }

    tr.level {
        border: 1px solid black;
        width: 100%;
        cursor: pointer;
    }

    tr.level.selected {
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
