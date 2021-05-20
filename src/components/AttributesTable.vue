<template>
    <table class="attributes-table">
        <caption>{{ $t('attributes') + attributesCounter }}</caption>
        <tr v-for="attribute in Object.keys(attributesData)" v-bind:key="attribute">
            <td><button v-on:click="character.attributes[attribute] -= 1">-</button></td>
            <td>{{ $root.$t('attributes.' + attribute) }}</td>
            <td>{{ character.attributes[attribute] }}</td>
            <td><button v-on:click="character.attributes[attribute] += 1">+</button></td>
        </tr>
    </table>
</template>

<script lang="ts">
    import Character from '../model/character.js';

    import {attributesData} from '../model/attributes.js';

    export default {
        name: 'attributes-table',
        props: {
            character: Character,
        },
        data: () => ({
            attributesData
        }),
        computed: {
            attributesCounter: function() {
                let attributePoints = this.character.attributePoints();
                return attributePoints ? ` (${attributePoints})` : '';
            }
        },
        created: () => {
            1;
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
