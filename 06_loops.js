//  In js there are 2 type of loops 

// for loop -syntax   ----------for(i=O;i<array.length;i++){     }

// while loop-------------------while j=0(j<array.length,j++){     }


// for loop is used for finite conditions &

// while loop is used for infinite conditions 

// examples for loop is :-  

// for(let i=0;i<=10;i++){console.log(i)}


// for loop working is as follows for(keyword)(initilization;condition check;increment and decrement){  statement or logic}

//  example of for loop to print a table of 2 

let number=2

for(let i=0;i<=10;i++){

    console.log(`${number}*${i}=${i*number}`)

}


// for converting this array into uppercase 

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']

let nations=[]

for(let i=0;i<countries.length;i++){

   let count=countries[i].toUpperCase()

    nations.push(count)
}
console.log(nations)



// WHILE LOOP

// while loop working is as follows initilization while(keyword)(condition check){  statement or logic ;increment and decrement}

//  example for while loop is 


// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }

let j=0
while(j<=20){
    console.log(j)
    j++
}



// ----------------------------------------------------------------------------------------------------
// COMMANDS [BREAK,CONTINUE]

// BREAK- the keyword break is used to interput the loop

// example 

for(let i=0;i<100;i++){
    if(i==5){ break }
    console.log(i)
}

// The above code stops if 5 found in the iteration process.


// CONTINUE - the keyword continue is used to skip a certain iterations.

for(let i =0;i<=5;i++){
    if(i==3){continue}
    console.log(i)
}