console.log("1".concat("2", "3", "4", "5"));

const myConcat = (...string) => {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += string[i];
  }
  return result;
};
let str = "23";
console.log(myConcat("2", "3", "4", "0", "abs"));
