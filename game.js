;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  Game = Asteroids.Game = function (ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.bullets = [];
    this.ship = new Asteroids.Ship();
    this.interval;
    this.timeout = false;
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 600;
  Game.FPS = 60;
  Game.ASTEROID_NUM = 10


  Game.prototype.addAsteroids = function (numAsteroids) {
    var game = this, shipX = this.ship.pos[0], shipY = this.ship.pos[1];
    for (var i = 0; i < numAsteroids; i++) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y, shipX, shipY))
      game.timeout = false
    };
  };

  Game.prototype.addMoreAsteroids = function() {
    var game = this;
    if (this.asteroids.length < Game.ASTEROID_NUM && game.timeout === false) {
      game.timeout = true;  
      return setTimeout(function () { game.addAsteroids(1) }, 3000);
    }
  };

  Game.prototype.fireBullet = function() {
    var game = this;
    game.bullets.push(game.ship.fireBullet(game));
  };

  Game.prototype.removeAsteroid = function(asteroid) {
    index = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(index, 1);
  };

  Game.prototype.removeBullet = function(bullet) {
    index = this.bullets.indexOf(bullet);
    this.bullets.splice(index, 1);
  };

  Game.prototype.isOutOfBounds = function(obj) {
    if (obj.pos[0] < 0 || obj.pos[0] > Game.DIM_X || obj.pos[1] < 0 || obj.pos[1] > Game.DIM_Y) {
      this.removeBullet(obj);
      return true;
    };

    return false;
  };

  Game.prototype.draw = function () {
    var ctx = this.ctx;

    ctx.drawImage(img, 0, 0);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });

    this.bullets.forEach(function (bullet) {
      bullet.draw(ctx);
    });

    this.ship.draw(ctx);
  };

  Game.prototype.move = function () {
    var game = this;

    game.addMoreAsteroids();

    game.asteroids.forEach(function (asteroid) {
      asteroid.move();
    });

    game.bullets.forEach(function (bullet) {
      if (!bullet.hitAsteroids() && !game.isOutOfBounds(bullet)) {
        bullet.move();
      };
    });

    game.ship.move();
  };

  Game.prototype.step = function(game) {
    game.move();
    game.draw();
    game.checkCollisions();
  }

  Game.prototype.bindKeyHandlers = function () {
    var game = this;
    key("up", function() {
      game.ship.power([3, 3]);
    });

    key("left", function () {
      game.ship.rotate(-1)
    });

    key("right", function () {
      game.ship.rotate(1)
    });

    key("space", function() {
      game.fireBullet()
    });
  };

  Game.prototype.checkCollisions = function () {
    var ship = this.ship;
    var game = this;
    this.asteroids.forEach(function (asteroid) {
      if (ship.isCollidedWith(asteroid)) {
        window.clearInterval(game.interval);
        window.alert("All your base has been destroyed!");
      }
    })
  };

  Game.prototype.start = function() {
    this.addAsteroids(Game.ASTEROID_NUM);
    this.bindKeyHandlers();
    var game = this;
    var time = Math.floor(1000 / Game.FPS);

    game.interval = window.setInterval(function () {
      game.step(game)}, time);
  };

})(this);