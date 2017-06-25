//https://www.codewars.com/kata/54b72c16cd7f5154e9000457
//Decode the morse code- part 2 - advanced
'use strict';
let decodeMorse = function(morseCode){
  //your code here
  let words=morseCode.trim().split('   ');
  let str=[];
  for(let word of words){
      
      let letters=word.split(' ');
      let mapped=letters.map(function(x){
         return x=MORSE_CODE[x];
      });
   
      str.push(mapped.join(''));
      
  }
  return str.join(' ');
}
function unmultiplyString (str, factor) {
	var ret = [];
	str.split('').reduce(function (prev, current) {
		if (prev === 0) {
			ret.push(current);
			return factor - 1;
		}
		return prev - 1;
	}, factor - 1)
	return ret.join('');
}

function shortestSequenceLength (str) {
	var ret = str.split('').reduce(function (prev, current) {
		if (current === prev.character) {
			prev.length = prev.length + 1;
		} else {
			if (prev.length < prev.shortestLength) {
				prev.shortestLength = prev.length;
			}
			prev.character = current;
			prev.length = 1;
		}
		return prev;
	}, {
		character: null,
		length: Infinity,
		shortestLength: Infinity
	});
	return (ret.length < ret.shortestLength) ?  ret.length : ret.shortestLength;
}

function decodeBits (bits) {
    bits = bits.substring(bits.indexOf('1'), bits.lastIndexOf('1') + 1); // remove leading/trailing 0's
    bits = unmultiplyString(bits, shortestSequenceLength(bits));
    return bits.replace(/0000000/g, '   ')
               .replace(/000/g, ' ')
               .replace(/111/g, '-')
               .replace(/1/g, '.')
               .replace(/0/g, '');
}