import skillsData from './skills.js';

export default class Level {
    constructor(character, levelNumber) {
        let level = this;
        level.character = character;
        level.number = levelNumber;

        level.skills = {};
        for (let skill in skillsData) {
            Object.defineProperty(level.skills, skill, {
                get: function() {
                    let result = this['_' + skill];
                    let classBonus = level.character.class.skillBonuses[skill];
                    if (classBonus) {
                        result += classBonus;
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
        let result = [];
        for (let skill in skillsData) {
            if (this.skills['_' + skill] > previousLevel.skills['_' + skill]) {
                result.push({
                    name: skill,
                    value: this.skills['_' + skill] - previousLevel.skills['_' + skill]
                });
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
            return this;
        } else {
            return this.character.levels[this.number];
        }
    }

    availableAbilities() {
        let availableAbilities = [];
        for (let ability of this.character.class.abilities) {
            if (['Druid', 'Priest'].includes(this.character.class.name)) {
                if (ability.level == this.number) {
                    availableAbilities.push(ability);
                }
            } else {
                if (ability.level <= this.number) {
                    availableAbilities.push(ability);
                }
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
        if (this.selectedAbilities.includes(ability)) {
            this.selectedAbilities.splice(this.selectedAbilities.indexOf(ability), 1);
        } else if (this.remainingAbilityPoints() > 0) {
            this.selectedAbilities.push(ability);
        }
    }

    isAbilitySelected(ability) {
        return this.selectedAbilities.includes(ability);
    }

    typesOfAbilitiesToSelect() {
        let typesOfAbilitiesToSelect = [];
        if (this.abilityPoints()) {
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
}
