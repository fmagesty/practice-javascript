// Given two integers a and b, which can be positive or negative, find the sum of all the integers 
// between including them too and return it. If the two numbers are equal return a or b.


function getSum(a, b) {
    let total = 0
    if (a === b) {
        return a;
    }
    else {
        if (a > b) {
            for (let n = b; n < a; n++) {
            total += n;
            }
            total += a;
            console.log(total);
            return total;
        }
        if (b > a) {
            for (let n = a; n < b; n++) {
            total += n;
            }
            total += b;
            console.log(total);
            return total;
        }
    }
}

getSum(386, 140)