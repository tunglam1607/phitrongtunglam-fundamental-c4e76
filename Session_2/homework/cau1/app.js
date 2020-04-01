let number = parseInt(prompt(`Nhap 1 so bat ki:`));

if (number < 0) {
  console.log(`invalid input`);
} else if (number === 0) {
  console.log(1);
} else {
  for (let i = number - 1; i >= 1; i--) {
    number *= i;
    console.log(number);
  }
}
