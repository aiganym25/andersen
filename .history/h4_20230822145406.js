// ex1
function concatStrings(val1) {
  if (typeof val1 !== "string") {
    return;
  }
  return function innerFunction1(val2) {};
}

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
    return !isNaN(val) && isFinite(val);
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

const calculator = new Calculator(12, 3);
calculator.logSum(); // 15
calculator.logDiv(); // 4
calculator.setX(15);
calculator.logDiv(); // 5
const logCalculatorDiv = calculator.logDiv;
logCalculatorDiv(); // 5
// calculator.setY(444n); // Ошибка!
