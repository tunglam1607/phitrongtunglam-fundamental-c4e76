let month = parseInt(prompt(`What is your month of birth?`));
let name = prompt(`What is your name?`);
if (month === 1 || month === 2 || month === 3) {
  console.log(`${name} sinh vao mua xuan`);
} else if (month === 4 || month === 5 || month === 6) {
  console.log(`${name} sinh vao mua ha`);
} else if (month === 7 || month === 8 || month === 9) {
  console.log(`${name} sinh vao mua thu`);
} else if (month === 10 || month === 11 || month === 12) {
  console.log(`${name} sinh vao mua dong`);
} else {
  console.log(`input khong hop le`);
}
