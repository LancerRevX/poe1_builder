<template>
    <div class="character-switcher">

        <div class="party-buttons-block">
            <label>
                Full party
                <input type="radio" name="party-on" v-on:click="party = true">
            </label>
            <label>
                Single character
                <input type="radio" name="party-on" v-on:click="party = false" checked>
            </label>
        </div>

        <div class="character-card" v-if="!party" :class="{'story-companion': storyCompanions.includes(selected.character)}">
            <input type="text" v-model="selected.character.name" v-if="selected.character == mainCharacter">
            <select v-model="selected.character">
                <option :value="mainCharacter">Custom character</option>
                <option v-for="storyCompanion in storyCompanions" :key="storyCompanion.name" :value="storyCompanion">
                    {{ storyCompanion.name }}
                </option>
            </select>
        </div>

        <div class="characters-cards" v-else-if="party">
            <div class="character-card" :class="{'selected': selected.character == mainCharacter}">
                <span style="grid-row: 2;">Main character</span>
                <input type="text" v-model="mainCharacter.name">
                <button @click="selectCharacter(mainCharacter)">
                    🖉
                </button>
            </div>
            <div
                class="character-card"
                :class="{
                    'story-companion': storyCompanions.includes(selectedCompanions[i]),
                    'selected': selectedCompanions[i] == selected.character
                }"
                v-for="i in [0, 1, 2, 3, 4]"
                :key="i"
            >
                <input
                    type="text"
                    v-if="customCompanions.includes(selectedCompanions[i])"
                    v-model="selectedCompanions[i].name"
                    placeholder="Name"
                >
                <select v-model="selectedCompanions[i]">
                    <option
                        v-for="storyCompanion in storyCompanions"
                        :key="storyCompanion.name"
                        :value="storyCompanion"
                        :selected="selectedCompanions[i] == storyCompanion"
                    >
                        {{ storyCompanion.name }}
                    </option>
                    <option
                        v-for="j in customCompanions.length"
                        :key="j"
                        :value="customCompanions[j - 1]"
                        :selected="selectedCompanions[i] == customCompanions[j - 1]"
                    >
                        Custom adventurer {{ j }}
                    </option>
                    <option :value="null">Empty</option>
                </select>
                <button
                    v-if="selectedCompanions[i] != null"
                    @click="selectCharacter(selectedCompanions[i])"
                >
                    🖉
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Character from '../model/character.js';
    import * as companions from '../model/companions.js';

    export default {
        props: {
            selected: Object,
            characters: Array
        },
        data: () => ({
            party: false,
            mainCharacter: new Character('Watcher'),
            storyCompanions: [
                new companions.Aloth,
                new companions.Eder,
                new Character('Kana Rua'),
                new Character('Durance')
            ],
            customCompanions: [
                new Character('Adventurer 1'),
                new Character('Adventurer 2'),
                new Character('Adventurer 3'),
                new Character('Adventurer 4'),
                new Character('Adventurer 5')
            ],
            selectedCompanions: [],
            oldSelectedCompanions: undefined
        }),
        created: function() {
            this.selectedCompanions.push(this.storyCompanions[0]);
            this.selectedCompanions.push(this.storyCompanions[1]);
            this.selectedCompanions.push(this.storyCompanions[2]);
            this.selectedCompanions.push(this.storyCompanions[3]);
            this.selectedCompanions.push(this.customCompanions[0]);
            this.oldSelectedCompanions = this.selectedCompanions.slice();

            this.selectCharacter(this.mainCharacter);

        },
        computed: {
        },
        methods: {
            selectCharacter: function(character) {
                this.selected.character = character;
                this.selected.level = character.level(1);
            }
        },
        watch: {
            party: function() {
                this.selectCharacter(this.mainCharacter);
            },
            'selected.character': function() {
                this.selected.level = this.selected.character.level(1);
            },
            selectedCompanions: function() {

                let newCompanionIndex;
                for (let i = 0; i < this.selectedCompanions.length; i++) {
                    if (this.selectedCompanions[i] != this.oldSelectedCompanions[i]) {
                        newCompanionIndex = i;
                        break;
                    }
                }

                let duplicationFound;
                let duplicationIndex;
                for (let i = 0; i < this.selectedCompanions.length; i++) {
                    if (this.selectedCompanions[i] == this.selectedCompanions[newCompanionIndex] && i != newCompanionIndex) {
                        duplicationFound = true;
                        duplicationIndex = i;
                        break;
                    }
                }

                if (duplicationFound) {
                    this.selectedCompanions[duplicationIndex] = this.oldSelectedCompanions[newCompanionIndex];
                } else {
                    let editedCompanionIndex = this.oldSelectedCompanions.indexOf(this.selected.character);
                    if (editedCompanionIndex == newCompanionIndex) {
                        this.selectCharacter(this.mainCharacter);
                    }
                }

                // this.selectCharacter(this.selectedCompanions[newCompanionIndex]);

                this.oldSelectedCompanions = this.selectedCompanions.slice();
            },

        }
    };
</script>

<style>
    div.character-switcher {
        grid-column: span 3;

        padding: 4px 8px;
        border-bottom: 1px solid black;
        display: flex;
        flex-direction: row;
        gap: 8px;
    }

    div.characters-cards {
        display: flex;
        flex-direction: row;
    }

    div.character-card {
        border-radius: 16px;
        padding: 0px 4px;
        display: grid;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4px;
        border: 1px solid black;
    }

    div.character-card.story-companion > select {
        grid-row: span 2;
    }

    div.character-card.selected {
        border: 1px solid red;
    }

    div.character-card > input {
        grid-column: 1;
    }

    div.character-card > select {
        grid-column: 1;
    }

    div.character-card > button {
        grid-column: 2;
        grid-row: 1 / span 2;
        border-radius: 100%;
        border: 4px dotted black;
        background-color: white;
        cursor: pointer;
    }

    div.party-buttons-block {
        display: flex;
        flex-direction: column;
    }
</style>
