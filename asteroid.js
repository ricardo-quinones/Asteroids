;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos, vel) {
    MovingObject.call(this, pos, vel);
  }

  Asteroid.inherits(MovingObject);
  Asteroid.prototype.COLOR = "white";
  Asteroid.prototype.RADIUS = 20;
  Asteroid.prototype.MAXVEL = 1;

  Asteroid.prototype.randomAsteroid = function(dimX, dimY) {
    var x = Math.floor(Math.random() * dimX);
    var y = Math.floor(Math.random() * dimY);
    var pos = [x, y];

    var dx = Math.floor(Math.random() * Asteroid.MAXVEL);
    var dy = Math.floor(Math.random() * Asteroid.MAXVEL);
    var vel = [dx, dy];

    return (new Asteroid(pos, vel));
  }

})(this);