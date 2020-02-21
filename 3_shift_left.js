// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

var arraynew = [];


function shiftLeft(arr){


for(i=1; i < arr.length; i++){
     arraynew.push(arr[i]);
}

 arraynew.push(0);

    
}
shiftLeft([1,2,3,4,5]);
console.log(arraynew);