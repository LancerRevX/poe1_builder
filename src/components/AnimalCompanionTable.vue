<template>
    <table v-if="character.class.name == 'Ranger'">
        <caption>Animal Companion</caption>
        <thead>
            <tr>
                <th>
                    <select v-model="character.animalCompanion" v-if="!character.storyCompanion">
                        <option
                            v-for="animalCompanion in character.class.animalCompanions.filter(animal => !animal.companionOnly)"
                            :key="animalCompanion.name"
                            :value="animalCompanion"
                        >
                            {{ animalCompanion.name }}
                        </option>
                    </select>
                    <span v-else>
                        {{ character.animalCompanion.name }}
                    </span>
                </th>
            </tr>
        </thead>
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
