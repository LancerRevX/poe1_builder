import barbarianAbilities from './abilities/barbarian-abilities.js';
import chanterInvokations from './abilities/chanter-invokations.js';
import chanterPhrases from './abilities/chanter-phrases.js';
import cipherSpells from './abilities/cipher-spells.js';

export default [
    {
        name: 'Barbarian',
        endurancePerLevel: 16,
        healthMultiplier: 6,
        accuracy: 25,
        deflection: 15,
        skillBonuses: {
            Athletics: +2,
            Survival: +1
        },
        baseAbility: barbarianAbilities.base,
        abilities: barbarianAbilities.rest
    },
    {
        name: 'Chanter',
        endurancePerLevel: 12,
        healthMultiplier: 4,
        accuracy: 25,
        deflection: 25,
        skillBonuses: {
            Lore: +2,
            Mechanics: +1
        },
        baseAbility: null,
        abilities: chanterInvokations,
        phrases: chanterPhrases
    },
    {
        name: 'Cipher',
        endurancePerLevel: 12,
        healthMultiplier: 4,
        accuracy: 25,
        deflection: 20,
        skillBonuses: {
            Stealth: +1,
            Lore: +1,
            Mechanics: +1
        },
        baseAbility: {
            name: 'Soul Whip',
            link: 'https://pillarsofeternity.fandom.com/wiki/Soul_Whip',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/7/77/Soul_whip_icon.png'
        },
        abilities: cipherSpells
    },
    {
        name: 'Druid',
        endurancePerLevel: 12,
        healthMultiplier: 4,
        accuracy: 20,
        deflection: 20,
        skillBonuses: {
            Lore: +1,
            Survival: +2
        },
        baseAbility: undefined,
        abilities: [],
        spiritForms: [
            {
                name: 'Bear',
                link: 'https://pillarsofeternity.fandom.com/wiki/Spiritshift_Bear',
                damage: '<a href="https://pillarsofeternity.fandom.com/wiki/Slash" title="Slash"><img alt="Slash" src="https://static.wikia.nocookie.net/eternitywiki/images/5/50/Slash_icon.png" width="18" height="18"></a>'
            }
        ]
    },
    {
        name: 'Fighter',
        endurancePerLevel: 14,
        healthMultiplier: 5,
        accuracy: 30,
        deflection: 30,
        skillBonuses: {
            Athletics: +1,
            Lore: +1,
            Survival: +1
        },
        baseAbility: undefined,
        abilities: []
    },
    {
        name: 'Monk',
        endurancePerLevel: 14,
        healthMultiplier: 6,
        accuracy: 30,
        deflection: 25,
        skillBonuses: {
            Stealth: +1,
            Athletics: +1,
            Survival: +1
        },
        baseAbility: undefined,
        abilities: []
    },
    {
        name: 'Paladin',
        endurancePerLevel: 14,
        healthMultiplier: 5,
        accuracy: 25,
        deflection: 20,
        skillBonuses: {
            Athletics: +2,
            Lore: +1
        },
        baseAbility: undefined,
        abilities: []
    },
    {
        name: 'Priest',
        endurancePerLevel: 12,
        healthMultiplier: 4,
        accuracy: 20,
        deflection: 15,
        skillBonuses: {
            Athletics: +1,
            Lore: +2
        },
        baseAbility: undefined,
        abilities: []
    },
    {
        name: 'Ranger',
        endurancePerLevel: 12,
        healthMultiplier: 5,
        accuracy: 30,
        deflection: 20,
        skillBonuses: {
            Stealth: +1,
            Survival: +2
        },
        baseAbility: undefined,
        abilities: []
    },
    {
        name: 'Rogue',
        endurancePerLevel: 12,
        healthMultiplier: 4,
        accuracy: 30,
        deflection: 15,
        skillBonuses: {
            Stealth: +1,
            Mechanics: +2
        },
        baseAbility: undefined,
        abilities: []
    },
    {
        name: 'Wizard',
        endurancePerLevel: 12,
        healthMultiplier: 4,
        accuracy: 20,
        deflection: 10,
        skillBonuses: {
            Lore: +2,
            Mechanics: +1
        },
        baseAbility: undefined,
        abilities: []
    }
];
