// demo of Default Parameter

function Percentage(Marks : number =400, Outof : number= 500 ) : number
{
    let Ans : number = 0;
    Ans = (Marks / Outof) *100;
    return Ans;
}

var per : number = 0;

//method 1
per = Percentage(220 ,300);
console.log("percentage is :" + per);

//method 2
per = Percentage(220);
console.log("percentage is :" + per);

//method 3
per = Percentage();
console.log("percentage is :" + per);