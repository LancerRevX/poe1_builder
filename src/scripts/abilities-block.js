export default {
    name: 'abilities-block',
    props: {
        selected: Object
    },
    data: () => ({

    }),
    computed: {
        abilitiesTitle: function() {
            if (['Druid', 'Priest', 'Wizard'].includes(this.character.class.name)) {
                return 'Spells';
            } else if (this.character.class.name == 'Chanter') {
                return 'Invocations';
            } else {
                return 'Abilities';
            }
        },
        typesOfAbilitiesToSelect: function() {
            return this.selected.level.typesOfAbilitiesToSelect;
        },
        showAbilitiesTable: function() {
            return this.typesOfAbilitiesToSelect.includes('abilities');
        },
        showPhrasesTable: function() {
            return this.typesOfAbilitiesToSelect.includes('phrases');
        },
        showTalentsTable: function() {
            return this.typesOfAbilitiesToSelect.includes('talents');
        },
        character: function() {
            return this.selected.character;
        }
    }
};
