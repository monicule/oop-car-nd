import { Car } from "./Car.js";

const audi = new Car('Audi', '80', 'Raudona', 68, 7);

console.log(audi);
console.log(audi.startTheEngine());
console.log(audi.turnOffTheEngine());
console.log(audi.beginToDrive());
console.log(audi.drive());
console.log(audi.stopDriving());
console.log(audi.fuelLeft());
console.log(audi.refuel());