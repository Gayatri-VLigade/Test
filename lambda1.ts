//Lambda Statement (=> is fat Arrow )

var Ret1 = (A :number,B : number) => {
    console.log("Inside Lambda Function");
    return A+B;
}

console.log(Ret1(10,11));