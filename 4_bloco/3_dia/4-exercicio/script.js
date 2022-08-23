let biggestcousin = 0;

for (let i=2; i<=50; i+=1) {
    let cousin = true;
    for (let i2 = 2; i2 < i; i2 += 1) {
    if (i % i2 === 0) {
        cousin = false;
    }
    if (cousin) {
        biggestcousin = i
    }
    }
}

console.log(biggestcousin);