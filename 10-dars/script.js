// 1-masala
// const fillArray = (n, array = [])=> {
//     let item = prompt("Son kiriting") - 0;
//     array.push(item)
//     if (n > 1) {
//         fillArray(n-1, array)
//     }
//     let num = null
//     array.forEach(item => {
//         if (num < item) {
//             num = item
//         }
//     })
//     return num;
// }
// console.log(fillArray(5));

// 2-masala

// let arr1 = [5,6,true,null,8];
// let arr2 = [0,2,5,false,6];

// const sum = arr1.concat(arr2).reduce((item, nextItem)=> item + nextItem, 0);
// console.log(sum);

// 3-masala
// let array = [12,3,5,21,7,5,9];

// let min = null;
// array.forEach(item => {
//     if (item < min || min == null) {
//         min = item
//     }
// })
// const minIndex = array.findIndex(item => item == min);
// console.log(minIndex);

// 4-masala 
// // Berilmagan

// 5-masala

// let arr1 = [5,4,3,6,3,7,1];
// let arr2 = [22,1,42,34,55,67,11,32];
// const newArrr = arr1.concat(arr2).sort((a,b)=> a-b);
// console.log(newArrr);

// 6-masala

// let carsArr = [
//     {
//         name: "Lasetti",
//         price: 9000
//     },
//     {
//         name: "Damas",
//         price: 7000
//     },
//     {
//         name: "Cobalt",
//         price: 12500
//     },
//     {
//         name: "Gentra",
//         price: 14000
//     },
//     {
//         name: "Onix",
//         price: 17000
//     }
// ]
// const nameSorted = carsArr.sort((a,b) => a.name.localeCompare(b.name));
// console.log(nameSorted);

// const priceSorted = carsArr.sort((a,b)=> a.price - b.price);
// console.log(priceSorted);

// 7-masala

// let arr = ["Salom", "Raxmat"];
// const lastItem = arr.splice(arr.length - 1, 1).join("");
// for (let i = 0; i < 2; i++) {
//     arr.push(prompt("Biror bir qiymat kiriting"))
// }
// arr.push(lastItem);
// arr.forEach(item=>console.log(item));

// 8-masala

// let gap = prompt("Biror nima yozing");
// const reverseEvery = (item) => {
//     if (Number(item)) {
//         return item.split("").reverse().join("")
//     }
//     else{
//         return item.split(" ").reverse().join(" ")
//     }
// }
// console.log(reverseEvery(gap));