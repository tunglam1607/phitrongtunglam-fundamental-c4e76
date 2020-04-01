let name = prompt(`Nhap ten cua ban`);
let age = parseInt(prompt(`Nhap tuoi cua ban`));
if (age < 18) {
  console.log(`${name} chua du tuoi vao trang web nay`);
} else {
  let confirm = prompt(`${name} co muon dang nhap vao trang web nay khong`);
  if (confirm === `yes`) {
    console.log(`${name} da vao trang web thanh cong`);
  } else if (confirm === `no`) {
    console.log(`${name} thoat khoi trang web`);
  } else {
    console.log(`bla bla`);
  }
}
