"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = __importDefault(require("./Person"));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._enrollment = String();
        _this._examsGrades = [];
        _this._assignmentsGrades = [];
        _this.enrollment = _this.generateEnrollment();
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            if (value.length < 16)
                throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "examsGrades", {
        get: function () {
            return this._examsGrades;
        },
        set: function (value) {
            if (value.length > 4)
                throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
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
            if (value.length > 2)
                throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
            this._assignmentsGrades = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.generateEnrollment = function () {
        var randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return "STU" + randomStr;
    };
    return Student;
}(Person_1.default));
exports.default = Student;
var carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
var lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
var jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
var tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
// const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));
carolina.examsGrades = [25, 20, 25, 23];
lucas.examsGrades = [25, 20, 25, 23];
jessica.assignmentsGrades = [50, 45];
tamires.assignmentsGrades = [47, 42];
console.log(carolina);
console.log(lucas);
console.log(jessica);
console.log(tamires);
// console.log(fernando);
