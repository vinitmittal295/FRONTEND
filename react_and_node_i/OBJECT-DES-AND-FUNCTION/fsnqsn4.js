function minmul(a){
    return a*5
}
function main(){
    let a=5;
    let b=20;
    let c=30;
    let d=40;
    let min=a;
    if(b<min){
        min=b;
    }
    if(c<min)
        min=c;
    if(d<min)
        min=d;
    console.log(min)
    if(min<10){
        let res=minmul(min)
        console.log(res)
    }
}
main()

