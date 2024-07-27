// -------------Masalalar----------
// 1-masala
// const reverSeNumber = (num) => Number(String(num).split("").reverse().join(""));
// console.log(reverSeNumber(123));

// 2-masala

// const factorial = (num) => num === 0 ? 1 : num * factorial(num-1);
// console.log(factorial(5));

// 3-masala

// const user1 = {
//     id:1,
//     name: "John",
//     age: 25,
//     occupation: "Developer",
// }
// const user2 = {
//     id:2,
//     name: "Alice",
//     age: 30,
//     occupation: "Designer"
// }

// const campare = (obj1, obj2) => obj1.age > obj2.age ? obj1.name : obj2.name;
// console.log(campare(user1, user2));

// // 4-masala

// const logNumbers = (num) => {
//     console.log(num);
//     if (num > 1) {
//         logNumbers(num - 1);
//     }
// }
// logNumbers(10);

// 5-masala

// let user = {name: "Shaxzod"};
// let age = {age: 25};
// let userJob = {job: "Developer"};
// // 1-usul
// const info = Object.assign(user, age, userJob);
// console.log(info);
// // 2-usul
// const info = {...user, ...age, ...userJob};
// console.log(info);
// // 3-usul
// const concatObj = (obj1, obj2, obj3) => {
//     let newObj = {}
//     for (let key in obj1) {
//         newObj[key] = obj1[key];
//     }
//     for (let key in obj2) {
//         newObj[key] = obj2[key];
//     }
//     for (let key in obj3) {
//         newObj[key] = obj3[key];
//     }
//     return newObj;
// }
// const info = concatObj(user, age, userJob);
// console.log(info);

// 6-masala
// let salaries = {
//     "John": 150,
//     "Pete": 180,
//     "Mary": 210
// }
// // 1-usul
// const sum = Object.values(salaries).reduce((acc, current) => acc + current, 0);
// console.log(sum);
// // 2-usul
// const calculateSalaries = (obj) => {
//     let sum = 0;
//     const wages = Object.values(obj);
//     for (let i = 0; i < wages.length; i++) {
//         sum += wages[i];
//     }
//     return sum;
// }
// const sum = calculateSalaries(salaries);
// console.log(sum);


// 7-masala
// let array = [2,5,3,8,54,9];
// // 1-usul
// const max = Math.max(...array);
// console.log(max);
// // 2-usul
// const max = array.reduce((max, current) => {
//         return max > current ? max : current
//     }, array[0]);
// console.log(max);
// // 3-usul
// const maxNunmber = (arr) => {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// const max = maxNunmber(array);
// console.log(max);

// 8-masala
// let arr = [2,4,6,true, false, null, undefined];
// 1-usul
// const sumArray = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "undefined") {
//             arr[i] = 0
//         }
//         if (Number(arr[i])) {
//             sum += arr[i]
//         }
//     }
//     return sum;
// }
// const sum = sumArray(arr);
// console.log(sum);


// ------- 2-rasm ----------------

// 1-masala
// let arr = [
//     {
//         name: "Abdulloh",
//         age: 20,
//         status: false
//     },
//     {
//         name: "Botir",
//         age: 18,
//         status: true
//     },
//     {
//         name: "Shokir",
//         age: 12,
//         status: false
//     }
// ]
// const isGood = (arr) =>{
//     for (const person of arr) {
//         if (person.status == true) {
//                 console.log(person.name);
//         }
//     }
// }
// isGood(arr);

// 2-masala

// const logNumber = (num) => {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += i
//     }
//     return sum
// }
// console.log(logNumber(5));

// 3-masala

// let arr1 = [12,3,4,5];
// let arr2 = [1,2,3,4,5,6,7,8];
// const sameNumbers = (arr1, arr2) => {
//     let result = [];
//     for (const num of arr1) {
//         if (arr2.includes(num)) {
//             result.push(num)
//         }
//     }
//     return result
// }
// console.log(sameNumbers(arr1, arr2))

// 4-masala

// let arr1 = [12,3,4,5];
// let arr2 = [1,2,3,4,5,6,7,8];
// // 1-usul
// const findSame = (arr1, arr2) => {
//     let newArr = []
//     for (const num of arr1) {
//         if (arr2.includes(num)) {
//             newArr.push(num)
//         }
//     }
//     let max = null;
//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] > max) {
//             max = newArr[i];
//         }
//     }
//     return max
// }
// console.log(findSame(arr1, arr2));
// // 2-usul
// const findSame = (arr1, arr2) => {
//     let max = null;
//     for (const num of arr1) {
//         if (arr2.includes(num)) {
//             if (num > max) {
//                 max = num
//             }
//         }
//     }
//     return max
// }
// console.log(findSame(arr1, arr2));


// 5-masala

// const logNu = (num) => {
//     for (let i = 1; i <= num; i++) {
//         console.log(i)
//     }
// }
// logNu(10);

// ---------3-rasm---------------

// let size = prompt("Arrayning usunligini kiriting") - 0;

// function makeArray(size) {
//     let arr = new Array();
//     for (let i = 0; i < size; i++) {
//         let user = new Object();
//         user.ID = i+1;
//         user.Name = prompt("Ismi kiriting");
//         arr.push(user)
//     }
//     return arr
// }
// console.log(makeArray(size));

// 2-masala

// let arr = [1,1,2];
// const removeDuplicate = (arr) => {
//     let newArr = [];
//     for (const num of arr) {
//         if (!newArr.includes(num)) {
//             newArr.push(num)
//         }
//     }
//     return newArr
// }
// console.log(removeDuplicate(arr));

// 3-masala

// let num = prompt("Biror son kiriting") - 0;
// let array = [88, 75, 342, 21, 45, 67];
// // 1-usul
// function findIndex(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == num) {
//             return `${num} - arrayning ${i} indexida joylashgan`;
//         }
//     }
//     return "Bu son array ichida yo'q"
// }
// console.log(findIndex(array));
// // 2-usul
// const findIndex = (arr) => arr.indexOf(num) !== -1 ? `${num} - arrayning ${arr.indexOf(num)} indexida joylashgan` : "Bu son array ichida yo'q";
// console.log(findIndex(array));

// 4-masala

// let num = prompt("Biror son kiriting") - 0;
// let array = [88, 75, 342, 21, 45, 67];

// const removeNum = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == num) {
//             arr.splice(i, 1);
//         }
//     }
//     return arr
// }
// console.log(removeNum(array));

// 5-masala
// let array = [1,6,3,5];
// const maxTwoSum = (arr) => {
//     let max = null;
//     let secondMax = null;
//     let sortedArray = arr.sort((a,b)=>a-b);
//     for (let i = 0; i < sortedArray.length; i++) {
//         if (max == null || sortedArray[i] > max) {
//             max= sortedArray[i];
//             secondMax = sortedArray[i - 1]
//         }
//     }
//     return max + secondMax;
// }
// console.log(maxTwoSum(array));