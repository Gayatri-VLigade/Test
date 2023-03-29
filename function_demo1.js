// demo of Default Parameter
function Percentage(Marks, Outof) {
    if (Marks === void 0) { Marks = 400; }
    if (Outof === void 0) { Outof = 500; }
    var Ans = 0;
    Ans = (Marks / Outof) * 100;
    return Ans;
}
var per = 0;
per = Percentage(220, 300);
console.log("percentage is :" + per);
per = Percentage(220);
console.log("percentage is :" + per);
per = Percentage();
console.log("percentage is :" + per);
