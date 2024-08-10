// console.log(a); // can not be hostd
// let a = 10;
// console.log(a); // Output: 10
// console.log(vinit())
// var a=10;
// console.log(a);
// console.log(vinit())
// function vinit(){
//     return 10
// }
// console.log(vinit())

// const vinit = function(){
//     var a=10;
//     console.log(a)
// }
// vinit();
// console.log(mittal)  //output is 20
// console.log(vinit())  //there will be an error
// function mittal(){
//     return 20
// }
// const vinit =function()=>{
//     return 10;
// }


// try {
//     console.log(namedFunc()); // Output: 10
//     console.log(funcExpr());  // Output: TypeError: funcExpr is not a function
// } catch (error) {
//     console.log(error);
// }

// function namedFunc() {
//     return 10;
// }

// const funcExpr = function() {
//     return 20;
// };


// function vinit(){
//     var a=10;
//     console.log(a)
// }
// console.log(vinit)
// console.log(a); //this will give error


// function outer(a){
//     var outer=10;
//     return function (){
//         console.log(outer);
//         console.log(a);
//     }
//     // innner();
// }
// const inner=outer()
// inner();


// function incrementCounter() {
//     let counter = 0;
//     return function() {
//         counter++;
//         console.log(counter);
//     };
// }
// const counter1 = incrementCounter();
// counter1(); // Output: 1
// counter1(); // Output: 2\

// const elements = [1, 2, 3, 4, 5, 10, 6];

// const count = elements.reduce((accumulator) => {
//   return accumulator + 1;
// }, 0);
// console.log(count)


// const a=[6,2,3,4,56];
// const count=a.reduce((b)=>{
//     return b+1;
// });
// console.log(count)


// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((a, b) => {
//   return a + b;
// });

// console.log(sum);



// const x=[1,2,3,4,5];
// const sum=x.reduce((a,b)=>{
//     return a+b
// },0);
// console.log(sum)

const y=[1,2,3,4,5];
const largest=y.reduce((a,b)=>{
    return b>a ? b:a;
},y[0]);
console.log(largest)



