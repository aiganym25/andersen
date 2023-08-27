class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  constructor(
    brand,
    model,
    yearOfManufacturing,
    maxSpeed,
    maxFuelVolume,
    fuelConsumption
  ) {
    this.#brand = brand;
    this.#model = model;
    this.#yearOfManufacturing = yearOfManufacturing;
    this.#maxSpeed = maxSpeed;
    this.#maxFuelVolume = maxFuelVolume;
    this.#fuelConsumption = fuelConsumption;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    const isNotValid =
      typeof newBrand !== "string" ||
      newBrand.length < 1 ||
      newBrand.length > 50;

    if (isNotValid) {
      throw new Error("Неверное значение бренда");
    }

    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    const isNotValid =
      typeof newModel !== "string" ||
      newModel.length < 1 ||
      newModel.length > 50;

    if (isNotValid) {
      throw new Error("Неверное значение модели");
    }

    this.#model = newModel;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(newYear) {
    const currentYear = new Date().getFullYear();
    const isNotValid =
      typeof newYear !== "number" || newYear < 1900 || newYear > currentYear;

    if (isNotValid) {
      throw new Error("Неверное значение года выпуска");
    }

    this.#yearOfManufacturing = newYear;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(newSpeed) {
    const isNotValid =
      typeof newSpeed !== "number" || newSpeed < 100 || newSpeed > 300;

    if (isNotValid) {
      throw new Error("Неверное значение максимальной скорости");
    }

    this.#maxSpeed = newSpeed;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(newVolume) {
    const isNotValid =
      typeof newVolume !== "number" || newVolume < 5 || newVolume > 20;

    if (isNotValid) {
      throw new Error("Неверное значение максимального объема топлива");
    }

    this.#maxFuelVolume = newVolume;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(newConsumption) {

    if (typeof newConsumption !== "number" || newConsumption <= 0) {
      throw new Error("Неверное значение расхода топлива");
    }

    this.#fuelConsumption = newConsumption;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start() {

    if (this.#isStarted) {
      throw new Error("Машина уже заведена");
    }

    this.#isStarted = true;
  }

  shutDownEngine() {

    if (!this.#isStarted) {
      throw new Error("Машина ещё не заведена");
    }

    this.#isStarted = false;
  }

  fillUpGasTank(amount) {

    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Неверное количество топлива для заправки");
    }

    const updatedFuelVolume = this.#currentFuelVolume + amount;

    if (updatedFuelVolume > this.#maxFuelVolume) {
      throw new Error("Топливный бак переполнен");
    }

    this.#currentFuelVolume = updatedFuelVolume;
  }

  drive(speed, hours) {
    
    if (typeof speed !== "number" || speed <= 0) {
      throw new Error("Неверная скорость");
    }

    if (typeof hours !== "number" || hours <= 0) {
      throw new Error("Неверное количество часов");
    }

    if (speed > this.#maxSpeed) {
      throw new Error("Машина не может ехать так быстро");
    }

    if (!this.#isStarted) {
      throw new Error("Машина должна быть заведена, чтобы ехать");
    }

    const distance = speed * hours;
    const requiredFuel = (distance / 100) * this.#fuelConsumption;

    if (requiredFuel > this.#currentFuelVolume) {
      throw new Error("Недостаточно топлива");
    }

    this.#currentFuelVolume -= requiredFuel;
    this.#mileage += distance;
  }
}


module.exports = Car;
