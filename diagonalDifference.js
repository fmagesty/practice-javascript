// https://www.hackerrank.com/challenges/diagonal-difference/problem



function diagonalDifference(arr) {
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++){
        left.push(arr[i][i]);
        right.push(arr[i][arr.length-1-i])
    }
    console.log(right);
    left = left.reduce((acc, number) => acc + number);
    right = right.reduce((acc, number) => acc + number);
    return Math.abs(left - right)

}




diagonalDifference([ [ 11, 2, 4 ], 
                    [ 4, 5, 6 ], 
                    [ 10, 8, -12 ] ])
