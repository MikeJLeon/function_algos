// Given an array and a number y, count and return how many numbers in the array are bigger than y.
// Predcted output: greaterThanY([1,6,8,3,5,2], 4) should return 3



function greaterThanY(arr, y){

    var counter = 0;

     for (var i = 0; i < arr.length; i++) {   // i = 0 - 1 - 2 -
              if(arr[i] > y){
            counter  =  counter + 1;  }       //  counter = 0 - 0 - 1 - 2
}
             return counter;


}
var output = greaterThanY([1,6,8,3,5,2], 4);
console.log(output);



