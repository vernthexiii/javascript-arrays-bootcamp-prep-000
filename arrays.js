var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    if(i == 0){
      newArray.push(element);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
