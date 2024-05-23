// myobj= {
//     name:"john",
//     age:"30",
//     mycars: {   
//         car1:"ford",
//         car2:"bmw",
//         car3:"fiat",
//     }
// }
// console.log(myobj.age);
// console.log(myobj.mycars.car3)
// console.log(myobj.mycars["car3"])
// console.log(myobj["mycars"]["car3"])
// delete myobj["age"]
// console.log(myobj.age)


// const person = new Object();

// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person.firstName)
// console.log(person.lastName)

// const person=new Object()
// person.firstName="vinit"
// person.lastName="mittal"
// person.age=25
// person.eyeColor="blue"

// console.log(person.firstName)

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName())


//   const person={
//     firstname:"vinit",
//     lastname:"mittal",
//     age:30,
//     eyecolor:"red",
//   }
//   const x=person;
//   console.log(x.age)


const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  let text = "";
  for (let x in person) {
    text =text + person[x] + " ";
  };
console.log(text)

const a={
    firstName: "vinit",
    lastName:"mittal",
    age:34,

}
let text1="";
for(let x in a){
    text1=text1+a[x] + " "
}
console.log(text1)