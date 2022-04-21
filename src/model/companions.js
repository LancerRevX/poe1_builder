import Character from './character.js';

import fighter from './classes/fighter.js';
import wizard from './classes/wizard.js';
import priest from './classes/priest.js';
import chanter from './classes/chanter.js';
import ranger from './classes/ranger.js';
import cipher from './classes/cipher.js';
import druid from './classes/druid.js';
import paladin from './classes/paladin.js';

import races from './races.js';
import cultures from './cultures.js';
import backgrounds from './backgrounds.js';

export class StoryCompanion extends Character {
    constructor(name) {
        super(name);
        this.storyCompanion = true;
    }
}

export class Aloth extends StoryCompanion {
    constructor() {
        super('Aloth');

        // this.attributes.init([12, 10, 14, 11, 16, 11]);
        this.attributes.might.base = 12;
        this.attributes.const.base = 10;
        this.attributes.dexterity.base = 14;
        this.attributes.perception.base = 11;
        this.attributes.intellect.base = 16;
        this.attributes.resolve.base = 12;

        this.class = wizard;
        this.race = races.find(race => race.name == 'Wood Elf');
        this.culture = cultures.find(culture => culture.name == 'Aedyr');
        this.background = backgrounds.find(background => background.name == 'Gentry');

        this.level(1).selectedAbilities = [
            wizard.abilities.find(ability => ability.name == 'Arkemyr\'s Dazzling Lights'),
            wizard.abilities.find(ability => ability.name == 'Fan of Flames'),
            wizard.abilities.find(ability => ability.name == 'Minoletta\'s Minor Missiles'),
            wizard.abilities.find(ability => ability.name == 'Wizard\'s Double'),
        ];
    }
}

export class Eder extends StoryCompanion {
    constructor() {
        super('Eder');

        // this.attributes.init([15, 16, 11, 12, 10, 11]);
        this.attributes.might.base = 15;
        this.attributes.const.base = 16;
        this.attributes.dexterity.base = 11;
        this.attributes.perception.base = 12;
        this.attributes.intellect.base = 10;
        this.attributes.resolve.base = 11;

        this.class = fighter;
        this.race = races.find(race => race.name == 'Human');
        this.culture = cultures.find(culture => culture.name == 'Dyrwood');
        this.background = backgrounds.find(background => background.name == 'Farmer');

        this.level(1).selectedAbilities = [
            fighter.abilities.find(ability => ability.name == 'Knock Down')
        ];
    }
}

export class KanaRua extends StoryCompanion {
    constructor() {
        super('Kana Rua');

        // this.attributes.init([14, 11, 9, 14, 17, 10]);
        this.attributes.might.base = 14;
        this.attributes.const.base = 11;
        this.attributes.dexterity.base = 9;
        this.attributes.perception.base = 14;
        this.attributes.intellect.base = 17;
        this.attributes.resolve.base = 10;

        this.class = chanter;
        this.race = races.find(race => race.name == 'Island Aumaua');
        this.culture = cultures.find(culture => culture.name == 'Rauatai');
        this.background = backgrounds.find(background => background.name == 'Scholar');

        this.level(1).selectedAbilities = [
            chanter.abilities.find(ability => ability.name == 'If their Bones Still Slept Under that Hill, None Can Say')
        ];
        this.level(1).selectedPhrases = [
            chanter.phrases.find(phrase => phrase.name == 'At the Sight of their Comrades, their Hearts Grew Bold'),
            chanter.phrases.find(phrase => phrase.name == 'Blessed Was Wengridh, Quickest of His Tribe')
        ];
    }
}

export class Durance extends StoryCompanion {
    constructor() {
        super('Durance');

        // this.attributes.init([13, 13, 9, 9, 15, 16]);
        this.attributes.might.base = 13;
        this.attributes.const.base = 13;
        this.attributes.dexterity.base = 9;
        this.attributes.perception.base = 9;
        this.attributes.intellect.base = 15;
        this.attributes.resolve.base = 16;

        this.class = priest;
        this.deity = priest.deities.find(deity => deity.name == 'Margran');
        this.race = races.find(race => race.name == 'Human');
        this.culture = cultures.find(culture => culture.name == 'Dyrwood');
        this.background = backgrounds.find(background => background.name == 'Clergy');
    }
}

export class Sagani extends StoryCompanion {
    constructor() {
        super('Sagani');

        this.attributes.might.base = 13;
        this.attributes.const.base = 11;
        this.attributes.dexterity.base = 12;
        this.attributes.perception.base = 16;
        this.attributes.intellect.base = 13;
        this.attributes.resolve.base = 10;

        this.class = ranger;
        this.animalCompanion = ranger.animalCompanions.find(companion => companion.name == 'Itumaak');
        this.race = races.find(race => race.name == 'Boreal Dwarf');
        this.culture = cultures.find(culture => culture.name == 'Naasitaq');
        this.background = backgrounds.find(background => background.name == 'Hunter');

        this.level(1).selectedAbilities = [
            ranger.abilities.find(ability => ability.name == 'Wounding Shot')
        ];
    }
}

export class GrievingMother extends StoryCompanion {
    constructor() {
        super('Grieving Mother');

        this.attributes.might.base = 10;
        this.attributes.const.base = 12;
        this.attributes.dexterity.base = 16;
        this.attributes.perception.base = 12;
        this.attributes.intellect.base = 17;
        this.attributes.resolve.base = 8;

        this.class = cipher;
        this.race = races.find(race => race.name == 'Human');
        this.culture = cultures.find(culture => culture.name == 'Dyrwood');
        this.background = backgrounds.find(background => background.name == 'Midwife');

        this.level(1).selectedAbilities = [
            cipher.abilities.find(ability => ability.name == 'Mind Wave'),
            cipher.abilities.find(ability => ability.name == 'Whisper of Treason'),
        ];
    }
}

export class Hiravias extends StoryCompanion {
    constructor() {
        super('Hiravias');

        this.attributes.might.base = 15;
        this.attributes.const.base = 12;
        this.attributes.dexterity.base = 13;
        this.attributes.perception.base = 11;
        this.attributes.intellect.base = 15;
        this.attributes.resolve.base = 9;

        this.class = druid;
        this.spiritForm = druid.spiritForms.find(spiritForm => spiritForm.name == 'Stelgaer');
        this.race = races.find(race => race.name == 'Hearth Orlan');
        this.culture = cultures.find(culture => culture.name == 'Eir Glanfath');
        this.background = backgrounds.find(background => background.name == 'Drifter');
    }
}

export class Pallegina extends StoryCompanion {
    constructor() {
        super('Pallegina');

        this.attributes.might.base = 12;
        this.attributes.const.base = 13;
        this.attributes.dexterity.base = 11;
        this.attributes.perception.base = 14;
        this.attributes.intellect.base = 12;
        this.attributes.resolve.base = 15;

        this.class = paladin;
        this.order = paladin.orders.find(order => order.name == 'Frermàs mes Canc Suolias');
        this.race = races.find(race => race.name == 'Avian Godlike');
        this.culture = cultures.find(culture => culture.name == 'Vailian Republics');
        this.background = backgrounds.find(background => background.name == 'Soldier');

        this.level(1).selectedAbilities = [
            paladin.abilities.find(ability => ability.name == 'Flames of Devotion')
        ];
    }
}
