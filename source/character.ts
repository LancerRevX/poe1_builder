class Character {
    static readonly MAX_LEVEL = 16;

    name: string = '2'

    // private skills: Record<string, number>;

    constructor() {
        this.name = 'Watcher'
    }

    readonly set_name = (name: string): string => {
        return this.name = name
    }
}