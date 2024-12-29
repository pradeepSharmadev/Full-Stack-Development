function stringModify(name) {
  console.log(`My name is ${name}`);
}

stringModify("Pradeep Kumar Sharma");
function sum(a, b) {
  sum = a + b;
  return sum;
}

console.log(sum(4, 3));

const arrFun = (parameter) => {
  console.log(`${parameter}`);
};

arrFun("Pradeep");

const sumArr = (a, b) => {
  sum = a + b;
  return sum;
};
let returnSum = sumArr(7, 8);
console.log(returnSum);

const sumArrNotFruitful = (a, b) => {
  sum = a + b;
  console.log(sum);
};

let valueSum = sumArrNotFruitful(7, 8);
console.log(valueSum); // undefined

// create a multiplication function which return multiplication of two number

const multipleValue = (a, b) => {
  return a * b;
};

let multipleOf = multipleValue(4, 2);
console.log(multipleOf);

// function which take a string and return the number of vowels present init

const vowelCont = (str) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (chr of str) {
    for (vow of vowels)
      if (chr === vow) {
        count++;
      }
  }
  return count;
};

console.log(vowelCont("Pradeep Kumar Sharma"));

function vowcount(str) {
  vowels = "aeiouAEIOU";
  let count = 0;
  for (chr in str) {
    for (vow in vowels) {
      if (str[chr] === vowels[vow]) {
        count++;
      }
    }
  }
  return count;
}

console.log(vowcount("Pradeep kumar sharma"));

//Special Array Methods

//forEach

let arrMarks = [90, 78, 89, 67, 98];
console.log(`${arrMarks}`);

let reducedMarks = [];

arrMarks.forEach((val, ind, arrItself) => {
  reducedMarks.push(val - 5);
  console.log(ind);
});
console.log(reducedMarks);

// a given array of numbers , print the square of each values using

let arr = [1, 3, 42, 4, 2, 4, 2, 5, 2, 6, 3];

let sqrArr = [];

arr.forEach((val, ind) => {
  sqrArr.push(val * val);
});

console.log(sqrArr);

//Array special function Map its return a updated array

let newArr = arr.map(function (val, ind) {
  return val + arr[ind];
});

console.log(newArr);

newArr = arr.map((val, ind) => {
  return val + arr[ind];
});

const arrObj = [
  {
    name: "Pradeep kumar sharma",
    course: "B.Sc.(Hons) Electronics",
    rollNumber: "1623032",
    enrolledIn: "Sri Venketeswara college(University of Delhi)",
    yearOfGraduation: 2027,
  },
  {
    name: "Prithvi Raj",
    course: "B.Tech Computer Science",
    rollNumber: "XXXXXX",
    enrolledIn: "Indian Institute of Technology Delhi",
    yearOfGraduation: 2027,
  },
];

let newStr = arrObj.map((val) => {
  let str = `My name is ${val.name}, I'm pursuing ${val.course} from ${val.enrolledIn} and My roll call is ${val.rollNumber} and I Graduate in Year ${val.yearOfGraduation}. ThankYou!`;
  return str;
});
newStr.forEach((val) => {
  console.log(val);
});

// Filter Method of Arr

arr = [2, 3, 5, 3, 2, 5, 3, 6, 4, 7];
//filter all even number
let evenArr = arr.filter((val, ind) => {
  if (val % 2 === 0) {
    return val;
  }
});

console.log(evenArr);

let oddArr = arr.filter((val) => {
  return val % 2 != 0;
});

console.log(oddArr);

//Reduce method operation performed and reduced to a single value return

let redArr = arr.reduce((prev, cur) => {
  sum = prev + cur; // prev 2 and cur 3 then prev = sum and cur is 5
  return sum;
});
console.log(redArr);

//find the largest number from array

let maxNum = arr.reduce((prev, cur) => {
  if (prev > cur) {
    return prev;
  } else {
    return cur;
  }
});

console.log(maxNum);
let maxNu = arr.reduce((prev, cur) => {
  return prev > cur ? prev : cur; // condition ? True : False
});

console.log(maxNu);

//Q1.array of students marks find out the marks of student scored 90+
//Filter
let stuMarks = [89, 90, 94, 97, 96, 99, 56, 79, 98, 97];
let highestScore = stuMarks.filter((val, ind) => {
  if (val >= 90) {
    return val;
  }
});

console.log(highestScore);

// Map

let mapScored = stuMarks.map((val) => {
  if (val >= 90) {
    return val;
  }
});
console.log(mapScored);

// array of n number and use reduce to return the sum and mutilation of array
let nNum = prompt("Enter n numbers want sum");
let nNumArr = [];
for (let i = 1; i <= nNum; i++) {
  nNumArr.push(i);
}

let arrSum = nNumArr.reduce((prev, cur) => {
  return prev + cur;
});
let multi = nNumArr.reduce((prev, cur) => {
  return prev * cur;
});

console.log("Given Array", nNum);
console.log(`${arrSum},Sum of Array and ${multi} Multiplication of Array`);
