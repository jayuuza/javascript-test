exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(function(item) {
      return function() {
        return fn(item);
      };
    });
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    return fn.apply(null, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1);
    return function() {
      return fn.apply(
        null,
        args.concat(Array.prototype.slice.call(arguments, 0))
      );
    };
  },

  curryIt: function(fn) {
    return function(x) {
      return function(y) {
        return function(z) {
          return fn(x, y, z);
        };
      };
    };
  },
};
