<template>
    <table class="attributes-table">
        <caption>Attributes{{ attributePointsCounter }}</caption>
        <tr v-for="attributeName in Object.keys(character.attributes)" v-bind:key="attributeName">
            <td>{{ attributeName }}</td>
            <td><button @click="character.attributes[attributeName].decrease()" v-if="!character.storyCompanion">-</button></td>
            <td>{{ character.attributes[attributeName] }}</td>
            <td><button @click="character.attributes[attributeName].increase()" v-if="!character.storyCompanion">+</button></td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: 'attributes-table',
        props: {
            selected: Object
        },
        data: () => ({
        }),
        computed: {
            attributePointsCounter: function() {
                if (this.character.storyCompanion) {
                    return '';
                }

                let attributePoints = this.character.attributePoints();
                return attributePoints ? ` (${attributePoints})` : '';
            },
            character: function() {
                return this.selected.character;
            }
        },
        created: () => {
        },
    };
</script>
