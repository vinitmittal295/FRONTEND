let num=6;
let flag=0;
for(int i=2; i<num; i++){
    if(num%2==0){
        flag=1;
    }
}
if(flag==0){
    console.log("prime")
}
else{
    console.log("not prime")
}