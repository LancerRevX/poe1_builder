import Character from './character.js';
import fighter from './classes/fighter.js';

export class Aloth extends Character {
    constructor() {
        super('Aloth');
        this.storyCompanion = true;

        this.attributes._Might = 12;
        this.attributes._Constitution = 10;
        this.attributes._Dexterity = 14;
        this.attributes._Perception = 11;
        this.attributes._Intelligence = 16;
        this.attributes._Resolve = 11;

        this._class = 'Wizard';
        this._race = 'Wood Elf';
        this._culture = 'Aedyr';
        this._background = 'Gentry';

        // this.level(1).selectAbility('')
    }
}

export class Eder extends Character {
    constructor() {
        super('Eder');
        this.storyCompanion = true;

        this.attributes._Might = 15;
        this.attributes._Constitution = 16;
        this.attributes._Dexterity = 11;
        this.attributes._Perception = 12;
        this.attributes._Intelligence = 10;
        this.attributes._Resolve = 11;

        this._class = 'Fighter';
        this._race = 'Human';
        this._culture = 'Dyrwood';
        this._background = 'Farmer';

        this.level(1).selectAbility(fighter.abilities.find(ability => ability.name == 'Knock Down'));
    }
}

export class KanaRua extends Character {
    constructor() {
        super('Kana Rua');
        this.storyCompanion = true;

        this.attributes._Might = 14;
        this.attributes._Constitution = 11;
        this.attributes._Dexterity = 9;
        this.attributes._Perception = 14;
        this.attributes._Intelligence = 17;
        this.attributes._Resolve = 10;

        this._class = 'Chanter';
        this._race = 'Island Aumaua';
        this._culture = 'Rauatai';
        this._background = 'Scholar';
    }
}

export class Durance extends Character {
    constructor() {
        super('Durance');
        this.storyCompanion = true;

        this.attributes._Might = 13;
        this.attributes._Constitution = 13;
        this.attributes._Dexterity = 9;
        this.attributes._Perception = 9;
        this.attributes._Intelligence = 15;
        this.attributes._Resolve = 16;

        this._class = 'Priest';
        this._deity = 'Magran';
        this._race = 'Human';
        this._culture = 'Dyrwood';
        this._background = 'Clergy';
    }
}
