
function smallestCommons(arr) {
  //min value
  var min = Math.min(arr[0],arr[1]);
  //max value
  var max = Math.max(arr[0],arr[1]);
  var multiple =max; // max value example 5
  
  for(var div=max; div>=min;div--){
    if(multiple%div!==0){
      multiple+=max;
    
     div=max;
      
    }
    
  }
  return multiple;
}


smallestCommons([1,5]);
