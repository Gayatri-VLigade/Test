// Assignment No1 Q-No-3
//Write a typescript program which contain one function named as displayfactor.
//That function should accept one number and it retun its facotrs.
 
function displayFactor(no1:number) :void
{  
    for (var i=1 ; i < no1 ; i++) 
    {
        if (no1 % i == 0)
        {
            console.log(i);
            
        }
    }    
} 



 displayFactor(20)