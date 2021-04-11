<<<<<<< HEAD
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    console.log(integers)
    let odd = [];
    let even = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 == 1 | integers[i] % 2 == -1) {
            odd.push(integers[i]); 
        }
        if (integers[i] % 2 == 0 | integers[i] % 2 == -0) {
            even.push(integers[i]);
        }
    }
    // console.log(even);
    // console.log(odd);

    if (odd.length > even.length) {
        even = even.shift();
        return even;
    }
    else {
        odd = odd.shift();
        return odd;
    }
}


=======
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    console.log(integers)
    let odd = [];
    let even = [];
    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 == 1 | integers[i] % 2 == -1) {
            odd.push(integers[i]); 
        }
        if (integers[i] % 2 == 0 | integers[i] % 2 == -0) {
            even.push(integers[i]);
        }
    }
    // console.log(even);
    // console.log(odd);

    if (odd.length > even.length) {
        even = even.shift();
        return even;
    }
    else {
        odd = odd.shift();
        return odd;
    }
}


>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
findOutlier([ 2, -6, 8, -10, -3 ]);