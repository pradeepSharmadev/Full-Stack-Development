console.log("Pradeep Kumar")

let variableName //declare a variable 
variableName = "Pradeep Kumar Sharma" // assign value to the variable

variableName = "Pankaj Kumar Sharma" //value changes for let declaration

var age = 19
var age = 23 // re-declaration in possible in only with var

const marks = 86

let x = null //value not present data known
x = 24
x = "Pradeep"
x = undefined //data is not defined
x = true
x = true | false
{
    let Name = "pradeep" //scope of variable within the block of code
    console.log(Name)
}
// console.log(Name)

console.log(x)

// data types

let fullName = "Pradeep kumar sharma"
let Age = 19 //number
let isWorking = false
let markPercentage = 86.78 //number
console.log(fullName,Age,isWorking,markPercentage)
let undefineCheck
console.log(undefineCheck)
console.log(typeof(Age))
console.log(typeof(markPercentage))

let bigInteger = BigInt("123")
console.log(bigInteger)

let y = Symbol("hello")

//object 
const student ={
    fullName : "Rahul",
    age : 23,
    cgpa : 8.4,
    isPass : true
}
console.log(student)
console.log(student["fullName"])
console.log(student.age)

//update
student["age"] = student.age+1
//Add key and value in object
student["address"] = "Madangiri, Khanpur, South Delhi 110017"
console.log(student.address)

console.log(y)

//Q1
const product = {
    name:"Parker Jotter standard ct pen",
    rating : 7.2,
    price : 270,
    offer : "5% Off"
}
console.log(product)

//Q2
const profile = {
    userName : "Pradeep Kumar Sharma",
    numberOfPost: 195,
    followers : "594k",
    following : 4,
    fullName : "Deepak",
    about : "A student at University of delhi and enthusiastic about internet"
}
console.log(profile)
console.log(typeof(profile))
console.log(typeof(profile["userName"]))