let a = prompt("Nhập mảng:");
let b = a.split(",");
document.write(`Mảng vừa nhập là: ${b}<br>`)
function change(a) {
    let b = a.reverse();
    document.write(`Mảng vừa thay đổi là: ${b}`)
}
change(b);