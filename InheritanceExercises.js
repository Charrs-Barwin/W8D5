
Function.prototype.inherits = function(parent){
    // Define a Surrogate class
    // Set the prototype of the Surrogate (Surrogate.prototype = SuperClass.prototype)
    // Set Subclass.prototype = new Surrogate()
    // Set Subclass.prototype.constructor = Subclass
    function Surrogate () {}
    Surrogate.prototype = parent.prototype
    this.prototype = new Surrogate()
    this.prototype.constructor = this

}

function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

// You should be able to define methods/attributes on MovingObject that ship and asteroid instances can use.
// Defining a method on Asteroid's prototype should not mean that a ship can call it.
// Adding to Ship or Asteroid's prototypes should not change MovingObject's prototype.
// The Ship and Asteroid prototypes should not be instances of MovingObject.

