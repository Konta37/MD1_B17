let a = prompt("Nhập 2 số để đổi vị trí");
let b = a.split(",")
function change(a) {
    document.write(`<br>Vị trí hiện tại là: ${a}`)
    let b = a[0];
    a[0]=a[1];
    a[1]=b;
    document.write(`<br>Vị trí mới là: ${a}`)
}
change(b);
