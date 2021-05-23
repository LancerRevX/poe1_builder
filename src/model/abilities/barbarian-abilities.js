export default [
    {
        name: 'barbaricYell',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/a/af/Barbaric_yell_icon.png',
        level: '1',
        activation: 'Active (2 per Encounter)',
        effects: '<ul><li>Foe AoE: <a href="/wiki/Frightened" class="mw-redirect" title="Frightened">Frightened</a> for 12.0 seconds</li></ul>',
        speed: 'Average',
        duration: '',
        area: '5.0m Radius from Caster',
        description: 'Lets out a terrifying yell, frightening enemies in the area of effect.',
    },
    {
        name: 'carnage',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png',
        level: '1',
        activation: 'Passive',
        effects: '<ul><li>Causes 0.66x <a href="/wiki/Damage" class="mw-redirect" title="Damage">damage</a> to enemies in a 1.5m radius from the targeted enemy</li></ul>',
        speed: '',
        duration: '',
        area: '1.5m Radius from Target',
        description: 'The barbarian\'s attacks become so forceful as to impact others around the target enemy. For every successful melee attack, the barbarian makes reduced-damage attacks at all other enemies within a short distance of the target.',
    },
    {
        name: 'frenzy',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/0/0b/Frenzy_icon.png',
        level: '1',
        activation: 'Active (1 per Encounter)',
        effects: '<ul><li>+4 <a href="/wiki/Might" title="Might">Might</a></li><li>+4 <a href="/wiki/Constitution" title="Constitution">Constitution</a></li><li>x1.33 <a href="/wiki/Attack_Speed" title="Attack Speed">Attack Speed</a></li><li>-10 <a href="/wiki/Deflection" class="mw-redirect" title="Deflection">Deflection</a></li><li><a href="/wiki/Health" class="mw-redirect" title="Health">Health</a> and <a href="/wiki/Endurance" class="mw-redirect" title="Endurance">Endurance</a> concealed</li></ul>',
        speed: 'Average',
        duration: '12.0 seconds',
        area: 'Self',
        description: 'Sends the barbarian into a frenzied state, granting a Might, Constitution, and Attack Speed bonus but causing a Deflection penalty against incoming attacks. While the barbarianвЂ™s Frenzy is active, his or her Endurance and Health are concealed.',
    },
    {
        name: 'blooded',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png',
        level: '3',
        activation: 'Passive',
        effects: '<ul><li>+25% <a href="/wiki/Damage" class="mw-redirect" title="Damage">Damage</a> while <a href="/wiki/Endurance" class="mw-redirect" title="Endurance">Endurance</a> below 50%</li></ul>',
        speed: '',
        duration: '',
        area: 'Self',
        description: 'Causes the barbarian to lash out when in pain, granting a bonus to damage for as long as his or her Endurance is below 50%.',
    },
    {
        name: 'savageDefiance',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/6/61/Savage_defiance_icon.png',
        level: '3',
        activation: 'Active (1 per Encounter)',
        effects: '<ul><li>+100 <a href="/wiki/Endurance" class="mw-redirect" title="Endurance">Endurance</a> over 12 seconds</li></ul>',
        speed: 'Instant',
        duration: '12.0 seconds',
        area: 'Self',
        description: 'The barbarian channels his or her own irrepressible determination, regenerating a large amount of Endurance.',
    },
    {
        name: 'wildSprint',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/6/6c/Wild_sprint_icon.png',
        level: '3',
        activation: 'Active (3 per Rest)',
        effects: '<ul><li>+3.5 <a href="/wiki/Move_Speed" title="Move Speed">Move Speed</a></li><li>+12 to all <a href="/wiki/Defense" title="Defense">Defenses</a> when <a href="/wiki/Melee_Engagement" title="Melee Engagement">Disengaging</a></li><li>Not stopped by <a href="/wiki/Engagement" class="mw-redirect" title="Engagement">Engagement</a></li></ul>',
        speed: 'Instant',
        duration: '5.0 seconds',
        area: 'Self',
        description: 'The barbarian becomes able to charge with reckless abandon, allowing him or her to ignore the movement stop of Engagement and gain bonus to all defenses against Disengagement Attacks.',
    },
    {
        name: 'bloodlust',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png',
        level: '5',
        activation: 'Passive',
        effects: '<ul><li>+20% <a href="/wiki/Attack_Speed" title="Attack Speed">Attack Speed</a> after downing 2 enemies</li></ul>',
        speed: '',
        duration: '8.0 seconds',
        area: 'Self',
        description: 'Imparts an unquenchable bloodlust to the Barbarian, increasing his or her speed temporarily in battle once he or she has personally downed at least two enemies.',
    },
    {
        name: 'bruteForce',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png',
        level: '5',
        activation: 'Passive',
        effects: '<ul><li>Attacks target <a href="/wiki/Fortitude" class="mw-redirect" title="Fortitude">Fortitude</a>, if lower than <a href="/wiki/Deflection" class="mw-redirect" title="Deflection">Deflection</a></li></ul>',
        speed: '',
        duration: '',
        area: 'Self',
        description: 'The barbarian hits so hard that ordinary means of defense can be easily overpowered. On attacks that normally target Deflection, the barbarian will instead attack Fortitude if it is the lower defense.',
    },
    {
        name: 'oneStandsAlone',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png',
        level: '5',
        activation: 'Passive',
        effects: '<ul><li>+2 enemies needed to get <a href="/wiki/Flanked" class="mw-redirect" title="Flanked">Flanked</a></li><li>+20% melee <a href="/wiki/Damage" class="mw-redirect" title="Damage">damage</a> when adjacent to 2 or more enemies</li></ul>',
        speed: '',
        duration: '',
        area: '',
        description: 'The barbarian makes a courageous stand against all attackers. Grants a melee Damage bonus when the barbarian is adjacent to two or more enemies, and the barbarian cannot be flanked unless Engaged by more than three enemies.',
    },
    {
        name: 'bloodThirst',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/6/6c/Blood_thirst_icon.png',
        level: '7',
        activation: 'Passive',
        effects: '<ul><li><a href="/wiki/Recovery_Speed" class="mw-redirect" title="Recovery Speed">Recover</a> immediately after killing an enemy</li></ul>',
        speed: '',
        duration: '',
        area: 'Self',
        description: 'After killing an enemy, the barbarian\'s Recovery is waived, allowing them to attack again immediately.',
    },
    {
        name: 'thickSkinned',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png',
        level: '7',
        activation: 'Passive',
        effects: '<ul><li>+3 <a href="/wiki/Damage_Reduction" title="Damage Reduction (DR)"><img alt="Damage Reduction (DR)" src="https://static.wikia.nocookie.net/eternitywiki/images/2/29/Damage_reduction_icon.png/revision/latest/scale-to-width-down/16?cb=20171001055953" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Crush" title="Crush"><img alt="Crush" src="https://static.wikia.nocookie.net/eternitywiki/images/8/8f/Crush_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235303" decoding="async" width="18" height="18" /></a></li><li>+3 <a href="/wiki/Damage_Reduction" title="Damage Reduction (DR)"><img alt="Damage Reduction (DR)" src="https://static.wikia.nocookie.net/eternitywiki/images/2/29/Damage_reduction_icon.png/revision/latest/scale-to-width-down/16?cb=20171001055953" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Pierce" title="Pierce"><img alt="Pierce" src="https://static.wikia.nocookie.net/eternitywiki/images/5/52/Pierce_icon.png/revision/latest/scale-to-width-down/18?cb=20170909202627" decoding="async" width="18" height="18" /></a></li><li>+3 <a href="/wiki/Damage_Reduction" title="Damage Reduction (DR)"><img alt="Damage Reduction (DR)" src="https://static.wikia.nocookie.net/eternitywiki/images/2/29/Damage_reduction_icon.png/revision/latest/scale-to-width-down/16?cb=20171001055953" decoding="async" width="16" height="16" /></a> vs <a href="/wiki/Slash" title="Slash"><img alt="Slash" src="https://static.wikia.nocookie.net/eternitywiki/images/5/50/Slash_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235350" decoding="async" width="18" height="18" /></a></li></ul>',
        speed: '',
        duration: '',
        area: 'Self',
        description: 'Toughens the Barbarian\'s naturally thick skin, raising his or her Damage Reduction.',
    },
    {
        name: 'threateningPresence',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png',
        level: '7',
        activation: 'Passive',
        effects: '<ul><li>Foe AoE: <a href="/wiki/Sickened" class="mw-redirect" title="Sickened">Sickened</a> for 3 seconds</li></ul>',
        speed: 'Average',
        duration: '3.0 seconds',
        area: '1.25m Radius from Caster',
        description: 'The barbarian\'s mere presence becomes so intimidating as to fill all approaching enemies with nauseating dread. As long as the barbarian is stationary, nearby enemies may be Sickened.',
    },
    {
        name: 'barbaricShout',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/1/1a/Barbaric_shout_icon.png',
        level: '9',
        activation: 'Active (2 per Rest)',
        effects: '<ul><li>Foe AoE: <a href="/wiki/Terrified" class="mw-redirect" title="Terrified">Terrified</a> for 20 seconds</li></ul>',
        speed: 'Average',
        duration: '20 seconds',
        area: '7.5m Radius from Caster',
        description: 'Lets out a dreadful shout, Terrifying enemies in the area of effect.',
    },
    {
        name: 'vengefulDefeat',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png',
        level: '9',
        activation: 'Passive',
        effects: '<ul><li><a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a> on 0 <a href="/wiki/Endurance" class="mw-redirect" title="Endurance">Endurance</a></li></ul>',
        speed: '',
        duration: '',
        area: '2.0m Radius from Caster',
        description: 'Exacts a final revenge when the Barbarian is reduced to 0 Endurance, causing him or her to perform instant Carnage Full Attacks at everyone in range.',
    },
    {
        name: 'eyeoftheStorm',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png',
        level: '11',
        activation: 'Passive',
        effects: '<ul><li>Cannot be <a href="/wiki/Engaged" class="mw-redirect" title="Engaged">Engaged</a> by enemies more than 1 level below own level</li></ul>',
        speed: '',
        duration: '',
        area: 'Self',
        description: 'The barbarian cannot be Engaged by enemies that are more than 1 level lower than him or her. It does not prevent the barbarian from being attacked in melee.',
    },
    {
        name: 'heartofFury',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/59/Heart_of_fury_icon.png',
        level: '11',
        activation: 'Active (1 per Encounter)',
        effects: '<ul><li><a href="/wiki/Full_Attack" class="mw-redirect" title="Full Attack">Full Attack</a> with +25% <a href="/wiki/Damage" class="mw-redirect" title="Damage">damage</a> for 1 second</li></ul>',
        speed: 'Average',
        duration: '1.0 second',
        area: '2.0m Radius from Caster',
        description: 'The barbarian swings viciously in a lightning-quick flurry, taking on all comers. Each equipped weapon attacks every nearby enemy, doing extra damage and inflicting Carnage if applicable.',
    },
    {
        name: 'barbaricRetaliation',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/1/1e/Barbaric_retaliation_icon.png',
        level: '13',
        activation: 'Passive',
        effects: '<ul><li>Characters hitting Self: 8-12 <a href="/wiki/Raw" class="mw-redirect" title="Raw">Raw</a> damage</li></ul>',
        speed: '',
        duration: '',
        area: '',
        description: 'The barbarian reflexively lashes out at anyone who hits him or her in melee, doing Raw damage to anyone unfortunate enough to be on the receiving end.',
    },
    {
        name: 'dragonLeap',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/f/fe/Dragon_leap_icon.png',
        level: '13',
        activation: 'Active (1 per Encounter)',
        effects: '<ul><li>Foe AoE: 20-30 <a href="/wiki/Crush" title="Crush"><img alt="Crush" src="https://static.wikia.nocookie.net/eternitywiki/images/8/8f/Crush_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235303" decoding="async" width="18" height="18" /></a> <a href="/wiki/Damage" class="mw-redirect" title="Damage">damage</a></li><li>Foe AoE: <a href="/wiki/Dazed" class="mw-redirect" title="Dazed">Dazed</a> for 15 seconds</li><li>User: Break <a href="/wiki/Engagement" class="mw-redirect" title="Engagement">Engagements</a></li><li>User: Immune to <a href="/wiki/Engagement" class="mw-redirect" title="Engagement">Engagement</a> for 2 seconds</li></ul>',
        speed: 'Average',
        duration: '',
        area: '1.5m Radius',
        description: 'Drawing upon reserves of intense spiritual power, barbarians are able to leap high into the air and crash down upon their foes, Dazing them.',
    },
    {
        name: 'echoingShout',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/4/46/Echoing_shout_icon.png',
        level: '15',
        activation: 'Active (1 per Encounter)',
        effects: '<ul><li>Foe Target: 35-50 <a href="/wiki/Crush" title="Crush"><img alt="Crush" src="https://static.wikia.nocookie.net/eternitywiki/images/8/8f/Crush_icon.png/revision/latest/scale-to-width-down/18?cb=20170928235303" decoding="async" width="18" height="18" /></a> <a href="/wiki/Damage" class="mw-redirect" title="Damage">damage</a></li><li>Foe Target: <a href="/wiki/Dazed" class="mw-redirect" title="Dazed">Dazed</a> for 6 seconds</li></ul>',
        speed: '',
        duration: '',
        area: 'Length',
        description: 'The barbarian projects his or her rage into a wave of energy that causes Crush damage and Dazes everyone caught in its path. If the shout strikes a solid surface, it will bounce once.',
    },
];
