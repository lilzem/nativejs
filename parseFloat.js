const str = "-214.";

const zero = "0".charCodeAt();
const nine = "9".charCodeAt();
const minus = "-".charCodeAt();
let result = 0;
let float = 0;

function isNumber(charCode) {
  return charCode >= zero && charCode <= nine;
}

for (let i = 0; i < str.length; i++) {
  const char = str[i];
  const charCode = char.charCodeAt();
  const nextSymbol = str[i + 1];
  if (isNumber(charCode)) {
    const digit = charCode - zero;
    result = result * 10 + digit;
    if (float > 0) {
      float = float * 10;
    }
  } else if (
    char === "." &&
    float === 0 &&
    i + 1 < str.length &&
    isNumber(nextSymbol.charCodeAt())
  ) {
    float++;
  }
}
if (float > 0) {
  result = result / float;
}
if (str[0].charCodeAt() === minus) {
  result = -result;
}
console.log(result);
