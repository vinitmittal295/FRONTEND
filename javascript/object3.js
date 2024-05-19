const complexData = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
      },
      orders: [
        { orderId: "A123", amount: 50.75, status: "completed" },
        { orderId: "B456", amount: 30.25, status: "pending" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      address: {
        street: "456 Oak St",
        city: "Othercity",
        country: "USA",
      },
      orders: [
        { orderId: "C789", amount: 100.5, status: "completed" },
        { orderId: "D012", amount: 75.2, status: "completed" },
      ],
    },
  ]
 
//   question no 1
// Filter users who are aged 25 or younger.
//   let data=complexData.filter((item)=>{
//     return (item.age)>25;
//   })
//   console.log(data)


// questionn no 2
// Map the array to get an array of user names.

// let data1=complexData.map(a=>a.name);
// console.log(data1)

// question no 3

// Filter orders with an amount greater than 50.

// let data2 = complexData.map(b=>b.orders.filter(c=>c.amount>50))

// console.log(data2)

// question no 4 
// Map the array to get an array of order IDs.
// let arr3=complexData.map(a=>a.orders.map(b=>b.orderId))
//  console.log(arr3)

//  question no 5
// // Filter users who have at least one order with a status of 'pending'.
// let arr4=complexData.map(a=>a.orders.filter((i)=>{
//     return (i.status==="pending")
// }
// ))
// console.log(arr4);

// question no 6
// Map the array to get an array of objects containing user names and their total order amounts.

// let arr6=complexData.map((i)=>{

//     return{
//         a:i.name,
//         b:i.orders.reduce((x,y)=>{
//             return (x.amount+y.amount)
//         })
//     }
// })
// console.log(arr6)

// question no 7
// Filter orders with an amount between 30 and 70.
// let arr5 = complexData.map(e => {
//     return e.orders.filter(e => e.amount > 30 && e.amount < 70).map(e => e.amount);
//   });
  
//   console.log(arr5);


// let arr5=complexData.map(a=>{
//   return a.orders.filter(b=>b.amount >30 && b.amount<70).map(c=>c.amount)
// })
// console.log(arr5)


// question 8
// Filter users who live in the 'USA' and have at least one order with an amount greater than 50.
// let arr9=complexData.map((i)=>{
//   return {
//     a:i.address.country,
//     b:i.orders.filter((c)=>{
//       return (c.country==="USA" && c.orders.amount>50)
//     })

//   }
// })
// console.log(arr9)

const filteredUsers = complexData.filter(user => 
  user.address.country === "USA" && 
  user.orders.some(order => order.amount > 50)
);

console.log(filteredUsers);
