let x = 56;
let y = 45;

z = x + y;
z = z - y;
z = z * y;
z = z / y;
z = z % y;
z = x++;
z = y--;
z = z ** y;
console.log(z);

z = true;
y = false;
x = z > y;
x = z < y;
x += true;
x -= 1;
x *= 4;
x %= 0;
x **= y;
console.log(x);

y = 5;
z = 6;
console.log(y == z);
console.log(y === z);
console.log(y != z);
console.log(y !== z);

a = true;
b = true;
x = a && b;
x = a || b;
x = !b;

//conditional statements
a = true;
b = false;
age = 19;
if (a) {
  console.log("massege from if statement");
}

if (b) {
  console.log(b);
} else {
  console.log("else do any task");
}

if (age == 12) {
  console.log(age);
} else if (age == 19) {
  console.log(age + 1);
}

if (age === 18) {
  console.log("You can vote");
} else if (age > 18) {
  console.log("You are a man");
} else if (12 < age < 18) {
  console.log("you are not allowed to vote");
} else {
  console.log("You are a child");
}

//filter odd and even
a = 12;
if (a % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let mode = "white";
if (mode === "white") {
  console.log("Light Mode");
} else if (mode === "black") {
  console.log("Dark Mode");
} else {
  console.log(null);
}

//moden syntext of single condition

a = 5;
if (a === 5) console.log("Single Line Conditional statement");

//Ternary Operator
a === 5 ? console.log("a is 5 number") : console.log("Not a 5 number")

// switch statement not used frequently
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
};
console.log(day);

//Q1
let oneNum = prompt('Enter your favorite Number ');
if (oneNum%5 === 0){
    alert("Given number is Multiple of 5")
}else{
    alert("Number given is not a multiple of 5")
};

//Q2 
let marks = prompt("Enter you mark");
let grade;
if (marks >= 80){
    grage = "A"
}else if (marks >= 70){
    grade = "B"
}else if(marks >= 60){
    grade = "C"
}else if (marks >= 50){
    grade = "D"
}else if (marks >= 45){
    grade = "E"
}else{
    grade = "F"
};


if (grade === "F"){
    console.log("You Need To Focus on you current syllabus")
}else{
    console.log("You are permoted to next class")
};

