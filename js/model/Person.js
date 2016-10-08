"use strict";
var Person = (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return Person;
}());
exports.Person = Person;
