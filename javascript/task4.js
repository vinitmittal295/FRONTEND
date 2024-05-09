

// //   find prime number

// let num = 6;
// let flag = 0;

// for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         flag = 1;
//     }
// }

// if (flag == 0) {
//     console.log("prime");
// } else {
//     console.log("not prime");
// }

// // find fibbanacci
// let a=0;
// let b=1;
// let c=0;
// for(let i=0; i<5; i++){
//     c=a+b;
//     a=b;
//     b=c;
//     console.log(c)
// }

//find sum of natural number

// let sum=0;
// for(let i=0; i<=5; i++){
//     sum=sum+i;
// }
// console.log(sum)

// find prime number between two number not running
// let start=0;
// let end=100;
// let flag=0
// for(let num=start; num<=end; num++){
//     for(let i=2; i<num; i++){
//         if(num%i==0){ 
//             flag=1;
//         }
//     }
//     if(flag==0){
//         console.log(num)
//     }
//     // else{
//     //     console.log()
//     // }
// }

// digit count not running
// let num=1234;
// let count=0;
// while(num!=0){
//     num=num/10;
//     count++;
//     // console.log(count)
// }
// console.log(count)

// find palindrome number not running 

let num=121;
let rem=0;
let sum=0;
while(num>0){
    rem=num%10;
    sum=rem*10+sum;
    num=num/10;
}
console.log(sum)
