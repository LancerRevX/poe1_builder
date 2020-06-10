"use strict";
var Character = /** @class */ (function () {
    function Character() {
        var _this = this;
        this.name = 'Watcher';
        this.class = CLASSES[0];
        this.race = RACES[0];
        this.culture = CULTURES[0];
        this.background = this.culture.backgrounds[0];
        this.attribute_points = 15;
        this.attributes = [
            10, 10, 10, 10, 10, 10
        ];
        this.increase_attribute = function (attribute) {
            if (_this.attribute_points > 0 &&
                _this.attributes[attribute] < Character.MAX_ATTRIBUTE)
                _this.attributes[attribute] += 1;
        };
        this.decrease_attribute = function (attribute) {
            if (_this.attributes[attribute] > Character.MIN_ATTRIBUTE)
                _this.attributes[attribute] -= 1;
        };
        this.get_attribute = function (attribute) {
            return _this.attributes[attribute] +
                _this.race.attribute_bonuses[attribute] +
                _this.culture.attribute_bonuses[attribute];
        };
        this.get_attribute_points = function () {
            return _this.attribute_points;
        };
        this.skill_points = 0;
        this.skills = [
            0, 0, 0, 0, 0
        ];
        this.increase_skill = function (skill) {
            var required_points = 1 + _this.skills[skill];
            if (_this.skill_points >= required_points) {
                _this.skill_points -= required_points;
                _this.skills[skill] += 1;
            }
        };
        this.decrease_skill = function (skill) {
            if (_this.skills[skill] > 0) {
                _this.skills[skill] -= 1;
                _this.skill_points += 1 + _this.skills[skill];
            }
        };
        this.get_skill = function (skill) {
            return _this.skills[skill] +
                _this.class.skill_bonuses[skill] +
                _this.background.skill_bonuses[skill];
        };
        this.get_skill_points = function () {
            return _this.skill_points;
        };
        this.level = 1;
        this.get_level = function () {
            return _this.level;
        };
        this.get_vitality = function () {
            var endurance = _this.class.endurance_per_level * (_this.level + 2);
            var health = endurance * _this.class.health_multiplier;
            return { endurance: endurance, health: health };
        };
        this.get_defense = function () {
            var deflection = _this.class.base_deflection +
                (_this.attributes[Attribute.RESOLVE] - 10) +
                (_this.level - 1) * 3;
            var fortitude = (_this.attributes[Attribute.MIGHT] - 10) * 3 +
                (_this.attributes[Attribute.CONSTITUTION] - 10) * 3 +
                (_this.level - 1) * 3;
            var reflex = (_this.attributes[Attribute.DEXTERITY] - 10) * 3 +
                (_this.attributes[Attribute.PERCEPTION] - 10) * 3 +
                (_this.level - 1) * 3;
            var will = (_this.attributes[Attribute.INTELLECT] - 10) * 3 +
                (_this.attributes[Attribute.RESOLVE] - 10) * 3 +
                (_this.level - 1) * 3;
            return { deflection: deflection, fortitude: fortitude, reflex: reflex, will: will };
        };
    }
    Character.MAX_LEVEL = 16;
    Character.MAX_ATTRIBUTE = 18;
    Character.MIN_ATTRIBUTE = 3;
    return Character;
}());
