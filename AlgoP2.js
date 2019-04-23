/*function a(){
    console.log('hello');
     }
     console.log('Dojo');



function a(){
    console.log('hello');
    return 15;
    }
    x = a();
    console.log('x is', x);

    //hello
    //x is 15


function a(n){
        console.log('n is', n);
        return n+15;
        }
        x = a(3);
        console.log('x is', x);

        // n is 3
        // x is 18


function a(n){
        console.log('n is', n);
        y = n*2; //3 *2 = 6
                 //5*2 = 10
        return y; //10+6 = 16
        }
        x = a(3) + a(5);
        console.log('x is', x);

        //output n is 3
        //      n is 5
        // x is 16

function op(a,b){
        c = a+b; //5 then 8
        console.log('c is', c);
        return c;// so 8+5 = 13
        }
        x = op(2,3) + op(3,5);
        console.log('x is', x); //x is 13


function op(a,b){
        c = a+b; //5 -- 3 -- 6 -- 3 -- 5 -- 8
        console.log('c is', c);
        return c;  //19
        }
        x = op(2,3) + op(3,op(2,1)) + op(op(2,1),op(2,3));
        console.log('x is', x);
*/
var x = 15;
    function a(){
    var x = 10;
    }
    console.log(x);
    a();
    console.log(x);