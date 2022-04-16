// export default class Attributes {
//     constructor(character) {
//         let attributesNames = [
//             'Might', 'Constitution', 'Dexterity', 'Perception', 'Intellect', 'Resolve'
//         ];
//         for (let attributeName of attributesNames) {
//             this[attributeName] = {
//                 value: character.ATTRIBUTE_DEFAULT,
//                 toString() {
//                     let result = this.value;
//                     let raceBonus = character.race.attributeBonuses[attributeName];
//                     result += raceBonus ? raceBonus : 0;
//                     let cultureBonus = character.culture.attributeBonuses[attributeName];
//                     result += cultureBonus ? cultureBonus : 0;
//                     return result;
//                 },
//                 increase() {
//                     if (this.value < character.MAX_ATTRIBUTE && character.attributePoints() > 0) {
//                         this.value += 1;
//                     }
//                 },
//                 decrease() {
//                     if (this.value > character.MIN_ATTRIBUTE) {
//                         this.value -= 1;
//                     }
//                 }
//             };
//         }
//     }

//     init(attributesArray) {
//         let i = 0;
//         for (let attributeName in this) {
//             this[attributeName].value = attributesArray[i];
//             i += 1;
//         }
//     }

//     sum() {
//         let sum = 0;
//         for (let attributeName in this) {
//             sum += this[attributeName].value;
//         }
//         return sum;
//     }
// }

export default {
    might: {
        name: 'Might',
        abbreviation: 'MIG',
        link: 'https://pillarsofeternity.fandom.com/wiki/Might',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/56/Attribute_Might.png',
    },
    const: {
        name: 'Constitution',
        abbreviation: 'CON',
        link: 'https://pillarsofeternity.fandom.com/wiki/Constitution',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/2/21/Attribute_Constitution.png',
    },
    dexterity: {
        name: 'Dexterity',
        abbreviation: 'DEX',
        link: 'https://pillarsofeternity.fandom.com/wiki/Dexterity',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/9f/Attribute_Dexterity.png',
    },
    perception: {
        name: 'Perception',
        abbreviation: 'PER',
        link: 'https://pillarsofeternity.fandom.com/wiki/Perception',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/f/f3/Attribute_Perception.png',
    },
    intellect: {
        name: 'Intellect',
        abbreviation: 'INT',
        link: 'https://pillarsofeternity.fandom.com/wiki/Intellect',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/56/Attribute_Intellect.png',
    },
    resolve: {
        name: 'Resolve',
        abbreviation: 'RES',
        link: 'https://pillarsofeternity.fandom.com/wiki/Resolve',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/b/b7/Attribute_Resolve.png'
    }
};
