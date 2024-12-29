// synchronous

// console.log("One")
// console.log("Two")
// const hello = (str) => {
//     console.log("hello!")
// }
// hello()
// console.log("Three")
// console.log("Four")
// window.console.dir(document)

// asynchronous

console.log("One")
console.log("Two")
const hello = (str) =>{
    setTimeout(() => {
        console.log("Hello",str)
    }, 2000);
}
hello("Pradeep")  // its wait for response
console.log("Three")
console.log("Four")

// callback