exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    console.log(start);
    var interval_id = setInterval(() => {
      if (start === end) {
        this.cancel();
      } else {
        start++;
        console.log(start);
      }
    }, 100);

    this.cancel = function() {
      clearInterval(interval_id);
    };

    return this;
  },
};
