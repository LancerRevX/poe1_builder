import skills from './skills.js';

import commonTalents from './common-talents.js';
import weapons from './weapons.js';

import pickRandom from 'pick-random';

const MAX_LEVEL = 16;

const MAX_TALENTS_NUMBER = 1;
const MAX_ABILITIES_NUMBER = 4; // Wizard has 4 spells on 1 level
const MAX_PHRASES_NUMBER = 2; // 2 phrases on 1 chanter level

const SKILL_DEFAULT = 0;
const SKILL_POINTS_PER_LEVEL = 6;

export default class Level {
    constructor(character, levelNumber) {
        this.character = character;
        this.number = levelNumber;
        this.storyCompanion = false;

        this.skillPoints = 0;

        this.skills = {};
        for (let skillName in skills) {
            this.skills[skillName] = {
                base: SKILL_DEFAULT,
                increase: () => {
                    let requiredPoints = this.skills[skillName].base + 1;
                    if (requiredPoints <= this.skillPoints) {
                        this.skillPoints -= requiredPoints;
                        this.skills[skillName].base += 1;
                        for (let i = this.number; i < this.character.MAX_LEVEL; i++) {
                            this.character.levels[i].resetSkills();
                        }
                        if (this.number < MAX_LEVEL) {
                            this.next.resetSkills();
                        }
                        return true;
                    } else {
                        return false;
                    }
                },
                decrease: () => {
                    let previousLevel = this.previous || this;
                    let previousLevelSkills = previousLevel.skills;
                    if (this.skills[skillName].base > previousLevelSkills[skillName].base) {
                        let releasedPoints = this.skills[skillName].base;
                        this.skillPoints += releasedPoints;
                        this.skills[skillName].base -= 1;
                        if (this.number < MAX_LEVEL) {
                            this.next.resetSkills();
                        }
                    }
                }
            };
            Object.defineProperty(this.skills[skillName], 'bonus', {
                get: () => {
                    let result = 0;
                    let classBonus = this.character.class.skillBonuses[skillName] || 0;
                    result += classBonus;
                    let backgroundBonus = this.character.background.skillBonuses[skillName] || 0;
                    result += backgroundBonus;
                    return result;
                }
            });
            Object.defineProperty(this.skills[skillName], 'modified', {
                get: () => {
                    let result = this.skills[skillName].base;
                    let classBonus = this.character.class.skillBonuses[skillName] || 0;
                    result += classBonus;
                    let backgroundBonus = this.character.background.skillBonuses[skillName] || 0;
                    result += backgroundBonus;
                    return result;
                }
            });
        }

        this.skillPoints = (this.number - 1) * SKILL_POINTS_PER_LEVEL;

        this.selectedAbilities = [];
        this.selectedPhrases = [];
        this.selectedTalents = [];
    }

    get advancedSkills() {
        let previousLevel = this.previous || this;
        let result = {};
        for (let skillName in skills) {
            if (this.skills[skillName].base > previousLevel.skills[skillName].base) {
                result[skillName] = this.skills[skillName].base - previousLevel.skills[skillName].base;
            }
        }
        return result;
    }

    resetSkills() {
        if (this.number == 1) {
            this.skillPoints = 0;
            for (let skillName in skills) {
                this.skills[skillName].base = SKILL_DEFAULT;
            }
            this.next.resetSkills();
        } else {
            let previousLevel = this.previous;
            for (let skillName in skills) {
                this.skills[skillName].base = previousLevel.skills[skillName].base;
            }
            this.skillPoints = previousLevel.skillPoints + SKILL_POINTS_PER_LEVEL;
            if (this.number < MAX_LEVEL) {
                this.next.resetSkills();
            }
        }
    }

    get previous() {
        if (this.number == 1) {
            return null;
        } else {
            return this.character.levels[this.number - 2];
        }
    }

    get next() {
        if (this.number == this.character.MAX_LEVEL) {
            return null;
        } else {
            return this.character.levels[this.number];
        }
    }

    get availableAbilities() {
        let availableAbilities = [];
        for (let ability of this.character.class.abilities) {
            if (this.character.class.name == 'Priest' &&
                ability.level == this.number &&
                (!ability.deity || ability.deity == this.character.deity)) {
                availableAbilities.push(ability);
            } else if (this.character.class.name == 'Druid' && ability.level == this.number) {
                availableAbilities.push(ability);
            } else if (ability.level <= this.number) {
                availableAbilities.push(ability);
            }
        }
        for (let i = 0; i < this.character.levels.length; i++) {
            if (i != this.number - 1) {
                availableAbilities = availableAbilities.filter(
                    ability => !this.character.levels[i].selectedAbilities.includes(ability)
                );
            }
        }

        return availableAbilities;
    }

