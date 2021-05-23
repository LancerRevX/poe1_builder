<template>
    <div class="abilities-block">
        <div class="abilities-table-outer-block" v-if="showAbilitiesTable">
            <h2>{{ `${abilitiesTitle} (${selected.level.remainingAbilityPoints()})`}}</h2>
            <div class="abilities-table-inner-block">
                <table class="abilities-table">
                    <tr
                        v-for="ability in selected.level.availableAbilities()"
                        v-bind:key="ability.name"
                        v-bind:class="{selected: selected.level.isAbilitySelected(ability)}"
                        v-on:click="selected.level.selectAbility(ability)"
                    >
                        <td><img v-bind:src="[ability.imageLink]" decoding="async" width="32" height="32"></td>
                        <td>{{ $root.$t('abilities.' + selected.level.character.class.name + '.' + ability.name) }}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="abilities-table-outer-block" v-if="showPhrasesTable">
            <h2>{{ $t('phrases') }}</h2>
            <div class="abilities-table-inner-block">
                <table class="abilities-table">
                    <tr
                        v-for="ability in selected.level.availableAbilities()"
                        v-bind:key="ability.name"
                        v-bind:class="{selected: selected.level.isAbilitySelected(ability)}"
                        v-on:click="selected.level.selectAbility(ability)"
                    >
                        <td><img v-bind:src="[ability.imageLink]" decoding="async" width="100" height="100"></td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="abilities-table-outer-block" v-if="showTalentsTable">
            <h2>{{ $t('talents') }}</h2>
            <div class="abilities-table-inner-block">
                <table class="abilities-table">
                    <tr
                        v-for="ability in selected.level.availableAbilities()"
                        v-bind:key="ability.name"
                        v-bind:class="{selected: selected.level.isAbilitySelected(ability)}"
                        v-on:click="selected.level.selectAbility(ability)"
                    >
                        <td><img v-bind:src="[ability.imageLink]" decoding="async" width="100" height="100"></td>
                    </tr>
                </table>
            </div>
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
                if (['druid', 'priest', 'wizard'].includes(this.selected.level.character.class.name)) {
                    return this.$t('spells');
                } else if (this.selected.level.character.class.name == 'chanter') {
                    return this.$t('invocations');
                } else {
                    return this.$t('abilities');
                }
            },
            abilitiesToSelect: function() {
                return this.selected.level.abilitiesToSelect();
            },
            showAbilitiesTable: function() {
                return this.abilitiesToSelect.includes('abilities');
            },
            showPhrasesTable: function() {
                return this.abilitiesToSelect.includes('phrases');
            },
            showTalentsTable: function() {
                return this.abilitiesToSelect.includes('talents');
            }
        }
    };
</script>

<style>
    div.abilities-block {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    div.abilities-table-outer-block {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: 50%;
    }

    div.abilities-table-inner-block {
        flex-grow: 1;
        overflow: scroll;
    }

    table.abilities-table {
        border-collapse: collapse;
        width: 100%;
    }

    table.abilities-table > tr {
        cursor: pointer;
        border: 1px solid black;
    }

    table.abilities-table > tr.selected {
        background-color: red;
        color: white;
    }
</style>

<i18n>
{
    "en-US": {
        "abilities": "Abilities",
        "spells": "Spells",
        "invocations": "Invocations",
        "phrases": "Phrases",
        "talents": "Talents"
    },
    "ru-RU": {
        "abilities": "Способности",
        "spells": "Заклинания",
        "invocations": "Наговоры",
        "phrases": "Фразы",
        "talents": "Таланты"
    }
}
</i18n>
