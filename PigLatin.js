
function translatePigLatin(str) {
  var string = str.split("");
  var regexp = /[aeiou]/gi;  
  var first = str.substr(0,1);
  
 if(first.match(regexp)){   
   return str+'way';
 }
  
  else{
    var vowelIndex=str.indexOf(str.match(regexp)[0]);
    return str.substr(vowelIndex)+str.substr(0,vowelIndex)+'ay';
  }
  
}

translatePigLatin("cAnsonant");
