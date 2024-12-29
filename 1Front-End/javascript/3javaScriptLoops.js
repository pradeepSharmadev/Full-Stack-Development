for (let i = 0; i < 10; i++) {
  console.log(i);
}

// calculate sum of 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// while loop
let i = 1;
while (i <= 10) {
  console.log("i=" + i);
  i++;
}

//do while
i = 1;
do {
  console.log("task is done without checked condition only once");
  i++;
} while (i <= -2);

//for of loop to access the value of each iteration
//for of value
//for in index
let fullName = "Pradeep";
for (let i of fullName) {
  console.log("later = ", i);
}

for (let i in fullName) {
  console.log("latter =", i);
}

// find the length of the string
let count = 0;

for (let i of fullName) {
  count++;
}
console.log(count);

// best use "for of" is for arrays and strings iterations

const obj = {
  name: "Pradee",
  age: "19",
  status: "passed",
};
for (let i in obj) {
  console.log("key - ", i, "value - ", obj[i]);
}

// Q1
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Q2
let gussNum = prompt("Enter a number(Its part of game)");
let num = 12;

while (gussNum != num) {
  if (gussNum > num) {
    if (12 < gussNum < num + 10) {
      alert(
        "your number is closer to origin but Its bigger than origin number. try again"
      );
      gussNum = prompt("Enter number");
    }
    alert("Its bigger than origin number. try again");
    gussNum = prompt("Enter number");
  } else if (gussNum < num) {
    if (12 > gussNum > num - 10) {
      alert(
        "your number is closer to origin but Its smaller than origin number. try again"
      );
      gussNum = prompt("Enter number");
    }
    alert("Its smaller than origin number. try again");
    gussNum = prompt("Enter number");
  }
}
alert("Congratulation you did it!");
