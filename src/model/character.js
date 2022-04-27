import attributes from './attributes.js';
import classes from './classes.js';
import races from './races.js';
import cultures from './cultures.js';
import backgrounds from './backgrounds.js';

import Level from './level.js';

import pickRandom from 'pick-random';

const MAX_NAME_LENGTH = 32;
const MAX_COMMENT_LENGTH = 256;

export default class Character {
    constructor(name) {
        this.DEFAULT_NAME = 'Watcher';
        this.storyCompanion = false;

        // this.comment = '';

        this.name = name ? name : this.DEFAULT_NAME;
        this.race = races[0];
        this._culture = cultures[0];
        this.background = backgrounds[0];
        this._class = classes[0];
        this.spiritForm = null;
        this.animalCompanion = null;
        this._order = null;
        this._deity = null;

        this.MAX_LEVEL = 16;
        this.SKILL_POINTS_PER_LEVEL = 6;
        this.TALENT_POINTS_PER_LEVEL = 1;

        this.MIGHT_DAMAGE_MULTIPLIER = 0.03;
        this.CONST_HEALTH_MULTIPLIER = 0.05;
        this.STARTING_DEFENSE = 20;
        this.DEFENSE_PER_LEVEL = 3;
        this.DEFENSE_PER_ATTRIBUTE = 2;
        this.ACCURACY_PER_LEVEL = 3;

        this.ATTRIBUTE_DEFAULT = 10;
        this.MAX_ATTRIBUTE = 18;
        this.MIN_ATTRIBUTE = 3;
        this.MAX_ATTRIBUTES_SUM = 76;

        this.attributes = {};
        for (let attributeKey in attributes) {
            this.attributes[attributeKey] = {
                base: this.ATTRIBUTE_DEFAULT,
                increase: () => {
                    if (this.attributes[attributeKey].base < this.MAX_ATTRIBUTE && this.attributePoints() > 0) {
                        this.attributes[attributeKey].base += 1;
                    }
                },
                decrease: () => {
                    if (this.attributes[attributeKey].base > this.MIN_ATTRIBUTE) {
                        this.attributes[attributeKey].base -= 1;
                    }
                }
            };
            Object.defineProperty(this.attributes[attributeKey], 'bonus', {
                get: () => {
                    let result = 0;
                    let raceBonus = this.race.attributeBonuses[attributeKey];
                    result += raceBonus ? raceBonus : 0;
                    let cultureBonus = this.culture.attributeBonuses[attributeKey];
                    result += cultureBonus ? cultureBonus : 0;
                    return result;
                }
            });
            Object.defineProperty(this.attributes[attributeKey], 'modified', {
                get: () => {
                    return this.attributes[attributeKey].base + this.attributes[attributeKey].bonus;
                }
            });
        }

        this.levels = Array(this.MAX_LEVEL);
        for (let i = 0; i < this.levels.length; i++) {
            this.levels[i] = new Level(this, i + 1);
        }
    }

    reset() {
        this.race = races[0];
        this.culture = cultures[0];
        this.class = classes[0];

        for (let attributeKey in this.attributes) {
            this.attributes[attributeKey].base = this.ATTRIBUTE_DEFAULT;
        }

        for (let i = 0; i < this.levels.length; i++) {
            // this.levels[i] = new Level(this, i + 1);
        }
    }

    attributePoints() {
        let attributesSum = 0;
        for (let attributeKey in this.attributes) {
            attributesSum += this.attributes[attributeKey].base;
        }
        return this.MAX_ATTRIBUTES_SUM - attributesSum;
    }

    level(level) {
        if (level >= 1 && level <= this.MAX_LEVEL) {
            return this.levels[level - 1];
        }
    }

    get class() {
        return this._class;
    }

    set class(newClass) {
        for (let level of this.levels) {
            level.selectedAbilities = [];
            level.selectedPhrases = [];
            level.selectedTalents = [];
        }

        if (newClass.name == 'Paladin') {
            this._order = newClass.orders[0];
        } else {
            this._order = null;
        }

        if (newClass.name == 'Priest') {
            this._deity = newClass.deities[0];
        } else {
            this._deity = null;
        }

        if (newClass.name == 'Druid') {
            this.spiritForm = newClass.spiritForms[0];
        } else {
            this.spiritForm = null;
        }

        if (newClass.name == 'Ranger') {
            this.animalCompanion = newClass.animalCompanions[0];
        } else {
            this.animalCompanion = null;
        }

        this._class = newClass;
    }

    get order() {
        return this._order;
    }

    // remove any chosen order-unique talents
    set order(newOrder) {
        for (let level of this.levels) {
            for (let talent of level.selectedTalents) {
                if (talent.order) {
                    level.selectedTalents.splice(level.selectedTalents.indexOf(talent), 1);
                }
            }
        }
        this._order = newOrder;
    }

    get deity() {
        return this._deity;
    }

    // remove any chosen deity-unique talents
    set deity(newDeity) {
        for (let level of this.levels) {
            for (let talent of level.selectedTalents) {
                if (talent.deity) {
                    level.selectedTalents.splice(level.selectedTalents.indexOf(talent), 1);
                }
            }
        }
        this._deity = newDeity;
    }

