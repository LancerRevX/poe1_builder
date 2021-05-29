<template>
    <table class="class-table">
        <caption>Class</caption>
        <tr><th colspan="2"><select v-model="character.class">
            <option v-for="classData in classesData" v-bind:key="classData.name" v-bind:value="classData">
                {{ classData.name }}
            </option>
        </select></th></tr>
        <tr v-if="character.class.baseAbility">
            <td>Base ability</td>
            <td>
                <table><tr>
                    <td><img :src="character.class.baseAbility.imageLink" width="32" height="32"></td>
                    <td><a href="character.class.baseAbility.link">{{ character.class.baseAbility.name }}</a></td>
                </tr></table>
            </td>
        </tr>
        <tr>
            <td>Endurance per level</td>
            <td>{{ character.class.endurancePerLevel }}</td>
        </tr>
        <tr>
            <td>Health multiplier</td>
            <td>{{ character.class.healthMultiplier }}</td>
        </tr>
        <tr>
            <td>Base deflection</td>
            <td>{{ character.class.deflection }}</td>
        </tr>
        <tr>
            <td>Base accuracy</td>
            <td>{{ character.class.accuracy }}</td>
        </tr>
    </table>
</template>

<script>
    import classesData from '../model/classes.js';

    export default {
        name: 'class-table',
        props: {
            selected: Object
        },
        data: () => ({
            classesData
        }),
        computed: {
            character: function() {
                return this.selected.character;
            }
        }
    };
</script>

<style>
</style>
