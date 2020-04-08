// Cau 1:

// Tong cac so chan trong doan tu 1 den N:
// let n = parseInt(prompt(`Hay nhap 1 so N bat ki`));
// let result = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     result += i;
//   }
//   console.log(result);
// }

// Tong cac so le trng doan tu 1 den N:
// let n = parseInt(prompt(`Hay nhap 1 so N bat ki`));
// let result = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 !== 0) {
//     result += i;
//   }
//   console.log(result);
// }

// A = 1/1 + 1/2 + 1/3 + ... + 1/N:
// let n = parseInt(prompt(`Hay nhap 1 so N bat ki`));
// let result = 0;
// for (i = 1; i <= n; i++) {
//   result = result + 1 / i;
// }
// console.log(result);

// C = 1/2 + 2/3 + ... + N/(N+1)
// let n = parseInt(prompt(`Hay nhap 1 so N bat ki`));
// let result = 0;
// for (i = 1; i <= n; i++) {
//   result = result + i / (i + 1);
// }
// console.log(result);

// Cau 2:
// let n = parseInt(
//   prompt(
//     `Please enter a number greater than 1 to check if this number is a prime number:`
//   )
// );
// for (let i = 2; i < n; i++) {
//   if (n % i === 0) {
//     console.log(`false`);
//     break;
//   } else {
//     console.log(`true`);
//     break;
//   }
// }

// Cau 3:
// let n = parseInt(prompt(`Please enter a number greater than 1:`));
// for (let i = 2; i <= n; i++) {
//   let notPrime = false;
//   for (x = 2; x < i; x++) {
//     if (i % x === 0 && i !== x) {
//       notPrime = true;
//     }
//   }
//   if (notPrime === false) {
//     console.log(i);
//   }
// }

// Cau 4:
// let n = parseInt(prompt(`Hay dien 1 so N lon hon 0:`));
// let a = 0,
//   b = 1,
//   f = 1;
// for (let i = 2; i <= n; i++) {
//   f = a + b;
//   a = b;
//   b = f;
// }
// console.log(f);

// Cau 5:
// let loop = true;
// let sum = 0;
// while (loop === true) {
//   let number = parseInt(prompt(`Hay nhap 1 so ngau nhien`));
//   if (number >= 0) {
//     sum = sum + number;
//   } else {
//     loop = false;
//     break;
//   }
// }
// console.log(sum);

//Cau 6:
// let string = prompt(`Nhap 1 chuoi bat ki`);
// let len = Math.floor(string.length / 2);
// for (let i = 0; i < len; i++) {
//   if (string[i] !== string[string.length - i - 1]) {
//     console.log(false);
//     break;
//   } else {
//     console.log(true);
//     break;
//   }
// }

//Cau 7:
// let m = parseInt(prompt(`Nhap so M:`));
// let n = parseInt(prompt(`Nhap so N:`));
// for (let i = 1; i <= m; i++) {
//   for (let j = 1; j <= n; j++) {
//     document.write(`*`);
//   }
//   document.write(`<br/>`);
// }
