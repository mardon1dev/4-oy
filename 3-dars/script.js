// let num = prompt("Tezlik qancha?");

// if (Number(num)) {
//     if (num > 70) {
//         let ortiqcha  = num - 70;
//         let point = Math.floor(ortiqcha / 5);
//         if (point > 12) {
//             console.log("Siz prava oldizgiz, " + point + " ball jamg'ardiz.");
//         }
//         else{
//             console.log(point);
//         }
//     } 
//     else{
//         console.log("Bos uka bemolol");
//     }
// }
// else{
//     console.log("Xato");
// }

// 2-masala
// let son = prompt("Biror bir son kiriting");

// if (!isNaN(son)) {
//     if (son % 3 == 0 && son % 5 == 0) {
//         console.log("FizzBuzz");
//     }
//     else if (son % 5 == 0){
//         console.log("Buzz");
//     }
//     else if(son % 3 == 0){
//         console.log("Fizz");
//     }
//     else{
//         console.log(`${son} - soni na 3 na 5 soniga qoldiqsiz bo'linadi.`);
//     }
// }
// else{
//     console.log("Siz son kiritmadingiz");
// }

// Uy ishi vazifalari

// 1-rasm masalalari
// 1-masala
// let array = [1,2,3,-4,5,-2,8];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);
// 2-masala
// let dollar = prompt("Qancha pulingiz bor?");
// if (Number(dollar)) {
//     alert(`${dollar * 12650} so'm pul bo'ladi.`)
// }
// else{
//     alert("Iltimos raqam orqali kiriting.");
// }
// 3-masala
// let son = prompt("Biror son kiriiting.");
// if (son == "") {
//     alert("Iltimos son kiriting.");
// }
// else if (!isNaN(son)) {
//     let power = son * son;
//     if (power % 2 == 0) {
//         alert(`${son} ning kvadrati = ${power} ga teng va u juft son`)
//     }
//     else {
//         alert(`${son} ning kvadrati = ${power} ga teng va u toq son`)
//     }
// }
// else{
//     alert("Iltimos raqam kiriting.");
// }

// 4-masala
// let son = prompt("Biror son kiriting") - 0;
// if (son == "") {
//     alert("Iltimos son kiriting.");
// }
// else if (!isNaN(son)) {
//     let sum = 0;
//     for (let i = 0; i <= son; i++) { 
//         sum += i;
//     }
//     alert(`1 dan ${son} gacha sonlar yig'indisi = ${sum}`)
// }
// else{
//     alert("Iltimos raqam kiriting.");
// }
// 5-masala
// let arr = [1,2,3,4,5];  
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 2) {
//         found = true;
//         break;
//     }
// }
// console.log(found ? ("2 soni mavjud") : ("2 soni yo'q")); Ternary Operator.
// // if (found) {
// //     console.log("2 soni mavjud");
// // }
// // else {
// //     console.log("2 soni yo'q");
// // }

// -------------------------- 2-rasmdagi masalar-----------------
// 1-masala
// let array = [1,3,7,4,75,24,685,3,88];
// if (array[0] % 2 == 0) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             console.log(array[i]);
//         }
//     }
// }

// 2-masala
// for (let i = 1; i <= 50; i++){
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }
// 3-masala
// let son = prompt("Biror son kiriting") - 0;
// if (Number(son)) {
//     let sum = 0;
//     for (let i = 0; i <= son; i++) {
//         sum += i;
//     }
//     console.log(sum);    
// }
// else {
//     alert("Iltimos raqam kiriting.");
// }

// 4-masala
// let evenSum = 0;
// let oddSum = 0;
// for (let i = 1; i <= 10; i++) {
// i % 2 == 0 ? evenSum +=i : oddSum +=i Ternary operator;
// if (i % 2 == 0) {
//     evenSum += i;
// }
// else {
//     oddSum += i;
// }
// }
// if (oddSum > evenSum) {
//     console.log(`Toq sonlar yig'indisi = ${oddSum} va ${oddSum - evenSum} ga katta `);
// }
// else {
//     console.log(`Juft sonlar yig'indisi = ${evenSum} va ${evenSum - oddSum} ga katta `)
// }

