let no=54321;
let last=no%10;
let first=0;
let freq=0;

while(no>0){
    first=no%10;
    freq++;
    no =parseInt(no/10);
}
console.log(first)
console.log(last)
console.log(freq)