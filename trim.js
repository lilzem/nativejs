let str = "hello my dear     ";
let result = "";

if (typeof str !== "string") {
  throw new SyntaxError();
} else {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let prev = str[i - 1];
    let next = str[i + 1];
    if (char !== " ") {
      result += char;
    } else if (char === " " && prev !== " " && next !== " ") {
      result += char;
    }
  }
}

console.log(result);
console.log("hello my dear     ".trim());
