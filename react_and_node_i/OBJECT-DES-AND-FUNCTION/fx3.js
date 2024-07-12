const reverse = (n) => {
    let rev = 0;
    while (n > 0) {
      rev = rev * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return rev;
  };
  
  const primenumber = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  };
  
  const prodof2 = () => {
    let a = -99,
    b = 66;
    return a * b;
  };
  
  const main = () => {
    let a = 93,
      b = 95,
      c = 99;
    let avg = (a + b + c) / 3;
    if (avg > 40) {
      let res = prodof2();
      if (res < 0) {
         res = Math.abs(res);
         console.log(reverse(res));
      } else if (res > 0) {
        if (primenumber(res)) console.log("Prime Number");
        else console.log("Not a Prime Number");
      }
    }
  };
  
  main();