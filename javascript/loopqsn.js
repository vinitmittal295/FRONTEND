
    let num=7;
    let flag=0
    for(let i=2; i<num; i++){
        if(num%i==0){
            flag=1;
        }
    }
    if(flag==0){
        console.log("prime")
    }
    else{
        console.log("not prime")
    }


    function primenotprime(n){
        for(let i=2; i<n; i++){
            if(n%i==0){
                return 1;
            }
        }
        return 0;
    }
    let ans=primenotprime(7);
    if(ans==0){
        console.log("prime")
    }
    else{
        console.log("not prime")
    }


// between two number

function primenotprime(n){
    for(let i=1; i<n; i++){
        let flag=0;
        for(let j=2; j<i; j++){
            if(i%j==0){
                flag=1;
            }
        }
        if(flag==0){
            console.log(i)
        }
    }
}
primenotprime(50);


// // find armstrong number
// function armstrongnumber(n){
//     let sum=0;
//     let rem=0;
//     while(n>0){
//         rem=n%10;
//         sum=rem*rem*rem+sum;
//         n=parseInt(n/10);
//     }
//     return sum;
// }
// ans=armstrongnumber(1634);
// console.log(ans)



function arms(n){
    let temp=n;
    let freq=0;
    while(temp>0){
        temp=parseInt(temp/10);
        freq++;
    }
    let sum=0;
    while(n>0){
        let rem=n%10;
        sum=sum+rem**freq;
        n=parseInt(n/10);
    }
    return sum;
}
let ans=arms(153);
console.log(ans)