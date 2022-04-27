<script src="../scripts/levels-block.js"></script>
<style src="../styles/levels-block.css"></style>
<template>
    <div class="levels-outer-block">
        <div class="levels-top-block">
            <div class="levels-header-block">
                <button
                    class="previous-button"
                    @click="goToPreviousLevel()"
                    :disabled="this.selected.level.previous === null"
                >←</button>
                <div class="levels-title-block">
                    <span class="levels-title">Level <span class="levels-title-counter">{{ this.selected.level.number }}</span></span>
                </div>
                <button
                    class="next-button"
                    @click="goToNextLevel()"
                    :disabled="this.selected.level.next === null"
                >→</button>
            </div>

            <div class="skills-stats-block">
                <table class="stats-table">
                    <caption>Stats<!-- on LVL {{ level.number }}--></caption>
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
                </table>
                <table class="skills-table">
                    <caption>Skills ({{ level.skillPoints }})</caption>
                    <tr v-for="skillKey in Object.keys(skills)" :key="skillKey">
                        <td class="attribute-name-cell">
                            <a :href="skills[skillKey].link" target="_blank">{{ skills[skillKey].name }}</a>
                        </td>
                        <td class="decrease-cell">
                            <button
                                class="decrease-button"
                                @click="level.skills[skillKey].decrease()"
                            >−</button>
                        </td>
                        <td class="base-attribute-cell">
                            {{ level.skills[skillKey].base }}
                        </td>
                        <td class="bonus-attribute-cell">
                            ({{ level.skills[skillKey].bonus >= 0 ? '+' : '−'}} {{ Math.abs(level.skills[skillKey].bonus) }})
                        </td>
                        <td class="modified-attribute-cell">
                            = {{ level.skills[skillKey].modified }}
                        </td>
                        <td class="increase-cell">
                            <button
                                class="increase-button"
                                @click="level.skills[skillKey].increase()"
                            >+</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div class="levels-table-block">
            <table class="levels-table">
                <tbody>
                    <tr
                        v-for="level in character.levels"
                        v-bind:key="level.number"
                        class="level"
                        v-bind:class="{selected: selected.level.number == level.number}"
                        v-on:click="selected.level = level"
                    >
                        <td>{{ level.number }}</td>
                        <td>
                            <ul>
                                <div v-if="!character.storyCompanion || level.number > 1">
                                    <li v-for="ability in level.selectedAbilities" :key="ability.name">
                                        Select {{ level.character.abilityTerm() }} "{{ ability.name }}"
                                    </li>
                                </div>
                                <div v-if="!character.storyCompanion || level.number > 1">
                                    <li v-for="phrase in level.selectedPhrases" :key="phrase.name">
                                        Select phrase "{{ phrase.name }}"
                                    </li>
                                </div>
                                <li v-for="talent in level.selectedTalents" :key="talent.name">
                                    Select talent "{{ talent.name }}"
                                </li>
                                <li v-for="advancedSkill in Object.entries(level.advancedSkills())" :key="advancedSkill[0]">
                                    Add {{ advancedSkill[1] }} point{{ advancedSkill[1] > 1 ? 's' : '' }} to skill "{{ skills[advancedSkill[0]].name }}"
                                </li>
                                <!-- <li v-if="level.weaponChanged()">
                                    Take weapon "{{ level.weapon.name }}"
                                </li> -->
                                <li v-if="level.comment">
                                    + Comment
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
