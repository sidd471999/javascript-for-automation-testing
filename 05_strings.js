// Strings are collection of various characters , numbers , aplhabates or etc 

// string are defined by "double inverted comma s" 'single inverted commas '  `backtis`

// strings are immutable parameters 
// they are very simliar to arrays 
// they also store value by indexs
// string have a property called as string 

// We can use the backslash character (\) at the end of each line to indicate that the string will continue on the next line

// In JavaScript and other programming languages \ followed by some characters is an escape sequence. Let's see the most common escape characters:

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")


// most common escape sequance
// \n: new line
let id = "my name is siddhant arjun gadakh \n i am 23 years old"
console.log(id)
// \t: Tab, means 8 spaces
let space = "my name is siddhant arjun gadakh \t i am 23 years old"
console.log(space)
// \\: Back slash
console.log("this is a backslash symbol(//)")
// \': Single quote (')
console.log('My name is \'siddhant\' and my age is 23')
// \": Double quote (")
console.log("My name is \"siddhant\" and my age is 23")
// HOW TO DEFINE A STRING  

let string = "siddhant arjun gadakh"

console.log(string)
console.log(typeof string)




// Template Literals (Template Strings)

// To create a template strings, we use two back-ticks. 
// We can inject data as expressions inside a template string. 
// To inject data, we enclose the expression with a curly bracket({}) preceded by a $ sign.
//  See the syntax below.

let cc = 20
let bb = 30

console.log(`the sum of ${cc} and ${bb} is ${cc + bb}`)




// ---------------------------------------------------------------------------------

//  how to retrive a character form a string 

let name = "radhey"

console.log(name[3])

// --------------------------------------------------------------------------

// how to find a length of a string 

console.log(name.length)

// ---------------------------------------------------------------------------------------

// ACTIONS PERFORMED ON STRINGS 

// 1 to convert the written string into uppercase---------------------------------------------toUppercase() 

let fullname = "siddhant arjun gadakh"

let upper = fullname.toUpperCase()
console.log(upper)

// 2 to convert the wriiten string into lowercase-----------------------------------------------toLowercase()

let email = "SIDDHANTGADAKH121@GMAIL.COM"

let em = email.toLowerCase()

console.log(em)


// 3 to check wheater a string consist of the given data -------------------------------------inculdes()

let we = fullname.includes("si")

console.log(we)



// 4 to join two or more strings --------------------------------------------------------------concat()

let connect = fullname.concat(em)

console.log(connect)


// 5 to split a string into a array of substrings -------------------------------------------------split()

let xc = connect.split()


console.log(xc)

// 6 to get  a specific charater by using its index ----------------------------------------------------charAt()

let surname = "gadakh"
let qw = surname.charAt(3)
console.log(qw)


// 7 to check the start of the string --------------------------------------------------------startsWith()

let rr = surname.startsWith("ga")
console.log(rr)

// 8 to check end of the string -------------------------------------------------------------endsWith()

let re = surname.endsWith("kh")
console.log(re)


// 9 to remove space from start of the string ------------------------------------------------trimStart()

let aa = "              attitudeadjustment"
let jc = aa.trimStart()

console.log(jc)


// 10 to remove space from end of the string ------------------------------------------------trimEnd()

let sk = " superkick              "
let hbk = aa.trimStart()

console.log(hbk)

// 11 to remove space from both start and end  of the string ------------------------------------------------trim()

let rko = "             randy keith orton              "
let ro = aa.trimStart()

console.log(ro)


// 12 to remove space form middle ----------------------------------------------------------------------

let details = " siddhant arjun gadakh "

let removespace = details.split(" ").join("")

console.log(removespace)

//13 to replace certain words in string ---------------------------------------------------------------------replace() 

let text = "rain in the spain stays in the plain"

let result = text.replace("spain", "mexicain")

console.log(result)


// Changing Data Type (Casting)

// string to Int
let ten ="10"
let no10=+ten
console.log(no10)
// String to Float
let gr="9.81"
let G=+gr
console.log(G)
// Float to Int

let gra="9.81"
let Gr=parseInt(gra)
console.log(Gr)


