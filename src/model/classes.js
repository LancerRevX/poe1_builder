import barbarianAbilities from './abilities/barbarian-abilities.js';
import chanterInvokations from './abilities/chanter-invokations.js';
import chanterPhrases from './abilities/chanter-phrases.js';
import cipherSpells from './abilities/cipher-spells.js';
import druidSpells from './abilities/druid-spells.js';
import fighterAbilities from './abilities/fighter-abilities.js';
import monkAbilities from './abilities/monk-abilities.js';
import paladinAbilities from './abilities/paladin-abilities.js';
import priestAbilities from './abilities/priest-spells.js';
import rangerAbilities from './abilities/ranger-abilities.js';
import rogueAbilities from './abilities/rogue-abilities.js';
import wizardAbilities from './abilities/wizard-spells.js';

import classTalents from './abilities/class-talents.js';

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
        abilities: barbarianAbilities.rest,
        talents: classTalents.barbarian
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
        baseAbility: {
            name: 'Brisk Recitation',
            link: 'https://pillarsofeternity.fandom.com/wiki/Brisk_Recitation',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/9d/Chanter_passive_icon.png'
        },
        abilities: chanterInvokations,
        phrases: chanterPhrases,
        talents: classTalents.chanter
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
        abilities: cipherSpells,
        talents: classTalents.cipher
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
        baseAbility: null,
        abilities: druidSpells,
        spiritForms: [
            {
                name: 'Bear',
                link: 'https://pillarsofeternity.fandom.com/wiki/Spiritshift_Bear',
                damageType: '<a href="https://pillarsofeternity.fandom.com/wiki/Slash" title="Slash"><img alt="Slash" src="https://static.wikia.nocookie.net/eternitywiki/images/5/50/Slash_icon.png" width="18" height="18"></a>'
            },
            {
                name: 'Boar'
            },
            {
                name: 'Cat'
            },
            {
                name: 'Stag'
            },
            {
                name: 'Wolf'
            }
        ],
        talents: classTalents.druid
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
        baseAbility: {
            name: 'Constant Recovery',
            link: 'https://pillarsofeternity.fandom.com/wiki/Constant_Recovery',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/d5/Constant_recovery_icon.png',
            level: '1',
            activation: 'Passive',
            effects: '<ul><li>Self: +5 <a href="/wiki/Endurance" class="mw-redirect" title="Endurance">Endurance</a> per 3 seconds</li></ul>',
            speed: '',
            duration: '45.0 seconds',
            description: 'Charged by the rush of battle, the fighter will continually regenerate Endurance at a modest rate.',
        },
        abilities: fighterAbilities,
        talents: classTalents.fighter
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
        baseAbility: {
            name: 'Transcendent Suffering',
            link: 'https://pillarsofeternity.fandom.com/wiki/Transcendent_Suffering',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '1',
            activation: 'Passive',
            effects: '<ul><li>Self: +2 <a href="/wiki/Unarmed" class="mw-redirect" title="Unarmed">Unarmed</a> <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a></li><li>Self: +0 <a href="/wiki/Unarmed" class="mw-redirect" title="Unarmed">Unarmed</a> <a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '',
            description: 'Monks achieve greater understanding of their bodies\' capabilities through enduring the hardships of existence. Their base Unarmed Damage starts much higher than other characters and increases permanently every three levels they gain.',
        },
        abilities: monkAbilities,
        talents: classTalents.monk
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
        baseAbility: {
            name: 'Faith And Conviction',
            link: 'https://pillarsofeternity.fandom.com/wiki/Faith_And_Conviction',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/31/Paladin_passive_icon.png',
            level: '1',
            activation: 'Passive',
            effects: '<ul><li>Self: +4 <a href="https://pillarsofeternity.fandom.com/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a> (base)</li><li>Self: +8 <a href="https://pillarsofeternity.fandom.com/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png" decoding="async" width="18" height="18" /></a> (base)</li><li>Self: +8 <a href="https://pillarsofeternity.fandom.com/wiki/Reflex" title="Reflex"><img alt="Reflex" src="https://static.wikia.nocookie.net/eternitywiki/images/8/80/Reflex_icon.png" decoding="async" width="18" height="18" /></a> (base)</li><li>Self: +8 <a href="https://pillarsofeternity.fandom.com/wiki/Will" title="Will"><img alt="Will" src="https://static.wikia.nocookie.net/eternitywiki/images/9/96/Will_icon.png" decoding="async" width="18" height="18" /></a> (base)</li></ul>',
            speed: '',
            duration: '',
            description: 'A paladin\'s <a href="https://pillarsofeternity.fandom.com/wiki/Defense" title="Defense">Defenses</a> are directly affected by the degree to which he or she acts with accordance with the beliefs of his or her order. A bonus or penalty is applied to <a href="https://pillarsofeternity.fandom.com/wiki/Defense" title="Defense">Defense</a> based on how well the paladin\'s <a href="https://pillarsofeternity.fandom.com/wiki/Disposition" title="Disposition">Reputation</a> align with his or her order\'s preferred behaviors.',
        },
        abilities: paladinAbilities,
        orders: [
            {
                name: 'The Shieldbearers of St. Elcga',
                favoredBehavior: ['Diplomatic', 'Honest'],
                disfavoredBehavior: ['Aggressive', 'Cruel']
            },
            {
                name: 'Bleak Walkers',
                favoredBehavior: ['Aggressive', 'Cruel'],
                disfavoredBehavior: ['Benevolent', 'Passionate']
            },
            {
                name: 'Kind Wayfarers',
                favoredBehavior: ['Benevolent', 'Passionate'],
                disfavoredBehavior: ['Deceptive', 'Cruel']
            },
            {
                name: 'Goldpact Knights',
                favoredBehavior: ['Rational', 'Stoic'],
                disfavoredBehavior: ['Passionate', 'Aggressive']
            },
            {
                name: 'Darcozzi Paladini',
                favoredBehavior: ['Clever', 'Passionate'],
                disfavoredBehavior: ['Cruel', 'Stoic']
            },
            {
                name: 'Frermàs mes Canc Suolias',
                companionOnly: true
            }
        ],
        talents: classTalents.paladin
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
        baseAbility: {
            level: '1',
            link: 'https://pillarsofeternity.fandom.com/wiki/Holy_Radiance',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/b/b7/Holy_radiance_icon.png',
            name: 'Holy Radiance',
            speed: 'Fast',
            range: '',
            area: '5.0m Radius from Caster',
            duration: '15.0 seconds',
            effects: '<ul><li>Friendly AoE: +15 <a href="https://pillarsofeternity.fandom.com/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png/revision/latest/scale-to-width-down/16?cb=20170928235322" decoding="async" width="16" height="16" /></a> (base)</li><li>Foe AoE (<a href="https://pillarsofeternity.fandom.com/wiki/Vessel" class="mw-redirect" title="Vessel">Vessels</a>): 30 <a href="https://pillarsofeternity.fandom.com/wiki/Burn" title="Burn"><img alt="Burn" src="https://static.wikia.nocookie.net/eternitywiki/images/a/aa/Burn_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235248" decoding="async" width="18" height="18" /></a> <a href="https://pillarsofeternity.fandom.com/wiki/Damage" class="mw-redirect" title="Damage">damage</a> over 3 seconds</li><li>Foe AoE (<a href="https://pillarsofeternity.fandom.com/wiki/Vessel" class="mw-redirect" title="Vessel">Vessels</a>): If successful: <a href="https://pillarsofeternity.fandom.com/wiki/Frightened" class="mw-redirect" title="Frightened">Frightened</a></li></ul>',
            description: 'Creates a field of holy energy around the priest, Burning any vessels in the vicinity and regenerating a modest amount of Endurance for allies. The power of a priest\'s Holy Radiance is modified by how well his or her Reputations align with the preferred behaviors of his or her faith.</td></tr><tr><td style="text-align:center;"><a href="/wiki/File:Armor_of_faith_icon.png" class="image"><img alt="Armor of faith icon.png" src="https://static.wikia.nocookie.net/eternitywiki/images/f/ff/Armor_of_faith_icon.png/revision/latest/scale-to-width-down/42?cb=20171108222051" decoding="async" width="42" height="42" /></a>',
        },
        abilities: priestAbilities,
        deities: [
            {
                name: 'Berath',
                favoredDispositions: ['Stoic', 'Rational'],
                condemnedDispositions: ['Cruel', 'Passionate']
            },
            {
                name: 'Eothas',
                favoredDispositions: ['Honest', 'Benevolent'],
                condemnedDispositions: ['Cruel', 'Deceptive']
            },
            {
                name: 'Magran',
                favoredDispositions: ['Aggressive', 'Clever'],
                condemnedDispositions: ['Passionate', 'Diplomatic']
            },
            {
                name: 'Skaen',
                favoredDispositions: ['Cruel', 'Deceptive'],
                condemnedDispositions: ['Aggressive', 'Benevolent']
            },
            {
                name: 'Wael',
                favoredDispositions: ['Deceptive', 'Clever'],
                condemnedDispositions: ['Rational', 'Honest']
            }
        ],
        talents: []
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
        baseAbility: {
            name: 'Animal Companion',
            link: 'https://pillarsofeternity.fandom.com/wiki/Animal_Companion',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/33/Ranger_passive_icon.png',
            level: '1',
            activation: 'Passive',
            effects: '<ul><li>Depends on type of Animal Companion</li></ul>',
            speed: 'Average',
            duration: '',
            description: 'All rangers form a strong spiritual connection with a single creature, their animal companion. This connection allows rangers and their companions to coordinate attacks and efficiently take down prey. In most situations, the companion runs interference while the ranger attacks at range.',
        },
        abilities: rangerAbilities,
        companions: [
            {
                name: 'Antelope',
            },
            {
                name: 'Bear',
            },
            {
                name: 'Boar',
            },
            {
                name: 'Lion',
            },
            {
                name: 'Stag',
            },
            {
                name: 'Wolf',
            }
        ],
        talents: []
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
        baseAbility: {
            name: 'Sneak Attack',
            link: 'https://pillarsofeternity.fandom.com/wiki/Sneak_Attack',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/dc/Rogue_passive_icon.png',
            level: '1',
            activation: 'Passive',
            effects: '<ul><li>+50% <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a> when target is <a href="/wiki/Blinded" class="mw-redirect" title="Blinded">Blinded</a>, <a href="/wiki/Flanked" class="mw-redirect" title="Flanked">Flanked</a>, <a href="/wiki/Hobbled" class="mw-redirect" title="Hobbled">Hobbled</a>, <a href="/wiki/Paralyzed" class="mw-redirect" title="Paralyzed">Paralyzed</a>, <a href="/wiki/Petrified" class="mw-redirect" title="Petrified">Petrified</a>, <a href="/wiki/Prone" class="mw-redirect" title="Prone">Prone</a>, <a href="/wiki/Stuck" class="mw-redirect" title="Stuck">Stuck</a>, <a href="/wiki/Stunned" class="mw-redirect" title="Stunned">Stunned</a> or <a href="/wiki/Weakened" class="mw-redirect" title="Weakened">Weakened</a></li></ul>',
            speed: '',
            duration: '',
            description: 'Uses the rogue\'s ability to approach unseen, adding weapon damage to their attacks when the target is Blinded, Flanked, Hobbled, Paralyzed, Petrified, Prone, Stuck, Stunned, or Weakened, as well as when any target is struck within two seconds of combat starting.',
        },
        abilities: rogueAbilities,
        talents: []
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
        baseAbility: {
            level: '1',
            link: 'https://pillarsofeternity.fandom.com/wiki/Arcane_Assault',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/3f/Arcane_assault_icon.png',
            name: 'Arcane Assault',
            speed: 'Fast',
            range: '',
            area: '1.25m Radius',
            duration: '6.0 seconds',
            effects: '<ul><li>Foe AoE: 10-16 <a href="https://pillarsofeternity.fandom.com/wiki/Raw" class="mw-redirect" title="Raw">Raw</a> damage (+10 <a href="https://pillarsofeternity.fandom.com/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png/revision/latest/scale-to-width-down/16?cb=20170928235244" decoding="async" width="16" height="16" /></a> vs <a href="https://pillarsofeternity.fandom.com/wiki/Reflex" title="Reflex"><img alt="Reflex" src="https://static.wikia.nocookie.net/eternitywiki/images/8/80/Reflex_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235341" decoding="async" width="18" height="18" /></a>)</li><li>Foe AoE: If successful: <a href="https://pillarsofeternity.fandom.com/wiki/Dazed" class="mw-redirect" title="Dazed">Dazed</a> for 6 seconds (+10 <a href="https://pillarsofeternity.fandom.com/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png/revision/latest/scale-to-width-down/16?cb=20170928235244" decoding="async" width="16" height="16" /></a> vs <a href="https://pillarsofeternity.fandom.com/wiki/Will" title="Will"><img alt="Will" src="https://static.wikia.nocookie.net/eternitywiki/images/9/96/Will_icon.png/revision/latest/scale-to-width-down/18?cb=20170909202632" decoding="async" width="18" height="18" /></a>)</li></ul>',
            description: 'Unleashes a bolt of magical energy from the grimoire that inflicts Raw damage and Dazes targets in the area.',
        },
        abilities: wizardAbilities,
        talents: []
    }
];