    selectAbility(ability) {
        if (this.character.storyCompanion && this.number == 1) {
            return;
        }

        if (this.selectedAbilities.includes(ability)) {
            this.selectedAbilities.splice(this.selectedAbilities.indexOf(ability), 1);
        } else if (this.remainingAbilityPoints > 0) {
            this.selectedAbilities.push(ability);
        }

        for (let level of this.character.levels) {
            if (level != this) {
                if (level.selectedAbilities.includes(ability)) {
                    level.selectedAbilities.splice(level.selectedAbilities.indexOf(ability), 1);
                }
            }
        }
    }

    isAbilitySelected(ability) {
        return this.selectedAbilities.includes(ability);
    }

    isAbilitySelectedOnPreviousLevels(abilityName) {
        for (let i = 0; i < this.number; i++) {
            if (this.character.levels[i].selectedAbilities.find(ability => ability.name == abilityName)) {
                return true;
            }
        }
        return false;
    }

    get typesOfAbilitiesToSelect() {
        let typesOfAbilitiesToSelect = [];
        if (['Druid', 'Priest'].includes(this.character.class.name) && this.number % 2 == 1 || this.abilityPoints) {
            typesOfAbilitiesToSelect.push('abilities');
        }
        if (this.phrasePoints) {
            typesOfAbilitiesToSelect.push('phrases');
        }
        if (this.talentPoints) {
            typesOfAbilitiesToSelect.push('talents');
        }
        return typesOfAbilitiesToSelect;
    }

    get abilityPoints() {
        if (this.character.class.name == 'Chanter') {
            if (this.number == 1 || this.number % 2 == 0) {
                return 1;
            } else {
                return 0;
            }
        } else if (this.character.class.name == 'Wizard') {
            if (this.number == 1) {
                return 4;
            } else if (this.number % 2 == 0) {
                return 1;
            } else if (this.number % 2 == 1) {
                return 2;
            }
        } else if (this.character.class.name == 'Cipher') {
            if (this.number % 2 == 0) {
                return 1;
            } else if (this.number % 2 == 1) {
                return 2;
            }
        } else if (['Druid', 'Priest'].includes(this.character.class.name)) {
            return 0;
        } else if (this.number % 2 == 1) {
            return 1;
        }
        return 0;
    }

    get remainingAbilityPoints() {
        return this.abilityPoints - this.selectedAbilities.length;
    }

    get availablePhrases() {
        if (this.character.class.name != 'Chanter') {
            return [];
        }

        let availablePhrases = [];
        for (let phrase of this.character.class.phrases) {
            if (phrase.level <= this.number) {
                availablePhrases.push(phrase);
            }
        }
        for (let i = 0; i < this.character.levels.length; i++) {
            if (i != this.number - 1) {
                availablePhrases = availablePhrases.filter(
                    phrase => !this.character.levels[i].selectedPhrases.includes(phrase)
                );
            }
        }
        return availablePhrases;
    }

    selectPhrase(phrase) {
        if (this.character.storyCompanion && this.number == 1) {
            return;
        }

        if (this.selectedPhrases.includes(phrase)) {
            this.selectedPhrases.splice(this.selectedPhrases.indexOf(phrase), 1);
        } else if (this.remainingPhrasePoints > 0) {
            this.selectedPhrases.push(phrase);
        }
    }

    isPhraseSelected(ability) {
        return this.selectedPhrases.includes(ability);
    }

    get phrasePoints() {
        if (this.character.class.name != 'Chanter') {
            return 0;
        }

        if (this.number == 1) {
            return 2;
        } else if (this.number % 2 == 1) {
            return 1;
        }
        return 0;
    }

    get remainingPhrasePoints() {
        return this.phrasePoints - this.selectedPhrases.length;
    }

    get talentPoints() {
        if (this.number % 2 == 0) {
            return this.character.TALENT_POINTS_PER_LEVEL;
        } else {
            return 0;
        }
    }

    get remainingTalentPoints() {
        return this.talentPoints - this.selectedTalents.length;
    }

    isTalentSelected(talent) {
        return this.selectedTalents.includes(talent);
    }

    isTalentSelectedOnPreviousLevels(talentName) {
        for (let i = 0; i < this.number - 1; i++) {
            if (this.character.levels[i].selectedTalents.find(talent => talent.name == talentName)) {
                return true;
            }
        }
        return false;
    }

