// Assignment No1 Q-No-4
// Write a program which contains one function named chkprime.
// That function should accept one number and return true if the number is prime else it return false 
function chkPrime(n) {
    var p = 0;
    for (var i = 2; i <= n; i++) {
        if (n % i == 0) {
            p = 1;
        }
    }
    if (p == 1) {
        console.log("No is prime no");
    }
    else {
        console.log("No is not prime");
    }
}
chkPrime(11);
