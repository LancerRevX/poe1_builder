import Character from './character.js';

export class Aloth extends Character {
    constructor() {
        super('Aloth');
        this.companion = true;

        this.attributes._Strength = 12;
        this.attributes._Constitution = 10;
        this.attributes._Dexterity = 15;
        this.attributes._Perception = 12;
        this.attributes._Intelligence = 16;
        this.attributes._Resolve = 11;

        this._class = 'Wizard';
        this._culture = 'Aedyr';
    }
}
