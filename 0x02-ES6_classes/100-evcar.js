class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const CarClass = this.constructor;
    const clonedCar = new CarClass();
    Object.assign(clonedCar, this);
    return clonedCar;
  }
}

import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const CarClass = super.constructor;
    const clonedCar = new CarClass();
    Object.assign(clonedCar, this);
    return clonedCar;
  }
}

export default EVCar;
