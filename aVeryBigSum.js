// https://www.hackerrank.com/challenges/a-very-big-sum/problem

ar = [ 1000000001, 1000000002, 1000000003, 1000000004, 1000000005 ];

function aVeryBigSum(ar) {
    console.log(ar);
    let reducer = (acc, result) => acc + result;
    let reduzido = ar.reduce(reducer);
    console.log(reduzido);
    return reduzido
}

aVeryBigSum(ar)