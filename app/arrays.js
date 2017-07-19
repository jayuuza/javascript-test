exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum;
  },

  remove: function(arr, item) {
    arr = _.without(arr, item);
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr = _.without(arr, _.last(arr));
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr = _.without(arr, _.first(arr));
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let counts = _.countBy(arr, _.identity);
    return counts[item];
  },

  duplicates: function(arr) {
    let counts = {};
    let no_dups_arr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];

      counts[item] ? (counts[item] += 1) : (counts[item] = 1);

      if (counts[item] === 2) {
        no_dups_arr.push(item);
      }
    }

    return no_dups_arr;
  },

  square: function(arr) {
    return arr.map(item => item * item);
  },

  findAllOccurrences: function(arr, target) {
    let indices = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item === target) {
        indices.push(i);
      }
    }

    return indices;
  },
};
