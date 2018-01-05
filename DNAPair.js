
function pairElement(str) {
  var single = str.split('');
  var pair=[];
  for(var i=0;i<single.length;i++){
    if(single[i]=='A' ){
      pair.push(['A','T']);
    }
   else if(single[i]=='C' ){
      pair.push(['C','G']);
    }
    else if(single[i]=='T' ){
      pair.push(['T','A']);
    }
    else{
      pair.push(['G','C']);
    }
    
  }
  return pair;
}

pairElement("GCG");
