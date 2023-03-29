function Area(Rad, pi) {
    var Ans = 0;
    if (pi == undefined) {
        pi = 3.14;
    }
    Ans = pi * Rad * Rad;
    return Ans;
}
var Ret = 0;
Ret = Area(20.3, 3.14);
console.log("Area is :" + Ret);
Ret = Area(20.3);
console.log("Area is :" + Ret);
