class Car {    //individual input components 
    drive() {
        console.log("Driving a  car");
    }
}

class  Bike {
  drive() {
        console.log("drive a bike")
    }
}
 
class VehicleFactory {     //factory is responsible for creating objects  based on given type
    static  createVehicle(type) {   //static method so we can call it without creating object
     if (type === "car") return new Car();
     if (type === "bike") return new Bike();
     
        
    throw new Error("unknown input type");
    }
}

const v1 =  VehicleFactory.createVehicle("car");
v1.drive();

const v2 = VehicleFactory.createVehicle("bike");
v2.drive();

