const paladinPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/3/31/Paladin_passive_icon.png';

export default {
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
    abilities: [
        {
            name: 'Flames of Devotion',
            link: 'https://pillarsofeternity.fandom.com/wiki/Flames_of_Devotion',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/e/ed/Flames_of_devotion_icon.png',
            level: '1',
            activation: 'Active',
            effects: '<ul><li><a href="https://pillarsofeternity.fandom.com/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a></li><li>+50% <a href="https://pillarsofeternity.fandom.com/wiki/Burn" title="Burn"><img alt="Burn" src="https://static.wikia.nocookie.net/eternitywiki/images/a/aa/Burn_icon.png" decoding="async" width="18" height="18" /></a> damage</li></ul>',
            speed: 'Instant',
            duration: '',
            description: 'Calls upon the paladin\'s inner fire, causing their equipped weapons to burst into flame and adding Burn damage to their next attacks.',
        },
        {
            name: 'Lay on Hands',
            link: 'https://pillarsofeternity.fandom.com/wiki/Lay_on_Hands',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/a/a6/Lay_on_hands_icon.png',
            level: '1',
            activation: 'Active',
            effects: '<ul><li>Allied Target: +53.3 <a href="https://pillarsofeternity.fandom.com/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png" decoding="async" width="16" height="16" /></a> over time</li></ul>',
            speed: 'Average',
            duration: '5.0 seconds',
            description: 'Fueled solely by belief, the paladin is able to heal with the touch of his or her hands, recovering a substantial amount of Endurance for the paladin or an ally within range.',
        },
        {
            name: 'Zealous Charge',
            link: 'https://pillarsofeternity.fandom.com/wiki/Zealous_Charge',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/d3/Zealous_charge_icon.png',
            level: '3',
            activation: 'Modal',
            effects: '<ul><li>Friendly Aura: +2 <a href="https://pillarsofeternity.fandom.com/wiki/Move_Speed" title="Move Speed">Move Speed</a></li><li>Friendly Aura: +15 <a href="https://pillarsofeternity.fandom.com/wiki/Defense" title="Defenses"><img alt="Defenses" src="https://static.wikia.nocookie.net/eternitywiki/images/a/af/Defenses_icon.png" decoding="async" width="16" height="16" /></a> on <a href="https://pillarsofeternity.fandom.com/wiki/Disengagement" class="mw-redirect" title="Disengagement">Disengagement</a></li></ul>',
            speed: 'Instant',
            duration: '',
            description: 'Inspires the paladin and all nearby allies to charge fiercely into battle, increasing their Movement Speed and Disengagement Defense. Cannot be active with other Zealous auras.',
        },
        {
            name: 'Zealous Endurance',
            link: 'https://pillarsofeternity.fandom.com/wiki/Zealous_Endurance',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/a/a9/Zealous_endurance_icon.png',
            level: '3',
            activation: 'Modal',
            effects: '<ul><li>Friendly Aura: +3 <a href="https://pillarsofeternity.fandom.com/wiki/Damage_Reduction" title="Damage Reduction (DR)"><img alt="Damage Reduction (DR)" src="https://static.wikia.nocookie.net/eternitywiki/images/2/29/Damage_reduction_icon.png" decoding="async" width="16" height="16" /></a></li><li>Friendly Aura: +15% of incoming <a href="https://pillarsofeternity.fandom.com/wiki/Hit" class="mw-redirect" title="Hit">Hits</a> converted to <a href="https://pillarsofeternity.fandom.com/wiki/Graze" class="mw-redirect" title="Graze">Grazes</a></li></ul>',
            speed: 'Instant',
            duration: '',
            description: 'Fills the paladin and his or her allies with unshakable confidence, increasing their Damage Reduction and converting a portion of incoming Hits to Grazes. Cannot be active with other Zealous auras.',
        },
        {
            name: 'Zealous Focus',
            link: 'https://pillarsofeternity.fandom.com/wiki/Zealous_Focus',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/da/Zealous_focus_icon.png',
            level: '3',
            activation: 'Modal',
            effects: '<ul><li>Friendly Aura: +6 <a href="https://pillarsofeternity.fandom.com/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a></li><li>Friendly Aura: +15% of <a href="https://pillarsofeternity.fandom.com/wiki/Graze" class="mw-redirect" title="Graze">Grazes</a> converted to <a href="https://pillarsofeternity.fandom.com/wiki/Hit" class="mw-redirect" title="Hit">Hits</a></li></ul>',
            speed: 'Instant',
            duration: '',
            description: 'The paladin\'s intense and pure conviction instills clarity of purpose in him or her and all allies, increasing their Accuracy and converting a portion of Grazes to Hits. Cannot be active with other Zealous auras.',
        },
        {
            name: 'Inspiring Triumph',
            link: 'https://pillarsofeternity.fandom.com/wiki/Inspiring_Triumph',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/31/Paladin_passive_icon.png',
            level: '5',
            activation: 'Passive',
            effects: '<ul><li>Allied AoE: +7 All <a href="https://pillarsofeternity.fandom.com/wiki/Defense" title="Defenses"><img alt="Defenses" src="https://static.wikia.nocookie.net/eternitywiki/images/a/af/Defenses_icon.png" decoding="async" width="16" height="16" /></a></li></ul>',
            speed: 'Average',
            duration: '10.0 seconds',
            description: 'Inspires all allies in the vicinity when the paladin downs an enemy, providing a temporary bonus to all Defenses.',
        },
        {
            name: 'Liberating Exhortation',
            link: 'https://pillarsofeternity.fandom.com/wiki/Liberating_Exhortation',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/d5/Liberating_exhortation_icon.png',
            level: '5',
            activation: 'Active',
            effects: '<ul><li>Friendly Target: Hostile effects suspended</li></ul>',
            speed: 'Fast',
            duration: '20.0 seconds',
            description: 'Commands an ally to summon all their strength in order to temporarily ignore existing hostile effects. The effects will resume once Liberating Exhortation ends.',
        },
        {
            name: 'Sworn Enemy',
            link: 'https://pillarsofeternity.fandom.com/wiki/Sworn_Enemy',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/a/a7/Sworn_enemy_icon.png',
            level: '5',
            activation: 'Active',
            effects: '<ul><li>Foe Target: <a href="https://pillarsofeternity.fandom.com/wiki/Marked?action=edit&amp;redlink=1" class="new" title="Marked (page does not exist)">Marked</a></li><li>Self: +20% <a href="https://pillarsofeternity.fandom.com/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a> against <a href="https://pillarsofeternity.fandom.com/wiki/Marked?action=edit&amp;redlink=1" class="new" title="Marked (page does not exist)">Marked</a> targets</li><li>Self: +15 <a href="https://pillarsofeternity.fandom.com/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> against <a href="https://pillarsofeternity.fandom.com/wiki/Marked?action=edit&amp;redlink=1" class="new" title="Marked (page does not exist)">Marked</a> targets</li></ul>',
            speed: 'Average',
            duration: '',
            description: 'Marks an enemy as the focus of the paladin\'s righteous fury, granting Accuracy and Damage bonuses against the target until combat ends or the target goes down.',
        },
        {
            name: 'Aegis of Loyalty',
            link: 'https://pillarsofeternity.fandom.com/wiki/Aegis_of_Loyalty',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/31/Paladin_passive_icon.png',
            level: '7',
            activation: 'Passive',
            effects: '<ul><li>Self: -20 <a href="https://pillarsofeternity.fandom.com/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> for <a href="https://pillarsofeternity.fandom.com/wiki/Charmed" class="mw-redirect" title="Charmed">Charmed</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Confused" class="mw-redirect" title="Confused">Confused</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Dominated" class="mw-redirect" title="Dominated">Dominated</a> attackers</li><li>Self: Minimum damage against <a href="https://pillarsofeternity.fandom.com/wiki/Charmed" class="mw-redirect" title="Charmed">Charmed</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Confused" class="mw-redirect" title="Confused">Confused</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Dominated" class="mw-redirect" title="Dominated">Dominated</a> characters</li><li>Characters <a href="https://pillarsofeternity.fandom.com/wiki/Hit" class="mw-redirect" title="Hit">hit</a> by Self: Remove <a href="https://pillarsofeternity.fandom.com/wiki/Charmed" class="mw-redirect" title="Charmed">Charmed</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Confused" class="mw-redirect" title="Confused">Confused</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Dominated" class="mw-redirect" title="Dominated">Dominated</a> effects</li></ul>',
            speed: '',
            duration: '',
            description: 'Confused, Charmed, and Dominated characters have severe Accuracy penalties when attacking the paladin. Additionally, the paladin\'s attacks against such characters do minimal damage and always end the effect.',
        },
        {
            name: 'Coordinated Attacks',
            link: 'https://pillarsofeternity.fandom.com/wiki/Coordinated_Attacks',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/31/Paladin_passive_icon.png',
            level: '7',
            activation: 'Passive',
            effects: '<ul><li>Self: +10 <a href="https://pillarsofeternity.fandom.com/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16" /></a> granted to an ally attacking the same target</li></ul>',
            speed: '',
            duration: '',
            description: 'The paladin fights in perfect synergy with the closest ally attacking the same foe, providing the ally with an Accuracy bonus.',
        },
        {
            name: 'Deprive the Unworthy',
            link: 'https://pillarsofeternity.fandom.com/wiki/Deprive_the_Unworthy',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/1/16/Deprive_the_unworthy_icon.png',
            level: '7',
            activation: 'Active',
            effects: '<ul><li>Foe Target: Beneficial effects suspended</li></ul>',
            speed: 'Average',
            duration: '20.0 seconds',
            description: 'The paladin temporarily snuffs out all active beneficial effects on a single foe. The effects resume once Deprive the Unworthy ends.',
        },
        {
            name: 'Reviving Exhortation',
            link: 'https://pillarsofeternity.fandom.com/wiki/Reviving_Exhortation',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/4/40/Reviving_exhortation_icon.png',
            level: '7',
            activation: 'Active',
            effects: '<ul><li>Friendly Target: <a href="https://pillarsofeternity.fandom.com/wiki/Revive?action=edit&amp;redlink=1" class="new" title="Revive (page does not exist)">Revive</a> with 300 <a href="https://pillarsofeternity.fandom.com/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png" decoding="async" width="16" height="16" /></a></li><li>Friendly Target: -50 <a href="https://pillarsofeternity.fandom.com/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png" decoding="async" width="16" height="16" /></a> after 15 seconds</li></ul>',
            speed: 'Average',
            duration: '15.0 seconds',
            description: 'Commands an unconscious ally to get back up, giving a large, but temporary, spike to Endurance - some of which is lost after a short duration.',
        },
        {
            name: 'Hastening Exhortation',
            link: 'https://pillarsofeternity.fandom.com/wiki/Hastening_Exhortation',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/df/Hastening_exhortation_icon.png',
            level: '9',
            activation: 'Active',
            effects: '<ul><li>Allied Target: +20% <a href="https://pillarsofeternity.fandom.com/wiki/Attack_Speed" title="Attack Speed">Attack Speed</a></li></ul>',
            speed: 'Fast',
            duration: '30.0 seconds',
            description: 'Inspires urgency in one of the paladin\'s allies, increasing his or her Attack Speed.',
        },
        {
            name: 'Reinforcing Exhortation',
            link: 'https://pillarsofeternity.fandom.com/wiki/Reinforcing_Exhortation',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/0/0a/Reinforcing_exhortation_icon.png',
            level: '9',
            activation: 'Active',
            effects: '<ul><li>Allied Target: +25 <a href="https://pillarsofeternity.fandom.com/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18" /></a></li></ul>',
            speed: 'Fast',
            duration: '20.0 seconds',
            description: 'Commands an ally to redouble their efforts, improving their Deflection.',
        },
        {
            name: 'Righteous Soul',
            link: 'https://pillarsofeternity.fandom.com/wiki/Righteous_Soul',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/31/Paladin_passive_icon.png',
            level: '9',
            activation: 'Passive',
            effects: '<ul><li>+15 <a href="https://pillarsofeternity.fandom.com/wiki/Defense" title="Defenses"><img alt="Defenses" src="https://static.wikia.nocookie.net/eternitywiki/images/a/af/Defenses_icon.png" decoding="async" width="16" height="16" /></a> against <a href="https://pillarsofeternity.fandom.com/wiki/Charmed" class="mw-redirect" title="Charmed">Charmed</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Dominated" class="mw-redirect" title="Dominated">Dominated</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Frightened" class="mw-redirect" title="Frightened">Frightened</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Terrified" class="mw-redirect" title="Terrified">Terrified</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Poison" class="mw-redirect" title="Poison">Poison</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Disease?action=edit&amp;redlink=1" class="new" title="Disease (page does not exist)">Disease</a> attacks</li><li>-5 seconds duration of <a href="https://pillarsofeternity.fandom.com/wiki/Charmed" class="mw-redirect" title="Charmed">Charmed</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Dominated" class="mw-redirect" title="Dominated">Dominated</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Frightened" class="mw-redirect" title="Frightened">Frightened</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Terrified" class="mw-redirect" title="Terrified">Terrified</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Poison" class="mw-redirect" title="Poison">Poison</a>, <a href="https://pillarsofeternity.fandom.com/wiki/Disease?action=edit&amp;redlink=1" class="new" title="Disease (page does not exist)">Disease</a></li></ul>',
            speed: '',
            duration: '',
            description: 'The paladin\'s pure soul resists all invading forces, granting a bonus to defense against Poison and Disease as well as the Charmed, Dominated, Frightened and Terrified effects - these effects also have their durations reduced by 5 seconds.',
        },
        {
            name: 'Healing Chain',
            link: 'https://pillarsofeternity.fandom.com/wiki/Healing_Chain',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/6/60/Healing_chain_icon.png',
            level: '11',
            activation: 'Active',
            effects: '<ul><li>Allied Target: +50 <a href="https://pillarsofeternity.fandom.com/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png" decoding="async" width="16" height="16" /></a></li><li>Allied Jump Targets (x5): +50 <a href="https://pillarsofeternity.fandom.com/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png" decoding="async" width="16" height="16" /></a></li></ul>',
            speed: 'Average',
            duration: '',
            description: 'The paladin targets a single ally for healing, but the effect continues to jump between allies up to six times (including the initial hit).',
        },
        {
            name: 'Abjuration',
            link: 'https://pillarsofeternity.fandom.com/wiki/Abjuration',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/6/6f/Abjuration_icon.png',
            level: '13',
            activation: 'Active',
            effects: '<ul><li><a href="https://pillarsofeternity.fandom.com/wiki/Spirit" class="mw-redirect" title="Spirit">Spirit</a>/Summoned Creature: Destroyed if lower level than paladin</li><li><a href="https://pillarsofeternity.fandom.com/wiki/Spirit" class="mw-redirect" title="Spirit">Spirit</a>/Summoned Creature: 65-75 <a href="https://pillarsofeternity.fandom.com/wiki/Raw" class="mw-redirect" title="Raw">Raw</a> <a href="https://pillarsofeternity.fandom.com/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a> if equal of higher level than paladin</li></ul>',
            speed: 'Average',
            duration: '',
            description: 'Through force of will, the paladin can destroy any spirit or summoned creature below the paladin\'s level. Spirits and summoned creatures equal to or greater than the paladin\'s level take Raw damage.',
        },
        {
            name: 'Sacred Immolation',
            link: 'https://pillarsofeternity.fandom.com/wiki/Sacred_Immolation',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/4/44/Sacred_immolation_icon.png',
            level: '13',
            activation: 'Active',
            effects: '<ul><li>Self: 5 <a href="https://pillarsofeternity.fandom.com/wiki/Raw" class="mw-redirect" title="Raw">Raw</a> <a href="https://pillarsofeternity.fandom.com/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png" decoding="async" width="18" height="18" /></a></li><li>Foe AoE: 20-30 <a href="https://pillarsofeternity.fandom.com/wiki/Burn" title="Burn"><img alt="Burn" src="https://static.wikia.nocookie.net/eternitywiki/images/a/aa/Burn_icon.png" decoding="async" width="18" height="18" /></a> damage</li><li>Allied AoE: +10 <a href="https://pillarsofeternity.fandom.com/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png" decoding="async" width="16" height="16" /></a></li></ul>',
            speed: 'Average',
            duration: '30.0 seconds',
            description: 'The paladin focuses his or her faith and self-immolates in blue flame.  Each time the ability pulses, the paladin takes a small amount of Raw damage, but enemies in the area take Burn damage.  Allies receive a small amount of Endurance.',
        },
    ],
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
    talents: [
        {
            name: 'Critical Focus',
            description: 'Allies notice the paladin\'s zeal and become thoroughly inspired by it. Allies affected by Zealous Focus convert 5% of what would have been ordinary hits to Critical Hits.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Critical_Focus',
            imageLink: paladinPassiveImageLink,
            requiredAbility: 'Zealous Focus'
        },
        {
            name: 'Deep Faith',
            effects: '<ul><li>+2 <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png" decoding="async" width="18" height="18"></a></li><li>+3 <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png" decoding="async" width="18" height="18"></a></li><li>+3 <a href="/wiki/Reflex" title="Reflex"><img alt="Reflex" src="https://static.wikia.nocookie.net/eternitywiki/images/8/80/Reflex_icon.png" decoding="async" width="18" height="18"></a></li><li>+3 <a href="/wiki/Will" title="Will"><img alt="Will" src="https://static.wikia.nocookie.net/eternitywiki/images/9/96/Will_icon.png" decoding="async" width="18" height="18"></a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Deep_Faith',
            imageLink: paladinPassiveImageLink
        },
        {
            name: 'Greater Lay on Hands',
            effects: '<ul><li>+26.7 <a href="/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png" decoding="async" width="16" height="16"></a> (base) over time</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Greater_Lay_on_Hands',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/6/6f/Lay_on_hands_2_icon.png',
            requiredAbility: 'Lay on Hands'
        },
        {
            name: 'Intense Flames',
            effects: '<ul><li>+25% <a href="/wiki/Burn" title="Burn"><img alt="Burn" src="https://static.wikia.nocookie.net/eternitywiki/images/a/aa/Burn_icon.png" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Intense_Flames',
            imageLink: paladinPassiveImageLink,
            requiredAbility: 'Flames of Devotion'
        },
        {
            name: 'Untroubled Faith',
            effects: '<ul><li>Negates <a href="/wiki/Disposition" title="Disposition">disposition</a> penalties to <a href="/wiki/Faith_And_Conviction" title="Faith And Conviction">Faith And Conviction</a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Untroubled_Faith_(Paladin)',
            imageLink: paladinPassiveImageLink
        },
        {
            name: 'The Black Path',
            description: 'When the paladin defeats an opponent, nearby enemies are Frightened.',
            link: 'https://pillarsofeternity.fandom.com/wiki/The_Black_Path',
            imageLink: paladinPassiveImageLink,
            order: 'Bleak Walkers'
        },
        {
            name: 'Remember Rakhan Field',
            effects: '<ul><li>+25% <a href="/wiki/Corrode" title="Corrode"><img alt="Corrode" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Corrode_icon.png" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Remember_Rakhan_Field',
            imageLink: paladinPassiveImageLink,
            order: 'Bleak Walkers',
            requiredAbility: 'Flames of Devotion'
        },
        {
            name: 'Inspiring Liberation',
            description: 'Whenever the paladin uses Liberating Exhortation on an ally, the ally gains an Accuracy bonus.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Inspiring_Liberation',
            imageLink: paladinPassiveImageLink,
            order: 'Darcozzi Paladini',
            requiredAbility: 'Liberating Exhortation'
        },
        {
            name: 'Fires of Darcozzi Palace',
            description: 'Whenever the paladin uses Flames of Devotion, he or she gains a weak form of Flame Shield.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Fires_of_Darcozzi_Palace',
            imageLink: paladinPassiveImageLink,
            order: 'Darcozzi Paladini',
            requiredAbility: 'Flames of Devotion'
        },
        {
            name: 'Vielo Vidòrio',
            description: 'When the paladin uses Flames of Devotion, nearby allies gain increased Attack Speed.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Vielo_Vid%C3%B2rio',
            imageLink: paladinPassiveImageLink,
            order: 'Frermàs mes Canc Suolias',
            requiredAbility: 'Flames of Devotion'
        },
        {
            name: 'Wrath of Five Suns',
            description: 'Whenever the paladin uses Sworn Enemy, five orbs of flame leap from his or her hand and fly toward the target.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Wrath_of_Five_Suns',
            imageLink: paladinPassiveImageLink,
            order: 'Frermàs mes Canc Suolias',
            requiredAbility: 'Sworn Enemy'
        },
        {
            name: 'Enduring Flames',
            description: 'The paladin\'s Flames of Devotion do burning damage over time',
            link: 'https://pillarsofeternity.fandom.com/wiki/Enduring_Flames',
            imageLink: paladinPassiveImageLink,
            order: 'Goldpact Knights',
            requiredAbility: 'Flames of Devotion'
        },
        {
            name: 'Bond of Duty',
            description: 'Whenever the paladin uses Liberating Exhortation on an ally, the ally gains temporary immunity to the Charmed, Confused, and Dominated afflictions.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Bond_of_Duty',
            imageLink: paladinPassiveImageLink,
            order: 'Goldpact Knights',
            requiredAbility: 'Liberating Exhortation'
        },
        {
            name: 'Strange Mercy',
            description: 'When the paladin defeats an opponent, nearby allies gain Endurance.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Strange_Mercy',
            imageLink: paladinPassiveImageLink,
            order: 'Kind Wayfarers'
        },
        {
            name: 'The Sword and the Shepherd',
            description: 'The paladin\'s Flames of Devotion heal Endurance in nearby allies.',
            link: 'https://pillarsofeternity.fandom.com/wiki/The_Sword_and_the_Shepherd',
            imageLink: paladinPassiveImageLink,
            order: 'Kind Wayfarers',
            requiredAbility: 'Flames of Devotion'
        },
        {
            name: 'Shielding Flames',
            description: 'The paladin\'s Flames of Devotion grant a temporary Deflection bonus to nearby allies.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Shielding_Flames',
            imageLink: paladinPassiveImageLink,
            order: 'Shieldbearers of St. Elcga',
            requiredAbility: 'Flames of Devotion'
        },
        {
            name: 'Shielding Touch',
            description: 'Whenever the paladin uses Lay on Hands on an ally, the ally gains a Deflection bonus.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Shielding_Touch',
            imageLink: paladinPassiveImageLink,
            order: 'Shieldbearers of St. Elcga',
            requiredAbility: 'Lay on Hands'
        }
    ]
};
