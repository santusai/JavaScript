
function binaryAgent(str) {
  var spl=str.split(' ');
  var array=[];

  for(var i=0; i<spl.length;i++){
    array.push(String.fromCharCode(parseInt(spl[i],2)));
    
  }
  return array.join('');
  
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
