// Assignment No1 Q-No-1 Largest among 3 nos using function 

function Maximum(No1 : number ,No2 : number ,No3 : number) : void 
{

    
    if (No1 > No2 && No1 > No3) 
    {
        console.log("Largest Numner is :" + No1)
        
    }

    if  (No2 > No1 && No2 > No3) 
    {
        console.log("Largest Numner is :" + No2)
    }
    
    if (No3 > No1 && No3 > No2)
    {
       console.log("Largest Number is :" + No3) 
    }

}

var A : number = 23
var B : number = 89
var C : number = 6

Maximum(A,B,C)