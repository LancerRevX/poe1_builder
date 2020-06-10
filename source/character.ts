class Character {
    static readonly MAX_LEVEL = 16
    static readonly MAX_ATTRIBUTE = 18
    static readonly MIN_ATTRIBUTE = 3

    public name = 'Watcher'
    public class = CLASSES[0]
    public race = RACES[0]
    public culture = CULTURES[0]
    public background = this.culture.backgrounds[0]

    private attribute_points = 15
    private attributes: AttributeSet = [
        10, 10, 10, 10, 10, 10
    ]
    readonly increase_attribute = (attribute: Attribute) => {
        if (
            this.attribute_points > 0 &&
            this.attributes[attribute] < Character.MAX_ATTRIBUTE
        )
            this.attributes[attribute] += 1
    }
    readonly decrease_attribute = (attribute: Attribute) => {
        if (this.attributes[attribute] > Character.MIN_ATTRIBUTE)
            this.attributes[attribute] -= 1
    }
    readonly get_attribute = (attribute: Attribute) => {
        return this.attributes[attribute] +
               this.race.attribute_bonuses[attribute] +
               this.culture.attribute_bonuses[attribute]
    }
    readonly get_attribute_points = () => {
        return this.attribute_points
    }

    private skill_points = 0
    private skills: SkillSet = [
        0, 0, 0, 0, 0
    ]
    readonly increase_skill = (skill: Skill) => {
        let required_points = 1 + this.skills[skill]
        if (this.skill_points >= required_points) {
            this.skill_points -= required_points
            this.skills[skill] += 1
        }
    }
    readonly decrease_skill = (skill: Skill) => {
        if (this.skills[skill] > 0) {
            this.skills[skill] -= 1
            this.skill_points += 1 + this.skills[skill]
        }
    }
    readonly get_skill = (skill: Skill) => {
        return this.skills[skill] +
               this.class.skill_bonuses[skill] +
               this.background.skill_bonuses[skill]
    }
    readonly get_skill_points = () => {
        return this.skill_points
    }

    private level = 1
    readonly get_level = () => {
        return this.level
    }

    readonly get_vitality = () => {
        let endurance = this.class.endurance_per_level * (this.level + 2)
        let health = endurance * this.class.health_multiplier
        return {endurance, health}
    }

    readonly get_defense = () => {
        let deflection = this.class.base_deflection +
                         (this.attributes[Attribute.RESOLVE] - 10) +
                         (this.level - 1) * 3
        let fortitude = (this.attributes[Attribute.MIGHT] - 10) * 3 +
                        (this.attributes[Attribute.CONSTITUTION] - 10) * 3 +
                        (this.level - 1) * 3
        let reflex = (this.attributes[Attribute.DEXTERITY] - 10) * 3 +
                     (this.attributes[Attribute.PERCEPTION] - 10) * 3 +
                     (this.level - 1) * 3
        let will = (this.attributes[Attribute.INTELLECT] - 10) * 3 +
                   (this.attributes[Attribute.RESOLVE] - 10) * 3 +
                   (this.level - 1) * 3
        return {deflection, fortitude, reflex, will}
    }
}