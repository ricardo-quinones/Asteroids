;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  var Asteroid = Asteroids.Asteroid = function (pos, vel) {
    Asteroids.MovingObject.call(this, pos, vel);
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
  }

  Asteroid.inherits(Asteroids.MovingObject);
  Asteroid.COLOR = "green";
  Asteroid.RADIUS = 40;
  Asteroid.MAXVEL = 1;

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var x = Math.floor(Math.random() * dimX);
    var y = Math.floor(Math.random() * dimY);
    var pos = [x, y];

    var dx = (Math.random() * Asteroid.MAXVEL - 0.5) * 4;
    var dy = (Math.random() * Asteroid.MAXVEL - 0.5) * 4;
    var vel = [dx, dy];

    return (new Asteroid(pos, vel));
  }

})(this);