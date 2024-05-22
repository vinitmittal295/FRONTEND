function outer(){
    let name="mohit"
    function inner(){
        console.log(name)
    }
    return inner;
}
let answer=outer();
answer()