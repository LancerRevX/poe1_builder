<template>
    <div>
        <table>
            <caption>Culture</caption>
            <thead>
                <tr>
                    <th colspan="2">
                        <select v-if="!character.storyCompanion" v-model="character.culture">
                            <option v-for="culture in cultures" :key="culture.name" :value="culture">
                                {{ culture.name }}
                            </option>
                        </select>
                        <span v-else>
                            {{ character.culture.name }}
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Attribute bonuses</td>
                    <td>
                        <ul>
                            <li v-for="attributeKey in Object.keys(character.culture.attributeBonuses)" :key="attributeKey">
                                {{ attributes[attributeKey].name + ': ' +
                                    (character.culture.attributeBonuses[attributeKey] > 0 ? '+' : '') +
                                    character.culture.attributeBonuses[attributeKey] }}
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
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
    </div>
</template>

<script>
    import cultures from '../model/cultures.js';
    import attributes from '../model/attributes.js';

    export default {
        name: 'culture-and-background-table',
        data: () => ({
            cultures: cultures.filter(culture => !culture.companionOnly),
            attributes
        }),
        props: {
            selected: Object
        },
        computed: {
            character: function() {
                return this.selected.character;
            },
            availableCultures: () => cultures.filter(culture => !culture.companionOnly)
        },
    };
</script>

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
