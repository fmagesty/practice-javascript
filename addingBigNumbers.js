// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

// Adding Big Numbers
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    let n1;
    let n2;
    let total = [];
    let resto = 0;
    a.length > b.length ? [n1,n2] = [a,b] : [n1,n2] = [b,a];

    console.log(n1 + ' + ' + n2)

    while (n1.length > n2.length) {
        n2 = '0' + n2;
    }

    for (let i = n1.length -1; i >= 0; i--) {   
        console.log(n1[i] + ' ' + n2[i])

        if (Number(n1[i]) + Number(n2[i]) >= 10) {
            console.log('resto = ' + resto)
            let n = (Number(n1[i]) + Number(n2[i])).toString();
            total.push(Number(n[1]) + resto);
            resto = 1;
            console.log('total = ' + total)
        }
        // console.log(resto)
        // console.log(total)
        if (Number(n1[i]) + Number(n2[i]) < 10) {
            console.log('resto = ' + resto)
            if (((Number(n1[i]) + Number(n2[i])) + resto).toString().length > 1) {
                total.push(((Number(n1[i]) + Number(n2[i])) + resto).toString()[1]);
                resto = 1;
            }
            else {
                total.push(((Number(n1[i]) + Number(n2[i])) + resto));
                resto = 0;
            }
            console.log('total = ' + total)
        }
    }
    if (resto == 1) {
        total.push('1')
    }
    total = total.toString().split(',').reverse().join('');
    console.log(total);
    return total;
}


// add("116", "116")// returns --> 232
add('63829983432984289347293874', '90938498237058927340892374089')// "91002328220491911630239667963"
// add("101", "100") // "201"
// add("12", "456")// "468"
// add("888", "222")// "1110"
// add("767564", "318904")

