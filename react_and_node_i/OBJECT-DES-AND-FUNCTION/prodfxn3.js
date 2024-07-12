const add = (a, p) => {
    p = 10;
    let res = a + p;
    return res;
}

const odd = (sum) => {
    let res1 = sum * sum;
    return res1;
}

const main = () => {
    let a = 1; 
    let b = 20;
    let sum = 0;
    let prod = a * b;
    if (prod < 50) {
        sum = add(prod);
    }
    if (sum % 2 != 0) {
        console.log(odd(sum));
    } else {
        console.log("Sum is even or zero, no odd result to print.");
    }
}

main();
