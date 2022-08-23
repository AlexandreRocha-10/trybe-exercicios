let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerWord = array[0];
let smallerWord = array[0];

for (i=0; i<array.length; i+=1) {
    if (biggerWord.length < array[i].length) {
        biggerWord = array[i]
    }
}
for (i=0; i<array.length; i+=1) {
    if (smallerWord.length > array[i].length) {
        smallerWord = array[i]
    }
}
console.log(biggerWord);
console.log(smallerWord);