    get culture() {
        return this._culture;
    }

    set culture(newCulture) {
        if (!newCulture.backgrounds.includes(this.background)) {
            this.background = newCulture.backgrounds[0];
        }
        this._culture = newCulture;
    }

    abilityTerm() {
        if (['Wizard', 'Cipher'].includes(this.class.name)) {
            return 'spell';
        } else if (this.class.name == 'Chanter') {
            return 'invokation';
        } else {
            return 'ability';
        }
    }

    toJSON() {
        let attributes = [];
        for (let attributeName in this.attributes) {
            attributes.push(this.attributes[attributeName].base);
        }
        let json = {};
        if (this.storyCompanion) {
            json = {
                st: 1,
                levels: this.levels
            };
        } else {
            json = {
                na: this.name,
                ra: races.indexOf(this.race),
                cu: cultures.indexOf(this.culture),
                ba: backgrounds.indexOf(this.background),
                cl: classes.indexOf(this.class),
                at: attributes,
                sp: this.spiritForm ? this.class.spiritForms.indexOf(this.spiritForm) : undefined,
                an: this.animalCompanion ? this.class.animalCompanions.indexOf(this.animalCompanion) : undefined,
                or: this.order ? this.class.orders.indexOf(this.order) : undefined,
                de: this.deity ? this.class.deities.indexOf(this.deity) : undefined,
                levels: this.levels
            };
        }
        return json;
    }

    toByteArray() {
        let byteArray = [];

        let nameArray = new Uint8Array(MAX_NAME_LENGTH);
        for (let i = 0; i < MAX_NAME_LENGTH; i++) {
            nameArray[i] = i < this.name.length ? this.name.charCodeAt(i) : 0;
        }
        byteArray = byteArray.concat(Array.from(nameArray));

        byteArray.push(races.indexOf(this.race) + 1);
        byteArray.push(cultures.indexOf(this.culture) + 1);
        byteArray.push(backgrounds.indexOf(this.background) + 1);
        byteArray.push(classes.indexOf(this.class) + 1);

        byteArray.push(
            this.spiritForm ?
            this.class.spiritForms.indexOf(this.spiritForm) + 1 :
            0);
        byteArray.push(
            this.animalCompanion ?
            this.class.animalCompanions.indexOf(this.animalCompanion) + 1 :
            0);
        byteArray.push(this.order ? this.class.orders.indexOf(this.order) + 1 : 0);
        byteArray.push(this.deity ? this.class.deities.indexOf(this.deity) + 1 : 0);

        for (let attributeName in this.attributes) {
            byteArray.push(this.attributes[attributeName].base);
        }

        for (let level of this.levels) {
            byteArray = byteArray.concat(level.toByteArray());
        }

        // let commentArray = new Uint8Array(MAX_COMMENT_LENGTH);
        // for (let i = 0; i < MAX_COMMENT_LENGTH; i++) {
        //     commentArray[i] = i < this.comment.length ? this.comment.charCodeAt(i) : 0;
        // }
        // byteArray = byteArray.concat(Array.from(commentArray));

        return byteArray;
    }

    feedByteArray(byteArray) {
        this.name = '';
        for (let i = 0; i < MAX_NAME_LENGTH; i++) {
            let charCode = byteArray.shift();
            this.name += charCode > 0 ? String.fromCharCode(charCode) : '';
        }

        this.race = races[byteArray.shift() - 1];
        this.culture = cultures[byteArray.shift() - 1];
        this.background = backgrounds[byteArray.shift() - 1];
        this.class = classes[byteArray.shift() - 1];

        let spiritFormIndex = byteArray.shift();
        if (spiritFormIndex) {
            this.spiritForm = this.class.spiritForms[spiritFormIndex - 1];
        }
        let animalCompanionIndex = byteArray.shift();
        if (animalCompanionIndex) {
            this.animalCompanion = this.class.animalCompanions[animalCompanionIndex - 1];
        }
        let orderIndex = byteArray.shift();
        if (orderIndex) {
            this.order = this.class.orders[orderIndex - 1];
        }
        let deityIndex = byteArray.shift();
        if (deityIndex) {
            this.deity = this.class.deities[deityIndex - 1];
        }

        for (let attributeName in this.attributes) {
            this.attributes[attributeName].base = byteArray.shift();
        }

        for (let level of this.levels) {
            level.feedByteArray(byteArray);
        }
    }

    randomize() {
        if (!this.storyCompanion) {
            this.class = pickRandom(classes)[0];
            this.culture = pickRandom(cultures.filter(culture => !culture.companionOnly))[0];
            this.background = pickRandom(this.culture.backgrounds)[0];
            this.race = pickRandom(races.filter(race => !race.companionOnly))[0];
        }

        for (let level of this.levels) {
            level.randomize();
        }

        while (this.attributePoints()) {
            this.attributes[pickRandom(Object.keys(this.attributes))[0]].increase();
        }

        this.comment = '';
        let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
        for (let i = 0; i < MAX_COMMENT_LENGTH; i++) {
            this.comment += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
    }
}
