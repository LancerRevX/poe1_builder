<script src="../scripts/abilities-block.js"></script>
<style src="../styles/abilities-block.css"></style>
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
