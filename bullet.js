;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Bullet = Asteroids.Bullet = function(pos, angle, game) {
    this.pos = pos;
    this.angle = angle;
    this.radius = 10;
    this.game = game;
    this.vel = [Bullet.VEL * Math.cos(this.angle), Bullet.VEL * Math.sin(this.angle)];

  };

  Bullet.inherits(Asteroids.MovingObject)
  Bullet.COLOR = "orange";
  Bullet.VEL = 2;

  Bullet.prototype.move = function() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  };

  Bullet.prototype.endPos = function() {
    return [this.pos[0] + this.radius * Math.cos(this.angle), this.pos[1] + this.radius * Math.sin(this.angle)];
  };

  Bullet.prototype.hitAsteroids = function() {
    var game = this.game, bullet = this;
    game.asteroids.forEach(function (asteroid) {
      if (bullet.isCollidedWith(asteroid)) {
        game.removeAsteroid(asteroid);
        game.removeBullet(bullet);
        return true;
      };
    });

    return false;
  };

  Bullet.prototype.draw = function(ctx) {
    var pos = this.pos, angle = this.angle;
    var endPos = this.endPos();
    
    ctx.beginPath();

    ctx.moveTo(pos[0], pos[1]);
    ctx.lineTo(endPos[0], endPos[1]);
    ctx.closePath();
    ctx.strokeStyle = Bullet.COLOR;
    ctx.lineWidth = 3;
    ctx.stroke();
  };

  
})(this);