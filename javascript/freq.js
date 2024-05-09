let a=112222;
let no0=0;
let no1=0;
let no2=0;

while(a!=0){
    let rem=a%10;

    if(rem==0){
        no0++;
    }
    else if(rem==1){
        no1++;
    }
    else if(rem==2){
        no2++;
    }
    a=parseInt(a/10);
}
console.log("1: ",no1)
console.log("2: ",no2)