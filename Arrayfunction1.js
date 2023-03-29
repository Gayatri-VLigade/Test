function Addition(Arr) {
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        sum = sum + Arr[cnt];
    }
    return sum;
}
var Week = [10, 20, 30, 40, 50];
var Ret = 0;
Ret = Addition(Week);
console.log("Addition is " + Ret);
