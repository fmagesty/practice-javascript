// https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript

// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

function solution(value){
    value = value.toString();
    console.log(value.padStart(5, '0'));
    return `Value is ${value.padStart(5, '0')}`;
}

solution(5)// "Value is 00005"
solution(1204)// "Value is 01204"
solution(109)// "Value is 00109"
solution(0)// "Value is 00000"