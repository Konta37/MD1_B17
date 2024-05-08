let a = +prompt("Nhập số để tính giai thừa:");
function cal(a) {
  let b = 1;
  if (a == 1) {
    document.write(`Giai thừa của ${a} là: 1`);
  } else if (a == 0) {
    document.write(`Giai thừa của ${a} là: 1`);
  } else if (a < 0) {
    document.write(
      `Không có giai thừa của ${a}. Hãy thay đổi thành số nguyên dương`
    );
  } else {
    for (let i = 1; i <= a; i++) {
      b = b * i;
    }
    document.write(`Giai thừa của ${a} là: ${b}`);
  }
}
cal(a);