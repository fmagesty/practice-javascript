  
// Removes exclamation at the end of sentence. Works with any number of exclamation marks

s = 'Hi!!!'


function remove(s){
  for (let i = 1; i < s.length; i++ ) {
    while (s.endsWith('!')) {
      s = s.slice(0, -i);
      }
    return s;
  }
}

console.log(remove(s));
