// Assignment No1 Q-No-2 -
//Write a Typescript program which contains one function named as Area 
//that function should calculate area of circle.Accept value of radius from user and return
// its area.Default value of PI should be 3.14.if it is not provided by the caller .

function Area( r :number, PI :number = 3.14): number
{ 
  
    var area =  PI * r * r ; 
    return area; 
  } 

var Ret:number;
Ret = Area(10); 
console.log("Area of Circle is " +Ret);