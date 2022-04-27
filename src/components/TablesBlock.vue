<script src="../scripts/tables-block.js"></script>
<style src="../styles/tables-block.css"></style>
<template>
    <div class="tables-block">
        <div class="tables-block-column race-column">
            <table class="race-table">
                <caption>Race</caption>
                <thead>
                    <tr>
                        <th colspan="2">
                            <select v-model="character.race" v-if="!character.storyCompanion">
                                <option v-for="race in races.filter(race => !race.companionOnly)" :key="race.name" :value="race">
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
                        <td>
                            <div class="base-ability-block">
                                <img :src="character.race.ability.imageLink" width="32" height="32">
                                <a :href="character.race.ability.link" target="_blank">{{ character.race.ability.name }}</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Attribute bonuses</td>
                        <td>
                            <ul>
                                <li v-for="attributeKey in Object.keys(character.race.attributeBonuses)" :key="attributeKey">
                                    {{ attributes[attributeKey].name + ': ' +
                                        (character.race.attributeBonuses[attributeKey] > 0 ? '+' : '') +
                                        character.race.attributeBonuses[attributeKey] }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="culture-table">
                <caption>Culture</caption>
                <thead>
                    <tr>
                        <th colspan="2">
                            <select v-if="!character.storyCompanion" v-model="character.culture">
                                <option v-for="culture in cultures.filter(culture => !culture.companionOnly)" :key="culture.name" :value="culture">
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
            <table class="background-table">
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
                                    {{ skills[skillBonus[0]].name + ': +' + skillBonus[1] }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="tables-block-column class-column">
            <table class="class-table">
                <caption>Class</caption>
                <thead>
                    <tr>
                        <th colspan="2">
                            <select v-model="character.class" v-if="!character.storyCompanion">
                                <option v-for="class_ in classes" :key="class_.name" :value="class_">
                                    {{ class_.name }}
                                </option>
                            </select>
                            <span v-else>
                                {{ character.class.name }}
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="character.class.baseAbility">
                        <td>Base ability</td>
                        <td>
                            <div class="base-ability-block">
                                <img :src="character.class.baseAbility.imageLink" width="32" height="32">
                                <a :href="character.class.baseAbility.link">{{ character.class.baseAbility.name }}</a>
                            </div>
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
                    <tr>
                        <td>Skill bonuses</td>
                        <td>
                            <ul>
                                <li v-for="skillBonus in Object.entries(character.class.skillBonuses)" :key="skillBonus[0]">
                                    {{ skills[skillBonus[0]].name + ': +' + skillBonus[1] }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="order-table" v-if="character.class.name == 'Paladin'">
                <caption>Order</caption>
                <thead>
                    <tr>
                        <th colspan=2>
                            <select v-model="character.order" v-if="!character.storyCompanion">
                                <option v-for="order in paladinOrders" :key="order.name" :value="order" >{{ order.name }}</option>
                            </select>
                            <span v-else>
                                <option>{{ character.order.name }}</option>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody v-if="!character.storyCompanion">
                    <tr>
                        <td>Favored behavior</td>
                        <td>
                            <ul>
                                <li v-for="behavior in character.order.favoredBehavior" :key="behavior">
                                    {{ behavior }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Disfavored behavior</td>
                        <td>
                            <ul>
                                <li v-for="behavior in character.order.disfavoredBehavior" :key="behavior">
                                    {{ behavior }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="deity-table" v-else-if="character.class.name == 'Priest'">
                <caption>Deity</caption>
                <thead>
                    <tr>
                        <th colspan="2">
                            <select v-model="character.deity" v-if="!character.storyCompanion">
                                <option v-for="deity in character.class.deities" :key="deity.name" :value="deity">{{ deity.name }}</option>
                            </select>
                            <span v-else>
                                {{ character.deity.name }}
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody v-if="!character.storyCompanion">
                    <tr>
                        <td>Favored dispositions</td>
                        <td>
                            <ul>
                                <li v-for="disposition in character.deity.favoredDispositions" :key="disposition">
                                    {{ disposition }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Condemned dispositions</td>
                        <td>
                            <ul>
                                <li v-for="disposition in character.deity.condemnedDispositions" :key="disposition">
                                    {{ disposition }}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="animal-companion-table" v-else-if="character.class.name == 'Ranger'">
                <caption>Animal companion</caption>
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
            <table class="spirit-form-table" v-else-if="character.class.name == 'Druid'">
                <caption>Spirit form</caption>
                <thead>
                    <tr>
                        <th>
                            <select v-model="character.spiritForm" v-if="!character.storyCompanion">
                                <option
                                    v-for="spiritForm in character.class.spiritForms"
                                    :key="spiritForm.name"
                                    :value="spiritForm"
                                >
                                    {{ spiritForm.name }}
                                </option>
                            </select>
                            <span v-else>
                                {{ character.spiritForm.name }}
                            </span>
                        </th>
                    </tr>

                </thead>
            </table>
        </div>
        <div class="tables-block-column attributes-column">
            <table class="attributes-table">
                <caption>Attributes{{ attributePointsCounter }}</caption>
                <tbody>
                    <tr v-for="attributeKey in Object.keys(character.attributes)" :key="attributeKey">
                        <td class="attribute-name-cell">
                            <a :href="attributes[attributeKey].link" target="_blank">{{ attributes[attributeKey].name }}</a>
                        </td>
                        <td class="decrease-cell" v-if="!character.storyCompanion">
                            <button
                                class="decrease-button"
                                @click="character.attributes[attributeKey].decrease()"
                            >−</button>
                        </td>
                        <td class="base-attribute-cell">
                            {{ character.attributes[attributeKey].base }}
                        </td>
                        <td class="bonus-attribute-cell">
                            ({{ character.attributes[attributeKey].bonus >= 0 ? '+' : '−'}} {{ Math.abs(character.attributes[attributeKey].bonus) }})
                        </td>
                        <td class="modified-attribute-cell">
                            = {{ character.attributes[attributeKey].modified }}
                        </td>
                        <td class="increase-cell">
                            <button
                                class="increase-button"
                                @click="character.attributes[attributeKey].increase()"
                                v-if="!character.storyCompanion"
                            >+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        <!-- <table class="skills-table">
            <caption>Skills ({{ level.skillPoints }})</caption>
            <tr v-for="skillName in Object.keys(skills)" :key="skillName">
                <td class="attribute-name-cell">{{ skillName }}</td>
                <td class="decrease-cell">
                    <button
                        class="decrease-button"
                        @click="level.decreaseSkill(skillName)"
                    >−</button>
                </td>
                <td class="base-attribute-cell">
                    {{ level.skills[skillName] }}
                </td>
                <td class="bonus-attribute-cell">

                </td>
                <td class="modified-attribute-cell">

                </td>
                <td class="increase-cell">
                    <button
                        class="increase-button"
                        @click="level.increaseSkill(skillName)"
                    >+</button>
                </td>
            </tr>
        </table>
        <table class="stats-table">
            <caption>Stats on LVL {{ level.number }}</caption>
            <thead>
                <tr>
                    <th colspan="2">General</th>
                    <th colspan="2">Defenses</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Endurance</td>
                    <td>{{ level.endurance }}</td>
                    <td>Deflection</td>
                    <td>{{ level.deflection }}</td>
                </tr>
                <tr>
                    <td>Health</td>
                    <td>{{ level.health }}</td>
                    <td>Fortitude</td>
                    <td>{{ level.fortitude }}</td>
                </tr>
                <tr>
                    <td>Accuracy</td>
                    <td>{{ level.accuracy }}</td>
                    <td>Reflex</td>
                    <td>{{ level.reflex }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Will</td>
                    <td>{{ level.will }}</td>
                </tr>
            </tbody>
        </table> -->
        </div>
    </div>
</template>
