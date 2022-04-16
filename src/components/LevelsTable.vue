<template>
    <div class="levels-outer-block">
        <div class="levels-header-block">
            <h2>Levels</h2>
            <button v-on:click="selected.level = selected.level.previous()">←</button>
            <button v-on:click="selected.level = selected.level.next()">→</button>
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
                                <li v-for="ability in level.selectedAbilities" :key="ability.name">
                                    Select {{ level.character.abilityTerm() }} "{{ ability.name }}"
                                </li>
                                <li v-for="phrase in level.selectedPhrases" :key="phrase.name">
                                    Select phrase "{{ phrase.name }}"
                                </li>
                                <li v-for="talent in level.selectedTalents" :key="talent.name">
                                    Select talent "{{ talent.name }}"
                                </li>
                                <li v-for="advancedSkill in level.advancedSkills()" :key="advancedSkill.name">
                                    Add {{ advancedSkill.value }} point{{ advancedSkill.value > 1 ? 's' : '' }} to skill "{{ advancedSkill.name }}"
                                </li>
                                <li v-if="level.weaponChanged()">
                                    Take weapon "{{ level.weapon.name }}"
                                </li>
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
    export default {
        name: 'levels-table',
        props: {
            selected: Object
        },
        computed: {
            character: function() {
                return this.selected.character;
            }
        }
    };
</script>

<style>
    div.levels-outer-block {
        min-height: 0;

        grid-row: span 2;

        display: flex;
        flex-direction: column;
    }

    div.levels-header-block {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
    }

    div.levels-header-block > button {
        height: 24px;
        width: 24px;
    }

    div.levels-table-block {
        overflow: scroll;
        flex-grow: 1;
    }

    table.levels-table {
        border-collapse: collapse;
        width: 100%;
    }

    tr.level {
        border: 1px solid black;
        width: 100%;
        cursor: pointer;
    }

    tr.level.selected {
        background-color: red;
        color: white;
    }
</style>

<i18n>
{
    "en-US": {
        "levels": "Levels"
    },
    "ru-RU": {
        "levels": "Уровни"
    }
}
</i18n>
