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


