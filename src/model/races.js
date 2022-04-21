export default [
    {
        name: 'Human',
        ability: {
            name: 'Fighting Spirit',
            link: 'https://pillarsofeternity.fandom.com/wiki/Fighting_Spirit',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/7/7a/Race_human_icon.png',
            description: 'Whenever a folk is below 50% Endurance, they gain a bonus to Accuracy and damage.'
        },
        attributeBonuses: {
            might: +1,
            resolve: +1
        }
    },
    {
        name: 'Wood Elf',
        ability: {
            name: 'Distant Advantage',
            link: 'https://pillarsofeternity.fandom.com/wiki/Distant_Advantage',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/4/4e/Race_elf_icon.png',
            effects: 'Self: +5 <a href="/wiki/Accuracy" title="Accuracy">Accuracy</a>, <a href="/wiki/Deflection" class="mw-redirect" title="Deflection">Deflection</a>, <a href="/wiki/Reflex" class="mw-redirect" title="Reflex">Reflex</a> against distant enemies'
        },
        attributeBonuses: {
            dexterity: +1,
            perception: +1
        }
    },
    {
        name: 'Pale Elf',
        ability: {
            name: 'Elemental Endurance',
            link: 'https://pillarsofeternity.fandom.com/wiki/Elemental_Endurance',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/4/4e/Race_elf_icon.png',
            effects: 'Self: +10 <a href="/wiki/Damage_Reduction" title="Damage Reduction">Damage Reduction</a> (<a href="/wiki/Burn" class="mw-redirect" title="Burn">Burn</a>, <a href="/wiki/Freeze" class="mw-redirect" title="Freeze">Freeze</a>)'
        },
        attributeBonuses: {
            dexterity: +1,
            perception: +1
        }
    },
    {
        name: 'Mountain Dwarf',
        ability: {
            name: 'Hale and Hardy',
            link: 'https://pillarsofeternity.fandom.com/wiki/Hale_and_Hardy',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/8/8f/Race_dwarf_icon.png',
            effects: 'Self: +20 <a href="/wiki/Defense" title="Defense">Defense</a> against <a href="/wiki/Status_effects" title="Status effects">Poison</a>, <a href="/wiki/Status_effects" title="Status effects">Disease</a> attacks'
        },
        attributeBonuses: {
            might: +2,
            const: +1,
            dexterity: -1
        }
    },
    {
        name: 'Boreal Dwarf',
        ability: {
            name: 'Hunter\'s Instincts',
            link: 'https://pillarsofeternity.fandom.com/wiki/Hunter%27s_Instincts',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/8/8f/Race_dwarf_icon.png',
            effects: '+15 <a href="/wiki/Accuracy" title="Accuracy">Accuracy</a> against <a href="/wiki/Primordial" class="mw-redirect" title="Primordial">Primordial</a> and <a href="/wiki/Wilder" class="mw-redirect" title="Wilder">Wilder</a> enemies.'
        },
        attributeBonuses: {
            might: +2,
            const: +1,
            dexterity: -1
        }
    },
    {
        name: 'Coastal Aumaua',
        ability: {
            name: 'Towering Physique',
            link: 'https://pillarsofeternity.fandom.com/wiki/Towering_Physique',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/b/b5/Race_aumaua_icon.png',
            effects: '+20 <a href="/wiki/Defense" title="Defense">Defense</a> against <a href="/wiki/Stunned" class="mw-redirect" title="Stunned">Stunned</a>, <a href="/wiki/Prone" class="mw-redirect" title="Prone">Prone</a> attacks'
        },
        attributeBonuses: {
            might: +2
        }
    },
    {
        name: 'Island Aumaua',
        ability: {
            name: 'Armed to the Teeth',
            link: 'https://pillarsofeternity.fandom.com/wiki/Armed_to_the_Teeth',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/b/b5/Race_aumaua_icon.png',
            effects: 'Weapon Sets: +1'
        },
        attributeBonuses: {
            might: +2
        }
    },
    {
        name: 'Hearth Orlan',
        ability: {
            name: 'Minor Threat',
            link: 'https://pillarsofeternity.fandom.com/wiki/Minor_Threat',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/0/00/Race_orlan_icon.png',
            effects: '+10% of <a href="/wiki/Hits" class="mw-redirect" title="Hits">Hits</a> converted to <a href="/wiki/Crits" class="mw-redirect" title="Crits">Crits</a> when attacking the same target as an ally'
        },
        attributeBonuses: {
            might: -1,
            perception: +2,
            resolve: +1
        }
    },
    {
        name: 'Wild Orlan',
        ability: {
            name: 'Defiant Resolve',
            link: 'https://pillarsofeternity.fandom.com/wiki/Defiant_Resolve',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/0/00/Race_orlan_icon.png',
            effects: '+10 <a href="/wiki/Deflection" class="mw-redirect" title="Deflection">Deflection</a>, <a href="/wiki/Fortitude" class="mw-redirect" title="Fortitude">Fortitude</a>, <a href="/wiki/Reflex" class="mw-redirect" title="Reflex">Reflex</a>, <a href="/wiki/Will" class="mw-redirect" title="Will">Will</a> for +10 sec when targeted by a <a href="/wiki/Will" class="mw-redirect" title="Will">Will</a> attack'
        },
        attributeBonuses: {
            might: -1,
            perception: +2,
            resolve: +1
        }
    },
    {
        name: 'Death Godlike',
        ability: {
            name: 'Death\'s Usher',
            link: 'https://pillarsofeternity.fandom.com/wiki/Death%27s_Usher',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/95/Race_godlike_icon.png',
            effects: '+20% Damage against enemies with low Endurance'
        },
        attributeBonuses: {
            dexterity: +1,
            intellect: +1
        }
    },
    {
        name: 'Fire Godlike',
        ability: {
            name: 'Battle-Forged',
            link: 'https://pillarsofeternity.fandom.com/wiki/Battle-Forged',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/95/Race_godlike_icon.png',
            effects: '<ul><li>Target (Attacker): 2 <a href="/wiki/Burn" class="mw-redirect" title="Burn">Burn</a> Damage</li><li>Self: +4 <a href="/wiki/Damage_Reduction" title="Damage Reduction">Damage Reduction</a></li></ul>'
        },
        attributeBonuses: {
            dexterity: +1,
            intellect: +1
        }
    },
    {
        name: 'Nature Godlike',
        ability: {
            name: 'Wellspring of Life',
            link: 'https://pillarsofeternity.fandom.com/wiki/Wellspring_of_Life',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/95/Race_godlike_icon.png',
            effects: '+3 <a href="/wiki/Might" title="Might">Might</a>, <a href="/wiki/Constitution" title="Constitution">Constitution</a>, <a href="/wiki/Dexterity" title="Dexterity">Dexterity</a> while <a href="/wiki/Endurance" class="mw-redirect" title="Endurance">Endurance</a> below 50%'
        },
        attributeBonuses: {
            dexterity: +1,
            intellect: +1
        }
    },
    {
        name: 'Moon Godlike',
        ability: {
            name: 'Silver Tide',
            link: 'https://pillarsofeternity.fandom.com/wiki/Silver_Tide',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/95/Race_godlike_icon.png',
            description: 'In combat, the first time a moon godlike is reduced below 75%, 50%, and 25% Endurance, they will automatically generate a wave of healing around themselves.'
        },
        attributeBonuses: {
            dexterity: +1,
            intellect: +1
        }
    },
    {
        name: 'Avian Godlike',
        ability: {
            name: 'Elusive Quarry',
            link: 'https://pillarsofeternity.fandom.com/wiki/Elusive_Quarry',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/95/Race_godlike_icon.png',
            description: '<ul><li>+10 <a href="/wiki/Defense" title="Defense">Defense</a> when Disengaging while Endurance below 50%</li><li>+3 <a href="/wiki/Perception" title="Perception">Perception</a> while Endurance below 50%</li><li>+10 <a href="/wiki/Deflection" class="mw-redirect" title="Deflection">Deflection</a> against ranged attacks</li></ul>'
        },
        attributeBonuses: {
            dexterity: +1,
            intellect: +1
        },
        companionOnly: true,
    },
    {
        name: 'Vessel',
        ability: {
            name: 'Living Machine',
            link: 'https://pillarsofeternity.fandom.com/wiki/Living_Machine',
            imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/8/88/Race_construct_icon.png',
            description: 'Self: Immune to Poison, Disease effects, Can\'t use Food, Drinks, or Drugs, Immunity to Sickened, Unconscious, Dominated, Charmed, Confused, +1 Might, +1 Constitution'
        },
        attributeBonuses: {
            might: +1,
            const: +1
        },
        companionOnly: true
    }
];
