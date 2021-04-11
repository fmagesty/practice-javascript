<<<<<<< HEAD
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

=======
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

>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
getCount('bolovo')