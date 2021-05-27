<template>
    <table>
        <caption>Skills ({{ selected.level.skillPoints }})</caption>
        <tr v-for="skill in Object.keys(skillsData)" v-bind:key="skill">
            <td>{{ skill }}</td>
            <td><button v-on:click="selected.level.decreaseSkill(skill)">-</button></td>
            <td>{{ selected.level.skills[skill] }}</td>
            <td><button v-on:click="selected.level.increaseSkill(skill)">+</button></td>
        </tr>
    </table>
</template>

<script>
    import skillsData from '../model/skills.js';

    export default {
        'name': 'skills-table',
        'props': {
            selected: Object
        },
        data: () => ({
            skillsData
        })
    };
</script>
