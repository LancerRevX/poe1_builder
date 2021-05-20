<template>
    <table class="levels-table">
        <caption>{{ $t('levels') }}</caption>
        <tr v-for="level in character.levels" v-bind:key="level.number">
            <td>{{ level.number }}</td>
        </tr>
    </table>
</template>

<script>
    import Character from '../model/character.js';

    export default {
        name: 'levels-table',
        props: {
            character: Character
        }
    };
</script>

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
