
// TypeScript Assignment 02 By Abdur Rahman Asim 

abstract class Vehicle {

    // Defining Instances of Variables 

  private make: string;
  private model: string;
  private year: number;
  private rented: boolean;

//   making Constructor 

  constructor(make: string, model: string, year: number, rented: boolean) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.rented = rented;
  }

//   Creating Getters 

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  isRented(): boolean {
    return this.rented;
  }

  setRented(rented: boolean): void {
    this.rented = rented;
  }

  abstract rentalRate(): number;

  rent(): void {
    if (this.rented) {
      console.log(`${this.make} is already rented.`);
    } else {
      console.log(`You have successfully rented ${this.make}.`);
      this.rented = true;
    }
  }

  returnVehicle(): void {
    if (this.rented) {
      console.log(`You have successfully rented ${this.make}.`);
      this.rented = false;
    } else {
      console.log(`${this.make} has not been rented.`);
    }
  }
}

// Class for Car 

class Car extends Vehicle {
  private numSeats: number;
  private numDoors: number;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    numSeats: number,
    numDoors: number
  ) {
    super(make, model, year, rented);
    this.numSeats = numSeats;
    this.numDoors = numDoors;
  }

  rentalRate(): number {
    return 50; // $50 per day
  }

  getNumSeats(): number {
    return this.numSeats;
  }

  getNumDoors(): number {
    return this.numDoors;
  }
}

// Class for Truck 

class Truck extends Vehicle {
  private bedLength: number;
  private towCapacity: number;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    bedLength: number,
    towCapacity: number
  ) {
    super(make, model, year, rented);
    this.bedLength = bedLength;
    this.towCapacity = towCapacity;
  }

  rentalRate(): number {
    return 75; // $75 per day
  }

  getBedLength(): number {
    return this.bedLength;
  }

  getTowCapacity(): number {
    return this.towCapacity;
  }
}

// Class for MotorCycle 

class Motorcycle extends Vehicle {
  private engineSize: number;

  constructor(
    make: string,
    model: string,
    year: number,
    rented: boolean,
    engineSize: number
  ) {
    super(make, model, year, rented);
    this.engineSize = engineSize;
  }

  rentalRate(): number {
    return 30; // $30 per day
  }

  getEngineSize(): number {
    return this.engineSize;
  }
}

// Testing the classes 
// Code By Abdur Rahman Asim 

console.log("----------Car Class-------");
const car = new Car("Suzuki", "HI-45", 2015, false, 4, 4);
car.rent();
car.returnVehicle();
console.log(`Rental Rate of ${car.getMake()} is $${car.rentalRate()} per Day`);
console.log(`Model of ${car.getMake()} is ${car.getModel()}`);
console.log(`Year of ${car.getMake()} is ${car.getYear()}`);
console.log(`Number of Seats in ${car.getMake()} are ${car.getNumSeats()}`);
console.log(`Number of Door in ${car.getMake()} are ${car.getNumDoors()}`);
console.log("----------Car Class-------");




console.log("----------Truck Class-------");
const truck = new Truck("Heno", "GS-156", 2023, true, 6, 8000);
truck.rent();
truck.returnVehicle();
console.log(`Rental Rate of ${truck.getMake()} is $${truck.rentalRate()} per Day`);
console.log(`Model of ${truck.getMake()} is ${truck.getModel()}`);
console.log(`Year of ${truck.getMake()} is ${truck.getYear()}`);
console.log(`BedLength of ${truck.getMake()} is ${truck.getBedLength()}`);
console.log(`Tow Capacity of ${truck.getMake()} is ${truck.getTowCapacity()}`);
console.log("----------Truck Class-------");



console.log("----------MotorCycle Class-------");
const motorcycle = new Motorcycle("Honda", "125", 2019, false, 107);
motorcycle.rent();
motorcycle.returnVehicle();
console.log(`Rental Rate of ${motorcycle.getMake()} is $${motorcycle.rentalRate()} per Day`);
console.log(`Model of ${motorcycle.getMake()} is ${motorcycle.getModel()}`);
console.log(`Year of ${motorcycle.getMake()} is ${motorcycle.getYear()}`);
console.log(`Engine Size of ${motorcycle.getMake()} is ${motorcycle.getEngineSize()}`);
console.log("----------MotorCycle Class-------");

