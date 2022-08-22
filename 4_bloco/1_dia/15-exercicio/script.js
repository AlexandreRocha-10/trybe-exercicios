let salariobruto = 5000.00;
let inss;
let ir;
let salariobase;
let salarioliquido;

if (salariobruto > 5189.82) {
    inss = 670.88
} else if (salariobruto > 2594.93) {
    inss = salariobruto * 0.11
} else if (salariobruto > 1556.95) {
    inss = salariobruto * 0.09
} else {
    inss = salariobruto * 0.08
}

salariobase = salariobruto - inss;

if (salariobase > 4664.68) {
    ir = salariobase*0.275 - 869.36
} else if (salariobase > 3751.06) {
    ir = salariobase*0.225 - 636.13
} else if (salariobase > 2826.66) {
    ir = salariobase*0.15 - 354.80
} else if (salariobase > 1903.99) {
    ir = salariobase*0.075 - 142.80
} else {
    ir = 0
}

salarioliquido = salariobase - ir

console.log(salarioliquido)