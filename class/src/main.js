// CALL SPEED METHOD    
class Car {
    constructor(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color;
        this.speed = 0;
    }

    start() {
        this.speed = speed;
        console.log('${this.name} running}');
    }

    stop() {
        this.speed = 0;
        console.log('${this.name} stopped');
    }
}

/*let ford = new Car(name: 'Ford', model: 'Fusiom', color: 'black');
ford.start(speed: 123);
console.log(ford);
*/


class MyCar extends Car {
    
    fule(fuel) {
        console.log(fuel);
    }

    run(patrol, speed) {
        super.start(speed);
        this.fuel(patrol);

    }
}

let myford = new MyCar('Ford','Fusiom','black');
myford.run(123, 123);
console.log(myford);