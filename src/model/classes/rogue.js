export default {
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
    abilities: [
        {
            name: 'Blinding Strike',
            link: 'https://pillarsofeternity.fandom.com/wiki/Blinding_Strike',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/f/fb/Blinding_strike_icon.png',
            level: '1',
            activation: 'Active',
            effects: '<ul><li>Target: <a href="/wiki/Blinded" class="mw-redirect" title="Blinded">Blinded</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Reflex" title="Reflex"><img alt="Reflex" src="https://static.wikia.nocookie.net/eternitywiki/images/8/80/Reflex_icon.png" decoding="async" width="18" height="18" /></a>)</li><li>User: <a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a>, +25% damage (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a>)</li></ul>',
            speed: 'Average',
            duration: '10.0 seconds',
            description: 'A dirty attack that makes the opponent unable to see. Inflicts extra damage and Blinds the target.',
        },
        {
            name: 'Crippling Strike',
            link: 'https://pillarsofeternity.fandom.com/wiki/Crippling_Strike',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/e/ee/Crippling_strike_icon.png',
            level: '1',
            activation: 'Active',
            effects: '<ul><li>Target: <a href="/wiki/Hobbled" class="mw-redirect" title="Hobbled">Hobbled</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png" decoding="async" width="18" height="18" /></a>)</li><li>User: <a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a>, +25% damage (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a>)</li></ul>',
            speed: 'Average',
            duration: '10.0 seconds',
            description: 'The rogue attacks his or her enemy\'s ability to move around effectively, inflicting extra damage to and Hobbling any enemy successfully hit.',
        },
        {
            name: 'Dirty Fighting',
            link: 'https://pillarsofeternity.fandom.com/wiki/Dirty_Fighting',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/dc/Rogue_passive_icon.png',
            level: '3',
            activation: 'Passive',
            effects: '<ul><li>Self: 10% of <a href="/wiki/Hit" class="mw-redirect" title="Hit">Hits</a> converted to <a href="/wiki/Crit" class="mw-redirect" title="Crit">Crits</a></li></ul>',
            speed: '',
            duration: '',
            description: 'The rogue employs a variety of underhanded tactics, turning some of their Hits into Critical Hits.',
        },
        {
            name: 'Escape',
            link: 'https://pillarsofeternity.fandom.com/wiki/Escape',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/9e/Escape_icon.png',
            level: '3',
            activation: 'Active',
            effects: '<ul><li>+25 <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a></li><li>+25 <a href="/wiki/Reflex" title="Reflex"><img alt="Reflex" src="https://static.wikia.nocookie.net/eternitywiki/images/8/80/Reflex_icon.png" decoding="async" width="18" height="18" /></a></li></ul>',
            speed: 'Fast',
            duration: '10.0 seconds',
            description: 'Allows the rogue to break Engagement and expertly avoid the next attack, diving out of range to a specific location and granting a temporary defense bonus.',
        },
        {
            name: 'Reckless Assault',
            link: 'https://pillarsofeternity.fandom.com/wiki/Reckless_Assault',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/c/c7/Reckless_assault_icon.png',
            level: '3',
            activation: 'Modal',
            effects: '<ul><li>-8 <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a></li><li>+8 Melee <a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a></li><li>+20% Melee <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a></li></ul>',
            speed: 'Instant',
            duration: '',
            description: 'Causes the rogue to dive into battle without a second thought, lowering his or her Deflection but increasing Accuracy and weapon damage.',
        },
        {
            name: 'Deep Wounds',
            link: 'https://pillarsofeternity.fandom.com/wiki/Deep_Wounds',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/dc/Rogue_passive_icon.png',
            level: '5',
            activation: 'Passive',
            effects: '<ul><li>Target: 3 <a href="/wiki/Raw" class="mw-redirect" title="Raw">Raw</a> damage per 3 seconds</li></ul>',
            speed: '',
            duration: '10.0 seconds',
            description: 'Expertise in the art of pain leads all Slash, Pierce, and Crush damage caused by the rogue to also do Raw Damage over time.',
        },
        {
            name: 'Finishing Blow',
            link: 'https://pillarsofeternity.fandom.com/wiki/Finishing_Blow',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/0/0f/Finishing_blow_icon.png',
            level: '5',
            activation: 'Active',
            effects: '<ul><li><a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a>, +50% <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a>, +50% <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a> by percentage of <a href="/wiki/Endurance" class="mw-redirect" title="Endurance">Endurance</a> lost</li></ul>',
            speed: 'Average',
            duration: '',
            description: 'The rogue looks to finish off an injured opponent with a precise, deadly strike that increases in damage the less Endurance the target has.',
        },
        {
            name: 'Riposte',
            link: 'https://pillarsofeternity.fandom.com/wiki/Riposte',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/dc/Rogue_passive_icon.png',
            level: '5',
            activation: 'Passive',
            effects: '<ul><li>20% chance to counterattack attacks that target <a href="/wiki/Deflection" class="mw-redirect" title="Deflection">Deflection</a> that <a href="/wiki/Miss" class="mw-redirect" title="Miss">Miss</a></li><li>30% chance to counterattack attacks that target <a href="/wiki/Deflection" class="mw-redirect" title="Deflection">Deflection</a> that <a href="/wiki/Graze" class="mw-redirect" title="Graze">Graze</a></li><li>Only applies with Melee <a href="/wiki/Weapon" class="mw-redirect" title="Weapon">weapons</a> equipped</li></ul>',
            speed: '',
            duration: '',
            description: 'The rogue looks for openings to counterattack in combat. Incoming melee attacks that target Deflection and Miss or Graze have a chance of allowing an instant Full Attack Riposte. Only active with melee weapons equipped.',
        },
        {
            name: 'Adept Evasion',
            link: 'https://pillarsofeternity.fandom.com/wiki/Adept_Evasion',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/dc/Rogue_passive_icon.png',
            level: '7',
            activation: 'Passive',
            effects: '<ul><li>Self: +75% of incoming <a href="/wiki/Graze" class="mw-redirect" title="Graze">Grazes</a> converted to <a href="/wiki/Miss" class="mw-redirect" title="Miss">Misses</a> when defended by <a href="/wiki/Reflex" title="Reflex"><img alt="Reflex" src="https://static.wikia.nocookie.net/eternitywiki/images/8/80/Reflex_icon.png" decoding="async" width="18" height="18" /></a></li><li>Self: +50% of incoming <a href="/wiki/Hit" class="mw-redirect" title="Hit">Hits</a> converted to <a href="/wiki/Graze" class="mw-redirect" title="Graze">Grazes</a> when defended by <a href="/wiki/Reflex" title="Reflex"><img alt="Reflex" src="https://static.wikia.nocookie.net/eternitywiki/images/8/80/Reflex_icon.png" decoding="async" width="18" height="18" /></a></li></ul>',
            speed: '',
            duration: '',
            description: 'The rogue becomes especially skillful at dodging attacks, converting many Reflex Hits to Grazes.',
        },
        {
            name: 'Coordinated Positioning',
            link: 'https://pillarsofeternity.fandom.com/wiki/Coordinated_Positioning',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/b/b1/Coordinated_positioning_icon.png',
            level: '7',
            activation: 'Active',
            effects: '<ul><li>Switches position with one nearby target</li><li>Cancels <a href="/wiki/Engagement" class="mw-redirect" title="Engagement">Engagement</a> if in effect</li></ul>',
            speed: 'Fast',
            duration: '',
            description: 'In one quick move, the rogue instantly switches positions with one nearby target, canceling Engagement if in effect. Automatic when targeting an ally, otherwise must Hit vs. an enemy\'s Reflex.',
        },
        {
            name: 'Persistent Distraction',
            link: 'https://pillarsofeternity.fandom.com/wiki/Persistent_Distraction',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/dc/Rogue_passive_icon.png',
            level: '7',
            activation: 'Passive',
            effects: '<ul><li>When contributing to <a href="/wiki/Flanked" class="mw-redirect" title="Flanked">Flanked</a>, the victim is also <a href="/wiki/Distracted" class="mw-redirect" title="Distracted">Distracted</a></li></ul>',
            speed: '',
            duration: '',
            description: 'Whenever the rogue is contributing to the Flanked affliction on a target, the victim is also Distracted.',
        },
        {
            name: 'Fearsome Strike',
            link: 'https://pillarsofeternity.fandom.com/wiki/Fearsome_Strike',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/b/b8/Fearsome_strike_icon.png',
            level: '9',
            activation: 'Active',
            effects: '<ul><li>Foe Target: <a href="/wiki/Hobbled" class="mw-redirect" title="Hobbled">Hobbled</a>, <a href="/wiki/Weakened" class="mw-redirect" title="Weakened">Weakened</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png" decoding="async" width="18" height="18" /></a>)</li><li>User: <a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a>, +25% damage (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a>)</li></ul>',
            speed: 'Average',
            duration: '15.0 seconds',
            description: 'The rogue attempts to greatly hinder an opponent by targeting areas crucially important to their ability to fight, inflicting extra damage as well as Weakening and Hobbling the target.',
        },
        {
            name: 'Withering Strike',
            link: 'https://pillarsofeternity.fandom.com/wiki/Withering_Strike',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/e/ea/Withering_strike_icon.png',
            level: '9',
            activation: 'Active',
            effects: '<ul><li>Foe Target: <a href="/wiki/Weakened" class="mw-redirect" title="Weakened">Weakened</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png" decoding="async" width="18" height="18" /></a>)</li><li>User: <a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a>, +50% damage (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a>)</li></ul>',
            speed: 'Average',
            duration: '10.0 seconds',
            description: 'The rogue aims for a vital area, inflicting extra damage and Weakening the target.',
        },
        {
            name: 'Deathblows',
            link: 'https://pillarsofeternity.fandom.com/wiki/Deathblows',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/dc/Rogue_passive_icon.png',
            level: '11',
            activation: 'Passive',
            effects: '<ul><li>Self: +100% damage on <a href="/wiki/Sneak_Attack" title="Sneak Attack">Sneak Attacks</a></li></ul>',
            speed: '',
            duration: '',
            description: 'Allows the rogue to size up a target\'s battlefield position, making Sneak Attack more effective when the target is afflicted by two or more conditions that allow a Sneak Attack.',
        },
        {
            name: 'Smoke Cloud',
            link: 'https://pillarsofeternity.fandom.com/wiki/Smoke_Cloud',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/7/77/Smoke_cloud_icon.png',
            level: '11',
            activation: 'Active',
            effects: '<ul><li>Foe AoE: If successful: <a href="/wiki/Distracted" class="mw-redirect" title="Distracted">Distracted</a></li></ul>',
            speed: 'Fast',
            duration: '12.0 seconds',
            description: 'The rogue creates a small cloud of smoke that leaves adjacent enemies Distracted for a short duration.',
        },
        {
            name: 'Sap',
            link: 'https://pillarsofeternity.fandom.com/wiki/Sap',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/35/Sap_icon.png',
            level: '13',
            activation: 'Active',
            effects: '<ul><li>Target: <a href="/wiki/Stunned" class="mw-redirect" title="Stunned">Stunned</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Will" title="Will"><img alt="Will" src="https://static.wikia.nocookie.net/eternitywiki/images/9/96/Will_icon.png" decoding="async" width="18" height="18" /></a>)</li><li>User: <a href="/wiki/Primary_Attack?action=edit&amp;redlink=1" class="new" title="Primary Attack (page does not exist)">Primary Attack</a>, +30% damage (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> vs&#160;<a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a>)</li></ul>',
            speed: 'Average',
            duration: '5.0 seconds',
            description: 'The rogue performs a Primary Attack that does additional damage and can leave the target Stunned.',
        },
        {
            name: 'Shadow Step',
            link: 'https://pillarsofeternity.fandom.com/wiki/Shadow_Step',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/2/2c/Shadow_step_icon.png',
            level: '13',
            activation: 'Modal',
            effects: '<ul><li>+20% Melee <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a></li><li>+20% Ranged <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a></li></ul>',
            speed: 'Average',
            duration: '6.0 seconds',
            description: 'By stepping through the Between, a rogue is able to seemingly teleport across the battlefield for a few moments, returning to his or her starting position when the effect is ended.',
        },
        {
            name: 'Feign Death',
            link: 'https://pillarsofeternity.fandom.com/wiki/Feign_Death',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/6/6c/Feign_death_icon.png',
            level: '15',
            activation: 'Active',
            effects: '<ul><li>Self: Invisible, Immune to <a href="/wiki/Engagement" class="mw-redirect" title="Engagement">Engagement</a>, Untargetable, Break Engagements for 6 seconds</li><li>User: +20 <a href="/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png" decoding="async" width="16" height="16" /></a>, Untargetable, <a href="/wiki/Prone" class="mw-redirect" title="Prone">Prone</a>, <a href="/wiki/Damage_Shield?action=edit&amp;redlink=1" class="new" title="Damage Shield (page does not exist)">Damage Shield</a> for 10 seconds</li></ul>',
            speed: 'Instant',
            duration: '10.0 seconds',
            description: 'The rogue collapses to the ground and pretends to be out of a fight, regaining Endurance and biding his or her time until the moment is right to return to battle. When the rogue stands up, he or she becomes invisible for a short period of time.',
        },
    ],
    talents: []
};