<template>
    <table>
        <caption>{{ $t('class') }}</caption>
        <tr><th><select v-model="character.class">
            <option v-for="className in Object.keys(classesData)" v-bind:key="className" v-bind:value="className">
                {{ $root.$t('classes.' + className) }}
            </option>
        </select></th></tr>
    </table>
</template>

<script>
    import classesData from '../model/classes.js';
    import Character from '../model/character.js';

    export default {
        name: 'class-table',
        props: {
            character: Character
        },
        data: () => ({
            classesData
        })
    };
</script>

<i18n>
{
    "en-US": {
        "class": "Class"
    },
    "ru-RU": {
        "class": "Класс"
    }
}
</i18n>
