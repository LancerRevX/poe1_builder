class Class {
    name: string;
    base_accuracy: number;

    constructor(name: string, 
                base_accuracy: number) {
        this.name = name;
        this.base_accuracy = base_accuracy;
    }
}

const CLASSES = [
    new Class(
        'Barbarian',
        25
    ),
    new Class(
        'Chanter',
        25
    )
];