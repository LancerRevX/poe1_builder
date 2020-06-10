type Culture = {
    readonly name: string
    readonly attribute_bonuses: Readonly<AttributeSet>
    readonly backgrounds: ReadonlyArray<Background>
}

const CULTURES: ReadonlyArray<Culture> = [
    {
        name: 'Aedyr',
        attribute_bonuses: [
            0, 0, 0, 0, 0, 1
        ],
        backgrounds: [
            BACKGROUNDS[0],
            BACKGROUNDS[2]
        ]
    },
    {
        name: 'Deadfire Archipelago',
        attribute_bonuses: [
            0, 0, 1, 0, 0, 0
        ],
        backgrounds: [
            BACKGROUNDS[0]
        ]
    }
]