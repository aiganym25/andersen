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
    if (
      args.length !== 2 ||
      !this.isValidNumber(args[0]) ||
      !this.isValidNumber(args[1])
    ) {
      throw new Error("Ошибка!");
    }
    this.X = args[0];
    this.Y = args[1];
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

  logSum() {
    console.log(this.X + this.Y);
  }

  logMul() {
    console.log(this.X * this.Y);
  }
  logSub() {
    console.log(this.X - this.Y);
  }
  logDiv() {
    if (this.Y === 0) {
      throw new Error("Ошибка!");
    }
    console.log(this.X / this.Y);
  }
}

const calculator = new Calculator(12, 3, 10);
calculator.setX(20);
// console.log(typeof calculator.logDiv)

// const logCalculatorDiv = calculator.logDiv;
//  console.log(typeof logCalculatorDiv)
