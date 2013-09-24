;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos, vel) {
    Asteroids.MovingObject.call(this, pos, vel);
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
  }

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.COLOR = "white";
  Asteroid.RADIUS = 30;
  Asteroid.MAXVEL = 1;

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var x = Math.floor(Math.random() * dimX);
    var y = Math.floor(Math.random() * dimY);
    var pos = [x, y];

    var dx = (Math.random() - 0.5) * Asteroid.MAXVEL;
    var dy = (Math.random() - 0.5) * Asteroid.MAXVEL;
    var vel = [dx, dy];

    return (new Asteroid(pos, vel));
  }

})(this);