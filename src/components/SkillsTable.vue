<template>
    <table>
        <caption>{{ $t('skills') + skillPointsCounter}}</caption>
        <tr v-for="skill in Object.keys(skillsData)" v-bind:key="skill">
            <td>{{ $root.$t('skills.' + skill) }}</td>
            <td><button v-on:click="selected.level.skills[skill] -= 1">-</button></td>
            <td>{{ selected.level.skills[skill] }}</td>
            <td><button v-on:click="selected.level.skills[skill] += 1">+</button></td>
        </tr>
    </table>
</template>

<script>
    import Character from '../model/character.js';
    import skillsData from '../model/skills.js';

    export default {
        'name': 'skills-table',
        'props': {
            character: Character,
            selected: Object
        },
        data: () => ({
            skillsData
        }),
        computed: {
            skillPointsCounter: function() {
                return this.selected.level.skillPoints ?
                    ` (${this.selected.level.skillPoints})` : '';
            }
        }
    };
</script>

<i18n>
{
    "en-US": {
        "skills": "Skills"
    },
    "ru-RU": {
        "skills": "Навыки"
    }
}
</i18n>
