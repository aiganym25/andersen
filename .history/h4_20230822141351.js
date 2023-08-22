// ex1
function concatStrings(val1) {
  if (typeof val1 !== "string") {
    return;
  }
  return function innerFunction1(val2) {};
}

//ex2

class Calculator {
  constructor(args) {
    if (
      args.length !== 2 ||
      typeof args[0] !== "number" ||
      typeof args[1] !== "number"
    ) {
      throw new Error(
        "The input values are not valid. Please, make sure you enter 2 valid numbers"
      );
    } else {
      this.val1 = args[0];
      this.val2 = args[1];
    }
  }
}
