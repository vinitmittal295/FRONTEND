// // // function that calls itself
// // // user defined callback function
// // function calculator(a,b,operation){
// //     return operation(a,b)
// // }
// // function sum(a,b){
// //     return a+b;
// // }
// // function sub(a,b){
// //     return a-b
// // }


// // console.log(calculator(3,5,sum))
// // console.log(calculator(3,6,sub))

// // // callback with foreach
// // const arr=["java", "cpp"]
// // arr.forEach((it)=>{
// //     console.log(it)
// // })
// // // js me jis=tne b function h vo sare functions callback functuons h 
// // // jo ek annonymous function as a argument lete hai

// // function FruitsFunc(name, callthefunction){
// //     return callthefunction(name)
// // }
// // function printkiwi(val){
// //     console.log(val)
// // }
// // console.log(FruitsFunc("kiwi",printkiwi))

// // assignment practise

// // function calculator(a,b,operation){
// //     return operation(a,b)
// // }
// // function sum(a,b){
// //     return a+b
// // }
// // function sub(a,b){
// //     return a-b
// // }
// // function mul(a,b){
// //     return a*b
// // }
// // console.log(calculator(1,7,sum))


// // Define the functions to handle each type of information
// function printName(username) {
//     console.log(`Username: ${username}`);
// }

// function printAge(age) {
//     console.log(`Age: ${age}`);
// }

// function printRollNo(rollno) {
//     console.log(`Roll Number: ${rollno}`);
// }

// // Define the master function
// function masterFunction(info, func) {
//     func(info);
// }

// // Examples of using the masterFunction
// const username = "vinit";
// const age = 25;
// const rollno = "12345";

// // Passing different information and corresponding functions
// masterFunction(username, printName);  // This will call printName with username
// masterFunction(age, printAge);        // This will call printAge with age
// masterFunction(rollno, printRollNo);  // This will call printRollNo with rollno
function printName(){
    console.log(username)
}
function printAge(){
    console.log(age)
}
function printRollNo(){
    console.log(rollno)
}


function masterFunction(name,func){
    func(name);
}

const username="vinit mittal";
const age=21;
const rollno=3343;

masterFunction(username,printName);
masterFunction(age,printAge)
masterFunction(rollno,printRollNo)


