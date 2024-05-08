let a = prompt("Nhập mảng:");
let b = a.split("");
let c = prompt("Nhập kí tự để kiểm tra có trong mảng ko")
function check(a,c) {
    let count=0;
    for (let i = 0; i < a.length; i++) {
        if (c===a[i]) {
            count++;
        }   
    }
    if (count==0) {
        console.log("-1");
    }
    else{
        console.log(count);
    }
}
check(b,c);