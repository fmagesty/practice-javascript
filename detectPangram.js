<<<<<<< HEAD
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    string = string.toLowerCase()
    console.log(string);

    let re = string.match(/(?:(?=(.*?([a-z]))(?!.*\2))\1){26}/i)

    return re === null ? false : true;
}

isPangram("This is not a pangram."); //false
isPangram("The quick brown fox jumps over the lazy dog."); //true
=======
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    string = string.toLowerCase()
    console.log(string);

    let re = string.match(/(?:(?=(.*?([a-z]))(?!.*\2))\1){26}/i)

    return re === null ? false : true;
}

isPangram("This is not a pangram."); //false
isPangram("The quick brown fox jumps over the lazy dog."); //true
>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
