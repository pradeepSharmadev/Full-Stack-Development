// File Handling

const fs = require("fs");
const filePath = "./tasks.json";

//functions to handle file
// load or read the existing file
const loadTasks = () => {
  // bound with error handling
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJson = dataBuffer.toString();
    const regularJson = JSON.parse(dataJson);
    return regularJson; // reading successfully binary file or like bit fil
  } catch (error) {
    // error then return empty task
    return [];
  }
};

// saveTask or save file
const saveTask = (tasks) => {
  // write file
  const dataJson = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJson);
};

//add Task to file
const addTask = (task) => {
  const tasks = loadTasks(); //we have assess of simple object do operation what needed
  //tasks.push(tasks); this error is called converting circular structure to JSON //Error must fix it by tasks.push(task)
  tasks.push({ task }); // [{ task: "go to gym" }];
  saveTask(tasks);
  console.log("Task is Added successfully", task);
};

// Load tasks
const listTasks = () => {
  const arrayTasks = loadTasks();
  arrayTasks.forEach((task, index) => {
    console.log(`${index + 1} - ${task.task}`);
  });
};

//delete task from file
const removeTask = (index) => {
  const arrayTasks = loadTasks();
  if (index < 0 || index > arrayTasks.length) {
    console.log("Invalid index");
    return;
  }
  // newArray = arrayTasks.splice(index-1,1);
  // saveTask(arrayTasks);
  // console.log("Task is deleted successfully", newArray[0].task)
  newArray = arrayTasks.filter((task, oneIndex) => oneIndex !== index - 1);
  saveTask(newArray);
  console.log("Task is deleted Successfully");
};
//access command and argument
const command = process.argv[2];
const argument = process.argv[3];

//command based query
if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command Not Found!");
}

// ADD Task command : node todo.js add "go to gym"
