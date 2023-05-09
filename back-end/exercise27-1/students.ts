class Student {
    private _enrollment: string;
    private _name: string;
    private _examsGrades: number[] = Array();
    private _assignmentsGrades: number[] = Array();

    constructor(enrollment: string, name: string, exams: number[], grades: number[],) {
    this._enrollment = enrollment;
    this._name = name;
    this.examsGrades = exams;
    this.assignmentsGrades = grades;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length !== 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }

    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]) {
    if (value.length !== 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.',
      );
    }

    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentsGrades]
      .reduce((previousNote, note) => {
        const nextNote = note + previousNote;

        return nextNote;
      }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;

    return Math.round(sumGrades / divider);
  }
}

const personOne = new Student('202001011', 'Maria da Silva', [5, 4, 7, 8], [8, 9]);

console.log(personOne);

// const personTwo = new Student('202001012', 'João da Silva', [5, 5, 7, 3], [8, 5]);

// console.log(personTwo);
console.log('Soma de todas as notas: ', personOne.sumGrades());
console.log('Média de todas as notas: ', personOne.sumAverageGrade());