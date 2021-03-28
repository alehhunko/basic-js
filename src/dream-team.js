const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
    
    if(Array.isArray(members) && members.length > 0) {
    let b = members.filter(memb => typeof memb == 'string').map(elem=> elem.trim()).map(elem=>elem.match(/^\w/)).flat();
    return String.prototype.toUpperCase.apply(b).split(",").sort().join('');}
  else{return false;}
};