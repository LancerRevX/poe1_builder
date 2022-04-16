const genericPassiveImageLink = 'https://static.wikia.nocookie.net/eternitywiki/images/0/0f/Generic_passive_icon.png';

import weaponFocus from './weapon-focus.js';

export default [
    ...Object.values(weaponFocus),
    {
        name: 'Marksman',
        description: '+5 Accuracy with ranged weapons against distant enemies.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Two Weapon Style',
        description: '+20% attack speed while dual-wielding.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'One-Handed Style',
        description: '+15% of hits converted to crits while wielding just a one-handed weapon.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Two-Handed Style',
        description: '+15% damage while wielding a two-handed weapon.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Savage Attack',
        description: '+20% melee damage, -5 Accuracy.',
        usage: 'Modal',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Envenomed Strike',
        description: 'Raw damage to single enemy for 9 seconds vs. Fortitude.',
        usage: '3/rest',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Gunner',
        description: '+20% reload speed for firearms and crossbowsrbalests.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Dangerous Implement',
        description: '+25% damage with implements, but deals 3 Raw damage to self on every attack.',
        usage: 'Modal',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Beast Slayer',
        description: '+25% damage against Beast.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Primal Bane',
        description: '+25% damage against Primordial.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Ghost Hunter',
        description: '+25% damage against Spirit.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Sanctifier',
        description: '+25% damage against Vessel.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Wilder Hunter',
        description: '+25% damage against Wilder.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Interrupting Blows',
        description: '+15 interrupt.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Vulnerable Attack',
        description: '+5 melee damage reduction bypass, -20% melee attack speed.',
        usage: 'Modal',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Penetrating Shot',
        description: '+5 ranged damage reduction bypass, -20% ranged attack speed.',
        usage: 'Modal',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Bloody Slaughter',
        description: '+20% of hits converted to crits on enemies with low (<10%[6]) Endurance. Crits done this way have +50% crit damage multiplier.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Hold the Line',
        description: '+1 Engagement limit.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Snake\'s Reflexes',
        description: '+10 reflexes defense.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Bear\'s Fortitude',
        description: '+10 fortitude defense.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Bull\'s Will',
        description: '+10 will defense.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Weapon and Shield Style',
        description: '+6 Deflection while wielding a shield, and equipped shield\'s Deflection added to reflexes defense.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Graceful Retreat',
        description: '+12 defense against disengagement attacks.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Cautious Attack',
        description: '+8 Deflection, -20% attack speed.',
        usage: 'Modal',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Mental Fortress',
        description: '+10 defense against Charmed, Confused, Dominated, Frightened, and Terrified.',
        usage: 'Passive',
        level: 6,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Body Control',
        description: '+10 defense against Paralyzed, Petrified, Sickened, Stunned, and Weakened.',
        usage: 'Passive',
        level: 6,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Unstoppable',
        description: '+10 defense against Blinded, Dazed, Hobbled, Prone, and Stuck.',
        usage: 'Passive',
        level: 6,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Superior Deflection',
        description: '+5 Deflection.',
        usage: 'Passive',
        level: 6,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Fast Runner',
        description: '+1 to movement speed, and +5 to defense against disengagement attacks.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Scion of Flame',
        description: '+5 burn damage reduction, and +20% to all burn damage you deal.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Heart of the Storm',
        description: '+5 shock damage reduction, and +20% to all shock damage you deal.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Spirit of Decay',
        description: '+5 corrode damage reduction, and +20% to all corrode damage you deal.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Secrets of Rime',
        description: '+5 freeze damage reduction, and +20% to all freeze damage you deal.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Quick Switch',
        description: '-1.5 weapon change recovery, -4 grimoire cooldown.',
        usage: 'Passive',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Wound Binding',
        description: '40% self-healing of Health over 9 seconds.',
        usage: '1/rest',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Field Triage',
        description: '20% healing of Health on ally over 9 seconds.',
        usage: '1/rest',
        level: 2,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Deep Pockets',
        description: '+2 quick item slots.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Arms Bearer',
        description: '+1 weapon set.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Shot on the Run',
        description: '+25% recovery speed of ranged weapons while moving.',
        usage: 'Passive',
        level: 4,
        imageLink: genericPassiveImageLink
    },
    {
        name: 'Acolyte\'s Radiance ',
        description: 'Friendly AoE: +8 (+4 per 3 levels after 1) Endurance, Foe AoE: 20 (+3 per 3 levels after 1) Burn Damage (vessels only), Frightened for 10s (Accuracy vs Will), vessels only ',
        usage: '1/per encounter ',
        level: 2,
        crossClass: 'Priest',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/1/1c/Priest_passive_icon.png'
    },
    {
        name: 'Apprentice\'s Sneak Attack ',
        description: '+15% Melee/Ranged damage when target is Blinded, Flanked, Hobbled, Paralyzed, Petrified, Prone, Stuck, Stunned or Weakened (see Sneak Attack) ',
        usage: 'Passive ',
        level: 2,
        crossClass: 'Rogue',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/d/dc/Rogue_passive_icon.png'
    },
    {
        name: 'Aspirant\'s Mark ',
        description: 'Foe AoE: -8 Deflection, -8 Reflex for 30s (Accuracy (+10) vs Will) ',
        usage: '1/per encounter ',
        level: 2,
        crossClass: 'Druid',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/52/Druid_passive_icon.png'
    },
    {
        name: 'Enigma\'s Charm ',
        description: 'Foe Target: Charmed for 8s (Accuracy (+10) vs Will). Requires at least 5s in combat. ',
        usage: '1/per encounter ',
        level: 2,
        crossClass: 'Cipher',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/3f/Cipher_passive_icon.png'
    },
    {
        name: 'Gallant\'s Focus ',
        description: 'Friendly Aura: +4 Accuracy. Aura Range: 2.5m. ',
        usage: 'Modal ',
        level: 2,
        crossClass: 'Paladin',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/31/Paladin_passive_icon.png'
    },
    {
        name: 'Novice\'s Suffering ',
        description: '+5 (+2 per 3 levels after 1) unarmed damage, +0 (+4 per 3 levels after 1) unarmed accuracy. ',
        usage: 'Passive ',
        level: 2,
        crossClass: 'Monk',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/37/Monk_passive_icon.png'
    },
    {
        name: 'Outlander\'s Frenzy ',
        description: '+3 Might, +3 Constitution, +25% Attack Speed, -10 Deflection, Health and Endurance concealed for 12.0 sec ',
        usage: '1/per encounter ',
        level: 2,
        crossClass: 'Barbarian',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Barbarian_passive_icon.png'
    },
    {
        name: 'Prestidigitator\'s Missiles ',
        description: '10-19 x3 Crush/Corrode Damage (Accuracy +10 vs Deflection) ',
        usage: '1/per encounter ',
        level: 2,
        crossClass: 'Wizard',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/2/22/Wizard_passive_icon.png'
    },
    {
        name: 'Rhymer\'s Summon ',
        description: 'Summon 2x Human Skeleton. Requires 15s in combat. ',
        usage: '1/per encounter ',
        level: 2,
        crossClass: 'Chanter',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/9/9d/Chanter_passive_icon.png'
    },
    {
        name: 'Runner\'s Wounding Shot ',
        description: 'Primary Attack, 80% damage over time (6s), if successful: Hobbled for 10s (Accuracy +10 vs Fortitude) ',
        usage: '1/per encounter ',
        level: 2,
        crossClass: 'Ranger',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/3/33/Ranger_passive_icon.png'
    },
    {
        name: 'Veteran\'s Recovery ',
        description: '3 (+1 per 3 levels after 1) Endurance recovery per 3s for 45s. ',
        usage: 'Passive ',
        level: 2,
        crossClass: 'Fighter',
        imageLink: 'https://static.wikia.nocookie.net/eternitywiki/images/8/8d/Fighter_passive_icon.png'
    },
];
