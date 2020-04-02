let condition = true;
while (condition) {
  let randomString = prompt(`Write a random sentence`);
  let a = randomString.length;
  for (let i = a - 1; i >= 0; i--) {
    console.log(randomString[i]);
  }
  let confirm = prompt(`Do you want to continue?`);
  if (confirm === `yes`) {
    condition = true;
  } else if (confirm === `no`) {
    condition = false;
    break;
  } else {
    console.log(`bla bla`);
    break;
  }
}
