let a = ["Polaris","Aldebaran","Deneb", "Vega","Altair","Dubhe","Regulus"];
let b =["Ursa", "Minor","Tarurus","Cygnus","Lyra", "Aquila","Ursa Major","Leo"];
let c = prompt("Nhập tên ngôi sao trong này hoặc ngoài: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus")
function check(c,a,b) {
    for (let index in a) {
        if (a[index]===c) {
            console.log(b[index]);
        }
        else{
            console.log("ngôi sao bạn nhập không ở trong list");
        }

    }
}
check(c,a,b)