<template>
    <div class="levels-outer-block">
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

<script>
    import skills from '../model/skills.js';

    export default {
        name: 'levels-block',
        data: () => ({
            skills
        }),
        props: {
            selected: Object
        },
        computed: {
            character: function() {
                return this.selected.character;
            },
            level: function() {
                return this.selected.level;
            }
        },
        methods: {
            goToPreviousLevel() {
                this.selected.level = this.level.previous || this.level;
            },
            goToNextLevel() {
                this.selected.level = this.level.next || this.level;
            }
        }
    };
</script>

<style>
    .levels-outer-block {
        /* min-height: 0; */

        grid-area: levels;

        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .levels-table-block {
        flex-grow: 1;
        grid-column: span 2;

        overflow-y: scroll;
    }

    .levels-table {
        border-collapse: collapse;
        width: 100%;
    }

    .level {
        border: 1px solid black;
        width: 100%;
        cursor: pointer;
    }

    .level.selected {
        background-color: red;
        color: white;
    }



    .levels-header-block {
        grid-column: span 2;
        height: 32px;
        margin: 0;

        display: flex;
        flex-direction: row;
        justify-content: center;
        font-size: 24px;
    }

    .levels-title-block {
        border-width: 1px 0;
        border-style: solid;
        border-color: black;
        width: 4em;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .levels-title {
        vertical-align: middle;
    }

    .levels-title-counter {
        font-weight: bold;
    }

    .previous-button, .next-button {
        margin: 0;
        height: 32px;
        border: 1px solid darkgreen;
        cursor: pointer;
        font-size: inherit;
        padding: 0 4px 4px 4px;
        background-color: green;
        color: white;
    }

    .previous-button:hover,
    .next-button:hover {
        background-color: darkgreen;
    }

    .previous-button:disabled,
    .next-button:disabled {
        background-color: darkgrey;
        border-color: grey;
        cursor: auto;
    }

    .previous-button {
        border-radius: 16px 0 0 16px;
    }

    .next-button {
        border-radius: 0 16px 16px 0;
    }


    .skills-stats-block {
        display: flex;
        flex-direction: row;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
    }

    .skills-table, .stats-table {
        border: 1px solid black;
    }

    .skills-table caption, .stats-table caption {
        font-weight: bold;
    }

    .skills-table {
    }

    .stats-table {
        border-collapse: collapse;
        table-layout: fixed;
    }

    .stats-table th {
        border: 1px solid black;
    }

    .stats-table td:nth-child(odd) {
        text-align: right;
    }

    .stats-table td:nth-child(even) {
        border-right: 1px solid black;
        width: 36px;
        text-align: center;
    }


    @media (max-width: 600px) {
        .levels-outer-block {
            grid-template: auto auto / 1fr;
        }

        .levels-table-block {
            display: none;
        }
    }
</style>
