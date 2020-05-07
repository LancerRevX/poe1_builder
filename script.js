const MAX_LEVEL = 16;

const RACE_BONUSES = {
    'Human': {
        'Might': 1,
        'Resolve': 1,
    },
    'Wood elf': {
        'Dexterity': 1,
        'Perception': 1,
    },
    'Pale elf': {
        'Dexterity': 1,
        'Perception': 1,
    },
};

const CULTURE_BONUSES = {
    'Aedyr': 'Resolve',
    'Deadfire Archipelago': 'Dexterity',
    'Ixamitl Plains': 'Resolve',
    'Old Vailia': 'Intellect',
    'Rauatai': 'Constitution',
    'The Living Lands': 'Might',
    'The White that Wends': 'Perception'
};

const CULTURE_BACKGROUNDS = {
    'Aedyr': [
        'Aristocrat', 'Clergy', 'Colonist', 'Dissident', 'Drifter', 'Hunter', 'Laborer', 'Mercenary', 'Merchant', 'Slave' 
    ],

};

const CLASS_BONUSES = {
    'Barbarian': {
        'Athletics': 2,
        'Survival': 1
    }
};

const CLASS_DEFLECTIONS = {
    'Barbarian': 15
};

const CLASS_ACCURACIES = {
    'Barbarian': 25
};

const CLASS_ENDURANCES = {
    'Barbarian': 14
};

const CLASS_HEALTH_MULTIPLIERS = {
    'Barbarian': 6
};

const BACKGROUND_BONUSES = {
    'Aristocrat': {
        'Lore': 2
    },
    'Artist': {
        'Lore': 2
    },
    'Clergy': {
        'Lore': 2
    },
    'Colonist': {
        'Survival': 2
    },
    'Dissident': {
        'Lore': 1,
        'Stealth': 1
    }
};

let current_attributes = {
    'Might': 10,
    'Constitution': 10,
    'Dexterity': 10,
    'Perception': 10,
    'Intellect': 10,
    'Resolve': 10
};
let free_attribute_points = 15;

let current_skills = {
    'Stealth': 0,
    'Athletics': 0,
    'Lore': 0,
    'Mechanics': 0,
    'Survival': 0
};
let free_skill_points = 0;

let current_race = '';
let current_culture = '';
let current_class = '';
let current_background = '';
let current_level = 1;

function get_attribute(attribute) {
    let race_bonus = 0;
    if (attribute in RACE_BONUSES[current_race])
        race_bonus = RACE_BONUSES[current_race][attribute];
    let culture_bonus = 0;
    if (attribute == CULTURE_BONUSES[current_culture])
        culture_bonus = 1;
    return current_attributes[attribute] + race_bonus + culture_bonus;
}

function update_level() {
    let level_counter = document.getElementById('level_counter');
    level_counter.innerText = 'Level ' + current_level;

    update_skills();
    update_defense();
    update_stats();
}

function add_level() {
    if (current_level < MAX_LEVEL) {
        current_level += 1;
        free_skill_points += 6;
        update_level();
    }
}

function reset_level() {
    current_level = 1;
    update_level();
}

function max_level() {
    current_level = MAX_LEVEL;
    update_level();
}

function init_level_buttons() {
    let add_level_button = document.getElementById('add_level_button');
    add_level_button.onclick = add_level;

    let reset_level_button = document.getElementById('reset_level_button');
    reset_level_button.onclick = reset_level;

    let max_level_button = document.getElementById('max_level_button');
    max_level_button.onclick = max_level;
}

function init_race_select() {
    let race_select = document.getElementById('race_select');
    race_select.onchange = function() {
        set_race(this.value);
    };
    for (let race in RACE_BONUSES) {
        let option = document.createElement('option');
        option.text = race;
        race_select.add(option);
    }
    current_race = race_select.options[race_select.selectedIndex].text;
}

function init_class_select() {
    let class_select = document.getElementById('class_select');
    class_select.onchange = function() {
        set_class(this.value);
    };
    for (let c in CLASS_BONUSES) {
        let option = document.createElement('option');
        option.text = c;
        class_select.add(option);
    }
    current_class = class_select.options[class_select.selectedIndex].text;
}

function init_culture_select() {
    let culture_select = document.getElementById('culture_select');
    culture_select.onchange = function() {
        set_culture(this.value);
    };
    for (let culture in CULTURE_BONUSES) {
        let option = document.createElement('option');
        option.text = culture;
        culture_select.add(option);
    }
    current_culture = culture_select.options[culture_select.selectedIndex].text;
}

function init_background_select() {
    let background_select = document.getElementById('background_select');
    background_select.onchange = function() {
        set_background(this.value);
    };
    
    for (let background of CULTURE_BACKGROUNDS[current_culture]) {
        let option = document.createElement('option');
        option.text = background;
        background_select.add(option);
    }
    current_background = background_select.options[background_select.selectedIndex].text;
}

function init_attributes() {
    let attribute_block = document.getElementById('attribute_block');
    for (let attribute in current_attributes) {
        let block = document.createElement('div');
        
        let label = document.createElement('h3');
        label.innerText = attribute;

        let decrease_button = document.createElement('button');
        decrease_button.innerText = '-';
        decrease_button.value = attribute;
        decrease_button.onclick = function() {
            decrease_attribute(this.value);
        };

        let value = document.createElement('p');
        value.id = attribute + '_value';

        let increase_button = document.createElement('button');
        increase_button.innerText = '+';
        increase_button.value = attribute;
        increase_button.onclick = function() {
            increase_attribute(this.value);
        };
        
        block.append(label, decrease_button, value, increase_button);
        attribute_block.append(block);
    }

    update_attributes();
    update_defense();
    update_stats();
}

