let str = 0;
let result = "";

if (typeof str !== "string") {
  throw new SyntaxError();
} else {
  for (char of str) {
    if (char.charCodeAt() !== " ".charCodeAt()) {
      result += char;
    }
  }
}

console.log(result);
