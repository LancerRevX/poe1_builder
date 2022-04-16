class DamageType {
    constructor(name, link, imageLink) {
        this.name = name;
        this.imageLink = imageLink;
    }
}

export default {
    slash: new DamageType(
        'Slash',
        'https://static.wikia.nocookie.net/eternitywiki/images/5/50/Slash_icon.png'
    ),
    pierce: new DamageType(
        'Pierce',
        'https://static.wikia.nocookie.net/eternitywiki/images/5/52/Pierce_icon.png'
    ),
    crush: new DamageType(
        'Crushing',
        'https://static.wikia.nocookie.net/eternitywiki/images/8/8f/Crush_icon.png'
    ),
    //TODO
};
