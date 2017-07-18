exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	let check = str[0];
  	let count = 1;
  	let out_str = check;
    for (let i = 1; i < str.length; i++){
      if (str[i] === check) {
        count += 1;
      }
      else {
      	count = 1;
      }

      if (count < amount + 1){
      	out_str += str[i];
      }

      check = str[i];
    }
    return out_str;
  },

  wordWrap: function(str, cols) {
  	let count = 0;
  	let strs = str.split(" ");
  	
  	// let out_str = "";
   //  for (let i = 0; i < strs.length; i++){
   //    count += strs[i].length;
   //    if (count > cols){
   //      count = cols;
   //    }
   //    if (count  < cols){
   //      out_str += strs[i] + " ";
   //    }
   //    else if (count == cols){
   //      out_str = out_str + strs[i] + "\n";
   //      count = 0;
   //    }
   //    else if (count > cols){
   //      out_str = out_str + "\n" + strs[i];
   //      count = strs[i].length;
   //    }
   //    else {
   //      out_str[out_str.length] = "";
   //      out_str += "\n";
   //      count = 0;
   //    }
    
   //  }
    return out_str;
  },

  reverseString: function(str) {
    return str.split("").reverse().join("");
  }
};
