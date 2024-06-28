function greet({name="vinit", age=27}={}){
    console.log(`my name is ${name} and age is ${age}`)
}
greet({age:25, name:"mittal"})