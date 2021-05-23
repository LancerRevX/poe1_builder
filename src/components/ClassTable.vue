<template>
    <table>
        <caption>{{ $t('class') }}</caption>
        <tr><th><select v-model="character.class">
            <option v-for="classData in classesData" v-bind:key="classData.name" v-bind:value="classData">
                {{ $root.$t('classes.' + classData.name) }}
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