    get availableTalents() {
        let availableTalents = [];
        for (let commonTalent of commonTalents) {
            if (commonTalent.level > this.level) {
                continue;
            }
            if (commonTalent.crossClass && commonTalent.crossClass == this.character.class.name) {
                continue;
            }
            availableTalents.push(commonTalent);
        }
        nextClassTalent: for (let classTalent of this.character.class.talents) {
            if (classTalent.level > this.level) {
                continue;
            }
            if (classTalent.requiredAbility && !this.isAbilitySelectedOnPreviousLevels(classTalent.requiredAbility)) {
                continue;
            }
            if (classTalent.requiredTalent && !this.isTalentSelectedOnPreviousLevels(classTalent.requiredTalent)) {
                continue;
            }
            if (classTalent.exceptionalTalents) {
                for (let exceptionalTalent of classTalent.exceptionalTalents) {
                    if (this.isTalentSelectedOnPreviousLevels(exceptionalTalent)) {
                        continue nextClassTalent;
                    }
                }
            }
            if (classTalent.order && classTalent.order != this.character._order) {
                continue;
            }
            if (classTalent.deity && classTalent.deity != this.character._deity) {
                continue;
            }
            availableTalents.push(classTalent);
        }

        for (let i = 0; i < this.character.levels.length; i++) {
            if (i != this.number - 1) {
                availableTalents = availableTalents.filter(
                    talent => !this.character.levels[i].selectedTalents.includes(talent)
                );
            }
        }

        return availableTalents;
    }

    selectTalent(talent) {
        if (this.selectedTalents.includes(talent)) {
            this.selectedTalents.splice(this.selectedTalents.indexOf(talent), 1);
        } else if (this.remainingTalentPoints > 0) {
            this.selectedTalents.push(talent);
        }
    }

    get weapon() {
        return this._weapon;
    }

    get damage() {
        let damageMultiplier = 1 +
            this.character.MIGHT_DAMAGE_MULTIPLIER *
            (this.character.attributes.might.modified - 10);
        console.log(damageMultiplier);
        return [Math.round(this.weapon.baseDamage[0] * damageMultiplier),
                Math.round(this.weapon.baseDamage[1] * damageMultiplier)];
    }

    get endurance() {
        return Math.ceil((this.character.class.endurancePerLevel * 3 +
            this.character.class.endurancePerLevel * (this.number - 1)) *
            (1 + (this.character.attributes.const.modified - 10) *
            this.character.CONST_HEALTH_MULTIPLIER));
    }

    get health() {
        return Math.ceil((this.character.class.endurancePerLevel * 3 +
            this.character.class.endurancePerLevel * (this.number - 1)) *
            (1 + (this.character.attributes.const.modified - 10) *
            this.character.CONST_HEALTH_MULTIPLIER) *
            this.character.class.healthMultiplier);
    }

    get deflection() {
        return this.character.class.deflection +
            (this.character.attributes.resolve.modified - 10) * 1 +
            (this.number - 1) * this.character.DEFENSE_PER_LEVEL;
    }

    get fortitude() {
        return this.character.STARTING_DEFENSE +
            (this.character.attributes.might.modified - 10) * this.character.DEFENSE_PER_ATTRIBUTE +
            (this.character.attributes.const.modified - 10) * this.character.DEFENSE_PER_ATTRIBUTE +
            (this.number - 1) * this.character.DEFENSE_PER_LEVEL;
    }

    get reflex() {
        return this.character.STARTING_DEFENSE +
            (this.character.attributes.dexterity.modified - 10) * this.character.DEFENSE_PER_ATTRIBUTE +
            (this.character.attributes.perception.modified - 10) * this.character.DEFENSE_PER_ATTRIBUTE +
            (this.number - 1) * this.character.DEFENSE_PER_LEVEL;
    }

    get will() {
        return this.character.STARTING_DEFENSE +
            (this.character.attributes.intellect.modified - 10) * this.character.DEFENSE_PER_ATTRIBUTE +
            (this.character.attributes.resolve.modified - 10) * this.character.DEFENSE_PER_ATTRIBUTE +
            (this.number - 1) * this.character.DEFENSE_PER_LEVEL;
    }

    get accuracy() {
        return this.character.class.accuracy +
            (this.character.attributes.perception.modified - 10) +
            (this.number - 1) * this.character.ACCURACY_PER_LEVEL;
    }

