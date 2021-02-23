// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let shortest = 100;
    s = s.split(' ');
    for (let i = 0; i < s.length; i++){
    if (s[i].length < shortest) {
        shortest = s[i].length;
    }
    }
    return shortest;
}