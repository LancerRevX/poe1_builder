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
                    return this['_' + skill]/* + this.race.attributeBonuses[attribute] + this.culture.attributeBonuses[attribute]*/;
                },
                set: function(newValue) {
                    let previousLevelSkills = level.previous().skills;
                    if (newValue < previousLevelSkills[skill]) {
                        return;
                    }
                    let skillDifference = newValue - this[skill];
                    if (skillDifference > 0) {
                        let requiredPointsNumber = 0;
                        for (let i = 1; i <= skillDifference; i++) {
                            requiredPointsNumber += this[skill] + i;
                        }
                        if (requiredPointsNumber <= level.skillPoints) {
                            level.skillPoints -= requiredPointsNumber;
                        } else {
                            return;
                        }
                    } else if (skillDifference < 0) {
                        let releasedPointsNumber = 0;
                        for (let i = 0; i > skillDifference; i--) {
                            releasedPointsNumber += this[skill] + i;
                        }
                        level.skillPoints += releasedPointsNumber;
                    } else {
                        return;
                    }
                    this['_' + skill] = newValue;
                    for (let i = level.number; i < character.MAX_LEVEL; i++) {
                        level.character.levels[i].resetSkills();
                    }
                }
            });
        }
        level.resetSkills();
    }

    resetSkills() {
        let previousLevel = this.previous();
        for (let skill in skillsData) {
            this.skills['_' + skill] = previousLevel.skills[skill];
        }
        this.skillPoints = previousLevel.skillPoints + this.character.SKILL_POINTS_PER_LEVEL;
    }

    previous() {
        if (this.number == 1) {
            let emptyLevel = {
                skills: {},
                skillPoints: 0
            };
            for (let skill in skillsData) {
                emptyLevel.skills[skill] = 0;
            }
            return emptyLevel;
        } else {
            return this.character.levels[this.number - 2];
        }
    }

    availableAbilities() {

    }

    selectAbility(ability) {

    }
}
