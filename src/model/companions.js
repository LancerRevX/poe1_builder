import Character from './character.js';

export class Aloth extends Character {
    constructor() {
        super('Aloth');
        this.storyCompanion = true;

        this.attributes._Strength = 12;
        this.attributes._Constitution = 10;
        this.attributes._Dexterity = 14;
        this.attributes._Perception = 11;
        this.attributes._Intelligence = 16;
        this.attributes._Resolve = 11;

        this._class = 'Wizard';
        this._culture = 'Aedyr';
    }
}

export class Eder extends Character {
    constructor() {
        super('Eder');
        this.storyCompanion = true;

        this.attributes._Strength = 15;
        this.attributes._Constitution = 16;
        this.attributes._Dexterity = 11;
        this.attributes._Perception = 12;
        this.attributes._Intelligence = 10;
        this.attributes._Resolve = 11;

        this._class = 'Fighter';
        this._culture = 'Dyrwood';
    }
}
