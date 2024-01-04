const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    const CarClass = this.constructor;
    const clonedCar = new CarClass();
    return Object.assign(clonedCar, this);
  }
}

export default Car;
