const commonPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/0/0f/Generic_passive_icon.png';
const barbarianPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png';
const chanterPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/9/9d/Chanter_passive_icon.png';
const cipherPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/3/3f/Cipher_passive_icon.png';
const druidPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/5/52/Druid_passive_icon.png';
const fighterPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/8/8d/Fighter_passive_icon.png';
const monkPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png';
const paladinPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/3/31/Paladin_passive_icon.png';

export default {
    barbarian: [
        {
            name: 'Accurate Carnage',
            description: 'The barbarian learns to line up his or her most savage blows, improving the Accuracy of secondary attacks from Carnage.',
            effects: '<ul><li>+5 <a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png" decoding="async" width="16" height="16"></a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Accurate_Carnage',
            imageLink: barbarianPassiveImageLink
        },
        {
            name: 'Greater Frenzy',
            requiredAbility: 'Frenzy',
            description: 'Cultivates the barbarian\'s inner rage, granting additional bonuses while under the effects of Frenzy.',
            effects: '<ul><li>+2 <a href="/wiki/Might" title="Might">Might</a></li><li>+2 <a href="/wiki/Constitution" title="Constitution">Constitution</a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Greater_Frenzy',
            imageLink: barbarianPassiveImageLink
        },
        {
            name: 'Powerful Sprint',
            requiredAbility: 'Wild Sprint',
            description: 'The barbarian\'s charges become even more ferocious. Speed of Wild Sprint is increased.',
            effects: '<ul><li>+2 <a href="/wiki/Move_Speed" title="Move Speed">Move Speed</a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Powerful_Sprint',
            imageLink: barbarianPassiveImageLink
        },
        {
            name: 'Stalwart Defiance',
            requiredAbility: 'Savage Defiance',
            description: 'Strengthens Savage Defiance, causing it to provide a bonus to all defenses.',
            effects: '<ul><li>+10 <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235317" decoding="async" width="18" height="18"></a></li><li>+10 <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235327" decoding="async" width="18" height="18"></a></li><li>+10 <a href="/wiki/Reflex" title="Reflex"><img alt="Reflex" src="https://static.wikia.nocookie.net/eternitywiki/images/8/80/Reflex_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235341" decoding="async" width="18" height="18"></a></li><li>+10 <a href="/wiki/Will" title="Will"><img alt="Will" src="https://static.wikia.nocookie.net/eternitywiki/images/9/96/Will_icon.png/revision/latest/scale-to-width-down/18?cb=20170909202632" decoding="async" width="18" height="18"></a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Stalwart_Defiance',
            imageLink: barbarianPassiveImageLink
        },
        {
            name: 'Barbaric Blow',
            description: 'The barbarian deals a massive blow, causing additional Crits and extra damage on Crits. Carnage is not affected.',
            effects: '<ul><li><a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a> (<a href="/wiki/Accuracy" title="Accuracy"><img alt="Accuracy" src="https://static.wikia.nocookie.net/eternitywiki/images/d/df/Accuracy_icon.png/revision/latest/scale-to-width-down/16?cb=20170928235244" decoding="async" width="16" height="16"></a> vs <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235317" decoding="async" width="18" height="18"></a>)</li><li>+25% Ability Area of Effect</li><li>+30% of <a href="/wiki/Hit" class="mw-redirect" title="Hit">Hits</a> converted to <a href="/wiki/Crit" class="mw-redirect" title="Crit">Crits</a></li><li>+0.5 to <a href="/wiki/Crit" class="mw-redirect" title="Crit">Crit</a> damage multiplier</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Barbaric_Blow',
            imageLink: barbarianPassiveImageLink
        }
    ],
    chanter: [
        {
            name: 'Ancient Memory',
            description: 'Invokes a primal energy, causing allies within range to benefit from constant Endurance regeneration while the Chanter is chanting.',
            effects: '<ul><li>Allied AoE: +2 <a href="/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png/revision/latest/scale-to-width-down/16?cb=20170928235322" decoding="async" width="16" height="16"></a> (base) +0.7 every 3 levels after 1</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Ancient_Memory',
            imageLink: chanterPassiveImageLink
        },
        {
            name: 'Beloved Spirits',
            description: 'Improves the chanter\'s connection to the soul fragments they employ, increasing Ancient Memory\'s healing capability.',
            effects: '<ul><li>Allied AoE: +0.8 <a href="/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png/revision/latest/scale-to-width-down/16?cb=20170928235322" decoding="async" width="16" height="16"></a> (base) +0.4 every 3 levels after 1</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Beloved_Spirits',
            imageLink: chanterPassiveImageLink,
            requiredTalent: 'Ancient Memory'
        }
    ],
    cipher: [
        {
            name: 'Biting Whip',
            effects: 'As long as the cipher\'s <a href="/wiki/Focus" class="mw-redirect" title="Focus">Focus</a> is below maximum, their <a href="/wiki/Soul_Whip" title="Soul Whip">Soul Whip</a> deals 20% more damage in melee and ranged <a href="/wiki/Combat" title="Combat">combat</a>.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Biting_Whip',
            imageLink: cipherPassiveImageLink
        },
        {
            name: 'Psychic Backlash',
            effects: 'Whenever the cipher is attacked, targeting their Will <a href="/wiki/Defense" title="Defense">defense</a>, the attacker may get <a href="/wiki/Stunned" class="mw-redirect" title="Stunned">Stunned</a> themselves, with the cipher\'s <a href="/wiki/Accuracy" title="Accuracy">Accuracy</a> -10 counting against their own Will.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Psychic_Backlash',
            imageLink: cipherPassiveImageLink
        },
        {
            name: 'Brutal Backlash',
            effects: 'Whenever the cipher\'s <a href="/wiki/Psychic_Backlash" title="Psychic Backlash">Psychic Backlash</a> talent strikes, this brutal upgrade adds 20 <a href="/wiki/Raw" class="mw-redirect" title="Raw">Raw</a> damage to the <a href="/wiki/Stunned" class="mw-redirect" title="Stunned">stunned effect</a>.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Brutal_Backlash',
            imageLink: cipherPassiveImageLink,
            requiredTalent: 'Psychic Backlash'
        },
        {
            name: 'Draining Whip',
            effects: 'As long as the cipher\'s <a href="/wiki/Focus" class="mw-redirect" title="Focus">focus</a> hasn\'t reached its maximum, their <a href="/wiki/Soul_Whip" title="Soul Whip">Soul Whip</a> will generate 33% more <a href="/wiki/Focus" class="mw-redirect" title="Focus">Focus</a> while in <a href="/wiki/Combat" title="Combat">combat</a>.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Draining_Whip',
            imageLink: cipherPassiveImageLink
        },
        {
            name: 'Greater Focus',
            effects: 'The cipher\'s maximum <a href="/wiki/Focus" class="mw-redirect" title="Focus">Focus</a> is increased by 10.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Greater_Focus',
            imageLink: cipherPassiveImageLink
        }
    ],
    druid: [
        {
            name: 'Wildstrike Shock',
            effects: '<ul><li>+30% <a href="/wiki/Shock" title="Shock"><img alt="Shock" src="https://static.wikia.nocookie.net/eternitywiki/images/8/89/Shock_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235346" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Wildstrike_Shock',
            imageLink: druidPassiveImageLink,
            exceptionalTalents: ['Wildstrike Burn', 'Wildstrike Freeze', 'Wildstrike Corrode']
        },
        {
            name: 'Wildstrike Burn',
            effects: '<ul><li>+30% <a href="/wiki/Burn" title="Burn"><img alt="Burn" src="https://static.wikia.nocookie.net/eternitywiki/images/a/aa/Burn_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235248" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Wildstrike_Burn',
            imageLink: druidPassiveImageLink,
            exceptionalTalents: ['Wildstrike Shock', 'Wildstrike Freeze', 'Wildstrike Corrode']
        },
        {
            name: 'Wildstrike Freeze',
            effects: '<ul><li>+30% <a href="/wiki/Freeze" title="Freeze"><img alt="Freeze" src="https://static.wikia.nocookie.net/eternitywiki/images/9/95/Freeze_icon.png/revision/latest/scale-to-width-down/18?cb=20170909202622" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Wildstrike_Freeze',
            imageLink: druidPassiveImageLink,
            exceptionalTalents: ['Wildstrike Shock', 'Wildstrike Burn', 'Wildstrike Corrode']
        },
        {
            name: 'Wildstrike Corrode',
            effects: '<ul><li>+30% <a href="/wiki/Corrode" title="Corrode"><img alt="Corrode" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Corrode_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235258" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Wildstrike_Corrode',
            imageLink: druidPassiveImageLink,
            exceptionalTalents: ['Wildstrike Shock', 'Wildstrike Burn', 'Wildstrike Freeze']
        },
        {
            name: 'Greater Wildstrike Shock',
            effects: '<ul><li>+15% <a href="/wiki/Shock" title="Shock"><img alt="Shock" src="https://static.wikia.nocookie.net/eternitywiki/images/8/89/Shock_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235346" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Greater_Wildstrike_Shock',
            imageLink: druidPassiveImageLink,
            requiredTalent: 'Wildstrike Shock'
        },
        {
            name: 'Greater Wildstrike Burn',
            effects: '<ul><li>+15% <a href="/wiki/Burn" title="Burn"><img alt="Burn" src="https://static.wikia.nocookie.net/eternitywiki/images/a/aa/Burn_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235248" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Greater_Wildstrike_Burn',
            imageLink: druidPassiveImageLink,
            requiredTalent: 'Wildstrike Burn'
        },
        {
            name: 'Greater Wildstrike Freeze',
            effects: '<ul><li>+15% <a href="/wiki/Freeze" title="Freeze"><img alt="Freeze" src="https://static.wikia.nocookie.net/eternitywiki/images/9/95/Freeze_icon.png/revision/latest/scale-to-width-down/18?cb=20170909202622" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Greater_Wildstrike_Freeze',
            imageLink: druidPassiveImageLink,
            requiredTalent: 'Wildstrike Freeze'
        },
        {
            name: 'Greater Wildstrike Corrode',
            effects: '<ul><li>+15% <a href="/wiki/Corrode" title="Corrode"><img alt="Corrode" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Corrode_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235258" decoding="async" width="18" height="18"></a> damage</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Greater_Wildstrike_Corrode',
            imageLink: druidPassiveImageLink,
            requiredTalent: 'Wildstrike Corrode'
        },
        {
            name: 'Bonus 1st Level Spell',
            description: 'Gain an extra spell cast of level 1 spells.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Bonus_1st_Level_Spell',
            imageLink: commonPassiveImageLink
        },
        {
            name: 'Bonus 2nd Level Spell',
            description: 'Gain an extra spell cast of level 2 spells.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Bonus_2nd_Level_Spell',
            imageLink: commonPassiveImageLink
        },
        {
            name: 'Bonus 3rd Level Spell',
            description: 'Gain an extra spell cast of level 3 spells.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Bonus_3rd_Level_Spell',
            imageLink: commonPassiveImageLink
        },
        {
            name: 'Bonus 4th Level Spell',
            description: 'Gain an extra spell cast of level 4 spells.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Bonus_4th_Level_Spell',
            imageLink: commonPassiveImageLink
        }
    ],
    fighter: [
        {
            name: 'Bonus Knock Down',
            description: 'Grants the fighter an additional use of Knock Down per encounter.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Bonus_Knock_Down',
            imageLink: fighterPassiveImageLink,
            requiredAbility: 'Knock Down'
        },
        {
            name: 'Wary Defender',
            effects: 'Increases the fighter\'s awareness while in Defender mode, granting a +5 bonus to Fortitude, Reflexes, and Will.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Wary_Defender',
            imageLink: fighterPassiveImageLink,
            requiredAbility: 'Defender'
        },
        {
            name: 'Rapid Recovery',
            effects: '<ul><li>+32 <a href="/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png/revision/latest/scale-to-width-down/16?cb=20170928235322" decoding="async" width="16" height="16"></a> over time (base)</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Rapid_Recovery',
            imageLink: fighterPassiveImageLink
        },
        {
            name: 'Weapon Mastery: Adventurer',
            effects: '<ul><li>+10% <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235308" decoding="async" width="18" height="18"></a> with <a href="/wiki/Pollaxe" title="Pollaxe">Pollaxe</a>, <a href="/wiki/Estoc" title="Estoc">Estoc</a>, <a href="/wiki/Flail" title="Flail">Flail</a>, <a href="/wiki/Wand" title="Wand">Wand</a>,&nbsp;<a href="/wiki/War_Bow" title="War Bow">War Bow</a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Weapon_Mastery:_Adventurer',
            imageLink: fighterPassiveImageLink,
            requiredAbility: 'Weapon Specialization: Adventurer'
        },
        {
            name: 'Weapon Mastery: Knight',
            effects: '<ul><li>+10% <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235308" decoding="async" width="18" height="18"></a> with <a href="/wiki/Battle_Axe" title="Battle Axe">Battle Axe</a>, <a href="/wiki/Sword" title="Sword">Sword</a>, <a href="/wiki/Morning_Star" title="Morning Star">Morning Star</a>, <a href="/wiki/Crossbow" title="Crossbow">Crossbow</a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Weapon_Mastery: Knight',
            imageLink: fighterPassiveImageLink,
            requiredAbility: 'Weapon Specialization: Knight'
        },
        {
            name: 'Weapon Mastery: Noble',
            effects: '<ul><li>+10% <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235308" decoding="async" width="18" height="18"></a> with <a href="/wiki/Dagger" title="Dagger">Dagger</a>, <a href="/wiki/Rapier" title="Rapier">Rapier</a>, <a href="/wiki/Mace" title="Mace">Mace</a>, <a href="/wiki/Scepter" title="Scepter">Scepter</a>, <a href="/wiki/Rod" title="Rod">Rod</a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Weapon_Mastery: Noble',
            imageLink: fighterPassiveImageLink,
            requiredAbility: 'Weapon Specialization: Noble'
        },
        {
            name: 'Weapon Mastery: Peasant',
            effects: '<ul><li>+10% <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235308" decoding="async" width="18" height="18"></a> with <a href="/wiki/Hatchet" title="Hatchet">Hatchet</a>, <a href="/wiki/Spear" title="Spear">Spear</a>, <a href="/wiki/Quarterstaff" title="Quarterstaff">Quarterstaff</a>, <a href="/wiki/Hunting_Bow" title="Hunting Bow">Hunting Bow</a>, <a href="/wiki/Unarmed" class="mw-redirect" title="Unarmed">Unarmed</a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Weapon_Mastery: Peasant',
            imageLink: fighterPassiveImageLink,
            requiredAbility: 'Weapon Specialization: Peasant'
        },
        {
            name: 'Weapon Mastery: Ruffian',
            effects: '<ul><li>+10% <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235308" decoding="async" width="18" height="18"></a> with <a href="/wiki/Sabre" title="Sabre">Sabre</a>, <a href="/wiki/Stiletto" title="Stiletto">Stiletto</a>, <a href="/wiki/Club" title="Club">Club</a>, <a href="/wiki/Pistol" title="Pistol">Pistol</a>, <a href="/wiki/Blunderbuss" title="Blunderbuss">Blunderbuss</a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Weapon_Mastery: Ruffian',
            imageLink: fighterPassiveImageLink,
            requiredAbility: 'Weapon Specialization: Ruffian'
        },
        {
            name: 'Weapon Mastery: Soldier',
            effects: '<ul><li>+10% <a href="/wiki/Damage" title="Damage"><img alt="Damage" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e2/Damage_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235308" decoding="async" width="18" height="18"></a> with <a href="/wiki/Great_Sword" title="Great Sword">Great Sword</a>, <a href="/wiki/Pike" title="Pike">Pike</a>, <a href="/wiki/War_Hammer" title="War Hammer">War Hammer</a>, <a href="/wiki/Arbalest" title="Arbalest">Arbalest</a>, <a href="/wiki/Arquebus" title="Arquebus">Arquebus</a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Weapon_Mastery: Soldier',
            imageLink: fighterPassiveImageLink,
            requiredAbility: 'Weapon Specialization: Soldier'
        },
    ],
    monk: [
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
    ],
    paladin: [
        {
            name: 'Critical Focus',
            description: 'Allies notice the paladin\'s zeal and become thoroughly inspired by it. Allies affected by Zealous Focus convert 5% of what would have been ordinary hits to Critical Hits.',
            link: 'https://pillarsofeternity.fandom.com/wiki/Critical_Focus',
            imageLink: paladinPassiveImageLink,
            requiredAbility: 'Zealous Focus'
        },
        {
            name: 'Deep Faith',
            effects: '<ul><li>+2 <a href="/wiki/Deflection" title="Deflection"><img alt="Deflection" src="https://static.wikia.nocookie.net/eternitywiki/images/3/3e/Deflection_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235317" decoding="async" width="18" height="18"></a></li><li>+3 <a href="/wiki/Fortitude" title="Fortitude"><img alt="Fortitude" src="https://static.wikia.nocookie.net/eternitywiki/images/b/b9/Fortitude_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235327" decoding="async" width="18" height="18"></a></li><li>+3 <a href="/wiki/Reflex" title="Reflex"><img alt="Reflex" src="https://static.wikia.nocookie.net/eternitywiki/images/8/80/Reflex_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235341" decoding="async" width="18" height="18"></a></li><li>+3 <a href="/wiki/Will" title="Will"><img alt="Will" src="https://static.wikia.nocookie.net/eternitywiki/images/9/96/Will_icon.png/revision/latest/scale-to-width-down/18?cb=20170909202632" decoding="async" width="18" height="18"></a></li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Deep_Faith',
            imageLink: paladinPassiveImageLink
        },
        {
            name: 'Greater Lay on Hands',
            effects: '<ul><li>+26.7 <a href="/wiki/Endurance" title="Endurance"><img alt="Endurance" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Endurance_icon.png/revision/latest/scale-to-width-down/16?cb=20170928235322" decoding="async" width="16" height="16"></a> (base) over time</li></ul>',
            link: 'https://pillarsofeternity.fandom.com/wiki/Greater_Lay_on_Hands',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/6/6f/Lay_on_hands_2_icon.png',
            requiredAbility: 'Lay on Hands'
        },
        {
            name: 'Intense Flames',
            effects: '<ul><li>+25% <a href="/wiki/Burn" title="Burn"><img alt="Burn" src="https://static.wikia.nocookie.net/eternitywiki/images/a/aa/Burn_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235248" decoding="async" width="18" height="18"></a> damage</li></ul>',
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
            effects: '<ul><li>+25% <a href="/wiki/Corrode" title="Corrode"><img alt="Corrode" src="https://static.wikia.nocookie.net/eternitywiki/images/e/e8/Corrode_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235258" decoding="async" width="18" height="18"></a> damage</li></ul>',
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
