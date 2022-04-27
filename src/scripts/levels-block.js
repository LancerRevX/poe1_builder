import skills from '../model/skills.js';

export default {
    name: 'levels-block',
    data: () => ({
        skills
    }),
    props: {
        selected: Object
    },
    computed: {
        character: function() {
            return this.selected.character;
        },
        level: function() {
            return this.selected.level;
        }
    },
    methods: {
        goToPreviousLevel() {
            this.selected.level = this.level.previous || this.level;
        },
        goToNextLevel() {
            this.selected.level = this.level.next || this.level;
        }
    }
};