// 5-masala

// let n = prompt("Biror son kiriting") - 0;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 ==0 || i % 3 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// 6-masala
// let a = prompt("Birinchi son") - 0;
// let b = prompt("Ikkinchi son") - 0;
// let sum  = 0

// // For loop orqali
// for (let i = a; i <= b; i++) {
//     sum +=i
// }

// // While orqali
// while (a <= b) {
//     sum += a
//     a++
// }

// console.log(sum);

// 7-masala
// let a = prompt("Birinchi son") - 0;
// let b = prompt("Ikkinchi son") - 0;

// while (a<=b) {
//     if (a % 3 == 0 && a % 5 == 0) {
//         console.log(a);
//     }
//     a++
// }

// 8-masala
// let a = prompt("Biror bir son kiritin") - 0;
// for (let i = 0; i <= a; i++) {
//     if (a % i == 0) {
//         console.log(i);
//     }
// }

// 9-masala
// let num = prompt("Biror son kiriting") - 0;
// let onlik = Math.trunc(num / 10);
// let birlik = num % 10;
// console.log(onlik + "-o'nlik", birlik + "-birlik");

// 10-masala
// let num = prompt("Birinchi son") - 0;
// let onlik = Math.trunc(num / 10);
// let birlik = num % 10;
// let sum = onlik + birlik;
// console.log(sum - onlik);

// 11-masala
// let array = [true, "25", undefined, null];
// let boolen = false;
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] == "boolean") {
//         boolen = true;
//     }
// }
// if (boolen) {
//     console.log("Ha, bor.");
// }
// else{
//     console.log("Yo'q.");
// }

// 12-masala
// let array = [44,33,22,3,2,1,55,6];
// for (let i = array.length - 1; i >=0; i--) {
//     console.log(array[i]);
// }

// 13-masala
// let array = [44,33,22,3,2,1,55,6];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

// 14-masala
// let array = [4,3,2,true, false, null];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i]
// }
// // Bu yerda true, false, null larning ham qiymati bo'lganligi uchun ya'ni 1, 0, 0 ularning qaysi tipga mansubligini tekshirib ko'rilmadi.
// console.log(sum);

// 15-masala
// let array =[-5, 4, -3, 99, 21, 2, -9, -52];
// let sum = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//         sum += array[i]
//     }
// }
// console.log(sum);

// 16-masala
// let array =[-5, 4, -3, 99, 21, 2, -9, -52];
// let musbat = 0;
// let manfiy = 0;
// for (let i = 0; i < array.length; i++) {
    // if (array[i] > 0) {
        //     musbat++
    // }
    // else {
        //     manfiy++
    // }
    // // array[i] > 0 ? musbat++ : manfiy++;
// }
// console.log(musbat + " ta musbat");
// console.log(manfiy + " ta manfiy");

// 17-masala
// for (let i = 20; i >=1; i--) {
//     console.log(i);
// }

// 18-masala
// let ism = prompt("Ismiingizni kiriting.");
// let names = ["Komiljon", "Ysufbek", "Islomjon", "Akbar"];
// let found = false;
// if (ism == ""){
//     alert("Ismingizni kiriting")
// }
// else if (!isNaN(ism)) {
//     alert("Siz raqam kiritdingiz")
// }
// else {
//     for (let i = 0; i < names.length; i++) {
//         if (ism === names[i]) {
//             found = true;
//         }
//     }
//     found ? alert("Ism topildi") : alert("Ism topilmadi.")
//     // if (found) {
//     //     alert("Ism topildi")
//     // }
//     // else {
//     //     alert("Ism topilmadi")
//     // }
// }

