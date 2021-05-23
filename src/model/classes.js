import barbarianAbilities from './abilities/barbarian-abilities.js';

export default [
    {
        name: 'barbarian',
        endurancePerLevel: 16,
        healthMultiplier: 6,
        accuracy: 25,
        deflection: 15,
        skillBonuses: {
            athletics: +2,
            survival: +1
        },
        abilities: barbarianAbilities,
        progression: [
            {
                abilities: 1
            }
        ]
    },
    {
        name: 'chanter',
        endurancePerLevel: 12,
        healthMultiplier: 4,
        accuracy: 25,
        deflection: 25,
        skillBonuses: {
            lore: +2,
            mechanics: +1
        },
        abilities: barbarianAbilities,
        progression: [
            {
                abilityLevel: 1,
                phrases: 2,
                invocations: 1
            },
            {
                abilityLevel: 1,
                phrases: 0,
                invocations: 1
            },
            {
                abilityLevel: 1,
                phrases: 1,
                invocations: 0
            },
            {
                abilityLevel: 1,
                phrases: 0,
                invocations: 1
            },
            {
                abilityLevel: 2,
                phrases: 1,
                invocations: 0
            },
            {
                abilityLevel: 2,
                phrases: 0,
                invocations: 1
            },
            {
                abilityLevel: 2,
                phrases: 1,
                invocations: 0
            },
            {
                abilityLevel: 2,
                phrases: 0,
                invocations: 1
            },
            {
                abilityLevel: 3,
                phrases: 1,
                invocations: 0
            },
            {
                abilityLevel: 3,
                phrases: 0,
                invocations: 1
            },
            {
                abilityLevel: 3,
                phrases: 1,
                invocations: 0
            },
            {
                abilityLevel: 3,
                phrases: 0,
                invocations: 1
            },
            {
                abilityLevel: 4,
                phrases: 1,
                invocations: 0
            },
            {
                abilityLevel: 4,
                phrases: 0,
                invocations: 1
            },
            {
                abilityLevel: 5,
                phrases: 1,
                invocations: 0
            },
            {
                abilityLevel: 5,
                phrases: 0,
                invocations: 1
            },
        ]
    }
];
