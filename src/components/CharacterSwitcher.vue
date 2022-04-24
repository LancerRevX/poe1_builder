<template>
    <div class="character-switcher">

        <div class="party-buttons-block">
            <label>
                Full party
                <input type="radio" name="party-on" v-on:click="party = true" v-bind:checked="party">
            </label>
            <label>
                Single character
                <input type="radio" name="party-on" v-on:click="party = false" v-bind:checked="!party">
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
                    <option :value="undefined">Empty</option>
                </select>
                <button
                    v-if="selectedCompanions[i] != null"
                    @click="selectCharacter(selectedCompanions[i])"
                >
                    🖉
                </button>
            </div>
        </div>

        <div class="saveload-buttons-block">
            <button class="randomize-button" @click="randomize()">Randomize</button>
            <button class="get-link-button" v-on:click="getLink()">Get link</button>
        </div>
    </div>
</template>

<script>
    import Character from '../model/character.js';
    import * as companions from '../model/companions.js';
    import LZString from 'lz-string';

    export default {
        props: {
            selected: Object,
            characters: Array
        },
        data: () => ({
            party: false,
            mainCharacter: new Character('Watcher'),
            storyCompanions: [],
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
            for (let companionClass of Object.values(companions)) {
                this.storyCompanions.push(new companionClass);
            }

            this.selectedCompanions.push(this.storyCompanions[0]);
            this.selectedCompanions.push(this.storyCompanions[1]);
            this.selectedCompanions.push(this.storyCompanions[2]);
            this.selectedCompanions.push(this.storyCompanions[3]);
            this.selectedCompanions.push(this.storyCompanions[4]);
            this.oldSelectedCompanions = this.selectedCompanions.slice();

            this.selectCharacter(this.mainCharacter);

            this.loadCharacterFromLink();
        },
        computed: {
        },
        methods: {
            selectCharacter: function(character) {
                this.selected.character = character;
                this.selected.level = character.level(1);
            },
            randomize: function() {
                this.selected.character.randomize();
            },
            characterToByteArray(character) {
                let byteArray = [];
                if (character.storyCompanion) {
                    byteArray.push(this.storyCompanions.indexOf(character) + 1);
                } else {
                    byteArray.push(0);
                }
                byteArray = byteArray.concat(character.toByteArray());
                return byteArray;
            },
            loadCharacterFromLink() {
                let urlParams = new URLSearchParams(document.location.search);
                let linkBytes = urlParams.get('bytes');
                if (!linkBytes) {
                    return;
                }

                let compressedBytes = '';
                for (let i = 0; i < linkBytes.length; i += 4) {
                    compressedBytes += String.fromCharCode(parseInt(linkBytes.slice(i, i+4), 16));
                }
                let byteArray = [];
                for (let byte of LZString.decompress(compressedBytes)) {
                    byteArray.push(byte.charCodeAt(0));
                }
                console.log(byteArray);

                this.selected.comment = '';
                for (let i = 0; i < this.MAX_COMMENT_LENGTH; i++) {
                    let charCode = byteArray.shift();
                    this.selected.comment += charCode > 0 ? String.fromCharCode(charCode) : '';
                }

                this.party = byteArray.shift();
                if (this.party) {
                    byteArray.shift();
                    this.mainCharacter.feedByteArray(byteArray);

                    this.selectedCompanions = [];
                    let customCompanionIndex = 0;
                    while (byteArray.length) {
                        let storyCompanionIndex = byteArray.shift();
                        let companion = null;
                        if (storyCompanionIndex) {
                            companion = this.storyCompanions[storyCompanionIndex - 1];
                        } else {
                            companion = this.customCompanions[customCompanionIndex];
                            customCompanionIndex += 1;
                        }
                        companion.feedByteArray(byteArray);
                        this.selectedCompanions.push(companion);
                    }
                } else {
                    let storyCompanionIndex = byteArray.shift();
                    if (storyCompanionIndex) {
                        this.selectCharacter(this.storyCompanions[storyCompanionIndex - 1]);
                    } else {
                        this.selectCharacter(this.mainCharacter);
                    }
                    this.selected.character.feedByteArray(byteArray);
                }
            },
            getLink: function() {
                let byteArray = [];

                let commentArray = new Uint8Array(this.MAX_COMMENT_LENGTH);
                for (let i = 0; i < this.MAX_COMMENT_LENGTH; i++) {
                    commentArray[i] = i < this.selected.comment.length ? this.selected.comment.charCodeAt(i) : 0;
                }
                byteArray = byteArray.concat(Array.from(commentArray));

                byteArray.push(this.party ? 1 : 0);

                if (this.party) {
                    byteArray = byteArray.concat(this.characterToByteArray(this.mainCharacter));
                    for (let companion of this.selectedCompanions) {
                        if (companion !== undefined) {
                            byteArray = byteArray.concat(this.characterToByteArray(companion));
                        }
                    }
                } else {
                    byteArray = byteArray.concat(this.characterToByteArray(this.selected.character));
                }
                console.log(byteArray);
                console.log('Byte array length: ' + byteArray.length);

                let byteArrayStr = '';
                for (let byte of byteArray) {
                    byteArrayStr += String.fromCharCode(byte);
                }

                let compressed = LZString.compress(byteArrayStr);
                console.log('Byte array compressed length: ' + compressed.length);

                let compressedLetters = '';
                for (let i = 0; i < compressed.length; i++) {
                    let hex = compressed.charCodeAt(i).toString(16);
                    if (hex.length < 4) {
                        hex = '0'.repeat(4 - hex.length) + hex;
                    }
                    compressedLetters += hex;
                }
                console.log(compressedLetters);

                let newCompressed = '';
                for (let i = 0; i < compressedLetters.length; i += 4) {
                    newCompressed += String.fromCharCode(parseInt(compressedLetters.slice(i, i+4), 16));
                }
                console.log('==', compressed == newCompressed);

                let url = new URL(window.location.href.split('?')[0]);
                url.searchParams.append('bytes', compressedLetters);
                console.log(url.href);
                console.log('Link length: ' + url.href.length);

                navigator.clipboard.writeText(url.href);
                // alert('Your link is copied to clipboard');
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
                    if (i != newCompanionIndex &&
                        this.selectedCompanions[i] == this.selectedCompanions[newCompanionIndex] &&
                        this.selectedCompanions[i] != null) {
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
        grid-area: switcher;
        height: 50px;

        padding: 4px 8px;
        border-style: solid;
        border-width: 1px 0px;
        display: flex;
        flex-direction: row;
        gap: 8px;
        overflow-x: scroll;
    }

    div.characters-cards {
        display: flex;
        flex-direction: row;
        gap: 4px;
    }

    div.character-card {
        border-radius: 12px;
        padding: 0px 4px;
        display: grid;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0px 4px;
        border: 2px outset black;
        min-width: 150px;
        padding-left: 8px;
    }

    div.character-card.story-companion > select {
        grid-row: span 2;
    }

    div.character-card.selected {
        border: 2px outset red;
    }

    div.character-card > input {
        min-width: 0;
        grid-column: 1;
        align-self: flex-end;
    }

    .character-card > span {
        align-self: flex-start;
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
        justify-content: center;
        flex-shrink: 0;
    }

    .saveload-buttons-block {
        margin-left: auto;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
    }

    .saveload-buttons-block button {
        font-weight: bold;
        border-radius: 32px;
        border-width: 1px;
        border-style: solid;
        cursor: pointer;
        text-transform: uppercase;
        width: 8em;
        height: 2em;
    }

    .randomize-button {
        background-color: orange;
        color: white;
        border-color: darkorange;
    }

    .randomize-button:hover {
        background-color: darkorange;
    }

    .get-link-button {
        background-color: blue;
        color: white;
        border-color: darkblue;
    }

    .get-link-button:hover {
        background-color: darkblue;
    }
</style>
