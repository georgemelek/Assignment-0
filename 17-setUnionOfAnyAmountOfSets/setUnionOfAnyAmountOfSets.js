function setUnionOfAnyAmountOfSets(...args) {
  var unionSet = new Set();

  for(var i = 0; i < args.length; i++){
    args[i].forEach(unionSet.add, unionSet);
  }

  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;