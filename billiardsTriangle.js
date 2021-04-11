// https://www.codewars.com/kata/5bb3e299484fcd5dbb002912/train/javascript

// Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

// For more examples,

// pyramid(1) == 1

// pyramid(3) == 2

// pyramid(6) == 3

// pyramid(10) == 4

// pyramid(15) == 5
// Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.

function pyramid(balls) {
    let levels = 0;
    for (let i = 0; i < balls; i++) {
        balls -= 1+i;
        levels += 1;
        console.log(levels);
    }
    return levels;
}

pyramid(15)// 5