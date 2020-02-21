// Given an array and a number y, count and return how many numbers in the array are bigger than y.
// Predcted output: greaterThanY([1,6,8,3,5,2], 4) should return 3


        //arrlength = 6 / y=4 /
function greaterThanY(arr, y){

    var counter = 0; // = 3

     for (var i = 0; i < arr.length; i++) {   // i = 0 - 1 - 2 - 3 - 4 - 5 - 6
              if(arr[i] > y){
            counter  =  counter + 1;  }       //  counter = 0 - 1 - 2 - 3!!!!!
}
             return counter;


}
var output = greaterThanY([1,6,8,3,5,2], 4);
console.log(output);



