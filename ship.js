;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function () {
    this.pos = [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y / 2];
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.vel = [0, 0]
    this.angle = 0;
    this.rotation = 0
  };

  Ship.inherits(Asteroids.MovingObject)
  Ship.RADIUS = 20;
  Ship.COLOR = "red";
  Ship.ANGULARVEL = .2;

  Ship.prototype.power = function (impulse) {
    var heading = this.head();
    this.pos[0] += impulse[0] * heading[0];
    this.pos[1] += impulse[1] * heading[1];
  };

  Ship.prototype.rotate = function (direction) {
    this.rotation = direction * Ship.ANGULARVEL
    this.angle += this.rotation
  };

  Ship.prototype.head = function() {
    return ([Math.cos(this.angle), Math.sin(this.angle)]);
  };

  Ship.prototype.draw = function (ctx) {
    var heading = this.head();
    var pos = this.pos;
    var angle = this.angle;
    var radius = this.radius;
    var newCos = function (num) { return Math.cos(angle + Math.PI * num / 3) }
    var newSin = function (num) { return Math.sin(angle + Math.PI * num / 3) };


    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.moveTo(pos[0] + heading[0] * radius, pos[1] + heading[1] * radius);
    ctx.lineTo(pos[0] + newCos(2) * radius / 2, pos[1] + newSin(2) * radius / 2);
    ctx.lineTo(pos[0] + newCos(4) * radius / 2, pos[1] + newSin(4) * radius / 2);
    ctx.closePath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fill();
  };

})(this)