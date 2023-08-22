// ex1
function concatStrings(val1, separator) {
  if (typeof separator !== "string") {
    separator = "";
  }
  let result = val1;

  function innerFunction(val2) {
    if (typeof val2 === "string") {
      result += separator + val2;
    }
    console.log(result)
    return innerFunction;
  }
  innerFunction.toString = function () {
    console.log(result);
  };

  return innerFunction;
}

concatStrings("first")("second")("third")();

//ex2
class Calculator {
  constructor(...args) {
    const areValidArgs =
      args.length === 2 &&
      this.isValidNumber(args[0]) &&
      this.isValidNumber(args[1]);

    if (!areValidArgs) {
      throw new Error("Ошибка!");
    }
    this.X = args[0];
    this.Y = args[1];

    this.logSum = () => {
      console.log(this.X + this.Y);
    };

    this.logMul = () => {
      console.log(this.X * this.Y);
    };

    this.logSub = () => {
      console.log(this.X - this.Y);
    };

    this.logDiv = () => {
      if (this.Y === 0) {
        throw new Error("Ошибка!");
      }
      console.log(this.X / this.Y);
    };
  }

  isValidNumber(val) {
    return typeof val === "number" && isFinite(val);
  }

  setX(val) {
    if (!this.isValidNumber(val)) {
      throw new Error("Ошибка!");
    }

    this.X = val;
  }

  setY(val) {
    if (!this.isValidNumber(val)) {
      throw new Error("Ошибка!");
    }

    this.Y = val;
  }
}
