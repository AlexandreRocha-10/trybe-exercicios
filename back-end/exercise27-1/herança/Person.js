"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this.validateName(name);
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (date) {
            this.validateBirthDate(date);
            this._birthDate = date;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (age) {
        var diff = Math.abs(new Date().getTime() - age.getTime());
        var years = 31536000000;
        return Math.floor(diff / years);
    };
    Person.prototype.validateName = function (name) {
        if (name.length < 2) {
            throw new Error('Name must be at least 2 characters long.');
        }
    };
    Person.prototype.validateBirthDate = function (date) {
        if (date.getTime() > new Date().getTime()) {
            throw new Error('Birthdate nao pode ser no futuro');
        }
        if (Person.getAge(date) > 120) {
            throw new Error('Idade nao pode ser maior que 120');
        }
    };
    return Person;
}());
exports.default = Person;
// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
// console.log(maria);
// console.log(luiza);
