//Array is collections of similar data types values but you can trets as list in python

const { beforeEach } = require("node:test");

let arr;
arr = [98, 87, 34, 32, 32, 57];
x = arr;
x = typeof arr;
let info = ["Rahul", 34, "South Delhi"];
x = info;
x = typeof info;

// indexing in arrays
x = info[0];
x = info[2];
x = info[40];

// update array
info[0] = "Pradeep";
x = info;
/*// traversing array or iterating
len = arr.length;
for (let i = 0; i < len; i++) {
  console.log(arr[i]);
};

for (let i in arr){
    console.log(arr[i])
}

for (let i of arr){
    console.log(i);
}

// console the each output with extra of 1 sum

for (let i of arr){
    console.log(i+1)
}
console.log(x);*/

// Q1
let marks = [85, 99, 79, 77, 89, 87];
let sum = 0;
let totalStudents = marks.length;
for (let i of marks) {
  sum = sum + i;
}
console.log("Avg marks of the class", sum / totalStudents);

// Q2
let prices = [250, 645, 300, 900, 150];
console.log("10% off of original price");
let newPrices = [];
for (let i = 0; i < prices.length; i++) {
  let offerPrice = prices[i] / 10;
  newPrices[i] = prices[i] - offerPrice;
}

console.log(
  `origin price list ${prices} and after applying offered price of 10% ${newPrices}`
);

//Arrays methods
// 1. push() - add element at the end of the array
let nameList = ["Pradeep", "Rahul", "Shyam", "Prithvi"];
nameList.push("Jayant");
// 2. pop() - remove element from the end of the array
console.log(nameList.pop());

// 3. shift() - remove element from the start of the array
console.log(nameList.shift());
// 4. unshift() - add element at the start of the array
console.log(nameList.unshift("Aman"));

//array to string
arrStr = nameList.toString();
console.log(arrStr);
//concat two or more arrays
console.log(nameList.concat(arr));
console.log(nameList);

arr = [87, 78, 43, 64, 7, 2, 73, 8];
x = arr.slice(1, 5);
x = arr.splice(1, 3, 121, 121, 121); //startint, delcount, newElemet1...
console.log(x);
console.log(arr);

//multiple use of splice

// add element in list
arr.splice(2, 0, 102);
console.log(arr);

//delete element in list
arr.splice(3, 1);
console.log(arr);

//Raplace
arr.splice(3, 1, 1000);
console.log(arr);

// delete all number before 4th index
console.log("\n" + arr);
console.log("\n ", arr.splice(4));

// Q3
let companies = ["Boomberg", "Microsoft", "uber", "google", "ibm", "netflix"];

console.log(companies.shift());
console.log(companies.splice(2, 0, "ola"));
console.log(companies);
companies[2] = "Ola";
companies.unshift("amazone");
console.log(companies);
