// ex1
function makeObjectDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  const copiedObj = {};

  for (const key in obj) {
    copiedObj[key] = obj[key];
  }

  return copiedObj;
}

//ex2
function selectFromInterval(arr, firstInterval, secondInterval) {
  if (!Array.isArray(arr) || arr.some((item) => typeof item !== "number")) {
    throw new Error("Ошибка!");
  }

  if (typeof firstInterval !== "number" || typeof secondInterval !== "number") {
    throw new Error("Ошибка!");
  }

  const minInterval = Math.min(firstInterval, secondInterval);
  const maxInterval = Math.max(firstInterval, secondInterval);

  return arr.filter((item) => {
    if (minInterval <= item && item <= maxInterval) {
      return true;
    }

    return false;
  });
}

//ex3
const myIterable = {
  from: 1,
  to: 4,
};

myIterable[Symbol.iterator] = function () {
  if (
    typeof this.from !== "number" ||
    typeof this.to !== "number" ||
    this.to < this.from
  ) {
    throw new Error("Ошибка!");
  }

  let current = this.from;
  let last = this.to;

  return {
    next: function () {
      if (current <= last) {
        return { done: false, value: current++ };
      } else {
        return { done: true };
      }
    },
  };
};
