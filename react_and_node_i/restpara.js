function sum(...numbers){
    let sum=0;
    numbers.forEach((Element)=>{
        sum=sum+Element
    }) 
    return sum;

}
console.log(sum(2,3,4,5))