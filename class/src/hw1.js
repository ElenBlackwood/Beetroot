/*Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.*/

class Circle {
    constructor(radius,) {
        this.radius = radius;
        this.area;
        this.diameter;
        this.lenght;
    }

    //get-властивість, яке повертає радіус кола;
    get radius() {
        return this._radius;
    };

    //set-властивість, що встановлює радіус кола;

    set radius(value) {

        if (value.length <= 0) {
            alert("The value is not valid!");
            return;
        } else {
            alert("The value is valid!")
        }
          this._radius = value;
        
    };

    //get-властивість, яке повертає діаметр кола;

    get diameter() {
        return 2 * this.radius; 
    };

    // area method - метод, що обчислює площу кола;
    calcArea() {
        return this.area = Math.PI * this.radius * this.radius;
    };

    //метод, що обчислює довжину кола

    calcLenght(radius) {
        return this.lenght = 2 * Math.PI * this.radius;
    }
}

let circle = new Circle(prompt('Enter a number'));
circle.calcArea();
console.log('Area =', circle.calcArea()); // area method

circle.calcLenght(); //lenght method
console.log('Lenght =', circle.calcLenght());

alert(circle.radius); //get-властивість, яке повертає радіус кола;

alert(circle.diameter); //get-властивість, яке повертає діаметр кола;






