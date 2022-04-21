<template>
    <table>
        <caption>Background</caption>
        <thead>
            <tr>
                <th colspan="2">
                    <select v-if="!character.storyCompanion" v-model="character.background">
                        <option v-for="background in character.culture.backgrounds" :key="background.name" :value="background">
                            {{ background.name }}
                        </option>
                    </select>
                    <span v-else>
                        {{ character.background.name }}
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Skill bonuses</td>
                <td>
                    <ul>
                        <li v-for="skillBonus in Object.entries(character.background.skillBonuses)" :key="skillBonus[0]">
                            {{ skillBonus[0] + ': +' + skillBonus[1] }}
                        </li>
                    </ul>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

    export default {
        name: 'background-table',
        data: () => ({
        }),
        props: {
            selected: Object
        },
        computed: {
            character: function() {
                return this.selected.character;
            }
        },
    };
</script>

<<<<<<< HEAD
<style scoped>
    table {
        border: 1px solid outset;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    tr > :nth-child(2) {
        padding-left: 16px;
    }
</style>

=======
>>>>>>> 92257017a98b759c2a5e8101d7d40e4e8483bf83
