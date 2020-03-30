// //Câu điều kiện rẽ nhánh (if - else)
// // if (condition) {
// //     do something
// // } else {
// //     do something else
// // }

// //boolean (true/false)

// const randomeBoolean = true;

//Các phép so sánh

// ==, >, <, >=, <= !=

// && (and), || (or), ! (opposite)

// const x = 5;
// const y = 9;

// console.log(y > 9 || x === 5);

// let age = parseInt(prompt(`Ban bao nhieu tuoi?`));

// if (age < 18) {
//   console.log(`You cannot enter the bar`);
// } else if (age < 21) {
//   console.log(`You can enter but cannot drink`);
// } else {
//   console.log(`You can drink`);
// }

// if (age < 0) {
//   console.log(`Invalid age`);
// } else if (age === 21) {
//   console.log(`Happy birthday`);
// } else if (age % 2 !== 0) {
//   console.log(`Your age is odd`);
// } else if (age > 0 && Math.sqrt(age) % 1 === 0) {
//   console.log(`Perfect square`);
// } else {
//   console.log(`Your age is: ${age}`);
// }

//While
// while(conditon){
//     //hành động lặp
// }

// let i = 1;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// const result = Math.ceil(Math.random() * 10);
// let loop = true;
// while (loop === true) {
//   const number = Number(prompt(`Nhap 1 so bat ki tu 1 den 10:`));
//   if (number < result) {
//     console.log(`too low`);
//   } else if (number > result) {
//     console.log(`too high`);
//   } else {
//     console.log(`correct`);
//     break;
//   }
// }

//sử dụng vòng lặp WHile
/*1. in ra màn hình các số từ 1 - 10
2. in ra các số chia hết cho 4 từ 0 -20
3. in ra các số lẻ từ 30 - 40
4. in ra các số vừa chia hết cho 3 vừa chia hết cho 5 từ 5 - 50
*/
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (i <= 20) {
//   if (i % 4 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// let i = 30;
// while (i <= 40) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
//   i++;
// }

// let i = 5;
// while (i <= 50) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
//   i++;
// }

//For loops

// for(condition){
//     //hành động lặp
// }

//sử dụng vòng lặp for in ra các số từ 1 đến 5

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//sử dụng vòng lặp for
//tính tổng các số từ 1 đến 10
//in ra các số từ 1 đến 20 cách nhau 3 đơn vị
// let result = 0;
// for (let i = 1; i <= 10; i++) {
//   result = result + i;
// }
// console.log(result);

// for (let i = 1; i <= 20; i += 3) {
//   console.log(i);
// }

let x = 1;
let y = 2;

if (x < y) {
  console.log(`x is less than y`);
} else {
  if (x > y) {
    console.log(`x is greater than y`);
  } else {
    console.log(`x and y must be equal`);
  }
}
