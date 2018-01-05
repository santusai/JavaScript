
function sumPrimes(num) {
 // return num;
  var sum=0;
   
 for(var i=2;i<=num;i++){
  var count=0;
   for(var j=2;j<=num;j++){
     if(i%j==0){
       count++;
     }
   }
     if (count<2){
       sum+=i;
     }
   }
  return sum;
  
}

sumPrimes(10);
