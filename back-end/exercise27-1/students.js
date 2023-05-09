"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Student = /** @class */ (function () {
    function Student(enrollment, name, exams, grades) {
        this._examsGrades = Array();
        this._assignmentsGrades = Array();
        this._enrollment = enrollment;
        this._name = name;
        this.examsGrades = exams;
        this.assignmentsGrades = grades;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length !== 3) {
                throw new Error('O nome deve conter no mínimo 3 caracteres.');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (value) {
            if (value.length !== 4) {
                throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
            }
            this._examsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "assignmentsGrades", {
        get: function () {
            return this._assignmentsGrades;
        },
        set: function (value) {
            if (value.length !== 2) {
                throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
            }
            this._assignmentsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrades = function () {
        return __spreadArray(__spreadArray([], this.examsGrades, true), this.assignmentsGrades, true).reduce(function (previousNote, note) {
            var nextNote = note + previousNote;
            return nextNote;
        }, 0);
    };
    Student.prototype.sumAverageGrade = function () {
        var sumGrades = this.sumGrades();
        var divider = this.examsGrades.length + this.assignmentsGrades.length;
        return Math.round(sumGrades / divider);
    };
    return Student;
}());
var personOne = new Student('202001011', 'Maria da Silva', [5, 4, 7, 8], [8, 9]);
console.log(personOne);
// const personTwo = new Student('202001012', 'João da Silva', [5, 5, 7, 3], [8, 5]);
// console.log(personTwo);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());
