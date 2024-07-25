

// 1-masala
// let age = prompt("Yoshingizni kiriting: ");

// if (!age) {
//     alert("Iltimos yoshingizni kiriting")
// }
// else if (age < 0) {
//     console.log("Yosh manfiy bo'lmaydi o'qigan.");
// }
// else if (age >= 0 && age <= 17) {
//     console.log("Siz bolalar uchun maxsus joyda o'tirishingiz kerak")
// }
// else if (age >= 18 && age <= 25){
//     console.log("Davringni sur jigit", "Bo'ydoq");
// }
// else if (age >= 26 && age <=35){
//     console.log("Aka yaxshimisiz?", "O'rta yosh");
// }
// else if (age >=36 && age <=45){
//     console.log("Uydagilar tinchmi?", "Yoshi katta");
// }
// else if(age >= 46 && age <=70){
//     console.log("Yoshingizga yosh qo'shilsin.", "Ulug' yosh");
// }
// else{
//     console.log("Biz ham sizni yoshingizga yetaylik");
// }


// 2-masala

// let dollar = 11000.34;
// let yevro = 12354.03;
// let ticket = 500;
// let hotel = 250;
// let muzey = 120;

// let pul = Number(prompt("Qancha puliz bor aka?"));

// let harajat = (ticket + hotel) * dollar + ticket * yevro;

// if (pul >= harajat) {
//     console.log("O'q yol aka ");
// }
// else{
//     console.log("Afsus");
// }

// 3-masala
// let son = Number(prompt("Ixtiyoriy son kiriting"));
// console.log(++son);

// 4-masala 
// let son  = Number(prompt("Ixtiyoriy son kiriting."));
// if (son > 0) {
//     console.log("Musbat son");
// }
// else if(son < 0){
//     console.log("Manfiy son");
// }
// else {
//     console.log(`${son} - na manfiy na musbat`);
// }

// 5-masala
// let son = Number(prompt("Ixtiyoriy son kiriting."));
// if (!isNaN(son)) {
//     if (son < 0) {
//         console.log("Kititilgan son manfiy son");
//     }
//     else if (son >=1 && son < 10) {
//         console.log(`${son} - bir xonali son`);
//     }
//     else if (son >= 10 && son < 100) {
//         console.log(`${son} - ikki xonali son`);
//     }
//     else{
//         console.log(`${son} - Siz uch xonali sondan katta son kiritdingiz.`)
//     }
// }
// else {
//     console.log("Iltimos son kiriting");
// }

// 6-masala
// let yil = Number(prompt("Iltimos tug'ilhan yilingizni kiriting."));
// if (yil) {
//     let hozirgiYil = 2024;
//     let yosh = hozirgiYil - yil;
//     if (yosh < 0) {
//         alert("Iltimos to'g'ri yil kiriting")
//     }
//     else{
//         alert(`Siz ${yosh} - yoshda ekansiz.`)
//     }
// }
// else {
//     alert("Iltimos tug'ilgan yilingizni kiriting")
// }

// 7-masala
// let son = Number(prompt("Birinchi son"));
// let son2 = Number(prompt("Ikkinchi son"));
// if (son > son2) {
//     console.log(`Katta son = ${son}`);
// }
// else if (son < son2) {
//     console.log(`Katta son = ${son2}`);
// }
// else {
//     console.log("Sonlar teng");
// }

// 8-masala
// let son = Number(prompt("Birinchi son kiriting"));
// let son2 = Number(prompt("Ikkinchi son kiriting"));
// let son3 = Number(prompt("Uchinchi son kiriting"));

// 1-usul
// if (son > son2 && son > son3) {
//     console.log(`${son} - eng katta son`);
// }
// else if (son2 > son && son2 > son3) {
//     console.log(`${son2} - eng katta son`);
// }
// else if (son3 > son && son3 > son2) {
//     console.log(`${son3} - eng katta son`)
// }
// else {
//     console.log("Sonlar teng");
// }
// 2-usul 
// let maxSon = Math.max(son, son2, son3);

// if (son === son2 && son2 === son3) {
//     console.log("Sonlar teng");
// } else {
//     console.log(`${maxSon} - eng katta son`);
// }

// 9-masala
// let son = Number(prompt("Birinchi son kiriting"));
// let son2 = Number(prompt("Ikkinchi son kiriting"));
// let son3 = Number(prompt("Uchinchi son kiriting"));

// if (son < son2 && son < son3) {
//     console.log(`${son} - eng kichik son`);
// }
// else if (son2 < son && son2 < son3) {
//     console.log(`${son2} - eng kichik son`);
// }
// else if (son3 < son && son3 < son2) {
//     console.log(`${son3} - eng kichik son`)
// }
// else {
//     console.log("Sonlar teng");
// }
