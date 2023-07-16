const myToFixed = function (num, digits) {
  let number = num.toString();
  if (digits < 0 || digits > 20)
    throw "RangeError: toFixed() digits argument must be between 0 and 20"();

  let decimal = number.match(/(?<=\.)(\d*)/g);
  let factor = Math.pow(10, digits);
  if (decimal && decimal[0].length >= digits) {
    return String(Math.round(Number(number + "1") * factor) / factor);
  } else {
    let length = digits - (decimal ? decimal[0].length : 0);
    let delimiter = number.includes(".") ? "" : ".";
    return String(number) + delimiter + "0".repeat(length);
  }
};

function test() {
  console.log(myToFixed(1.5e20, 2));
  console.log(myToFixed(1.346, 4));
  console.log(myToFixed(1.567567, 3));
  console.log(myToFixed(1123.2352345, 6));
  console.log(myToFixed(1.6575673, 5));
}

test();
