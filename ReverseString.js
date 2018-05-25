
function reverseString(str) {
  var arr="";
  for(var i=(str.length-1); i>=0;i--){
    arr+= str[i];
   
  }return arr;
  
    
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");
