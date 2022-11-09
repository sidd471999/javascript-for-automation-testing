// you can define variables in javascript by 3 types 
// they are var , let , const 


// -----------------------------------------------------------------------------------------------------------------------
//let 

let x=10 
// here you define value of x as 10

// let is used to define a variable it is a blockscope or local  variable 

// by using let you can update the varaiable once its assign 

// eg 

// and now you can update the value of x form 10 to 100
x=100
console.log(x)

// -----------------------------------------------------------------------------------------------------------------------------

//const 

// const is used to define a constant varaiable 

// i.e once the value is update it can't be redefined agaian 

// const is aslo a block (local) scope variable 


// --------------------------------------------------------------------------------------------------------------------------------------

// var 

var y = 20

// var is similar to let and you can update the value when need when you define by var

// but the difference is that var is gobal (function) scope  varaiable 

// ---------------------------------------------------------------------------------------------------------------------------



// now if we have to perform arthmatic operations for 2 numbers you have to wirte atleast 5 lines of code 

//  operations are additions(+) subtraction(-)  multiplication(*)  divsion (/) modolus(%)

let a = 100
let b = 200

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

// ----------------------------------------------------------------------------------------------------------------------
console.log("-------------------------------------")

// now to avoid repeativie code you can use a featrure called as function 


//  how to write function is   first you write keyword        function   (then the name of function) then parameters in () and then statements in {}   

//  now to write functions for arthimatic operations 

function operations (a,b){
    console.log(a+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)

}

operations(200,500)


// -----------------------------------------------------------------------------

// function can be of 3 types 


// 1 function without parameter and without return type 

 function add() {console.log(10+20)}

 console.log("-------------------------------------")
 // 2 function with parameter and without return type 

 function sub(c,d){console.log(c-d)}

 console.log("-------------------------------------")

 // 3 function with parameter and with return type
 
 
 function mul(e,f) { return (e*f)}

let r = mul(20,30)

console.log(r)

console.log("-------------------------------------")

// ----------------------------------------------------------------

// you can write function by 3 types 


// 1 delecrative type--- we delecrate the name of function so its called as delecrative type of function  

function div (s,x){console.log(s/x)}

console.log("-------------------------------------")

//  2 experssion type --- we store the experssion in a variable is called as experssion type

let o = function(q,w){console.log(q+w)}
o(50,50)

console.log("-------------------------------------")


// 3 arrow type -- here we express the function with  a help of arrow (=>) 

let arrow = (f,g)=>{console.log(f+g)}


arrow(10,10)

console.log("-------------------------------------")


