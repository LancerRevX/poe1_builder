import damageType from './damage-type.js';
import weaponFocus from './weapon-focus.js';
import weaponType from './weapon-type.js';

let interrupt = {
    weakest: {
        name: 'Weakest',
        value: 0.05
    },
    weak: {
        name: 'Weak',
        value: 0.35
    },
    average: {
        name: 'Average',
        value: 0.5
    },
    strong: {
        name: 'Strong',
        value: 0.75
    },
    stronger: {
        name: 'Stronger',
        value: 1.0
    }
};

let weaponSpeed = {
    fast: {
        name: 'Fast'
    },
    average: {
        name: 'Average'
    },
    slow: {
        name: 'Slow'
    },
    verySlow: {
        name: 'Very Slow'
    },
    extremelySlow: {
        name: 'Extremely Slow'
    },
};

class Weapon {
    constructor(name, type, baseDamage, damageType, range, speed, interrupt, bonus, specialization) {
        this.name = name;
        this.type = type;
        this.baseDamage = baseDamage;
        this.damageType = damageType;
        this.range = range;
        this.speed = speed;
        this.interrupt = interrupt;
        this.bonus = bonus;
        this.specialization = specialization;
    }
}

export default [
    new Weapon(
        'Hunting Bow',
        weaponType.twoHanded,
        [10, 15],
        damageType.pierce,
        12,
        weaponSpeed.fast,
        interrupt.average,
        null,
        weaponFocus.peasant
    ),
    new Weapon(
        'War Bow',
        weaponType.twoHanded,
        [13, 20],
        damageType.pierce,
        12,
        weaponSpeed.average,
        interrupt.average,
        null,
        weaponFocus.adventurer
    ),
    new Weapon(
        'Crossbow',
        weaponType.twoHanded,
        [18, 26],
        damageType.pierce,
        12,
        weaponSpeed.slow,
        interrupt.strong,
        null,
        weaponFocus.knight
    ),
    new Weapon(
        'Arbalest',
        weaponType.twoHanded,
        [22, 32],
        damageType.pierce,
        12,
        weaponSpeed.verySlow,
        interrupt.strong,
        null,
        weaponFocus.soldier
    ),
    new Weapon(
        'Blunderbuss',
        weaponType.twoHanded,
        [6, 9],
        damageType.pierce,
        8,
        weaponSpeed.verySlow,
        interrupt.weakest,
        null,
        weaponFocus.ruffian
    ),
    new Weapon(
        'Arbalest',
        weaponType.twoHanded,
        [22, 30],
        damageType.pierce,
        8,
        weaponSpeed.verySlow,
        interrupt.weak,
        null,
        weaponFocus.ruffian
    ),
    new Weapon(
        'Arbalest',
        weaponType.twoHanded,
        [24, 36],
        damageType.pierce,
        10,
        weaponSpeed.extremelySlow,
        interrupt.weak,
        null,
        weaponFocus.soldier
    ),
];
