function Area(Rad : number ,pi ? : number) :number
{
    let Ans : number = 0;

    if(pi == undefined)
    {
        pi = 3.14;
    }

    Ans = pi * Rad * Rad;

    return Ans;
}

var Ret : number =0;

Ret = Area(20.3,3.14);
console.log("Area is :" +Ret);

Ret = Area(20.3);
console.log("Area is :" +Ret);
