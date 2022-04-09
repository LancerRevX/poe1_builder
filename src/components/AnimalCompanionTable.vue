<template>
    <table v-if="character.class.name == 'Ranger'">
        <caption>Animal Companion</caption>
        <tr>
            <td>
                <select v-model="character.animalCompanion">
                    <option
                        v-for="animalCompanion in character.class.animalCompanions"
                        :key="animalCompanion.name"
                        :value="animalCompanion"
                    >
                        {{ animalCompanion.name }}
                    </option>
                </select>
            </td>
        </tr>
    </table>
</template>

<script>

    export default {
        name: 'animal-companion-table',
        props: {
            selected: Object
        },
        computed: {
            character: function() {
                return this.selected.character;
            }
        }
    };
</script>

<style scoped>
    table {
        border: 1px solid green;
    }

    select {
        font-size: 16px;
        font-weight: bold;
    }
</style>
