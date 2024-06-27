function maxsub(n1,n2,n3){
    let p=4;
    let q=4;
    return n1-p-q 
}
function facti(n){
    let fact2=1;
    for(let i=0; i<n; i++){
        fact2=fact2*i;
    }
    return fact2
}

function main(){
    let a=1;
    let b=2;
    let c=4;
    let d=4;
    let e=5;
    let f=-15;
    let max=a;
    if(b>max){
        max=b;
    }
    if(c>max){
        max=c;
    }
    if(d>max){
        max=d;
    }
    if(e>max){
        max=e
    }
    if(f>max){
        max=f
    }
    console.log(max)
    if(max>0){
        let result =maxsub(max)
        console.log(result)
        if(result<0){
            let absoluteValue=Math.abs(result)
            let fact=facti(absoluteValue)
            return fact
        }
    }
}
let ans=main()
console.log(ans)