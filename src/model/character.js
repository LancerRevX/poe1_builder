import {
    attributesData,
    ATTRIBUTE_DEFAULT,
    ATTRIBUTE_MIN,
    ATTRIBUTE_MAX
} from './attributes.js';

export default class Character {
    constructor() {
        let character = this;
        character.name = 'Watcher';

        character.attributes = {};
        character.MAX_ATTRIBUTES_NUMBER = 76;
        for (let attribute in attributesData) {
            character.attributes['_' + attribute] = ATTRIBUTE_DEFAULT;
            Object.defineProperty(character.attributes, attribute, {
                get: function() {
                    return this['_' + attribute]/* + this.race.attributeBonuses[attribute] + this.culture.attributeBonuses[attribute]*/;
                },
                set: function(newValue) {
                    if (newValue >= ATTRIBUTE_MIN && newValue <= ATTRIBUTE_MAX) {
                        this['_' + attribute] = newValue;
                    }
                }
            });
        }

        class Level {
            constructor(levelNumber) {
                this.number = levelNumber;
            }
        }
        character.MAX_LEVEL = 16;
        character.levels = Array(character.MAX_LEVEL);
        for (let i = 0; i < character.levels.length; i++) {
            character.levels[i] = new Level(i + 1);
        }
        console.log(character);

        this.race = {};
        this.class = {};
        this.culture = {};
        this.background = {};
    }

    attributePoints() {
        let attributesSum = 0;
        for (let attribute in attributesData) {
            attributesSum += this.attributes['_' + attribute];
        }
        return this.MAX_ATTRIBUTES_NUMBER - attributesSum;
    }
}
