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

    resetSkills() {
        let previousLevel = this.previous();
        for (let skill in skillsData) {
            this.skills['_' + skill] = previousLevel.skills['_' + skill];
        }
        if (this.number == 1) {
            this.skillPoints = 0;
        } else {
            this.skillPoints = previousLevel.skillPoints + this.character.SKILL_POINTS_PER_LEVEL;
        }
    }

    previous() {
        if (this.number == 1) {
            let emptyLevel = {
                skills: {},
                skillPoints: 0
            };
            for (let skill in skillsData) {
                emptyLevel.skills['_' + skill] = 0;
            }
            return emptyLevel;
        } else {
            return this.character.levels[this.number - 2];
        }
    }

    availableAbilities() {
        let availableAbilities = [];
        nextAbility: for (let ability of this.character.class.abilities) {
            if (ability.level > this.number) {
                continue;
            }
            for (let i = 0; i < this.number - 1; i++) {
                for (let selectedAbility of this.character.levels[i].selectedAbilities) {
                    if (selectedAbility.name == ability.name) {
                        continue nextAbility;
                    }
                }
            }
            availableAbilities.push(ability);
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

    abilitiesToSelect() {
        let abilitiesToSelect = [];
        if (this.number % 2 == 0) {
            abilitiesToSelect.push('talents');
        }
        if (['wizard', 'cipher'].includes(this.character.class.name)) {
            abilitiesToSelect.push('abilities');
        } else if (this.character.class.name == 'chanter') {
            if (this.character.class.progression[this.number - 1].invocations > 0) {
                abilitiesToSelect.push('abilities');
            }
            if (this.character.class.progression[this.number - 1].phrases > 0) {
                abilitiesToSelect.push('phrases');
            }
        } else if (this.number % 2 == 1) {
            abilitiesToSelect.push('abilities');
        }
        return abilitiesToSelect;
    }

    abilityPoints() {
        if (this.character.class.name == 'chanter') {
            return this.character.class.progression[this.number - 1].invocations;
        } else if (['druid', 'priest'].includes(this.character.class.name)) {
            return 0;
        } else if (this.number % 2 == 1) {
            return 1;
        }
    }

    remainingAbilityPoints() {
        return this.abilityPoints() - this.selectedAbilities.length;
    }

    talentPoints() {
        return this.character.TALENT_POINTS_PER_LEVEL;
    }
}
