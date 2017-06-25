// https://www.codewars.com/kata/525c65e51bf619685c000059
// Pete, the baker
'use strict';
function cakes(recipe,available){
    let numberOfCakes=[];     
    for(let ingrediant in recipe){
        if(available[ingrediant]==='undefined'){
            return 0;
        }
        numberOfCakes.push((available[ingrediant]/recipe[ingrediant])|0);
    }
    return numberOfCakes.reduce(function(x,y){ return Math.min(x,y)});
}