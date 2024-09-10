//  String is a sequence of characters each character takes 2 bytes of space
// string is immutable
let x;
let firstName = " Pradeep ";
let lastName = "Sharma";

// properties of String
x = firstName.length
x = firstName[0]
x = firstName[4]
x = {
    firstName : "pradeep",
    middleName : "Kumar",
    lastName : "Sharma"
}
x = `My name is ${x.firstName},\And sir Name is ${x.lastName}.`
x = "escape character backslash n"

// string methods 
x = firstName.toUpperCase()
x = firstName.toLowerCase()
x = firstName.trim()

// can two different data types concatenated string and number

num = 123
x = firstName + num

x = firstName.slice(0,6)

str2 = "Mr."
x = x.concat(str2)

x = x.replace("P","d")
y = "pradeep"
x = y.replaceAll("p",0)
x = y.charAt(5)

console.log(x);

// Q1.

let userName = prompt("Enter your Full Name :")
userID = `@${userName}${userName.length}`
console.log(userID)

