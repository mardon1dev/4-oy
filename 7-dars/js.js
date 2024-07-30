// 1-rasm
// 1-masala
// let person = {
//     name: "Abdulloh",
//     age: "19",
//     job: "Logistic company",
//     interest: "game",
//     hobby: "sleep",
//     number: "998991234567",
//     userName: "Ali"
// };

// const showPerson = (object) => {
//     for (const key of object) {
//         console.log(`${key} - ${object[key]}`)
//     }
// }
// showPerson(person);

// 2-masala

// const person1 = {
//     name: "Abdulloh",
//     age: "19",
// }
// const interests = {
//     sport: "Valeyboll",
//     game: "Fortnite",
// }

// const addPerson = Object.assign(person1, interests);
// console.log(addPerson);

// 3-masala

// let numbers = [1,2,3,4,5,6,7];
// const addOne = (array) => {
//     array[array.length - 1] += 1;
//     return array;
// }
// console.log(addOne(numbers));

// 4-masala

// let numbers = [2,3,4,5,6,7];
// const returnArr = (array) => {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     array[0] % 2 == 0 ? array.unshift(sum) : array.push(sum);
//     return array;
// }
// console.log(returnArr(numbers));

// 5-masala

// let numbers = [2,3,4,5,6];
// const changeValues = (array) => {
//     let change = array[0]
//     array[0] = array[array.length - 1];
//     array[array.length - 1] = change;
//     return array;
// }
// console.log(changeValues(numbers));

// 6-masala

// let array = [];
// const addToArray = (a) => {
//     array[a] = prompt("Biror so/z kiriting");
//     if (a > 0) {
//         addToArray(a - 1);
//     }
//     return array;
// }
// console.log(addToArray(5));

// 7-masala

// let array = [];
// const fillWithWords = (num) => {
//   array[num] = prompt(`${num + 1} - savolni kiriting.`);
//   if (num > 0) {
//     fillWithWords(num - 1);
//   }
//   return array;
// };
// const answerToQuestions = (size) => {
//   let answer = prompt(array[size - 1]);
//   console.log(answer);
//   if (size > 1) {
//     answerToQuestions(size - 1);
//   }
// };
// fillWithWords(2);
// answerToQuestions(array.length);

// 2-rasm

// 1-masala

// let promptValue = prompt("Isminginzi kiriting");
// const addToArray = (value) => {
//     let array = ["Ali", "Vali"]
//     array.push(value);  
//     return array;
// }
// console.log(addToArray(promptValue));

// 2-masala

// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,5,9,10];
// const addToArray = (arr1, arr2) => {
//     let same = null;
//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr1[i] === arr2[j]) {
//                 same = arr1[i];
//                 arr1.splice(arr1.indexOf(arr1[i]), 1);
//                 arr2.splice(arr2.indexOf(arr2[j]), 1);
//                 arr1.unshift(same);
//                 arr2.unshift(same);  
//             }
//         }
//     }
//     return [arr1, arr2];
// }
// console.log(addToArray(arr1, arr2));

// 3-MASALA

// let obj = {
//     name: "John",
//     age: "30",
//     city: "New York",
//     country: "USA",
//     study: "none",
// }
// const keys = Object.keys(obj);
// console.log(keys.length);


// 4-masala

// let array = [];
// const pushToArray = (num, i=0) => {
//     array[i] = prompt(`${i + 1} - sonni kiriting`) - 0;
//     if (i <= num) {
//         pushToArray(num - 1, i + 1)
//     }
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum
// }

// console.log(pushToArray(4));

// 5-masala

// let obj1 = {
//     name: "Abdulloh",
// }
// let obj2 = {
//     age: 19,
// }

// let obj3 = Object.assign(obj1, obj2);
// let values = Object.values(obj3)

// for (const value of values) {
//     console.log(value);
// }
