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
