//https://www.codewars.com/kata/53368a47e38700bd8300030d
//Format a string of names like 'Bart, Lisa & Maggie'.

function list(names){
  //your code here
  let string='';
  names.map(function(name,index,arr){
    if(arr.length-2===index){
      string+=name.name+' & ';
    }else if(arr.length-1===index){
     string+=name.name;
    }else {
     string+=name.name+', '
    }
  });
  return string;
  return string;
}