https://www.codewars.com/kata/51b6249c4612257ac0000005
//Roman Numerals Decoder
'use strict';
function solution(roman){
  // complete the solution by transforming the 
  // string roman numeral into an integer  
    let string=roman.replace(/CM/g,'900 ')
                    .replace(/XC/g,'90 ')
                    .replace(/IV/g,'4 ')
                    .replace(/IX/g,'9 ')
                    .replace(/X/g,'10 ')
                    .replace(/C/g,'100 ')
                    .replace(/L/g,'50 ')
                    .replace(/D/g,'500 ')
                    .replace(/M/g,'1000 ')
                    .replace(/V/g,'5 ')
                    .replace(/I/g,'1 ');
  let number=string.split(' ').reduce(function(x,y){return (+x)+(+y);});
  return number;
}