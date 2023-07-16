const myTrim = (str) => {
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
  return result;
};

let string = "hello my dear     ";
console.log(myTrim(string));
console.log(string.trim());
