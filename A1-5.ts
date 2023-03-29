//Assignment 1 Question No-5
//Write a TypeScript program which contain one function febbonacci,
//that accept one no and return febbonacci series 

function Fibonacci(n :number):void {
    var num:number ; 
   var No1 = 0;
   var No2 = 1;

   for (var j = 0; j < n; j++) {
     console.log(No1);
       var num = No1 + No2;
       No1 = No2;
       No2 = num;
       if(No1 > n){
         break;
       }
   }
   
}


Fibonacci(21);