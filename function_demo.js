//Positional Parameters
function Display(No1, No2) {
    console.log("Value of No1 is :" + No1);
    console.log("Value of No2 is :" + No2);
}
console.log("First line of application :");
var A = 11;
var B = 21;
//positional parameter method 1
console.log("Displaying value using var in positional parameter");
Display(A, B);
//positional parameter method 2
console.log("Displaying value using direct value in positional parameter");
Display(10, 11);
function multiplication(A, B, C) {
    var Ans = 0;
    Ans = A * B * C;
    return Ans;
}
var No1 = 10;
var No2 = 20;
var No3 = 30;
var Ret = 0;
Ret = multiplication(No1, No2, No3);
console.log("Multiplication is :" + Ret);
