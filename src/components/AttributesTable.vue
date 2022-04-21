<template>
    <table class="attributes-table">
        <caption>Attributes{{ attributePointsCounter }}</caption>
        <tr v-for="attributeKey in Object.keys(character.attributes)" :key="attributeKey">
            <td><a :href="attributes[attributeKey].link" target="_blank">{{ attributes[attributeKey].abbreviation }}</a></td>
            <td><button @click="character.attributes[attributeKey].decrease()" v-if="!character.storyCompanion">-</button></td>
            <td class="base-attribute">{{ character.attributes[attributeKey].base }}</td>
            <td>+ {{ character.attributes[attributeKey].bonus }} =</td>
            <td class="modified-attribute">{{ character.attributes[attributeKey].modified }}</td>
            <td><button @click="character.attributes[attributeKey].increase()" v-if="!character.storyCompanion">+</button></td>
        </tr>
    </table>
</template>

<script>
    import attributes from '../model/attributes.js';

    export default {
        name: 'attributes-table',
        props: {
            selected: Object
        },
        data: () => ({
            attributes
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

<style>
    td.base-attribute {
        text-align: right;
    }
    td.modified-attribute {
        text-align: left;
    }
</style>
