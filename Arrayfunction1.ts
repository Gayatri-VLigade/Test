function Addition(Arr : number[]) : number 
{
    let sum : number = 0;
    let cnt : number = 0;

    for(cnt =0 ; cnt < Arr.length ; cnt++)
   {
    sum = sum + Arr[cnt];
   }
   return sum;


}

var Week : number[] =[10,20,30,40,50]

var Ret : number = 0;

Ret = Addition(Week);

console.log("Addition is " + Ret)

