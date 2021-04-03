// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// Task: In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// Rules:  
// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

// Example: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str){
    let waveWords = [];
    for (let i = 0; i < str.length; i++) {
        word = str.split('');
        let upper = word[i].toUpperCase();
        
        if (str.charAt(i) != ' ' ) {
            word.splice(i, 1, upper);
            word = word.join('')
            waveWords.push(word)
        }
    }
    console.log(waveWords)
    return waveWords;
}

wave('hello');