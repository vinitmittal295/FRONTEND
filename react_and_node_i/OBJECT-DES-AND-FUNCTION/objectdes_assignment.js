const fruits={
    name:"mango",
    price:40,
    address:{
        city:"jaipur",
        pincode:23432
    }
}
function function4(a){
    add=["add",123]
    a=[...a,...add]
    console.log(a)
}
function function1({city,pincode}){
    console.log(`city is ${city}, pincode is ${pincode}`)
    const a=[];
    a.push(city,pincode)
    console.log(a)
    function4(a)
}
function fruitscall({name,price,address}){
    function1(address)
}
fruitscall(fruits)