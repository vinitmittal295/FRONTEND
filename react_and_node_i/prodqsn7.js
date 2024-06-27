


function cube(n){
    return n*n*n
}

function main(){
    let b=40;
    let c=30;
    let diff=b-c;
    if(diff<0){
        let res=Math.abs(diff)
        console.log(res)
    }
    if(diff%2==0){
        let c=cube(diff)
        console.log(c)
    }

}
main()