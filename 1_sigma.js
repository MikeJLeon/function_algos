// given some number, print "adding up" to the console and add from 1 up to that numnber and return the sum
// Predcted output: sigma(5) should return 15   (I.E: 1+2+3+4+5 =15)



            //  5
function sigma(num){
   var counter = 0                    // counter = 0 - 1 - 3 - 6 - 10 - 15!!!
for(var i = 1; i <= num; i++ ){
    counter = counter + i;}           // i = 1 - 2 - 3 - 4 - 5 - 6 -break

return counter;

}


 result = sigma(5)   
console.log(result)