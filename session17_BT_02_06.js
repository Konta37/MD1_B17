let a = +prompt("Nhập số nguyên");
function check(a) {
    if (a>=0) {
        console.log(`${a} là số nguyên dương`);
    }
    else{
        console.log(`${a} là số nguyên âm`);

    }
}
check(a);