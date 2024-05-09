// let a= function(a,b){
//     return a+b;
// }
// console.log(a(10,20))

// // (()=>{
// //     console.log("hello ")
// // })()


// // let a =(x,y)=>x+y
// // console.log(a(10,20))


// // by using chat gpt
// function factorial(n) {
//     if (n === 0 || n === 1){
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// function isStrongNumber(num) {
//     let sum = 0;
//     let temp = num;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum = sum + factorial(digit);
//         temp = Math.floor(temp / 10);
//     }

//     return sum === num;
// }

// // Example usage:
// const number = 145;
// if (isStrongNumber(number)) {
//     console.log(number + " is a strong number.");
// } else {
//     console.log(number + " is not a strong number.");
// }




let strong = (n)=>{
    let sum=0;
    while(n>0){
        let fact=1;
        let rem = n%10;
        for(let i=rem; i>=1; i--){
            fact=fact*i;
            
        }
        console.log(fact)
        sum=sum+fact;
        n=parseInt(n/10);
    }
    return sum;

};
let ans=strong(145);
console.log(ans);