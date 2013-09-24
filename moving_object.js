Function.prototype.inherits = function (superClass) {
  function Surrogate() {};
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
};

;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var MovingObject = Asteroids.MovingObject = function (pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }

  MovingObject.prototype.move = function () {
    this.pos[0] += this.vel[0];
    this.pos[0] = this.pos[0] % Asteroids.Game.DIM_X;
    if (this.pos[0] < 0) {
      this.pos[0] += Asteroids.Game.DIM_X;
    }
    this.pos[1] += this.vel[1];
    this.pos[1] = this.pos[1] % Asteroids.Game.DIM_Y;
    if (this.pos[1] < 0) {
      this.pos[1] += Asteroids.Game.DIM_Y;
    }
  }

  MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function (otherObject) {
    var xdiff = this.pos[0] - otherObject.pos[0];
    var ydiff = this.pos[1] - otherObject.pos[1];
    distance = Math.sqrt( (xdiff * xdiff) + (ydiff * ydiff));

    return ((this.radius + otherObject.radius) > distance);
  }
})(this);