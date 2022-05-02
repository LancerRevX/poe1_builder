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
        oldSelectedCompanions: undefined,
        buttonText: 'Edit'
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
                while (this.selectedCompanions.length < 6) {
                    this.selectedCompanions.push(this.storyCompanions.find(companion => !this.selectedCompanions.includes(companion)));
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
                    if (companion !== null) {
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
            if (url.href.length > 2000) {
                alert('Warning: the link is bigger than 2000 characters!');
            } else {
                alert('The link is copied to your clipboard');
            }
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
            let newCompanionIndex = null;
            let newCompanion = null;
            for (let i = 0; i < this.selectedCompanions.length; i++) {
                if (this.selectedCompanions[i] != this.oldSelectedCompanions[i]) {
                    newCompanionIndex = i;
                    newCompanion = this.selectedCompanions[i];
                    break;
                }
            }

            for (let i = 0; i < this.selectedCompanions.length; i++) {
                if (i != newCompanionIndex &&
                    this.selectedCompanions[i] == this.selectedCompanions[newCompanionIndex] &&
                    this.selectedCompanions[i] != null) {
                    this.selectedCompanions[i] = null;
                    break;
                }
            }

            let editedCompanionIndex = this.oldSelectedCompanions.indexOf(this.selected.character);
            if (editedCompanionIndex == newCompanionIndex) {
                this.selectCharacter(this.selectedCompanions[newCompanionIndex]);
            }

            this.oldSelectedCompanions = this.selectedCompanions.slice();
        },

    }
};