    toJSON() {
        let comment = this.comment.trim();
        let skills = [];
        for (let skillName in skills) {
            skills.push(this.skills[skillName].base);
        }
        let talents = [];
        for (let talent of this.selectedTalents) {
            if (commonTalents.includes(talent)) {
                talents.push(['co', commonTalents.indexOf(talent)]);
            } else if (this.character.class.talents.includes(talent)) {
                talents.push(['cl', this.character.class.talents.indexOf(talent)]);
            }
        }
        let json = {
            // number: this.number,
            po: this.skillPoints,
            sk: skills,
            ta: talents,
            ab: this.selectedAbilities.length ?
                this.selectedAbilities.map(ability => this.character.class.abilities.indexOf(ability)) :
                undefined,
            ph: this.selectedPhrases.length ?
                this.selectedPhrases.map(phrase => this.character.class.phrases.indexOf(phrase)) :
                undefined,
            co: comment.length ? comment : undefined,
        };
        return json;
    }

    toByteArray() {
        let byteArray = [];
        let advancedSkills = this.advancedSkills;
        for (let skillName in skills) {
            byteArray.push(advancedSkills[skillName] ? advancedSkills[skillName] : 0);
        }
        console.log('advanced skills', advancedSkills);

        for (let i = 0; i < MAX_TALENTS_NUMBER; i++) {
            let talent = this.selectedTalents[i];
            if (talent === undefined) {
                byteArray.push(0);
            } else if (commonTalents.includes(talent)) {
                byteArray.push(commonTalents.indexOf(talent) + 1);
            } else if (this.character.class.talents.includes(talent)) {
                byteArray.push(this.character.class.talents.indexOf(talent) + 128 + 1);
            }
        }
        for (let i = 0; i < MAX_ABILITIES_NUMBER; i++) {
            let ability = this.selectedAbilities[i];
            if (ability === undefined) {
                byteArray.push(0);
            } else {
                byteArray.push(this.character.class.abilities.indexOf(ability) + 1);
            }
        }
        for (let i = 0; i < MAX_PHRASES_NUMBER; i++) {
            if (i < this.selectedPhrases.length) {
                let phrase = this.selectedPhrases[i];
                byteArray.push(this.character.class.phrases.indexOf(phrase) + 1);
            } else {
                byteArray.push(0);
            }
        }
        return byteArray;
    }

    feedByteArray(byteArray) {
        this.resetSkills();
        for (let skillName in skills) {
            let skillDelta = byteArray.shift();
            for (let i = 0; i < skillDelta; i++) {
                this.skills[skillName].increase();
            }
        }

        this.selectedTalents = [];
        for (let i = 0; i < MAX_TALENTS_NUMBER; i++) {
            let talentIndex = byteArray.shift();
            if (talentIndex == 0) {
                continue;
            } else if (talentIndex <= 128) {
                this.selectedTalents.push(commonTalents[talentIndex - 1]);
            } else {
                this.selectedTalents.push(this.character.class.talents[talentIndex - 1 - 128]);
            }
        }

        this.selectedAbilities = [];
        for (let i = 0; i < MAX_ABILITIES_NUMBER; i++) {
            let abilityIndex = byteArray.shift();
            if (abilityIndex == 0) {
                continue;
            } else {
                this.selectedAbilities.push(this.character.class.abilities[abilityIndex - 1]);
            }
        }

        this.selectedPhrases = [];
        for (let i = 0; i < MAX_PHRASES_NUMBER; i++) {
            let phraseIndex = byteArray.shift();
            if (phraseIndex == 0) {
                continue;
            } else {
                this.selectedPhrases.push(this.character.class.phrases[phraseIndex - 1]);
            }
        }
    }

    randomize() {
        this.resetSkills();
        this.selectedAbilities = [];
        this.selectedTalents = [];
        this.selectedPhrases = [];

        let abilities = this.availableAbilities;
        if (abilities.length) {
            abilities = pickRandom(abilities, {count: this.abilityPoints});
            for (let ability of abilities) {
                this.selectAbility(ability);
            }
        }
        let talents = this.availableTalents;
        if (talents.length) {
            talents = pickRandom(talents, {count: this.talentPoints});
            for (let talent of talents) {
                this.selectTalent(talent);
            }
        }
        let phrases = this.availablePhrases;
        if (phrases.length) {
            phrases = pickRandom(phrases, {count: this.phrasePoints});
            for (let phrase of phrases) {
                this.selectPhrase(phrase);
            }
        }
        for (let skillName of pickRandom(Object.keys(skills), {count: Object.keys(skills).length})) {
            while (this.skills[skillName].increase()) {
                1;
            }
        }
    }
}
