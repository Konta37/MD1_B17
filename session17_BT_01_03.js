// let a = prompt("Nhập C/R/U/D");
// function Enter(a) {
//     if (a==="C"||a==="R"||a==="U"||a==="D") {
//         document.write(`Bạn vừa nhập vào ${a}`);
//     }
// }
// Enter(a);

let a = +prompt("nhập số đầu");
let b = +prompt("nhập số đầu");
function cal(a,b) {
    if (a>b) {
        alert("Số thứ nhất lớn hơn số thứ 2");
    }
    else if(a==b){
        alert("2 số vừa nhập bằng nhau");
    }
    else{
        alert(`vì số đầu nhỏ hơn số thứ 2 nên tính tổng 2 số là: ${a+b}`)        
    }
    return
}
cal(a,b);
