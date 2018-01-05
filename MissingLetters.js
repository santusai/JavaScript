
function fearNotLetter(str) {
 var a=0;
 var j = str.charCodeAt(0);//97
  
  
 for(a; a<(str.length);a++){
   var i = str.charCodeAt(a);
   if(i==j){
     j++;
   }
   else
     return String.fromCharCode(j);
 }

  return undefined;
  
}

fearNotLetter("abce");
