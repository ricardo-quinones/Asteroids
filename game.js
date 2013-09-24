;(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  Game = Asteroids.Game = function (ctx) {
    this.ctx = ctx;
    this.asteroids = [];
    this.newfunction = function(){}
  };

  Game.DIM_X = 800;
  Game.DIM_Y = 400;
  Game.FPS = 30;


  Game.prototype.addAsteroids = function (numAsteroids) {
    for (var i = 0; i < numAsteroids; i++) {

      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X, Game.DIM_Y))
    };
  };

  Game.prototype.draw = function () {
    var ctx = this.ctx;
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(ctx);
    })
  };

  Game.prototype.move = function () {
    this.asteroids.forEach(function (asteroid) {
      asteroid.move(asteroid);
    })
  };

  Game.prototype.step = function(game) {
    game.move();
    game.draw();
  }

  Game.prototype.start = function() {
    this.addAsteroids(10);
    var game = this
    var time = Math.floor(1000 / Game.FPS);

    window.setInterval(function () {
      game.step(game)
    }, time);
    // window.setInterval(console.log("interval"), 2000);
  };

})(this);