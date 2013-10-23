var sum = function() {
  var args = [].slice.call(arguments);

  return args.reduce(function(previousValue, currentValue){
    return (previousValue + currentValue);
  });
};

Function.prototype.myBind = function(obj) {
  var f = this;
  var args = [].slice.call(arguments).slice(1);
  return function() {
    f.apply(obj, args);
  };
};

var curriedSum = function(numArgs) {
  var numbers = [], sum = 0;
  return function _curriedSum (num) {
    numbers.push(num);
    sum += num;

    if (numbers.length === numArgs) {
      return sum;
    } else {
      return _curriedSum;
    };
  };
};

Function.prototype.curry = function(numArgs) {
  var args = [], f = this;
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return f.apply(null, args);
    } else {
      return _curry;
    };
  };
};
