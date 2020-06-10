type Race = {
    readonly name: string
    readonly attribute_bonuses: Readonly<AttributeSet>
    // readonly ability: Ability
}

const RACES: ReadonlyArray<Race> = [
    {
        name: 'Human',
        attribute_bonuses: [
            1, 0, 0, 0, 0, 1
        ]
    },
    {
        name: 'Wood elf',
        attribute_bonuses: [
            0, 0, 1, 1, 0, 0
        ]
    }
]