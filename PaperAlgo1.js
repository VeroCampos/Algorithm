/*function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);


function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b); //6
console.log(multiply(5,2)); //10


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3;   //3 -- 7
   console.log(i);
}


var x=15;
console.log(x);  //15
function awesome(){ //15
    var x=10;
    console.log(x); //10
}
console.log(x);
awesome();
console.log(x); //15


for(var i=0; i<15; i+=2){
    // 0, 2, 4, 6, 8, 10, 12, 14
    console.log(i);
 }


for(var i=0; i<3; i++){
    //0<3 = TRUE then go next loop
    // 0
    //1++ = 2 
    for(var j=0; j<2; j++){ //runs for until reach FALSE condition
        //0<2 = TRUE    
        console.log(i*j); //0 * 0= 0++
        // 0 -- 0 -- 1 -- 0
    }
 }

 

function looping(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<x; j++){       
           console.log(i*j);
       } 
    }
 } // 0 -- 0 -- 0 -- 0 -- 1 -- 2 -- 0 -- 2 -- 4
 z = looping(3,3);
 console.log(z); //undefined


function looping(x,y){ //3, 5 
for(var i=0; i<x; i++){ //0 1 2
    
    for(var j=0; j<y; j++){       
        console.log(i*j);

                // 1 *0 =0 ++ 1
    } //0 0 0 0 0 0 1 2 3 4 0 2 4 6 8
}
return x*y; //15
}
z = looping(3,5);
console.log(z);



function printUpTo(x){
    
    if(x<0){
        return false;
    }
   for( var i=1; i<=x; i++){
        console.log(i);
        
      
    }
   
  }
  printUpTo(-5); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false



  function printSum(x){
    var sum = 0;
    for(var i=0; i<=x; i++){
        sum+= i;
    }
    return sum;
  }
  y = printSum(255) // should print all the integers from 0 to 255 and 
  //with each integer print the sum so far.
  console.log(y) // should print 32640
*/

  function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum += x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6