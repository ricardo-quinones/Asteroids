var sum = function() {
  var args = [].slice.call(arguments);

  return args.reduce(function(previousValue, currentValue){
    return (previousValue + currentValue);
  })
}

// console.log(sum(1, 2, 3, 4, 8));

Function.prototype.myBind = function(obj) {
  var f = this;
  var args = [].slice.call(arguments).slice(1);
  return function() {
    f.apply(obj, args);
  };
};

// function times(num, fun) {
//   for (var i = 0; i < num; i++) {
//     fun(); // call is made "function-style"
//   }
// }
//
// var cat = {
//   age: 5,
//
//   age_one_year: function (num1, num2) {
//     this.age += num1;
//     this.age += num2;
//   }
// };
// console.log(cat.age);
// times(10, cat.age_one_year.myBind(cat, 10, 5));
// console.log(cat.age);

var curriedSum = function(numArgs) {
  var numbers = [], sum = 0;
  return function _curriedSum (num) {
    numbers.push(num);
    sum += num;

    if (numbers.length === numArgs) {
      return sum;
    } else {
      return _curriedSum;
    }
  }
}

// var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  var args = [], f = this;
  return function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return f.apply(null, args);
    } else {
      return _curry;
    }
  }
}

s = sum.curry(2)(5)(30);
console.log(s);