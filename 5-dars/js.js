// let character = "!";
// let count = 8;
// let arr = [];

// function pyramid() {

// }

// // for (let i = 0; i <= count; i++) {
// //     arr.push(character.repeat(i));
// // }
// for (let i = 0; i < count; i++) {

// }

// console.log(arr);

// 1-masala
// const array = [
//     {
//         id:1,
//         name:"Botir",
//         age: 20,
//         hobby: "Football"
//     },
//     {
//         id:2,
//         name:"Anvar",
//         age: 22,
//         hobby: "Basketball"
//     },
//     {
//         id:3,
//         name:"Shohruh",
//         age: 20,
//         hobby: "Basketball"
//     },
//     {
//         id:4,
//         name:"Akram",
//         age: 20,
//         hobby: "Football"
//     }
// ]

// function sortArray(array) {
//     let arr = [];
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i].age === array[j].age && array[i].hobby === array[j].hobby) {
//                 arr.push(array[i]);
//                 arr.push(array[j]);
//             }            
//         }
//     }
//     return arr;
// }
// const names = sortArray(array);
// console.log(names);


// 2-masala

// let array = [3,4,5,2,4,3,7,5,9,4];
// let arr = [];
// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j] && !arr.includes(array[j])) {
//             arr.push(array[i]);
//         }
//     }
// }
// console.log(arr);

// 3-masala

// let array = [22,122,3,4,222,123,43];
// const sortedArray = function (arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     arr.unshift(max);
//     return arr
// }
// const newArray = sortedArray(array);
// console.log(newArray);


// 4-masala
// let size = prompt("Arrayning uzunligini kiriting.");
// function makeArray(size) {
//     let arr = [];
//     for (let i = 0; i < size; i++) {
//         arr[i] = prompt(`${i+1} - ismni kiriting;`);
//     }
//     return arr;
// }
// const newArr = makeArray(size);
// let ism = prompt("Ismingizni kiriting;");

// function foundName(ism) {
//     let found = false;
//     for (const name of newArr) {
//         if (name.toLowerCase() == ism.toLowerCase()) found = true;
//     }
//     newArr.push(ism)
//     return found ? `Ushu ismlar ichida ${ism} mavjud` : newArr; 
// }
// console.log(foundName(ism));

// 5-masala
// let num = prompt("Biror son kiriting") - 0;
// function makeArray(num) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         arr[i] = i +1;
//     }
//     return arr;
// }
// const newArr = makeArray(num);
// console.log(newArr);

// function reverseArray(array) {
//     let newArr = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         newArr.push(array[i]);
//     }
//     return newArr;
// }
// const reversedArray = reverseArray(newArr);
// console.log(reversedArray);

// -------- Keyingi masalalar --------

// 1-masala
// let son1 = prompt("Birinchi sonni kiriting") - 0;
// let son2 = prompt("Ikkinchi sonni kiriting") - 0;

// // Function Decleration orqali
// function addNumbers(a,b) {
//     return a + b 
// }
// // Arrow function orqali
// const addNumbers = (a,b)=>a+b;
// console.log(addNumbers(son1,son2));

// 2-masala

// function findSum(arr) {
//     let sum = 0;
//     for (const number of arr) {
//         sum += number;
//     }
//     return sum;
// }
// const arraySum = findSum([1,2,3,4,5,6,7,8])
// console.log(arraySum);

// 3-masala

// let array = [1,2,-3,4,-56,67,-8];
// function findPositiveNumbers(arr) {
//     let positiveNumbers = [];
//     for (const number of arr) {
//         if (number > 0) {
//             positiveNumbers.push(number);
//         }
//     }
//     return positiveNumbers;
// }

// const positiveNumbers = findPositiveNumbers(array);
// console.log(positiveNumbers);

// 4-masala

// let arr = ["5", 2, "salom",];
// function turnNumber(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == Number(arr[i])) {
//             arr[i] = Number(arr[i]);
//         }
//         else{
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }
// const result = turnNumber(arr);
// console.log(result);

// 5-masala

// const people = [
//     {
//         name: "Abdulloh",
//         age: 19,
//         status: false
//     },
//     {
//         name: "Ibrohim",
//         age: 20,
//         status: true
//     },
//     {
//         name:"Shodiyor",
//         age: 18,
//         status: false
//     }
// ]

// function findPeople(people) {
//     for (const person of people) {
//         if (person.status == true) {
//             console.log(person.name);
//         }
//     }
// }
// findPeople(people);

// 6-masala
// let array = [];
// array.push(prompt("Birinchi son") - 0);
// array.push(prompt("Ikkinchi son") - 0);
// array.push(prompt("Uchunchi son") - 0);

