// https://www.hackerrank.com/challenges/staircase/problem


function staircase(n) {
    for (let i = 1; i < n+1; i++) {
        console.log(' '.repeat(n-i) + '#'.repeat(i));
    }
}

staircase(6);