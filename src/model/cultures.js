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
            resolve: +1
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
            dexterity: +1
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
            resolve: +1
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
            intellect: +1
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
            const: +1
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
            might: +1
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
            perception: +1
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
            resolve: +1
        },
        [],
        true
    ),
    new Culture(
        'Eir Glanfath',
        {
            const: +1
        },
        [],
        true
    ),
    new Culture(
        'Naasitaq',
        {
            perception: +1
        },
        [],
        true
    ),
    new Culture(
        'Vailian Republics',
        {
            intellect: +1
        },
        [],
        true
    ),
];

export default cultures;
