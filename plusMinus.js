// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    let positives = []
    let negatives = []
    let zeroes = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives.push(arr[i])
        }
        else if (arr[i] < 0) {
            negatives.push(arr[i])
        }
        else if (arr[i]=== 0) {
            zeroes.push(arr[i])
        }
    }
    let ratioPositives = positives.length/arr.length.toFixed(6);
    let ratioNegatives = negatives.length/arr.length.toFixed(6);
    let ratioZeroes = zeroes.length/arr.length.toFixed(6);
    console.log(ratioPositives);
    console.log(ratioNegatives);
    console.log(ratioZeroes);
}

plusMinus([ -4, 3, -9, 0, 4, 1 ])