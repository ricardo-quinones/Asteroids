;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function () {
    this.pos = [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y / 2];
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.vel = [0, 0]
  };

  Ship.inherits(Asteroids.MovingObject)
  Ship.RADIUS = 20;
  Ship.COLOR = "red";

  Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

})(this)