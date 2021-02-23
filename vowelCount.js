// count the vowels in a string and return the total

function getCount(str) {
    var vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (let l = 0; l < str.length; l++) {
        if (vowels.includes(str[l])) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}

getCount('bolovo')