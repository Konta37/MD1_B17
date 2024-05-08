let a = prompt(`Nhập 3 số bất kì ngăn cách các phần tử bằng dấu "," :`);
let b = a.split(",");
function cal(a) {
    let ln = a[0];
    for (let i = 1; i < a.length; i++) {
        if (ln<a[i]) {
            ln=a[i];
        }
        
    }
    console.log(ln);
}
cal(b);