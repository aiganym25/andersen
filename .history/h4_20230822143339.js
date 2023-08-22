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
    if (args.length !== 2 || !this.isValidNumber(args[0]) || !this.isValidNumber(args[1])) {
      throw new Error(
        "Ошибка!"
      );
    } else {
      this.X = args[0];
      this.Y = args[1];
    }
  }

  isValidNumber(val) {
    return typeof val === "number" && isFinite(val);
  }

  setX(num) {
    if (typeof num === "undefined" || typeof num !== "number") {
      throw new Error("Please, enter a valid number");
    } else {
      this.X = num;
    }
  }
  setY(num) {
    if (typeof num === "undefined" || typeof num !== "number") {
      throw new Error("Please, enter a valid number");
    } else {
      this.Y = num;
    }
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

const calculator = new Calculator(12, 3);
calculator.setX(15);
// console.log(typeof calculator.logDiv)

// const logCalculatorDiv = calculator.logDiv;
//  console.log(typeof logCalculatorDiv)

console.log(calculator.setY(444n));
