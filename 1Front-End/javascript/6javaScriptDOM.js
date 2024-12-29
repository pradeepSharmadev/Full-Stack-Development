// Document Object Model
window.console.log("Window object")
console.log("window is global object and we can use its properties and methods as you know from classes and objects contains the properties and methods")

// window.alert("hello Alert")

console.log("All html tags access as a object in javascript")
window.document;
// console.dir(window.document)

console.dir(document.body) // child node
console.dir(document.body.childNodes[1])
// console.dir(document.body.childNodes[1].childNodes[0])

// document.body.childNodes[1].innerText = "abc"


//DOM manupliations
//select with ID
let selectIdElement = document.getElementById("pradeep")

let selectClassElem = document.getElementsByClassName("box")

let selectByTagName = document.getElementsByTagName("div")

console.dir(selectByTagName)

// Query selector
let heading = document.querySelector("h1")
console.dir(heading)
console.log(heading)

let firstDiv = document.querySelector("pradeep")
console.log(firstDiv)

let queryClass = document.querySelector("box")
console.log(queryClass)

// Query selector all existing elements All selected taget element is all

let allDivs = document.querySelectorAll("div")

let allClass = document.querySelectorAll(".box")
let allIds = document.querySelectorAll("#pradeep,li")
console.log(allIds)

//Properties

//tagName read only property
let tagN = document.getElementsByTagName("div").tagName
console.log(tagN)

console.log(document.getElementById("pradeep").innerText = "Pradeep Kumar sharma")
console.log(document.getElementsByClassName("box").innerHTML = "")

console.log(document.querySelector(".box").textContent)



