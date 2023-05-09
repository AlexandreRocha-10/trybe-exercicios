export default class Person {
    constructor(private _name: string,private _birthDate: Date) {
        this.name = _name;
        this.birthDate = _birthDate;
    }

    get name(): string {
        return this._name;
    }
    
    set name(name: string) {
        this.validateName(name);
        this._name = name;
    }
    
    get birthDate(): Date {
        return this._birthDate;
    }
    
    set birthDate(date: Date) {
        this.validateBirthDate(date);
        this._birthDate = date;
    }

    static getAge(age: Date): number {
        const diff = Math.abs(new Date().getTime() - age.getTime());
        const years = 31_536_000_000;
        return Math.floor(diff/ years);
    }

    private validateName(name: string): void {
        if (name.length < 2) {
            throw new Error('Name must be at least 2 characters long.');
        }
    }

    private validateBirthDate(date: Date): void {
        if (date.getTime() > new Date().getTime()) {
            throw new Error('Birthdate nao pode ser no futuro');
        }
        if (Person.getAge(date) > 120) {
            throw new Error('Idade nao pode ser maior que 120');
        }
    }
}

// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

// console.log(maria);
// console.log(luiza);