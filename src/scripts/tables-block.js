import races from '../model/races.js';
import classes from '../model/classes.js';
import cultures from '../model/cultures.js';
import attributes from '../model/attributes.js';
import skills from '../model/skills.js';

export default {
    name: 'race-table',
    props: {
        selected: Object
    },
    data: () => ({
        races,
        classes,
        cultures,
        attributes,
        skills
    }),
    computed: {
        character() {
            return this.selected.character;
        },
        level() {
            return this.selected.level;
        },
        attributePointsCounter() {
            if (this.character.storyCompanion) {
                return '';
            }

            let attributePoints = this.character.attributePoints();
            return attributePoints ? ` (${attributePoints})` : '';
        },
        availableCultures() {
            return this.cultures.filter(culture => !culture.companionOnly);
        },
        paladinOrders() {
            return this.character.class.orders.filter(order => !order.companionOnly);
        }
    }
};
