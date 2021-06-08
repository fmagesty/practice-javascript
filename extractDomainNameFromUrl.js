// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

function domainName(url) {
  console.log(url.replace(/.+\/\/|www.|\..+/g, ""));
}

domainName("http://google.com"); // "google";
domainName("http://google.co.jp"); // "google";
domainName("www.xakep.ru"); // "xakep";
