// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  str = str.split(" ");
  let newstr = [];
  for (word of str) {
    if (word.length === 1 && !word.match(/[a-z]/i)) {
      newstr.push(word);
    } else {
      let firstL = word[0];
      let word2 = word.substring(1);
      word = word.split("").reverse();
      word = word2 + firstL;
      word = word + "ay";
      newstr.push(word);
    }
  }
  newstr = newstr.join(" ");
  console.log(newstr);
  return newstr;
}

// pigIt("Pig latin is cool"); // "igPay atinlay siay oolcay"
pigIt("O tempora o mores !"); // "Oay emporatay oay oresmay !
// pigIt("This is my string"); // "hisTay siay ymay tringsay"
