// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

function reverse(s) {
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 1) {
      s[i] = s[i].split("").reverse().join("");
    }
  }
  s = s.join(" ").trim();
  console.log(s);
  return s;
}

reverse("Reverse this string, please!"); // "Reverse siht string, !esaelp"
reverse("I really don't like reversing strings!"); // "I yllaer don't ekil reversing !sgnirts"
reverse("Did it work?");
reverse("");
