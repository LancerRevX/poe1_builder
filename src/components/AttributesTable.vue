<template>
    <table class="attributes-table">
        <caption>Attributes{{ attributePointsCounter }}</caption>
        <tr v-for="attribute in Object.keys(attributesData)" v-bind:key="attribute">
            <td>{{ attribute }}</td>
            <td><button v-on:click="character.attributes[attribute] -= 1" v-if="!character.storyCompanion">-</button></td>
            <td>{{ character.attributes[attribute] }}</td>
            <td><button v-on:click="character.attributes[attribute] += 1" v-if="!character.storyCompanion">+</button></td>
        </tr>
    </table>
</template>

<script>
    import attributesData from '../model/attributes.js';

    export default {
        name: 'attributes-table',
        props: {
            selected: Object
        },
        data: () => ({
            attributesData
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

<i18n>
{
    "en-US": {
        "attributes": "Attributes"
    },
    "ru-RU": {
        "attributes": "Атрибуты"
    }
}
</i18n>