// function medium(arr) {
//     let sum = 0;
//     for (const num of arr) {
//         sum += num;
//     }
//     return sum / arr.length;
// }
// console.log(medium(array));

// 7-masala

// let array = [2,2,3,4,5];
// function changeArray(arr) {
//     arr[0] +=1
//     return arr
// }
// console.log(changeArray(array));

// 8-masala

// let array1 = ["hi", "hello", "ok"];
// let array2 = ["bye", "goodbye", "ok"];

// // Bu usulda arrayning tayyor metodidan foydalanildi. includes orqali
// function compare(arr1, arr2) {
//     let result = [];
//     for (const item of arr1) {
//         if (arr2.includes(item)) {
//             result.push(item)
//         }
//     }
//     return result
// }
// console.log(compare(array1, array2));

// // Bu usulda esa linear search orqali topildi. Ichma ich loop orqali
// function compare(arr1, arr2) {
//     let result = [];
//     for (const item of arr1) {
//         for (const item2 of arr2) {
//             if (item === item2) {
//                 result.push(item)
//             }
//         }
//     }
//     return result
// }
// console.log(compare(array1, array2));


// // Robo contest

// 8-masala

// let arr = [1,2,3,4,5];
// // For loop orqali minimum yig'indi va maksimum yig'indi.
// function findMinMax(arr) {
//     let newArr = []
//     let newReversedArr = [];
//     let maxNum = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxNum) {
//             newArr.push(arr[i])
//         }
//         else{
//             newArr.unshift(arr[i])
//         }
//     }
//     for (const item of newArr) {
//         newReversedArr.unshift(item);
//     }

//     let minSum = 0;
//     let maxSum = 0;
//     for (let i = 0; i < newArr.length - 1; i++) {
//         minSum += newArr[i];
//     }
//     for (let i = 0; i < newReversedArr.length - 1; i++){
//         maxSum += newReversedArr[i];
//     }
//     return [minSum, maxSum]
// }

// // Array methodlaridan foydalnildi 
// // function findMinMax(arr) {
// //     const sortedArray = [...arr].sort((a,b)=> a-b);
// //     const minSum = sortedArray.slice(0, sortedArray.length - 1).reduce((acc, cur)=>acc+ cur, 0)
// //     const maxSum = sortedArray.slice(1).reduce((acc, cur)=>acc + cur, 0)
// //     return [minSum, maxSum]
// // }
// console.log(findMinMax(arr));


// 9-masala

// var singleNumber = function(nums) {
//     let arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if(nums[i] == nums[j]){
//                 arr.push(nums[i])
//             }   
//         }
//     }

//     for (const number of nums) {
//         if (!arr.includes(number)) {
//             return number
//         }
        
//     }
// }
// console.log(singleNumber(arr))

// 11-masala

// let arr = [2,3,4,5,7,1];
// function findSecondMax(arr) {
//     let max = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (max === null || arr[i] > max) {
//             max = arr[i]
//         }
//     }   
//     let secondMax = null;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== max && (secondMax === null || arr[i] > secondMax)) {
//             secondMax = arr[i]
//         }
//     }
//     return secondMax;
// }
// console.log(findSecondMax(arr))




 // Ushbu dastur orqali o'quvchining imtihondan o'tgan yoki o'tmaganligi
 // tekshiriladi.


//  // Umumiy o'rtacha bal hisoblanadi
//  function getAverage(scores) {
//    let sum = 0;

//    for (const score of scores) {
//      sum += score;
//    }

//    return sum / scores.length;
//  }

//  // Baho tekshiriladi
//  function getGrade(score) {
//    if (score === 100) {
//      return "A++";
//    } else if (score >= 90) {
//      return "A";
//    } else if (score >= 80) {
//      return "B";
//    } else if (score >= 70) {
//      return "C";
//    } else if (score >= 60) {
//      return "D";
//    } else {
//      return "F";
//    }
//  }

//  //  Imtihondan o'tgan yoki o'tmaganligi tekshiriladi 
//  function hasPassingGrade(score) {
//    return getGrade(score) !== "F";
//  }
//  // Yakuniy natija.
//  function studentMsg(totalScores, studentScore) {
//    let score = getAverage(totalScores);
//    let grade = getGrade(studentScore);
//    if(score < studentScore){
//      return `Class average: ${score}. Your grade: ${grade}. You passed the course.`
//    }
//    else{
//       return `Class average: ${score}. Your grade: ${grade}. You failed the course.`
//    }

//  }
//  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
