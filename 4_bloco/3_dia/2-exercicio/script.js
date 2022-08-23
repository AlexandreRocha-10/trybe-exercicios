let word = 'tryber';
let invert = "";

for (let i=0; i<word.length; i+=1) {
    invert += word[word.length - 1 - i]
}
console.log(invert)