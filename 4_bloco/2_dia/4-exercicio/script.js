let med = 0;
let sum = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i<numbers.length; i++) {
    sum += numbers[i]
    med = sum/numbers.length
}
if (med > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor que 20")
}
