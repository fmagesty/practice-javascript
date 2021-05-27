// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  string = string.split("").map(function (l) {
    if (l === l.toUpperCase()) {
      l = " " + l;
    }
    return l;
  });
  string = string.join("");
  console.log(string);
  return string;
}

// solution("camelCasing"); // camel Casing
// solution("camelCasingTest"); // camel Casing Test
solution("newOldTimeTry"); // new Old Time Try
