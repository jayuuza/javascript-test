exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    let reg = /\d+/g;
    return reg.test(str);
  },

  containsRepeatingLetter: function(str) {
    let reg = /([a-zA-Z])\1/;
    return reg.test(str);
  },

  endsWithVowel: function(str) {
    let reg = /[aeiou]$/i;
    return reg.test(str);
  },

  captureThreeNumbers: function(str) {
    let reg = /\d{3}/;
    let result = str.match(reg);
    return result !== null ? result[0] : false;
  },

  matchesPattern: function(str) {
    let reg = /^\d{3}(-)\d{3}(-)\d{4}$/;
    return reg.test(str);
  },

  isUSD: function(str) {
    let reg = /(?=.)^\$(([1-9][0-9]{0,2}(,[0-9]{3})*)|0)?(\.[0-9]{2})?$/;
    return reg.test(str);
  },
};
