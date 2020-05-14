"use strict";
var Class = /** @class */ (function () {
    function Class(name, base_accuracy) {
        this.name = name;
        this.base_accuracy = base_accuracy;
    }
    return Class;
}());
var CLASSES = [
    new Class('Barbarian', 25),
    new Class('Chanter', 25)
];
