Number.prototype.MyToFixed = function (fractionDigits) {
  var number = String(this);
  var digits = fractionDigits || 0,
    length;

  if (digits < 0 && digits > 20)
    throw "RangeError: toFixed() digits argument must be between 0 and 100";

  var decimal = number.match(/(?<=\.)(\d*)/g);
  var factor = Math.pow(10, digits);
  if (decimal && decimal[0].length >= digits)
    return String(Math.round(Number(number + "1") * factor) / factor);
  else {
    var length = digits - (decimal ? decimal[0].length : 0);
    var delimiter = number.includes(".") || !length ? "" : ".";
    return String(number) + delimiter + "0".repeat(length);
  }
};

function test() {
  console.log((1.5e20).MyToFixed(2));
  console.log((-35.35).toFixed(2));
  console.log((-35.9).toFixed(2));
  console.log((-35).toFixed(2));
}

test();
