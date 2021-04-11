<<<<<<< HEAD
// https://www.codewars.com/kata/56541980fa08ab47a0000040

// Printer Errors
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

// Example: 
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

const aToMList = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];

const printerError = (str) => {
    let result = 0;
    let total = str.length;

    for (i = 0; i < str.length; i++) {
        if (aToMList.includes(str.charAt(i)) == false) {
            result += 1;
        }
    }
    console.log(`${result}/${total}`);
    return (`${result}/${total}`);
}



printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz');

=======
// https://www.codewars.com/kata/56541980fa08ab47a0000040

// Printer Errors
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from a to z.

// Example: 
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"

const aToMList = ['a','b','c','d','e','f','g','h','i','j','k','l','m'];

const printerError = (str) => {
    let result = 0;
    let total = str.length;

    for (i = 0; i < str.length; i++) {
        if (aToMList.includes(str.charAt(i)) == false) {
            result += 1;
        }
    }
    console.log(`${result}/${total}`);
    return (`${result}/${total}`);
}



printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz');

>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
