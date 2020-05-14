"use strict";
var Character = /** @class */ (function () {
    // private skills: Record<string, number>;
    function Character() {
        var _this = this;
        this.name = '2';
        this.set_name = function (name) {
            return _this.name = name;
        };
        this.name = 'Watcher';
    }
    Character.MAX_LEVEL = 16;
    return Character;
}());
