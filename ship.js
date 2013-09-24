;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Ship = Asteroids.Ship = function () {
    this.pos = [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y / 2];
    this.radius = Ship.RADIUS;
    this.color = Ship.COLOR;
    this.vel = [0, 0]
    this.angle = 1.57;
  };

  Ship.inherits(Asteroids.MovingObject)
  Ship.RADIUS = 20;
  Ship.COLOR = "red";
  Ship.ANGULARVEL = .2;

  Ship.prototype.power = function (impulse) {
    var heading = this.head();
    this.vel[0] += impulse[0] * heading[0];
    this.vel[1] += impulse[1] * heading[1];
  };

  Ship.prototype.rotate = function (direction) {
    this.angle += direction * Ship.ANGULARVEL
  };

  Ship.prototype.head = function() {
    return ([Math.cos(this.angle), Math.sin(this.angle)]);
  };

  Ship.prototype.draw = function (ctx) {
    // var heading = this.head();
    // var tip = [heading[0] * this.radius, heading[1] * this.radius];
    // var pos = this.pos;
    // var angle = this.angle;
    // var dx1 = Math.cos(Math.PI * 2 /3 - angle) * this.radius;
    // var dy1 = Math.sin(Math.PI * 2 /3 - angle) * this.radius;
    // var dx2 = Math.cos(Math.PI * 2 /3 + angle) * this.radius;
    // var dy2 = Math.sin(Math.PI * 2 /3 + angle) * this.radius;

    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      this.angle + .28,
      this.angle + 6,
      false
    );

    // ctx.moveTo(pos[0] + heading[0], pos[1] + heading[1])
    // ctx.lineTo(pos[0] + dy1, pos[1] + dx1);
    // ctx.lineTo(pos[0] + dx2, pos[1] +  dy2);
    // ctx.closePath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.stroke();
//
    // ctx.fill();
  };

})(this)