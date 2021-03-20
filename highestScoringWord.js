// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(str){
    console.log(str)

    str = str.split(' ')
    let highScore = 0;
    let hWord;

    for (word of str) {
        console.log(word)
        let wordScore = 0;

        for (let i = 0; i < word.length; i++) {
            wordScore += word.charCodeAt(i) - 96;
        }

        console.log(wordScore)

        if (wordScore > highScore) {
            console.log(`word = ${word}`)
            highScore = wordScore;
            hWord = word;
        }
    }
    console.log(`highscore = ${highScore}. highscore word = ${hWord}`)
    return hWord;
}

// high('man i need a taxi up to ubud'); // 'taxi'
// high('what time are we climbing up the volcano'); // 'volcano'
high('b aa'); // 'b'