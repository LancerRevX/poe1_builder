import attributes from './attributes.js';
import classes from './classes.js';
import races from './races.js';
import cultures from './cultures.js';
import backgrounds from './backgrounds.js';

import Level from './level.js';

export default class Character {
    constructor(name) {
        this.name = name;
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
                base: 10,
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
            this.background = this.culture.backgrounds[0];
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
        let json = {
            name: this.name,
            race: this.race.name,
            culture: this.culture.name,
            background: this.background.name,
            class: this.class.name,
            spiritForm: this.spiritForm ? this.spiritForm.name : null,
            animalCompanion: this.animalCompanion ? this.animalCompanion.name : null,
            order: this.order ? this.order.name : null,
            deity: this.deity ? this.deity.name : null,
            levels: this.levels
        };
        let attributes = {};
        for (let attributeName in this.attributes) {
            attributes[attributeName] = this.attributes[attributeName].value;
        }
        json.attributes = attributes;
        return json;
    }
}
