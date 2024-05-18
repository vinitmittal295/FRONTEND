// // let name ="vinit";
// // console.log(name.length)
// // console.log(name.toUpperCase())
// // console.log(name.toLowerCase())
// // for(i of name){
// //     console.log(i)
// // }


// // // find i in the name 
// // let j=0;
// // for(let i=0; i<name.length; i++){
// //     if(name[i]=="i"){
// //         j++
// //     }
// // }
// // console.log(j)
// let text1 = "      Hello World!            ";
// let tex2="vinit mittal";
// // console.log(text1.trim())
// // console.log(text1)
// console.log(tex2.replace("vinit","mittal"))
// console.log(tex2.split(" |"))


// let a="vinit";
// console.log(a.padStart(4,"t"));

// let a ="vinit";
// let b=a.split("");
// console.log(b);


// function reverseString(str){
//     let reversed = " ";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed =reversed+ str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("hello"));

// function isPalindrome(str) {
//     str = str.toLowerCase();
//     let left = 0;
//     let right = str.length - 1;
//     while (left < right) {

//         if (str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("racecar"));
let a = "vinit mittal";
let count = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] === 'a' || a[i] === 'e' || a[i] === 'i' || a[i] === 'o' || a[i] === 'u') {
        count++;
    }   
}
console.log(count);




