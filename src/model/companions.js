import Character from './character.js';
import fighter from './classes/fighter.js';
import wizard from './classes/wizard.js';
import priest from './classes/priest.js';
import chanter from './classes/chanter.js';
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

        this.class = wizard;
        this.race = races.find(race => race.name == 'Wood Elf');
        this.culture = cultures.find(culture => culture.name == 'Aedyr');
        this.background = backgrounds.find(background => background.name == 'Gentry');

        // this.level(1).selectAbility('')
    }
}

export class Eder extends StoryCompanion {
    constructor() {
        super('Eder');

        // this.attributes.init([15, 16, 11, 12, 10, 11]);
        this.attributes.might = 15;
        this.attributes.const = 16;
        this.attributes.dexterity = 11;
        this.attributes.perception = 12;
        this.attributes.intellect = 10;
        this.attributes.resolve = 11;

        this.class = fighter;
        this.race = races.find(race => race.name == 'Human');
        this.culture = cultures.find(culture => culture.name == 'Dyrwood');
        this.background = backgrounds.find(background => background.name == 'Farmer');

        this.level(1).selectAbility(fighter.abilities.find(ability => ability.name == 'Knock Down'));
    }
}

export class KanaRua extends StoryCompanion {
    constructor() {
        super('Kana Rua');

        // this.attributes.init([14, 11, 9, 14, 17, 10]);

        this.class = chanter;
        this.race = races.find(race => race.name == 'Island Aumaua');
        this.culture = cultures.find(culture => culture.name == 'Rauatai');
        this.background = backgrounds.find(background => background.name == 'Scholar');
    }
}

export class Durance extends StoryCompanion {
    constructor() {
        super('Durance');

        // this.attributes.init([13, 13, 9, 9, 15, 16]);

        this.class = priest;
        this.deity = priest.deities.find(deity => deity.name == 'Margran');
        this.race = races.find(race => race.name == 'Human');
        this.culture = cultures.find(culture => culture.name == 'Dyrwood');
        this.background = backgrounds.find(background => background.name == 'Clergy');
    }
}
