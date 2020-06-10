type Background = {
    readonly name: string
    readonly skill_bonuses: Readonly<SkillSet>
}

const BACKGROUNDS: ReadonlyArray<Background> = [
    {
        name: 'Aristocrat',
        skill_bonuses: [
            0, 0, 2, 0, 0
        ]
    },
    {
        name: 'Artist',
        skill_bonuses: [
            0, 0, 2, 0, 0
        ]
    },
    {
        name: 'Clergy',
        skill_bonuses: [
            0, 0, 2, 0, 0
        ]
    }
]