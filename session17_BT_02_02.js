let a = parseFloat(prompt("Nhập bán kính đường tròn"));
function cal(a) {
    let dt=Math.PI*(a**2);
    let cv=2*Math.PI*a;
    console.log(`Diện tích hình tròn là: ${dt}`);
    console.log(`Chu vi hình tròn là: ${cv}`);

}
cal(a);