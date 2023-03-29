//Assignment 2 Question No.1
//Write Typescript program which contains funtion named as Maximum 
//that function accepts array of numbers and 
// returns the largest number from array.
function maximum(n) {
    var max = 0;
    for (var i = 0; i < n.length; i++) {
        if (n[i] > max)
            max = n[i];
    }
    console.log(max);
}
maximum([23, 89, 6, 29, 56, 45, 77, 32]);
