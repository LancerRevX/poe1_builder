export default class Attributes {
    constructor(character) {
        let attributesNames = [
            'Might', 'Constitution', 'Dexterity', 'Perception', 'Intellect', 'Resolve'
        ];
        for (let attributeName of attributesNames) {
            this[attributeName] = {
                value: character.ATTRIBUTE_DEFAULT,
                toString() {
                    let result = this.value;
                    let raceBonus = character.race.attributeBonuses[attributeName];
                    result += raceBonus ? raceBonus : 0;
                    let cultureBonus = character.culture.attributeBonuses[attributeName];
                    result += cultureBonus ? cultureBonus : 0;
                    return result;
                },
                increase() {
                    if (this.value < character.MAX_ATTRIBUTE && character.attributePoints() > 0) {
                        this.value += 1;
                    }
                },
                decrease() {
                    if (this.value > character.MIN_ATTRIBUTE) {
                        this.value -= 1;
                    }
                }
            };
        }
    }

    init(attributesArray) {
        let i = 0;
        for (let attributeName in this) {
            this[attributeName].value = attributesArray[i];
            i += 1;
        }
    }

    sum() {
        let sum = 0;
        for (let attributeName in this) {
            sum += this[attributeName].value;
        }
        return sum;
    }
}
