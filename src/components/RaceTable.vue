<template>
    <table>
        <caption>Race</caption>
        <thead>
            <tr>
                <th colspan="3">
                    <select v-model="character.race" v-if="!character.storyCompanion">
                        <option v-for="race in races" :key="race.name" :value="race">
                            {{ race.name }}
                        </option>
                    </select>
                    <span v-else>
                        {{ character.race.name }}
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ability</td>
                <td><img :src="character.race.ability.imageLink" width="32" height="32"></td>
                <td><a :href="character.race.ability.link" target="_blank">{{ character.race.ability.name }}</a></td>
            </tr>
            <tr>
                <td>Attribute bonuses</td>
                <td colspan="2">
                    <ul>
                        <li v-for="attributeBonus in Object.entries(character.race.attributeBonuses)" :key="attributeBonus[0]">
                            {{ attributeBonus[0] + ': ' + (attributeBonus[1] > 0 ? '+' : '') + attributeBonus[1] }}
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import races from '../model/races.js';

    export default {
        name: 'race-table',
        props: {
            selected: Object
        },
        data: () => ({
            races
        }),
        computed: {
            character: function() {
                return this.selected.character;
            }
        }
    };
</script>

<style scoped>
    table caption {
        font-weight: bold;
        font-size: 18px;
    }

    table {
        border: 1px outset black;
        padding: 4px;
    }

    select {
        width: 100%;
    }
</style>
