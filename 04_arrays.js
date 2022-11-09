// Array - array is the collection collection of mutiple values and each value is store is in index 
// the values in index starts from zero 
// The last element of array is always length - 1
// in array you can store duplicate elements 
// array can be a empty also 
// array is defined by [] square brackets 
//  array has a property called as length 
 
//-------------------------------------------------------------------------------------------------------------

//HOW TO CREATE A BLANK ARRAY 

// the simplest method to delcare a  array can be  using square brackets  

const array =[]

console.log(array)
// second can be using a constructor 

 const arr = Array()

 console.log(arr)

 let sid = new Array()

console.log(sid)


//------------------------------------------------------------------------------------------------------------


//  Define array with values 


const fruits=["apple","banana","custard","dargon-fruit","eleberry","fig","grape"]

//  Print array 
console.log("fruits array:" ,fruits)

//  Print arrays length

console.log("number of fruits in the array :-"+fruits.length)


//  converting a string in array 


// converting name into a array with each letter as a new index 
let name ="siddhant arjun gadakh"
const ar=name.split("")

console.log(ar)

// spliting string into spaces and then conevrting it into array with fistname as a 1 index middlename as 2 index and lastname as 3 index 

const b=name.split(" ")

console.log(b)

// -------------------------------------------------------------------------------------------

//  ACTIONS PERFORMED ON THE ARRAY 

const veggie = ["tomato","potato","onion","cabbage","carrot","methi","spinach","bitterguard","bell peper"]

// 1  retriving an element form the array ------------

console.log(veggie[2])

// geting first element 

console.log(veggie[0])

// getting the last element 
let lastele = veggie.length-1
console.log(veggie[lastele])

// 2 adding the element at the last of the array----------------------push() 

veggie.push("raddish")

console.log(veggie)

// 3 adding the element at the first of the array -------------------unshift()

veggie.unshift("rajma")

console.log(veggie)

// 4 removing the element from the end of the array ------------pop()

veggie.pop()

console.log(veggie)

// 5 removing the element from the start of the array  -------shift()

veggie.shift()

console.log(veggie)


// 6 removing element form the middle of an array ------------ splice( " start element index   " , " number of  element to be removed index "    )

veggie.splice(0,6)

console.log(veggie)

// 7 finding the index of a particular element in the array --------indexOf()

 let s=veggie.indexOf("bitterguard")

console.log(s)


//  8 to check wheater a element is prensent in the array or not ------------- includes()

let d=veggie.includes("apple")
console.log(d)

// 9 to reverse the array ---------------------------------------------reverse()


let program = ["java","sql","python","javascript","php","c++","html","css"]

program.reverse()

console.log(program)

// 10 to sort the array alphabatically ----------------------------------------sort()


let arrange=program.sort()

console.log(arrange)

// 11 to join the array ---------------------------------------------------join()

 let connect = program.join("-->")

 console.log(connect)

//   12 to convert array into a string ------------------------------toString()

let charcter= program.toString()

console.log(charcter)

// 13  slicing the array in the middle -------------------------------slice()

let cut = program.slice("1","3")

console.log(cut)


// 14 join multiple arrays into one array ------------------------------------------ concat()

let one=[1,2,3]
let two=[4,5,6]

let three= one.concat(two)

console.log(three)


// 15 joining multiple arrays present in one array----------------- flat()

let mul = [[1,2],[3,4],[5,6],[7,8]]

let no =mul.flat()

console.log(no)


// 16 finding maxiumum and min value in tne array ---------------------Math.min()                 Math.max()

let val= [1,2,3,4,5,5,8,8,1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17,18,19,20,69]

const large= Math.max(...val);     // ... is a spread operator it convert array in to numbers 

const small=Math.min(...val);

console.log(large)
console.log(small)

// 17 to add value in every element of the array -------------------------map((el,index,arr)=>{ })


let numbers= [1,2,3,4,5,5,8,8,1,2,3,4,5,6,7,8,9,0,10,11,12,13,14,15,16,17,18,19,20,69]

let add=numbers.map((el,index,arr)=>{
    return el+2
})

console.log(add)

// 18 to filter any thing form a array --------------------------------filter((el,index,arr)=>{ })

let filter=numbers.filter((el,index,arr)=>{return el>10 })

console.log(filter)


// 19 to all all the numbers in a array ---------------------------reduce((acc,el,index,arr)=>{ })

let sum = numbers.reduce((acc,el,index,arr)=>{return acc + el},0)

console.log(sum)

// 20 to pirnt some thing with each stence of array -------------------forEach((el,index,arr)=>{ })

let marks=numbers.forEach((el,index,arr)=>{console.log("marks are :-",el)})
console.log(marks)


// 21 to find the first element in many -----------------------------------find((el,index,arr)=>{ })

let find=numbers.find((el,index,arr)=>{return el>10 })

console.log(find)


// 22 find index of a particular element ------------------------------------findIndex((el,index,arr)=>{ })

let findindex =numbers.findIndex((el,index,arr)=>{ return el > 15 })

console.log(findindex)

// 23 to check every element in array -----------------------------------every((el,index,arr)=>{ })

let ev=numbers.every((el,index,arr)=>{ return el>0})

console.log(ev)

// 24 to find some element in the array  --------------------------- some((el,index,arr)=>{ })

let fv=numbers.some((el,index,arr)=>{ return el>15})

console.log(fv)

