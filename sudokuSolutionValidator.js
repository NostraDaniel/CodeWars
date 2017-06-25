//https://www.codewars.com/users/NostraDani/completed_solutions
//Sudoku solution validator 
'use strict';
function validSolution(board){
		function lineCheck(x,index,arr){
			//returns false if there are no matches - thats what you need! 
			return arr.indexOf(x,index+1)>-1;
		}
	   function horizontalCheck(line){
	   		return line.some(lineCheck);
	   }
	   function verticalCheck(board){
	   	   for(let x=0;x<board[0].length;x+=1){
	   	   		let verticalLine=[];
	   	   		for(let y=0;y<board[0].length;y+=1){
   	   				verticalLine.push(board[y][x]);
	   	   		}
	   	   		return verticalLine.some(lineCheck)?false:true;
	   	   }
	   }
	   let lineCh= board.map(horizontalCheck).every(x=>x===false);
	   //the sudoku needs true in here=all of the numbers are diff
	   
	   let verticalCh=verticalCheck(board);

	    let firstLine=board.slice(0,3);
	    let secondLine=board.slice(3,6);
		let thirdLine=board.slice(6,9);
		function boxesCheck(line){

			let firstBox=[];
			let secondBox=[];
			let thirdBox=[];
			line.map(function(n){
				n.map(function(x,index,arr){
					if(index<3){
						firstBox.push(x);
					}else if(index>2 && index<6){
						secondBox.push(x);
					}else {
						thirdBox.push(x);
					}
				})
			});
			let result=[];
			result.push(firstBox.some(lineCheck),secondBox.some(lineCheck),thirdBox.some(lineCheck));
			if(result.some(x=>x===true)){
				return false;
			}else {
				return true;
			}
		}
		let first=boxesCheck(firstLine);
		let second=boxesCheck(secondLine);
		let third=boxesCheck(thirdLine);
		if(lineCh && first && second && third && verticalCh) {
			return true;
		}else {
			return false;
		}
	}