import skillsData from './skills.js';

import commonTalents from './common-talents.js';
import weapons from './weapons.js';

import pickRandom from 'pick-random';

const MAX_TALENTS_NUMBER = 1;
const MAX_ABILITIES_NUMBER = 4; // Wizard has 4 spells on 1 level
const MAX_PHRASES_NUMBER = 2; // 2 phrases on 1 chanter level

export default class Level {
    constructor(character, levelNumber) {
        let level = this;
        level.character = character;
        level.number = levelNumber;

        this.skillPoints = 0;
        this._weapon = weapons[0];

        level.skills = {};
        for (let skillName in skillsData) {
            this.skills['_' + skillName] = 0;
            Object.defineProperty(level.skills, skillName, {
                get: function() {
                    let result = this['_' + skillName];
                    let classBonus = level.character.class.skillBonuses[skillName];
                    if (classBonus) {
                        result += classBonus;
                    }
                    let backgroundBonus = level.character.background.skillBonuses[skillName];
                    if (backgroundBonus) {
                        result += backgroundBonus;
                    }
                    return result;
                }
            });
        }
        level.resetSkills();

        level.selectedAbilities = [];
        level.selectedPhrases = [];
        level.selectedTalents = [];
    }

    increaseSkill(skill) {
        let requiredPointsNumber = this.skills['_' + skill] + 1;
        if (requiredPointsNumber <= this.skillPoints) {
            this.skillPoints -= requiredPointsNumber;
            this.skills['_' + skill] += 1;
            for (let i = this.number; i < this.character.MAX_LEVEL; i++) {
                this.character.levels[i].resetSkills();
            }
            return true;
        } else {
            return false;
        }
    }

    decreaseSkill(skill) {
        let previousLevelSkills = this.previous().skills;
        if (this.skills['_' + skill] > previousLevelSkills['_' + skill]) {
            let releasedPointsNumber = this.skills['_' + skill];
            this.skillPoints += releasedPointsNumber;
            this.skills['_' + skill] -= 1;
            for (let i = this.number; i < this.character.MAX_LEVEL; i++) {
                this.character.levels[i].resetSkills();
            }
        }
    }

    advancedSkills() {
        let previousLevel = this.previous();
        let result = {};
        for (let skillName in skillsData) {
            if (this.skills['_' + skillName] > previousLevel.skills['_' + skillName]) {
                result[skillName] = this.skills['_' + skillName] - previousLevel.skills['_' + skillName];
            }
        }
        return result;
    }

    resetSkills() {
        if (this.number == 1) {
            this.skillPoints = 0;
            for (let skill in skillsData) {
                this.skills['_' + skill] = 0;
            }
        } else {
            let previousLevel = this.previous();
            for (let skill in skillsData) {
                this.skills['_' + skill] = previousLevel.skills['_' + skill];
            }
            this.skillPoints = previousLevel.skillPoints + this.character.SKILL_POINTS_PER_LEVEL;
        }
    }

    previous() {
        if (this.number == 1) {
            return this;
        } else {
            return this.character.levels[this.number - 2];
        }
    }

    next() {
        if (this.number == this.character.MAX_LEVEL) {
            return null;
        } else {
            return this.character.levels[this.number];
        }
    }

    availableAbilities(filterAlreadySelected = false) {
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
        if (filterAlreadySelected) {
            for (let i = 0; i < this.character.levels.length; i++) {
                if (i != this.number - 1) {
                    availableAbilities = availableAbilities.filter(
                        ability => !this.character.levels[i].selectedAbilities.includes(ability)
                    );
                }
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
        } else if (this.remainingAbilityPoints() > 0) {
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

    typesOfAbilitiesToSelect() {
        let typesOfAbilitiesToSelect = [];
        if (['Druid', 'Priest'].includes(this.character.class.name) && this.number % 2 == 1 || this.abilityPoints()) {
            typesOfAbilitiesToSelect.push('abilities');
        }
        if (this.phrasePoints()) {
            typesOfAbilitiesToSelect.push('phrases');
        }
        if (this.talentPoints()) {
            typesOfAbilitiesToSelect.push('talents');
        }
        return typesOfAbilitiesToSelect;
    }

    abilityPoints() {
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
    }

    remainingAbilityPoints() {
        return this.abilityPoints() - this.selectedAbilities.length;
    }

    availablePhrases() {
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
        } else if (this.remainingPhrasePoints() > 0) {
            this.selectedPhrases.push(phrase);
        }
    }

    isPhraseSelected(ability) {
        return this.selectedPhrases.includes(ability);
    }

    phrasePoints() {
        if (this.character.class.name != 'Chanter') {
            return 0;
        }

        if (this.number == 1) {
            return 2;
        } else if (this.number % 2 == 1) {
            return 1;
        } else if (this.number % 2 == 0) {
            return 0;
        }
    }

    remainingPhrasePoints() {
        return this.phrasePoints() - this.selectedPhrases.length;
    }

    talentPoints() {
        if (this.number % 2 == 0) {
            return this.character.TALENT_POINTS_PER_LEVEL;
        } else {
            return 0;
        }
    }

    remainingTalentPoints() {
        return this.talentPoints() - this.selectedTalents.length;
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

    availableTalents() {
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
        } else if (this.remainingTalentPoints() > 0) {
            this.selectedTalents.push(talent);
        }
    }

    get weapon() {
        return this._weapon;
    }

    set weapon(weapon) {
        this._weapon = weapon;
        let next = this.next();
        if (next) {
            next.weapon = weapon;
        }
    }

    weaponChanged() {
        if (this.number == 1) {
            return true;
        }
        if (this.previous().weapon != this.weapon) {
            return true;
        }
        return false;
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
        for (let skillName in skillsData) {
            skills.push(this.skills['_' + skillName]);
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
        let advancedSkills = this.advancedSkills();
        for (let skillName in skillsData) {
            byteArray.push(advancedSkills[skillName] ? advancedSkills[skillName] : 0);
        }

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
        for (let skillName in skillsData) {
            let skillDelta = byteArray.shift();
            for (let i = 0; i < skillDelta; i++) {
                this.increaseSkill(skillName);
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
        let abilities = this.availableAbilities(true);
        if (abilities.length) {
            for (let i = 0; i < this.abilityPoints(); i++) {
                this.selectAbility(pickRandom(abilities)[0]);
            }
        }
        let talents = this.availableTalents();
        if (talents.length) {
            for (let i = 0; i < this.talentPoints(); i++) {
                this.selectTalent(pickRandom(talents)[0]);
            }
        }
        let phrases = this.availablePhrases();
        if (phrases.length) {
            for (let i = 0; i < this.phrasePoints(); i++) {
                this.selectPhrase(pickRandom(phrases)[0]);
            }
        }
        for (let skillName of pickRandom(Object.keys(skillsData), {count: Object.keys(skillsData).length})) {
            while (this.increaseSkill(skillName)) {
                1;
            }
        }
    }
}
