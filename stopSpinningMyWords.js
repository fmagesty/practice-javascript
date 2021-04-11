<<<<<<< HEAD
https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// spinWords( "This is a test") => returns "This is a test"

// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            str[i] = str[i].split('').reverse().join('');
        }
    }
    str = str.join(' ');
    console.log(str)
    return str;
}

=======
https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// spinWords( "This is a test") => returns "This is a test"

// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str){
    str = str.split(' ');
    for (let i = 0; i < str.length; i++) {
        if (str[i].length >= 5) {
            str[i] = str[i].split('').reverse().join('');
        }
    }
    str = str.join(' ');
    console.log(str)
    return str;
}

>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
spinWords("Welcome all");