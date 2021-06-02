// https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

function decipherThis(str) {
  console.log(str);
  str = str.split(" ");
  let charCode = "";

  for (i = 0; i < str.length; i++) {
    for (l of str[i]) {
      if (l.length === 1 && !l.match(/[a-z]/i)) {
        charCode += l;
      }
    }

    str[i] = str[i].replace(charCode, "");
    let secondLetter = str[i].charAt(str[i].length - 1);
    str[i] = str[i].split("");
    str[i].unshift(String.fromCharCode(charCode));
    str[i] = str[i].join("");
    let lastLetter = str[i][1];
    if (str[i].length >= 2) {
      str[i] = str[i].split("");
      str[i][1] = secondLetter;
      str[i] = str[i].join("");
      str[i] = str[i].slice(0, -1);
      str[i] = str[i].concat(lastLetter);
    }
    charCode = "";
  }
  str = str.join(" ");
  console.log(str);
  return str;
}

// decipherThis("72olle 103doo 100ya"); // 'Hello good day'
// decipherThis("82yade 115te 103o"); // 'Ready set go'
decipherThis("116tah 98dri"); // 'Why can we not all be like htat wise old bird'
