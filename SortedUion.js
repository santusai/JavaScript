
function uniteUnique(arr1,arr2,arr3) {
  var result = [];

  for(var i=0;i<arguments.length;i++){
    var array = arguments[i];
    
    for(var j=0; j<array.length;j++){
      var array2 = array[j];
      if(result.indexOf(array2)<0){
        result.push(array2);
      }
      
    }
    
  }
  
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
