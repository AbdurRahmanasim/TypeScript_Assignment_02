// TypeScript Assignment 02 By Abdur Rahman Asim 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    //   making Constructor 
    function Vehicle(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    //   Creating Getters 
    Vehicle.prototype.getMake = function () {
        return this.make;
    };
    Vehicle.prototype.getModel = function () {
        return this.model;
    };
    Vehicle.prototype.getYear = function () {
        return this.year;
    };
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.rented) {
            console.log("".concat(this.make, " is already rented."));
        }
        else {
            console.log("You have successfully rented ".concat(this.make, "."));
            this.rented = true;
        }
    };
    Vehicle.prototype.returnVehicle = function () {
        if (this.rented) {
            console.log("You have successfully rented ".concat(this.make, "."));
            this.rented = false;
        }
        else {
            console.log("".concat(this.make, " has not been rented."));
        }
    };
    return Vehicle;
}());
// Class for Car 
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, rented, numSeats, numDoors) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.numSeats = numSeats;
        _this.numDoors = numDoors;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 50; // $50 per day
    };
    Car.prototype.getNumSeats = function () {
        return this.numSeats;
    };
    Car.prototype.getNumDoors = function () {
        return this.numDoors;
    };
    return Car;
}(Vehicle));
// Class for Truck 
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, rented, bedLength, towCapacity) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.bedLength = bedLength;
        _this.towCapacity = towCapacity;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 75; // $75 per day
    };
    Truck.prototype.getBedLength = function () {
        return this.bedLength;
    };
    Truck.prototype.getTowCapacity = function () {
        return this.towCapacity;
    };
    return Truck;
}(Vehicle));
// Class for MotorCycle 
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, rented, engineSize) {
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.engineSize = engineSize;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 30; // $30 per day
    };
    Motorcycle.prototype.getEngineSize = function () {
        return this.engineSize;
    };
    return Motorcycle;
}(Vehicle));
// Testing the classes 
// Code By Abdur Rahman Asim 
console.log("----------Car Class-------");
var car = new Car("Suzuki", "HI-45", 2015, false, 4, 4);
car.rent();
car.returnVehicle();
console.log("Rental Rate of ".concat(car.getMake(), " is $").concat(car.rentalRate(), " per Day"));
console.log("Model of ".concat(car.getMake(), " is ").concat(car.getModel()));
console.log("Year of ".concat(car.getMake(), " is ").concat(car.getYear()));
console.log("Number of Seats in ".concat(car.getMake(), " are ").concat(car.getNumSeats()));
console.log("Number of Door in ".concat(car.getMake(), " are ").concat(car.getNumDoors()));
console.log("----------Car Class-------");
console.log("----------Truck Class-------");
var truck = new Truck("Heno", "GS-156", 2023, true, 6, 8000);
truck.rent();
truck.returnVehicle();
console.log("Rental Rate of ".concat(truck.getMake(), " is $").concat(truck.rentalRate(), " per Day"));
console.log("Model of ".concat(truck.getMake(), " is ").concat(truck.getModel()));
console.log("Year of ".concat(truck.getMake(), " is ").concat(truck.getYear()));
console.log("BedLength of ".concat(truck.getMake(), " is ").concat(truck.getBedLength()));
console.log("Tow Capacity of ".concat(truck.getMake(), " is ").concat(truck.getTowCapacity()));
console.log("----------Truck Class-------");
console.log("----------MotorCycle Class-------");
var motorcycle = new Motorcycle("Honda", "125", 2019, false, 107);
motorcycle.rent();
motorcycle.returnVehicle();
console.log("Rental Rate of ".concat(motorcycle.getMake(), " is $").concat(motorcycle.rentalRate(), " per Day"));
console.log("Model of ".concat(motorcycle.getMake(), " is ").concat(motorcycle.getModel()));
console.log("Year of ".concat(motorcycle.getMake(), " is ").concat(motorcycle.getYear()));
console.log("Engine Size of ".concat(motorcycle.getMake(), " is ").concat(motorcycle.getEngineSize()));
console.log("----------MotorCycle Class-------");
