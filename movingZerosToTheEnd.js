//https://www.codewars.com/kata/52597aa56021e91c93000cb0
//Moving Zeros To The End
var moveZeros = function (arr) {
  let counter=0;
  let array=[];
  arr.map(function(x){

      if(x!==0){
          array.push(x);
      }
      if(x===0){
          counter+=1;
      }

  })
  for(let i=0;i<counter;i+=1){

      array.push(0);
  }
  return array;
}