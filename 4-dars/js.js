// let num1 = prompt("Birinchi son") -0;
// let action = prompt("Amalni belgilang");
// let num2 = prompt("Ikkinchi son") - 0;

// switch (action) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num1 / num2);
//         break;
//     default:
//         console.log("To'gri amal kiriting");
// }


// 1-names
// let ism = prompt("Ismingizni kiriting");
// let names = ["Mardon", "Oyatullo", "Mohirjon"];
// let yes = false;

// for (let name of names) {
//     switch (ism.toLowerCase()) {
//         case name.toLowerCase():
//             yes = true;;
//             break;
//     }
// }
// console.log(yes ? "Bu ism bor" : "Bu ism yo'q");


// let arr = [];
// for (let i = 1; i <= 9; i++) {
//     let subArr = []
//     for (let j = 1; j <= 10; j++) {
//         let num = `${i} * ${j} = ${i * j}`;
//         subArr.push(num)
//     }
//     arr.push(subArr);
// }

// console.table(arr);


// let array = [2,4,6,43,35]

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         array[i] = 0;
//     }
// }
// console.log(array);  


// Uyga vazifa;
// 1-masala
// let num = prompt("Biror son kiriting") - 0;
// let bir = num % 10;
// let ikki = Math.trunc((num % 100)/10);
// let uch = Math.trunc(num / 100);
// console.log((bir + uch)/ikki + " marta katta.");

// 2-masala
// let son = prompt("Biror son kiriting") - 0;
// let sum = null;
// for (let i = 0; i <=son; i++) {
//     if (son % i == 0) {
//         sum += i 
//     }
// }
// console.log(sum);

// 3-masala
// let arr = [true, "String", 23, undefined];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "string") {
//         arr[i] = null
//     }
// }
// console.log(arr);

// 4-masala
// let array = [2,3,4,5,6,52,6,32,7,23,5];
// let max = 0;
// let i = 0;
// while (i <=array.length) {
//     if (max < array[i]) {
//         max = array[i]
//     }
//     i++
// }
// console.log(max);

// 5-masala

// let arr = [54, 32, 76, 12, 22];
// let sum = null;
// for (const num of arr) {
//     sum += num
// }
// console.log(sum);

// 7-masala

// let arr =[1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         arr[i] = 0
//     }
// }
// console.log(arr);

// 8-masala

// let num1 = prompt("Birinchi son") -0;
// let action = prompt("Amalni belgilang");
// let num2 = prompt("Ikkinchi son") - 0;

// switch (action) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num1 / num2);
//         break;
//     default:
//         alert("To'gri amal kiriting");
// }

// 9-masala
// let arr = ["Nuriddin", "Shaxboz", "Adham", "Suhrob"];
// let ism = prompt("Ism kiriting");
// let found = false;
// for (const name of arr) {
//     if (ism.toLowerCase() == name.toLowerCase()) {
//         found = true;
//         console.log(`${ism}  - bu array ichida bor.`);
//         break;
//     }
// }
// if (!found) {
//     console.log(`${ism}  - bu array ichida yo'q`);
// }

// 10-masala

// let array = [
//     {
//         id:1,
//         age: 20,
//         name: "Nuriddin", 
//         gmail: "nuriddin@gmail.com"
//     },
//     {
//         id:2,
//         age: 15,
//         name: "Komiljon",
//         gmail: "komiljon@gmail.com"
//     },
//     {
//         id:3,
//         age: 25,
//         name: "Izzatbek",
//         gmail: "izzatbek@gmail.com"
//     }
// ]

// let ism = prompt("Ism kiriting");
// let found = false;
// for (const name of array) {
//     if (ism.toLowerCase() == name.name.toLowerCase()) {
//         found = true;
//         console.log(name);
//         break;
//     }
// }
// if (!found) {
//     console.log("Afsus, bu ismga ega odam topilmadi.");
// }
// // switch case orqali
// let found = false;
// for (const person of array) {
//     switch (ism.toLowerCase()) {
//         case person.name.toLowerCase():
//             console.log(person);
//             found = true;
//             break;
//     }
// }

