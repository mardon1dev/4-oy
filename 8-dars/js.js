// 1-rasm

// 1-masala

// let array = [55,3,2,11,3,4,6,7,12];
// // 1-usul
// const sortedArray = array.sort((a,b)=>a-b);
// console.log(sortedArray);
// // 2-usul
// const sortedFunction = (arr) => {
//     let temp;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[i]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(sortedFunction(array));

// 2-masala
// let array = [1,6,9,5,8,10,15];
// const rangeSum = (arr, a, b) => {
//     let sum = 0;
//     for (let i = a; i < b; i++) {
//         sum += arr[i];
//     }
//     return sum
// }
// console.log(rangeSum(array, 2, 5));

// 3-masala

// let array = [2,4,5,6,6,3,2,1];
// // 1-usul
// const removeDuplicate = (arr) => {
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArray.includes(arr[i])) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }
// console.log(removeDuplicate(array));

// 4-masalaa

// let array = [2,5,3,8,4,9];
// const sortedArr = array.sort((a,b)=>a-b);
// let max = sortedArr[sortedArr.length - 1];
// let min = sortedArr[0];
// console.log(`Eng katta qiymat - ${max}`);
// console.log(`Eng kichik qiymat - ${min}`);

// 6-masala

// let array = [2,3,5,6,4];
// // 1-usul
// const reversedArray = array.reverse();
// console.log(reversedArray);
// // 2-usul
// const reverseArray = (arr) => {
//     let newArray = [];
//     for (const num of arr) {
//         newArray.unshift(num);
//     }
//     return newArray
// }
// console.log(reverseArray(array));
// // 3-usul
// const reverse = array.forEach((value, index, arr)=> {
//     value = arr[index];
//     arr[index] = arr[arr.length - 1];
//     arr[arr.length - 1] = value;
//     return arr
// })
// console.log(array);

// 2-rasm

// 7-masala

// let array = [5,4,36,7,8,3,2,9,6,1];
// const index = array.filter(value => value % 2 != 0);
// let counter = 0;
// for (let i = 0; i < index.length; i++) {
//     console.log(index[i]);
//     counter++;
// }
// console.log(counter + " ta qiymat bor");

// 8-masala

// let array = [2,3,4,5,7];
// const newArray = array.filter((value, index) => {
//     if (index % 2 == 0) {
//         return value
//     }
// })
// console.log(newArray);

// 9-masala

// let array = [1,2,3,4,5,6,7];
// const FindMax = (arr) => {
//     const newArray = arr.filter((value, index) => {
//         if (index % 2 == 0) {
//             return value
//         }
//     });
//     let max = null;
//     for (const num of newArray) {
//         if (max === null || num > max) {
//             max = num;
//         }
//     }
//     return max
// }
// console.log(FindMax(array));

// 10-masala
// let array = [2,1,5,7,6];
// const findMinMax = (arr) => {
//     let max = null;
//     let maxIndex = null;
//     let min = null;
//     let minIndex = null;
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > max){
//             max = arr[i];
//             maxIndex = i;
//         }
//         if(arr[i] < min || min == null){
//             min = arr[i];
//             minIndex = i;
//         }
//     }
//     for (let i = minIndex + 1; i < maxIndex; i++) {
//         arr[i] = 0;
//     }
//     return arr;
// }
// console.log(findMinMax(array));

// 11-masala
// let array = [12,33,25,46,35];
// const findOdd = array.filter(odd => odd % 2 != 0);
// console.log(findOdd);

// 12-masala
// let array = [22,3,5,6,3,2,3];
// const reversedFunction = (arr) => {
//     let newArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArray.push(arr[i]);
//     }
//     return newArray;
// }
// console.log(reversedFunction(array));

// 13-masala

// let array = [3,5,6,3,2,3];
// const findDuplicates = (arr) => {
//     let duplicates = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if(arr[i] != arr[j] && !duplicates.includes(arr[i])){
//                 duplicates.push(arr[i]);
//             }
//         }
//     }
//     return duplicates.sort((a,b)=>a-b);
// }
// console.log(findDuplicates(array));

// 14-masala

// let array = [2,4,1,3,6,4];
// const filteredArray = array.filter((num, index)=> {
//     if (index % 2 == 0) {
//         return num;
//     }
// })

// const findMax = (arr) => {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(filteredArray));
