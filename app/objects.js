exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
    return constructor;
  },

  iterate: function(obj) {
    let properties = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        properties.push(key + ': ' + obj[key]);
      }
    }
    return properties;
  },
};
