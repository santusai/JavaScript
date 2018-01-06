
function sumFibs(num) {
  var currentNum =1;
  var previousNum=0;
  var sum=0;
  while(currentNum<=num){
   
    if(currentNum%2!=0){
      sum+=currentNum;
    }
     currentNum+=previousNum;
    previousNum=currentNum-previousNum;
   }
  return sum; 
}

sumFibs(4);
