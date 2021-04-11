<<<<<<< HEAD
// Test to see if string has the same numbers of 'x' and 'o'. Return true if positive and false if negative.

function XO(str) {
    let x = 0;
    let o = 0;
    for (i in str) {
    if (str[i].toLowerCase() === 'x') {
        x += 1;
    }
    }
    for (j in str) {
    if (str[j].toLowerCase() === 'o'){
        o += 1;
    }
    }
    if (x === o) {
    return true;
    }
    else {
    return false;
    }
}

console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
=======
// Test to see if string has the same numbers of 'x' and 'o'. Return true if positive and false if negative.

function XO(str) {
    let x = 0;
    let o = 0;
    for (i in str) {
    if (str[i].toLowerCase() === 'x') {
        x += 1;
    }
    }
    for (j in str) {
    if (str[j].toLowerCase() === 'o'){
        o += 1;
    }
    }
    if (x === o) {
    return true;
    }
    else {
    return false;
    }
}

console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
console.log(XO("ooom"));