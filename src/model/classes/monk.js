const monkPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png';

export default {
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
    abilities: [
        {
            name: 'Swift Strikes',
            link: 'https://pillarsofeternity.fandom.com/wiki/Swift_Strikes',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/95/Swift_strikes_icon.png',
            level: '1',
            activation: 'Active',
            effects: '<ul><li>+25% <a href="/wiki/Attack_Speed" title="Attack Speed">Attack Speed</a></li></ul>',
            speed: 'Instant',
            interrupt: '',
            duration: '10.0 seconds',
            description: 'The monk\'s hands become a frenzied blur of attacks, increasing their Attack Rate for a brief period.',
        },
        {
            name: 'Torment\'s Reach',
            link: 'https://pillarsofeternity.fandom.com/wiki/Torment%27s_Reach',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/dd/Torments_reach_icon.png',
            level: '1',
            activation: 'Active',
            effects: '<ul><li>Foe AoE: -2 <a href="/wiki/Might" title="Might">Might</a></li><li>User: <a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a>, +50% <a href="/wiki/Damage" class="mw-redirect" title="Damage">damage</a> as <a href="/wiki/Crush" title="Crush"><img alt="Crush" src="https://static.wikia.nocookie.net/eternitywiki/images/8/8f/Crush_icon.png" decoding="async" width="18" height="18" /></a></li></ul>',
            speed: 'Average',
            interrupt: '',
            duration: '20.0 seconds',
            description: 'This ability exploits the shared bonds of universal suffering between all beings. The initial target is hit with a powerful blow that does additional Crush damage. Enemies in a cone behind the target suffer Crush damage and have their Might reduced.',
        },
        {
            name: 'Force of Anguish',
            link: 'https://pillarsofeternity.fandom.com/wiki/Force_of_Anguish',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/b/bf/Force_of_anguish_icon.png',
            level: '3',
            activation: 'Active',
            effects: '<ul><li>Foe Target: 7.0m Push (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png" decoding="async" width="18" height="18" /></a>)</li><li>Foe Target: If successful: <a href="/wiki/Prone" class="mw-redirect" title="Prone">Prone</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png" decoding="async" width="18" height="18" /></a>)</li><li>User: <a href="/wiki/Primary_Attack?action=edit&amp;redlink=1" class="new" title="Primary Attack (page does not exist)">Primary Attack</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a>)</li></ul>',
            speed: 'Average',
            interrupt: '0.5 sec (Average)',
            duration: '10.0 seconds',
            description: 'A powerful attack that knocks the target back a significant distance if the attack is successful. Target bumps others out of the way and bounces off hard surfaces like walls before ending up Prone.',
        },
        {
            name: 'Long Stride',
            link: 'https://pillarsofeternity.fandom.com/wiki/Long_Stride',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '3',
            activation: 'Passive',
            effects: '<ul><li>Self: +2 <a href="/wiki/Move_Speed" title="Move Speed">Move Speed</a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '',
            description: 'Intense practice and years of study enable the monk to move with confident fluidity in battle. During combat, the monk\'s Movement Rate is significantly increased.',
        },
        {
            name: 'Turning Wheel',
            link: 'https://pillarsofeternity.fandom.com/wiki/Turning_Wheel',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '3',
            activation: 'Passive',
            effects: '<ul><li>Self: +5% <a href="/wiki/Burn" title="Burn"><img alt="Burn" src="https://static.wikia.nocookie.net/eternitywiki/images/a/aa/Burn_icon.png" decoding="async" width="18" height="18" /></a> damage per <a href="/wiki/Wound" class="mw-redirect" title="Wound">Wound</a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '',
            description: 'The monk is able to channel physical pain into pure energy and redirect it at his or her attackers. While the monk has Wounds, he or she adds a proportional fire bonus to Melee Damage.',
        },
        {
            name: 'Transcendent Suffering 2',
            link: 'https://pillarsofeternity.fandom.com/wiki/Transcendent_Suffering_2',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '4',
            activation: 'Passive',
            effects: '<ul><li>Self: +4 <a href="/wiki/Unarmed" class="mw-redirect" title="Unarmed">Unarmed</a> <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a></li><li>Self: +4 <a href="/wiki/Unarmed" class="mw-redirect" title="Unarmed">Unarmed</a> <a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '',
            description: 'Monks achieve greater understanding of their bodies\' capabilities through enduring the hardships of existence. Their base Unarmed Damage starts much higher than other characters and increases permanently every three levels they gain.',
        },
        {
            name: 'Clarity Of Agony',
            link: 'https://pillarsofeternity.fandom.com/wiki/Clarity_Of_Agony',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/5b/Clarity_of_agony_icon.png',
            level: '5',
            activation: 'Active',
            effects: '<ul><li>-50% duration of hostile effects</li></ul>',
            speed: 'Instant',
            interrupt: '',
            duration: '10.0 seconds',
            description: 'Through pain the monk is able to cleanse his or her body, reducing the duration of incoming and existing hostile effects by half.',
        },
        {
            name: 'Soul Mirror',
            link: 'https://pillarsofeternity.fandom.com/wiki/Soul_Mirror',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '5',
            activation: 'Passive',
            effects: '<ul><li>50% chance to reflect <a href="/wiki/Ranged_Attack?action=edit&amp;redlink=1" class="new" title="Ranged Attack (page does not exist)">Ranged Attacks</a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '',
            description: 'Calls upon the power of the monk\'s psyche, reflecting half of ranged missiles targeting only the monk back to their point of origin. Only attacks resulting in a Miss have a chance to be reflected back.',
        },
        {
            name: 'Stunning Blow',
            link: 'https://pillarsofeternity.fandom.com/wiki/Stunning_Blow',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/6/66/Stunning_blow_icon.png',
            level: '5',
            activation: 'Active',
            effects: '<ul><li>Target: If successful: <a href="/wiki/Stunned" class="mw-redirect" title="Stunned">Stunned</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png" decoding="async" width="18" height="18" /></a>)</li><li>User: <a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a>)</li></ul>',
            speed: 'Average',
            interrupt: '0.5 sec (Average)',
            duration: '3.0 seconds',
            description: 'A head-targeting strike designed to disrupt enemies\' ability to react. Enemies hit by a successful attack are Stunned.',
        },
        {
            name: 'Transcendent Suffering 3',
            link: 'https://pillarsofeternity.fandom.com/wiki/Transcendent_Suffering_3',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '7',
            activation: 'Passive',
            effects: '<ul><li>Self: +6 <a href="/wiki/Unarmed" class="mw-redirect" title="Unarmed">Unarmed</a> <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a></li><li>Self: +8 <a href="/wiki/Unarmed" class="mw-redirect" title="Unarmed">Unarmed</a> <a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '',
            description: 'Monks achieve greater understanding of their bodies\' capabilities through enduring the hardships of existence. Their base Unarmed Damage starts much higher than other characters and increases permanently every three levels they gain.',
        },
        {
            name: 'Crucible Of Suffering',
            link: 'https://pillarsofeternity.fandom.com/wiki/Crucible_Of_Suffering',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '7',
            activation: 'Passive',
            effects: '<ul><li>+10 <a href="/wiki/Fortitude" class="mw-redirect" title="Fortitude">Fortitude</a></li><li>+10 <a href="/wiki/Reflex" class="mw-redirect" title="Reflex">Reflex</a></li><li>+10 <a href="/wiki/Will" class="mw-redirect" title="Will">Will</a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '20.0 seconds',
            description: 'The monk gains temporary insight through endurance, gaining a temporary bonus to Fortitude, Reflex, and Will whenever a hostile effect expires.',
        },
        {
            name: 'Duality of Mortal Presence',
            link: 'https://pillarsofeternity.fandom.com/wiki/Duality_of_Mortal_Presence',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/2/21/Duality_of_mortal_presence_ab_icon.png',
            level: '7',
            activation: 'Passive',
            effects: '<ul><li>Grants <a href="/wiki/Duality_of_Mortal_Presence_-_Deflection" title="Duality of Mortal Presence - Deflection">Duality of Mortal Presence - Deflection</a></li><li>Grants <a href="/wiki/Duality_of_Mortal_Presence_-_Other_Defenses" title="Duality of Mortal Presence - Other Defenses">Duality of Mortal Presence - Other Defenses</a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '',
            description: 'The monk gains two modal abilities that allow him or her to switch between a bonus to Deflection and a bonus to all other defenses.',
        },
        {
            name: 'Rooting Pain',
            link: 'https://pillarsofeternity.fandom.com/wiki/Rooting_Pain',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '7',
            activation: 'Passive',
            effects: '<ul><li>Foe AoE: 10-15 <a href="/wiki/Crush" title="Crush"><img alt="Crush" src="https://static.wikia.nocookie.net/eternitywiki/images/8/8f/Crush_icon.png" decoding="async" width="18" height="18" /></a> damage</li></ul>',
            speed: 'Average',
            interrupt: '0.5 sec (Average)',
            duration: '',
            description: 'Generates a shockwave around the monk each time he or she gains a Wound, inflicting a small amount of damage to and possibly calling an Interrupt on all enemies in the area of effect.',
        },
        {
            name: 'The Long Pain',
            link: 'https://pillarsofeternity.fandom.com/wiki/The_Long_Pain',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/7/76/The_long_pain_icon.png',
            level: '7',
            activation: 'Active',
            effects: '<ul><li>Summon Weapon: <a href="/wiki/Long_Pain_Fists" title="Long Pain Fists">Long Pain Fists</a></li></ul>',
            speed: 'Average',
            interrupt: '',
            duration: '30.0 seconds',
            description: 'The monk becomes capable of projecting force from his or her fists, inflicting damage at long range.',
        },
        {
            name: 'Enervating Blows',
            link: 'https://pillarsofeternity.fandom.com/wiki/Enervating_Blows',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '9',
            activation: 'Passive',
            effects: '<ul><li>Target: <a href="/wiki/Weakened" class="mw-redirect" title="Weakened">Weakened</a> on <a href="/wiki/Crit" class="mw-redirect" title="Crit">Crits</a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '15.0 seconds',
            description: 'By targeting certain points on an enemy, the monk is able to inflict physical weakness. Melee Critical Hits cause the target to become Weakened.',
        },
        {
            name: 'Transcendent Suffering 4',
            link: 'https://pillarsofeternity.fandom.com/wiki/Transcendent_Suffering_4',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '10',
            activation: 'Passive',
            effects: '<ul><li>Self: +8 <a href="/wiki/Unarmed" class="mw-redirect" title="Unarmed">Unarmed</a> <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a></li><li>Self: +12 <a href="/wiki/Unarmed" class="mw-redirect" title="Unarmed">Unarmed</a> <a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '',
            description: 'Monks achieve greater understanding of their bodies\' capabilities through enduring the hardships of existence. Their base Unarmed Damage starts much higher than other characters and increases permanently every three levels they gain.',
        },
        {
            name: 'Flagellant\'s Path',
            link: 'https://pillarsofeternity.fandom.com/wiki/Flagellant%27s_Path',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/2/25/Flagellants_path_icon.png',
            level: '11',
            activation: 'Active',
            effects: '<ul><li>Foe Target: 20-30 <a href="/wiki/Crush" title="Crush"><img alt="Crush" src="https://static.wikia.nocookie.net/eternitywiki/images/8/8f/Crush_icon.png" decoding="async" width="18" height="18" /></a> damage</li><li>Foe Target: -10 All <a href="/wiki/Defense" title="Defenses"><img alt="Defenses" src="https://static.wikia.nocookie.net/eternitywiki/images/a/af/Defenses_icon.png" decoding="async" width="16" height="16" /></a></li></ul>',
            speed: 'Average',
            interrupt: '0.5 sec (Average)',
            duration: '8.0 seconds',
            description: 'In the blink of an eye, the monk streaks toward a distant target, inflicting terrible Crush damage and penalties to all defenses on anyone in his or her path.',
        },
        {
            name: 'Iron Wheel',
            link: 'https://pillarsofeternity.fandom.com/wiki/Iron_Wheel',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png',
            level: '11',
            activation: 'Passive',
            effects: '<ul><li>+1 <a href="/wiki/Damage_Reduction" title="Damage Reduction (DR)"><img alt="Damage Reduction (DR)" src="https://static.wikia.nocookie.net/eternitywiki/images/2/29/Damage_reduction_icon.png" decoding="async" width="16" height="16" /></a> per <a href="/wiki/Wound" class="mw-redirect" title="Wound">Wound</a></li></ul>',
            speed: '',
            interrupt: '',
            duration: '',
            description: 'The pain from the monk\'s wounds allows him or her to build Damage Reduction against incoming attacks.',
        },
        {
            name: 'Skyward Kick',
            link: 'https://pillarsofeternity.fandom.com/wiki/Skyward_Kick',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/2/20/Skyward_kick_icon.png',
            level: '13',
            activation: 'Active',
            effects: '<ul><li>Target: If successful: <a href="/wiki/Prone" class="mw-redirect" title="Prone">Prone</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png" decoding="async" width="18" height="18" /></a>)</li><li>User: <a href="/wiki/Primary_Attack?action=edit&amp;redlink=1" class="new" title="Primary Attack (page does not exist)">Primary Attack</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a>)</li></ul>',
            speed: 'Average',
            interrupt: '0.5 sec (Average)',
            duration: '3.0 seconds',
            description: 'The monk launches a target into the air, slamming them back down to the ground and leaving them Prone.',
        },
        {
            name: 'The Dichotomous Soul',
            link: 'https://pillarsofeternity.fandom.com/wiki/The_Dichotomous_Soul',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/90/Dichotomous_soul_icon.png',
            level: '13',
            activation: 'Active',
            effects: '<ul><li>Summon: <a href="/wiki/Monk_Duplicate?action=edit&amp;redlink=1" class="new" title="Monk Duplicate (page does not exist)">Monk Duplicate</a></li></ul>',
            speed: 'Average',
            interrupt: '',
            duration: '15.0 seconds',
            description: 'The monk meditates briefly on his or her pain, summoning two physical manifestations of suffering, one made of flame, the other of ice.',
        },
        {
            name: 'Resonant Touch',
            link: 'https://pillarsofeternity.fandom.com/wiki/Resonant_Touch',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/1/18/Resonant_touch_icon.png',
            level: '15',
            activation: 'Active',
            effects: '<ul><li>AoE: 10 <a href="/wiki/Raw" class="mw-redirect" title="Raw">Raw</a> damage per <a href="/wiki/Resonance" title="Resonance">Resonance</a></li><li>Foe Target: <a href="/wiki/Resonance" title="Resonance">Resonance</a> when dealt at least 10 <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a></li></ul>',
            speed: 'Average',
            interrupt: '',
            duration: '',
            description: 'The monk\'s strikes generate a sympathetic resonance between the monk and his or her target. Successive strikes increase the intensity of the resonance. At a time of the monk\'s choosing, the monk can cause the resonance to inflict devastating Raw damage to anyone currently carrying them.',
        },
    ],
    talents: [
        {
            name: 'Lesser Wounds',
            description: 'Lowers the monk\'s Wound threshold, allowing him or her to gain Wounds at a faster rate.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Lesser_Wounds',
            imageLink: monkPassiveImageLink
        },
        {
            name: 'Lightning Strikes',
            effects: '<ul><li>+25% <a href="/wiki/Shock" title="Shock"><img alt="Shock" src="https://static.wikia.nocookie.net/eternitywiki/images/8/89/Shock_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235346" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Lightning_Strikes',
            imageLink: monkPassiveImageLink,
            requiredAbility: 'Swift Strikes'
        },
        {
            name: 'Mortification of the Soul',
            description: 'The monk immediately inflicts enough Raw damage on himself or herself to gain a Wound.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Mortification_of_the_Soul',
            imageLink: monkPassiveImageLink
        }
    ]
};
