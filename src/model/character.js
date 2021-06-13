import attributesData from './attributes.js';
import classesData from './classes.js';

import Level from './level.js';

export default class Character {
    constructor(name) {
        let character = this;

        character.name = name;

        this.race = {};
        this.culture = {};
        this.background = {};

        character.ATTRIBUTE_DEFAULT = 10;
        character.ATTRIBUTE_MIN = 3;
        character.ATTRIBUTE_MAX = 18;

        character.attributes = {};
        character.MAX_ATTRIBUTES_NUMBER = 76;
        for (let attribute in attributesData) {
            character.attributes['_' + attribute] = character.ATTRIBUTE_DEFAULT;
            Object.defineProperty(character.attributes, attribute, {
                get: function() {
                    return this['_' + attribute]/* + this.race.attributeBonuses[attribute] + this.culture.attributeBonuses[attribute]*/;
                },
                set: function(newValue) {
                    if (newValue >= character.ATTRIBUTE_MIN && newValue <= character.ATTRIBUTE_MAX) {
                        this['_' + attribute] = newValue;
                    }
                }
            });
        }

        character.MAX_LEVEL = 16;
        character.SKILL_POINTS_PER_LEVEL = 6;

        character.levels = Array(character.MAX_LEVEL);
        for (let i = 0; i < character.levels.length; i++) {
            character.levels[i] = new Level(this, i + 1);
        }

        character.TALENT_POINTS_PER_LEVEL = 1;


        this.class = classesData[0];
        this.spiritFormName = null;
        this.orderName = null;
        this.deityName = null;
    }

    attributePoints() {
        let attributesSum = 0;
        for (let attribute in attributesData) {
            attributesSum += this.attributes['_' + attribute];
        }
        return this.MAX_ATTRIBUTES_NUMBER - attributesSum;
    }

    level(level) {
        if (level >= 1 && level <= this.MAX_LEVEL) {
            return this.levels[level - 1];
        }
    }

    get class() {
        return classesData.find(classData => classData.name == this._class);
    }

    set class(newClass) {
        for (let level of this.levels) {
            level.selectedAbilities = [];
            level.selectedPhrases = [];
            level.selectedTalents = [];

            // for (let i = 0; i < level.selectedTalents) {

            // }
        }

        if (newClass.name == 'Paladin') {
            this.orderName = newClass.orders[0].name;
        }

        this._class = newClass.name;
    }

    get order() {
        return this.class.orders.find(order => order.name == this.orderName);
    }

    set order(newOrder) {
        for (let level of this.levels) {
            for (let talent of level.selectedTalents) {
                if (talent.order) {
                    level.selectedTalents.splice(level.selectedTalents.indexOf(talent), 1);
                }
            }
        }
        this.orderName = newOrder.name;
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
}
