
// // 1. You have several objects and need to pass them to a function. Inside the function, use the rest operator to handle the objects and print each one. Write the function and explain the process.
// const printobject=(...objects)=>{
//     objects.forEach((object)=>{
//         console.log(object)
//     })

// }

// const obj1={name:"vinit"}
// const obj2={name:"mittal"}
// const obj3={name:"katewa"}
// printobject(obj1,obj2, obj3)


// //2. Write a function that can take any number of arguments and return 
// // their sum. Explain how the rest operator allows you to handle an indefinite number of arguments and how you can iterate using ForEach over them to calculate the sum.
// const summation=(...nums)=>{
//     let sum=0;
//     nums.forEach((num)=>{
//         sum=sum+num

//     })
//     return sum
// }


// console .log(summation(1,2,3,4,5,6));

// find sum by using reduce function
// curly bracket use ni kr skte
// reduce array ke continuous data par kam krta hain


// const sum=(...nums)=>{
//     return nums.reduce((sum,num)=>sum+num,0)
// }
// console.log(sum(1,2,3,4,5,6))


// const fact=(...nums)=>{
//     return nums.reduce((fact,num)=> fact*num,1)
// }
// console.log(fact(1,2,3,4,5))

// find max by using reduce function

const max=(...nums)=>{
    return nums.reduce((maxi,num)=>(maxi>num ? maxi:num),0)
}
console.log(max(1,2,3,4,5))