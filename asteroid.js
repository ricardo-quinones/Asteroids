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

  Asteroid.findPos = function (dimX, dimY, shipX, shipY) {
    var x = Math.floor(Math.random() * dimX);
    var y = Math.floor(Math.random() * dimY);
    var pos = [x, y];

    var dx = pos[0] - shipX, dy = pos[1] - shipY;
    var distance = Math.sqrt((dx * dx) + (dy * dy));

    if ((30 + Asteroid.RADIUS) > distance) {
      return (Asteroid.findPos(dimX, dimY, shipX, shipY));
    }

    return pos;
  };

  Asteroid.randomAsteroid = function (dimX, dimY, shipX, shipY) {
    var pos = Asteroid.findPos(dimX, dimY, shipX, shipY);
    
    var vx = (Math.random() - 0.5) * Asteroid.MAXVEL;
    var vy = (Math.random() - 0.5) * Asteroid.MAXVEL;
    var vel = [vx, vy];

    return (new Asteroid(pos, vel));
  }

})(this);
