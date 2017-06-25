//https://www.codewars.com/kata/513e08acc600c94f01000001
//RGB To Hex Conversion
'use strict';
function rgb(r, g, b){
  // complete this function  
  const color=[r,g,b];
  let hex='';
  color.map(function(color){
    let current;
    if(color>255){
      current=255;
    }else if(color<0){
       current=0;
    }else{
     current=color;
    }
    hex+=('0'+current.toString(16)).slice(-2);
  });
  return hex.toUpperCase();
}