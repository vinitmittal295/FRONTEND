const person={
    name:"vinit",
    age:28,
    address:{
        street:"jdsnkn",
        location:"pune",
        pincode:231222
    },

    skills:["java","python"]
}
function function4(a){
    userinfo=["prajjal", "vinit123@gmail.com", 25]
    // merging two array
    a=[...a,...userinfo]
    // b=[...a,userinfo]
    console.log(a)
    // console.log(b)
}
function function1({street,location,pincode}){
    console.log(`my street is ${street} and location is ${location} 
        and pincode is ${pincode}`)

        const a=[];
        a.push(street,location, pincode)
        console.log(a)
        function4(a)
}


function htmlbody({name,age,address,skills}){
    function1(address)
}
htmlbody(person)