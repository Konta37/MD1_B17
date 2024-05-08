let a = prompt("Nhập kí tự bất kì");
function check(a) {
    if (isNaN(a)==false) {
        console.log(`Bạn vừa nhập số: ${a}`);
    }
    else{
        console.log(`Bạn vừa nhập chữ: ${a}`);
    }
}
check(a);