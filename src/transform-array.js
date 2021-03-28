const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  if(Array.isArray(arr)){
  let b = arr;
  let m = arr.length-1;
  if(b[0]=='--discard-next'||b[0]=='--discard-prev'||b[0]=='--double-next'||b[0]=='--double-prev'){b.splice(0,1);}
  else if(b[m]=='--discard-next'||b[m]=='--discard-prev'||b[m]=='--double-next'||b[m]=='--double-prev'){b.splice(m,1);}
  for(var i=0; i < b.length; i++) {
      if(b[i]=='--discard-next'){b.splice(i,2);}
      else if(b[i]=='--discard-prev'){b.splice(i-1,2);}
      else if(b[i]=='--double-next'){b.splice(i,1,i+1);}
      else if(b[i]=='--double-prev'){b.splice(i,1,i);}
    };
    return b;
  }
  else {throw new Error();}
};