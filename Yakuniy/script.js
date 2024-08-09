// ___________Yakuni______________
// 1-misol
// let son1 = prompt("Birinchi sonni kiritng");
// let son2 = prompt("Ikkinchi sonni kitin");

// if (Number(son1, son2)) {
//     console.log(addNumbers(Number(son1), Number(son2)));
// }
// else{
//     alert("Iltimos son kititing")
// }
// function addNumbers(num1, num2){
//     return num1 + num2;
// }

// 2-misol

// let array = ["5", 2, "true"];
// const changeArray = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (Number(arr[i]) == arr[i]) {
//         arr[i] = Number(arr[i])
//         }
//         else if (typeof arr[i] == "string"){
//             arr[i] = 0
//         }
//     }
//     return arr
// }
// console.log(changeArray(array));

// 3-misol

// let numbers = [2,4,1,67,32,676];

// const findMin = (arr) => {
//     let min = null;
//     arr.forEach(element => {
//         if (element < min || min == null) {
//             min = element
//         }
//     });
//     return min
// }
// console.log(findMin(numbers));

// 4-misol

// let array = ["salom", 5, true, undefined, "ok"];

// const findValue = (arr) => {
//     let input = prompt("Biror bir narsa kiritng");
//     let found = false;
//     let index = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == input) {
//             found = true;
//             index  = i
//         }
//     }
//     if (found && index != null) {
//         console.log(`${index} - siz kiritgan qiymat indexsi`);
//     }
//     else{
//         alert("Afsus siz kiritgan qiymat ushbu arrayda yo'q");
//     }
// }
// findValue(array);