// ex1

Array.prototype.myFilter = function (callBack, obj) {
  if (typeof callBack !== "function") {
    throw new Error("Callback must be function");
  }
  const newArray = [];
  const array = this;

  for (let i = 0; i < array.length; i++) {
    if (callBack.call(obj, array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};


// ex2

function createDebounceFunction(callback, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
