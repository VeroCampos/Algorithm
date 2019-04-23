/*var x = [1,2,3,4,5,10]
for(var i=0; i<5;i++){   
   console.log(i);
}*/

/*var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
    //0+1=1
   i = i + 1;  
   console.log(i);
}
*/
/*var x = [1,2,3,4,5,10]
for(var i=0; i<5; i++)
{
    //0<5 = true so i= 0 + 3 =3 then
    // go i++ so 3+1= 4, 4<5 =True
    //so 4+3 = 7 then stops the loop...
    i = i + 3; 
   console.log(i);
}
//output:
// 3 
// 7

function y(num1, num2){  
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))


 /*function y(num1, num2){
    console.log(num1);   
    return num1+num2;
 }

 console.log(y(2,3));
 console.log(y(3,5));


 /*a = 15;
console.log(a);
function y(a){
   console.log(a);   
   return a;
}
b = y(10);
console.log(b);


a = 15;
console.log(a);
function y(a){ //since b = y(10) now a=10
   console.log(a);   
   return a*2;//so 10*2=20
}
b = y(10); //b=10
console.log(b);*/
//output
// 15 from a(at top)
// 20 from re-assign b = 10*2 = 20
// 10 from b
function a(){
    console.log('hello');
    }
 console.log('Dojo');