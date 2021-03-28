const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let b = date;
  
  if (typeof b == 'undefined'){return 'Unable to determine the time of year!';}
  else if(Object.prototype.toString.call(b) === "[object Date]"){
  if( b.getMonth()>= 2 && b.getMonth()<= 4) {return 'spring';} 
  else if ( b.getMonth()>= 5 && b.getMonth()<= 7) {return 'summer';} 
  else if ( b.getMonth()>= 8 && b.getMonth()<= 10) {return 'autumn';} 
  else if ( b.getMonth()== 11 || b.getMonth()== 0 || b.getMonth()== 1) {return 'winter';}}
  
  else {throw new Error();} 
};