// if (!found) {
//     console.log("Afsus, bu ismga ega odam topilmadi.");
// }

// 11-masala

// let maxAge = null;
// let oldPerson = null;
// for (const person of array) {
//     if (person.age > maxAge) {
//         maxAge = person.age;
//         oldPerson = person;
//     }
// }
// if (oldPerson && maxAge) {
//     console.log(`The oldest person id ${oldPerson.name} and the age is ${oldPerson.age}.`, oldPerson);
// }

// 12-masala
// let sum = null;
// for (const person of array) {
//     sum += person.age
// }
// let medium = sum / array.length
// console.log(medium);

// 13-masala
// let nums = [23,54,21,76,23,87];
// let num = nums[0] + nums[nums.length - 1]
// num % 2 != 0 ? nums.push(num) : nums.unshift(num);
// console.log(nums);
// 14-masala
// let nums = [1,2,3,4,5,6,7,8,9];
// let even = [], odd = [];
// for (const num of nums) {
//     num % 2 == 0 ? even.push(num) : odd.push(num)
// }
// console.log("Juftlari: ", even);
// console.log("Toqlari: ", odd);

// 15-masala

// // For of loop arrayni qaytara olmasli sabali yangi array ochishga to'g'ri keldi.
// let arr = [8,7,6,5,4]
// let arr2 = [];
// for (const num of arr) {
//     arr2.unshift(num)
// }
// console.log(arr2);


// Robo contest savollari;

// 1-misol
// // A va B butun sonlari yig'indisini hisoblash kerak bo'ladi
// let num = prompt("Birinchi son") - 0;
// let num2 = prompt("Ikkinchi son") - 0;
// console.log(num + num2);

// 2-misol
// // Sonlar ustida amallarning eng muximlaridan biri bu - taqqoslashdir. 
// //Ushbu masalada sizga qo'yilgan talab, ikkita butun sonni taqqoslash kerak bo'ladi
// let num = prompt("Birinchi son");
// let num2 = prompt("Ikkinchi son");
// if (Number(num) && Number(num2)) {
//     if (num > num2) {
//         console.log(num + " > " + num2)
//     }
//     else if (num < num2) {
//         console.log(num + " < " + num2)
//     }
//     else {
//         console.log(num + " = " + num2)
//     }    
// }
// else {
//     console.log("Iltimos, son kiriting")
// }

// 3-misol
// // A va B butun sonlari yig'indisini hisoblash kerak bo'ladi
// let num = prompt("Birinchi son") - 0;
// let num2 = prompt("Ikkinchi son") - 0;
// console.log(num + num2);

// 4-misol
// // Tez orada RoboContest tizimining qanday ishlayotganligini tekshirish uchun
// // RoboticsLab direktori ishxonamizga tashrif buyuradi. Biz direktorni tantanali kutib
// // olish maqsadida direktorning moshinadan tushgan joyidan ishxonamiz eshigigacha
// // bo'lgan oraliqga gilam to'shashga qaror qildik. Bizga ma'lumki direktorning
// // mashinasi to'xtatiladigan joydan ishxonamiz kirish eshigigacha bo'lgan masofa
// // metr, bozorda 1 metr gilamning narxi so'm. Biz gilam sotib olish uchun jami
// // qancha mablag' sarflashimizni aniqlang!.
// let N = prompt("Masofa qancha?") - 0;
// let P = prompt("Gilam narxi qancha") - 0;
// let expense = N * P;
// console.log(expense);

// 5-misol
// Ko'paytma
// let num = prompt("Son kiriting") - 0;
// let count = null;
// if (num > 0) {
//     for (let i = 0; i <= num; i++) {
//         if (num % i == 0) {
//             count += 1;
//         }
//     }
// }
// else 
// {
//     for (let i = num; i <=0; i++) {
//         if (num % i == 0) {
//             count += 1;
//         }
//     }
// }
// console.log(count);

