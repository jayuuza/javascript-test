exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    let foundFiles = [];
    let getFiles = function(data, dirName) {
      let dir = data['dir'];
      let files = data['files'];
      if (files !== undefined || files !== null) {
        for (let i = 0; i < files.length; i++) {
          if (dirName == dir || dirName === undefined || dirName === null) {
            if (typeof files[i] === 'string') {
              foundFiles.push(files[i]);
            } else {
              getFiles(files[i]);
            }
          } else {
            if (typeof files[i] !== 'string') {
              getFiles(files[i], dirName);
            }
          }
        }
      }
    };

    getFiles(data, dirName);

    return foundFiles;
  },

  permute: function(arr) {},

  fibonacci: function(n) {},

  validParentheses: function(n) {},
};
