let condition = true;
while (condition) {
  let a = parseInt(prompt(`Dien a`));
  let b = parseInt(prompt(`Dien b`));
  let c = parseInt(prompt(`Dien c`));
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (delta < 0) {
    console.log(`No solution`);
  } else if (delta === 0) {
    let x = -b / (2 * a);
    console.log(`Dap an duy nhat la x = ${x}`);
  } else {
    let x1 = -b + Math.sqrt(delta) / (2 * a);
    let x2 = -b - Math.sqrt(delta) / (2 * a);
    console.log(`2 nghiem cua phuong trinh la: x1 = ${x1} va x2 = ${x2}`);
  }
  let confirm = prompt(`Ban co muon tiep tuc khong?`);
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
