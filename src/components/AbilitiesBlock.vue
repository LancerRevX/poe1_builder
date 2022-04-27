<template>
    <div class="abilities-block">
        <div class="abilities-table-block" v-if="showAbilitiesTable">
            <!-- <h2 class="abilities-block-title">{{ `${abilitiesTitle} (${selected.level.remainingAbilityPoints})` }}</h2> -->
            <!-- <div class="abilities-table-inner-block"> -->
            <table class="abilities-table">
                <caption>{{ `${abilitiesTitle} (${selected.level.remainingAbilityPoints})` }}</caption>
                <tbody>
                    <tr
                        v-for="ability in selected.level.availableAbilities"
                        v-bind:key="ability.name"
                        v-bind:class="{selected: selected.level.isAbilitySelected(ability)}"
                    >
                        <td><img :src="ability.imageLink" decoding="async" width="32" height="32"></td>
                        <td><a :href="ability.link" target="_blank">{{ ability.name }}</a></td>
                        <td v-html="ability.effects"></td>
                        <td v-if="!character.storyCompanion || selected.level.number > 1">
                            <button
                                v-on:click="selected.level.selectAbility(ability)"
                                v-if="selected.level.isAbilitySelected(ability)"
                            >
                                ✗
                            </button>
                            <button
                                v-on:click="selected.level.selectAbility(ability)"
                                v-else-if="selected.level.remainingAbilityPoints"
                            >
                                ✓
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- </div> -->
        </div>
        <div class="abilities-table-block" v-if="showPhrasesTable">
            <!-- <h2 class="abilities-block-title">Phrases ({{ selected.level.remainingPhrasePoints }})</h2> -->
            <table class="abilities-table">
                <caption>Phrases ({{ selected.level.remainingPhrasePoints }})</caption>
                <tbody>
                    <tr
                        v-for="phrase in selected.level.availablePhrases"
                        v-bind:key="phrase.name"
                        v-bind:class="{selected: selected.level.isPhraseSelected(phrase)}"
                    >
                        <td><img v-bind:src="phrase.imageLink" decoding="async" width="32" height="32"></td>
                        <td><a :href="phrase.link" target="_blank">{{ phrase.name }}</a></td>
                        <td v-html="phrase.effects"></td>
                        <td v-if="!character.storyCompanion || selected.level.number > 1">
                            <button
                                v-on:click="selected.level.selectPhrase(phrase)"
                                v-if="selected.level.isPhraseSelected(phrase)"
                            >
                                ✗
                            </button>
                            <button
                                v-on:click="selected.level.selectPhrase(phrase)"
                                v-else-if="selected.level.remainingPhrasePoints"
                            >
                                ✓
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="abilities-table-block" v-if="showTalentsTable">
            <table class="abilities-table">
                <caption>Talents ({{ selected.level.remainingTalentPoints }})</caption>
                <tbody>
                    <tr
                        v-for="talent in selected.level.availableTalents"
                        v-bind:key="talent.name"
                        v-bind:class="{selected: selected.level.isTalentSelected(talent)}"
                    >
                        <td><img :src="talent.imageLink" decoding="async" width="32" height="32"></td>
                        <td><a :href="talent.link" target="_blank">{{ talent.name }}</a></td>
                        <td v-html="talent.description || talent.effects"></td>
                        <td>
                            <button
                                v-on:click="selected.level.selectTalent(talent)"
                                v-if="selected.level.isTalentSelected(talent)"
                            >
                                ✗
                            </button>
                            <button
                                v-on:click="selected.level.selectTalent(talent)"
                                v-else-if="selected.level.remainingTalentPoints"
                            >
                                ✓
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'abilities-block',
        props: {
            selected: Object
        },
        data: () => ({

        }),
        computed: {
            abilitiesTitle: function() {
                if (['Druid', 'Priest', 'Wizard'].includes(this.character.class.name)) {
                    return 'Spells';
                } else if (this.character.class.name == 'Chanter') {
                    return 'Invocations';
                } else {
                    return 'Abilities';
                }
            },
            typesOfAbilitiesToSelect: function() {
                return this.selected.level.typesOfAbilitiesToSelect;
            },
            showAbilitiesTable: function() {
                return this.typesOfAbilitiesToSelect.includes('abilities');
            },
            showPhrasesTable: function() {
                return this.typesOfAbilitiesToSelect.includes('phrases');
            },
            showTalentsTable: function() {
                return this.typesOfAbilitiesToSelect.includes('talents');
            },
            character: function() {
                return this.selected.character;
            }
        }
    };
</script>

<style>
    .abilities-block {
        min-height: 0;

        grid-area: abilities;

        display: flex;
        flex-direction: column;
    }

    .abilities-table-block {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 50%;
        gap: 8px;
    }

    .abilities-table-inner-block {
        flex-grow: 1;
        overflow-y: scroll;

    }

    .abilities-block-title {
        margin: 0;
        text-align: center;
    }

    .abilities-table {
        border-collapse: collapse;
        width: 100%;
    }

    .abilities-table tr {
        border: 1px solid black;
    }

    .abilities-table td {
        vertical-align: top;
    }

    .abilities-table ul {
        margin: 0;
        padding: 0;
    }

    /* table.abilities-table > tr.selected {
        background-color: red;
        color: white;
        border-color: green
    } */

    .abilities-table button {
        width: 24px;
        height: 24px;
        text-align: center;
        border-radius: 100%;
        border: 1px solid white;
        background-color: greenyellow;
    }

    tr.selected button {
        background-color: red;
    }

    table.abilities-table button:hover {
        cursor: pointer;
        border: 1px solid black;
    }

    tr.selected {
        background-color: grey;
        color: white;
    }
    tr.selected :link {
        color: white;
    }
    tr.selected :visited {
        color: white;
    }
    /* table.abilities-table > tr.selected > :nth-child(1),
    table.abilities-table > tr.selected > :nth-child(2) {
        background-color: red;
        color: white;
    }

    table.abilities-table > tr.selected > :nth-child(1),
    table.abilities-table > tr.selected > :nth-child(2) {
        background-color: red;
        color: white;
    } */

    @media (max-width: 1800px) {
        .abilities-block {
            flex-direction: row;
            gap: 8px;
            justify-content: center;
        }
        
        .abilities-table-block {
            height: 300px;
            max-width: 600px;
        }

        .abilities-table {
            margin-bottom: 16px;
        }

        .abilities-table-inner-block {
            /* overflow-y: visible; */
        }
    }

    @media (max-width: 900px) {
        .abilities-block {
            flex-direction: column;
            align-items: center;
        }

        .abilities-table-block {
            height: auto;
        }

        .abilities-table-inner-block {
            overflow-y: visible;
        }
    }
</style>