function init_skills() {
    let skill_block = document.getElementById('skill_block');
    for (let skill in current_skills) {
        let block = document.createElement('div');
        
        let label = document.createElement('h3');
        label.innerText = skill;

        let decrease_button = document.createElement('button');
        decrease_button.innerText = '-';
        decrease_button.value = skill;
        decrease_button.onclick = function() {
            decrease_skill(this.value);
        };

        let value = document.createElement('p');
        value.id = skill + '_value';

        let increase_button = document.createElement('button');
        increase_button.innerText = '+';
        increase_button.value = skill;
        increase_button.onclick = function() {
            increase_skill(this.value);
        };
        
        block.append(label, decrease_button, value, increase_button);
        skill_block.append(block);
    }

    update_skills();
}

function set_race(new_race) {
    current_race = new_race;
    update_attributes();
    update_defense();
}

function set_class(new_class) {
    current_class = new_class;
    update_skills();
}

function set_culture(new_culture) {
    current_culture = new_culture;
    update_attributes();

    init_background_select();
    update_skills();
}

function set_background(new_background) {
    current_background = new_background;
    update_skills();
}

function update_attributes() {
    let free_attributes_counter = document.getElementById('free_attribute_point_counter');
    free_attributes_counter.innerText = free_attribute_points + ' points left';

    for (let attribute in current_attributes) {
        let value_field = document.getElementById(attribute + '_value');
        value_field.innerText = get_attribute(attribute);
    }

    update_defense();
    update_stats();
}

function update_skills() {
    let free_skill_point_counter = document.getElementById('free_skill_point_counter');
    free_skill_point_counter.innerText = free_skill_points + ' points left';

    for (let skill in current_skills) {
        let value_field = document.getElementById(skill + '_value');
        let class_bonus = 0;
        if (skill in CLASS_BONUSES[current_class])
            class_bonus = CLASS_BONUSES[current_class][skill];
        let background_bonus = 0;
        if (skill in BACKGROUND_BONUSES[current_background])
            background_bonus = BACKGROUND_BONUSES[current_background][skill];
        value_field.innerText = current_skills[skill] + class_bonus + background_bonus;
    }
}

function update_defense() {
    const START_DEFENSE = 20;
    const DEFENSE_PER_LEVEL = 3;

    const DEFLECTION_PER_RESOLVE = 1;
    const FORTITUDE_PER_STRENGTH = 2;
    const FORTITUDE_PER_CONSTITUTION = 2;
    const REFLEX_PER_DEXTERITY = 2;
    const REFLEX_PER_PERCEPTION = 2;
    const WILL_PER_INTELLECT = 2;
    const WILL_PER_RESOLVE = 2;

    let deflection_field = document.getElementById('deflection_field');
    deflection_field.innerText = CLASS_DEFLECTIONS[current_class] +
    (get_attribute('Resolve') - 10) * DEFLECTION_PER_RESOLVE + 
    (current_level - 1) * DEFENSE_PER_LEVEL;

    let fortitude_field = document.getElementById('fortitude_field');
    fortitude_field.innerText = START_DEFENSE +
    (get_attribute('Might') - 10) * FORTITUDE_PER_STRENGTH +
    (get_attribute('Constitution') - 10) * FORTITUDE_PER_CONSTITUTION +
    (current_level - 1) * DEFENSE_PER_LEVEL;

    let reflex_field = document.getElementById('reflex_field');
    reflex_field.innerText = START_DEFENSE +
    (get_attribute('Dexterity') - 10) * REFLEX_PER_DEXTERITY +
    (get_attribute('Perception') - 10) * REFLEX_PER_PERCEPTION +
    (current_level - 1) * DEFENSE_PER_LEVEL;

    let will_field = document.getElementById('will_field');
    will_field.innerText = START_DEFENSE +
    (get_attribute('Intellect') - 10) * WILL_PER_INTELLECT +
    (get_attribute('Resolve') - 10) * WILL_PER_RESOLVE +
    (current_level - 1) * DEFENSE_PER_LEVEL;
}

function update_stats() {
    let endurance = CLASS_ENDURANCES[current_class] * (current_level + 2) *
    ((get_attribute('Constitution') - 10) * 5 + 100) / 100;

    document.getElementById('endurance_field').innerText = endurance;
    let health_field = document.getElementById('health_field');
    health_field.innerText = endurance * CLASS_HEALTH_MULTIPLIERS[current_class];
}

function increase_attribute(attribute) {
    if (free_attribute_points > 0 && current_attributes[attribute] < 18) {
        current_attributes[attribute] += 1;
        free_attribute_points -= 1;
        update_attributes();
    }
}

function decrease_attribute(attribute) {
    if (current_attributes[attribute] > 3) {
        current_attributes[attribute] -= 1;
        free_attribute_points += 1;
        update_attributes();
    }    
}

function increase_skill(skill) {
    if (free_skill_points > (current_skills[skill] + 1)) {
        free_skill_points -= current_skills[skill] + 1;
        current_skills[skill] += 1;
        update_skills();
    }
}

function decrease_skill(skill) {
    if (current_skills[skill] > 0) {
        current_skills[skill] -= 1;
        free_skill_points += current_skills[skill] + 1;
        update_skills();
    }
}

init_level_buttons();
init_race_select();
init_class_select();
init_culture_select();
init_background_select();

init_attributes();
init_skills();