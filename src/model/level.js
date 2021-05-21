import skillsData from './skills.js';
import classesData from './classes.js';

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
                    let classBonus = classesData[level.character.class].skillBonuses[skill];
                    if (classBonus) {
                        result += classBonus;
                    }
                    return result;
                },
                set: function(newValue) {
                    let previousLevelSkills = level.previous().skills;
                    if (newValue < previousLevelSkills['_' + skill]) {
                        return;
                    }
                    let skillDifference = newValue - this['_' + skill];
                    if (skillDifference > 0) {
                        let requiredPointsNumber = 0;
                        for (let i = 1; i <= skillDifference; i++) {
                            requiredPointsNumber += this['_' + skill] + i;
                        }
                        if (requiredPointsNumber <= level.skillPoints) {
                            level.skillPoints -= requiredPointsNumber;
                        } else {
                            return;
                        }
                    } else if (skillDifference < 0) {
                        let releasedPointsNumber = 0;
                        for (let i = 0; i > skillDifference; i--) {
                            releasedPointsNumber += this['_' + skill] + i;
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
            this.skills['_' + skill] = previousLevel.skills['_' + skill];
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
                emptyLevel.skills['_' + skill] = 0;
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
