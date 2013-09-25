;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  Game = Asteroids.Game = function (ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.ship = new Asteroids.Ship();
    this.interval
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 400;
  Game.FPS = 60;


  Game.prototype.addAsteroids = function (numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {

      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y))
    };
  };

  Game.prototype.draw = function () {
    var ctx = this.ctx;
    context.fillStyle = '#000000';
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    });

    this.ship.draw(ctx)
  };

  Game.prototype.move = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move();
    })
    this.ship.move()
  };

  Game.prototype.step = function(game) {
    game.move();
    game.draw();
    // game.checkCollisions();
  }

  Game.prototype.bindKeyHandlers = function () {
    var game = this;
    key("up", function() {
      game.ship.power([2, 2]);
    })
    key("left", function () {
      game.ship.rotate(-1)
    })
    key("right", function () {
      game.ship.rotate(1)
    })

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
    this.addAsteroids(10);
    this.bindKeyHandlers();
    var game = this
    var time = Math.floor(1000 / Game.FPS);

    game.interval = window.setInterval(function () {
      game.step(game)}, time);
  };

})(this);