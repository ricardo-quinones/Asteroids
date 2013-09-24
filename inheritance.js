Function.prototype.inherits = function(superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
}




function MovingObject() {
};

MovingObject.prototype.reportPosition = function(){
    return this.position;
  };
MovingObject.prototype.whatitis = "physical thing";
MovingObject.prototype.position = [0, 0];

function Ship(position) {
  this.position = position;
};
Ship.inherits(MovingObject);

ship = new Ship([2, 2]);
console.log(ship.reportPosition());
console.log(ship.whatitis);