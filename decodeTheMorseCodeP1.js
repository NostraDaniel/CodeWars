//https://www.codewars.com/kata/54b724efac3d5402db00065e
//Part 1
'use strict';
let decodeMorse = function(morseCode){
  //your code here
  let words=morseCode.trim().split('   ');
  let str=[];
  for(let word of words){
      
      let letters=word.split(' ');
      let mapped=letters.map(function(x){
         console.log(MORSE_CODE[x]);
         return x=MORSE_CODE[x];

      });
   
      str.push(mapped.join(''));
      
  }
  return str.join(' ');
}
