<<<<<<< HEAD
function alphabetPosition(text) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var finalText = [];
    
    for (let i = 0; i < text.length; i++) {
        var letter = text[i];
        letter = letter.toLowerCase() // make all letters lowercase
        if (alphabet.includes(letter))  {
            
            let a = alphabet.indexOf(letter) + 1;
            finalText.push(a);
        }
    }
    finalText = finalText.join(' ');
    console.log(finalText);
    return finalText;
}

=======
function alphabetPosition(text) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var finalText = [];
    
    for (let i = 0; i < text.length; i++) {
        var letter = text[i];
        letter = letter.toLowerCase() // make all letters lowercase
        if (alphabet.includes(letter))  {
            
            let a = alphabet.indexOf(letter) + 1;
            finalText.push(a);
        }
    }
    finalText = finalText.join(' ');
    console.log(finalText);
    return finalText;
}

>>>>>>> 5deebc23c0f79d4b6363db365d05d3ddc8aa1153
alphabetPosition("The sunset sets at twelve o' clock.")