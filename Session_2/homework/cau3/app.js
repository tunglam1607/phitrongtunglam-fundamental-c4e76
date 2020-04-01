let username = prompt(`Please enter your username`);
let password = prompt(`Please enter your password`);
const username2 = `tunglam1607`;
const password2 = `lam123`;
if (username === username2 && password === password2) {
  console.log(`dang nhap thanh cong`);
} else if (username !== username2 && password === password2) {
  console.log(`username sai`);
} else if (username === username2 && password !== password2) {
  console.log(`password sai`);
} else {
  console.log(`username va password sai`);
}
