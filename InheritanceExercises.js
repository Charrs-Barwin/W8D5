
Function.prototype.inherits = function(parent){
    // Define a Surrogate class
    // Set the prototype of the Surrogate (Surrogate.prototype = SuperClass.prototype)
    // Set Subclass.prototype = new Surrogate()
    // Set Subclass.prototype.constructor = Subclass
    function Surrogate () {}
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
    //console.log('Apple');
}

function MovingObject() {

}


MovingObject.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`We are at ${speed} miles per hour`);
}

function Ship() {
    this.name = 'Apple';
    //MovingObject.call(this);
}

Ship.prototype.fire = function() { console.log('firing missiles')}
Ship.inherits(MovingObject);

function Asteroid() {
    this.size = 10000;
    //MovingObject.call(this);
}
Asteroid.prototype.orbit = function() { console.log('we are orbitting')}
//Asteroid.inherits(MovingObject);

// You should be able to define methods/attributes on MovingObject that ship and asteroid instances can use.
// Defining a method on Asteroid's prototype should not mean that a ship can call it.
// Adding to Ship or Asteroid's prototypes should not change MovingObject's prototype.
// The Ship and Asteroid prototypes should not be instances of MovingObject.

let m = new MovingObject();
let s = new Ship();
let a = new Asteroid();

//console.log(m.accelerate());
console.log(s);