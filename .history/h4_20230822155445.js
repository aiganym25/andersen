// ex1
function concatStrings(initialValue, separator) {
  let result = initialValue || "";

  function innerConcat(nextValue) {
    if (typeof nextValue === "string") {
      result += separator ? separator + nextValue : nextValue;
    }

    if (nextValue === undefined) {
      console.log(result);
    }

    return innerConcat;
  }

  return innerConcat;
}

concatStrings("first")("second")("third")(); // 'firstsecondthird'

const result1 = concatStrings("first", null)("second")();
console.log(result1);

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
