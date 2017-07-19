exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let check = str[0];
    let count = 1;
    let out_str = check;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === check) {
        count += 1;
      } else {
        count = 1;
      }

      if (count < amount + 1) {
        out_str += str[i];
      }

      check = str[i];
    }
    return out_str;
  },

  wordWrap: function(str, cols) {
    if (str.length > cols) {
      var space_index = str.slice(0, cols + 1).lastIndexOf(' ');
      space_index = space_index === -1 ? _.indexOf(str, ' ') : space_index;
      if (space_index > 0) {
        var line = str.slice(0, space_index);
        var next_line = str.slice(space_index + 1);
        return line + '\n' + stringsAnswers.wordWrap(next_line, cols);
      } else {
        var line = str.slice(0, str.length);
        return line + '\n';
      }
    }
    return str;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  },
};
