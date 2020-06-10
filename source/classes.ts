type Class = {
    readonly name: string
    readonly endurance_per_level: number
    readonly health_multiplier: number
    readonly base_accuracy: number
    readonly base_deflection: number
    readonly skill_bonuses: Readonly<SkillSet>
}

const CLASSES: ReadonlyArray<Class> = [
    {
        name: 'Barbarian',
        endurance_per_level: 48,
        health_multiplier: 6,
        base_accuracy: 16,
        base_deflection: 15,
        skill_bonuses: [
            0, 2, 0, 0, 1
        ]
    },
    {
        name: 'Chanter',
        endurance_per_level: 48,
        health_multiplier: 6,
        base_accuracy: 16,
        base_deflection: 15,
        skill_bonuses: [
            0, 2, 0, 0, 1
        ]
    },
]