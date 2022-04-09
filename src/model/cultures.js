import backgrounds from './backgrounds.js';

class Culture {
    constructor(name, attributeBonuses, backgroundsNames, companionOnly=false) {
        this.name = name;
        this.attributeBonuses = attributeBonuses;
        this.backgrounds = backgrounds.filter(background => backgroundsNames.includes(background.name));
        this.companionOnly = companionOnly;
    }

    toJSON() {
        return this.name;
    }
}

let cultures = [
    new Culture(
        'Aedyr',
        {
            'Resolve': +1
        },
        [
            'Aristocrat',
            'Clergy',
            'Colonist',
            'Dissident',
            'Drifter',
            'Hunter',
            'Laborer',
            'Mercenary',
            'Merchant',
            'Slave'
        ]
    ),
    new Culture(
        'Deadfire Archipelago',
        {
            'Dexterity': +1
        },
        [
            'Aristocrat',
            'Drifter',
            'Explorer',
            'Hunter',
            'Laborer',
            'Mercenary',
            'Merchant',
            'Raider',
            'Slave'
        ]
    ),
    new Culture(
        'Ixamitl Plains',
        {
            'Resolve': +1
        },
        [
            'Aristocrat',
            'Dissident',
            'Drifter',
            'Hunter',
            'Laborer',
            'Mercenary',
            'Merchant',
            'Philosopher',
            'Scholar'
        ]
    ),
    new Culture(
        'Old Vailia',
        {
            'Intellect': +1
        },
        [
            'Aristocrat',
            'Artist',
            'Colonist',
            'Dissident',
            'Drifter',
            'Hunter',
            'Laborer',
            'Mercenary',
            'Merchant',
            'Philosopher',
            'Slave'
        ]
    ),
    new Culture(
        'Rauatai',
        {
            'Constitution': +1
        },
        [
            'Aristocrat',
            'Dissident',
            'Drifter',
            'Hunter',
            'Laborer',
            'Mercenary',
            'Merchant',
            'Scholar',
            'Slave'
        ]
    ),
    new Culture(
        'The Living Lands',
        {
            'Might': +1
        },
        [
            'Colonist',
            'Drifter',
            'Explorer',
            'Hunter',
            'Laborer',
            'Mercenary',
            'Merchant',
            'Scientist'
        ]
    ),
    new Culture(
        'The White that Wends',
        {
            'Perception': +1
        },
        [
            'Aristocrat',
            'Drifter',
            'Explorer',
            'Hunter',
            'Laborer',
            'Merchant',
            'Mystic'
        ]
    ),
    new Culture(
        'Dyrwood',
        {
            'Resolve': +1
        },
        [],
        true
    ),
    new Culture(
        'Eir Glanfath',
        {
            'Constitution': +1
        },
        [],
        true
    ),
    new Culture(
        'Naasitaq',
        {
            'Perception': +1
        },
        [],
        true
    ),
    new Culture(
        'The Vailian Republics',
        {
            'Intellect': +1
        },
        [],
        true
    ),
];

export default cultures;
