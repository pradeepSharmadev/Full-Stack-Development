const inputElement = document.getElementById("input");
const addBtnElement = document.getElementById("addBtn");
const taskContainerElement = document.getElementById("taskContainer");

tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (tasks.length !== 0) {
  reRenderTask(tasks);
}

addBtnElement.addEventListener("click", () => {
  let input = inputElement.value.trim();

  if (input === "") return;

  const newTaskObject = {
    id: Date.now(),
    title: input,
    completed: false,
  };

  tasks.push(newTaskObject);
  saveData(tasks);
  inputElement.value = "";
  taskContainerElement.innerHTML = "";
  reRenderTask(tasks);
});

function saveData(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function reRenderTask(tasks) {
  tasks.forEach((task) => {
    const parent = document.createElement("div");
    parent.setAttribute("class", "task");
    parent.setAttribute("id", `${task.id}`);
    const firstChild = document.createElement("div");
    firstChild.setAttribute("onClick", `markAsDone(${task.id})`);
    firstChild.innerHTML = task.title;
    firstChild.setAttribute("class", "text");
    firstChild.setAttribute("id",`${task.id}`)
    const secondChild = document.createElement("button");
    secondChild.innerHTML = "Delete";
    secondChild.setAttribute("class", "btn");
    secondChild.setAttribute("onClick", `deleteTask(${task.id})`);

    parent.appendChild(firstChild);
    parent.appendChild(secondChild);
    taskContainerElement.appendChild(parent);
  });
  textStyle()
}

function deleteTask(id) {
  tasks = tasks.filter((task) => {
    return task.id !== id;
  });
  saveData(tasks);
  taskContainerElement.innerHTML = "";
  reRenderTask(tasks);
}

function markAsDone(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
    return task;
  });
  saveData(tasks);
  taskContainerElement.innerHTML = "";
  reRenderTask(tasks);
}

function textStyle() {
  tasks.forEach((task)=>{
    if (task.completed === true){
      title = document.getElementById(task.id)
      title.style["color"] = "green";
    }else{
      title = document.getElementById(task.id)
      title.style["color"] = "black";
    }
  })
}

// arr = [
//   { id: 123, name: "pradeep" },
//   { id: 456, name: "pankaj" },
//   { id: 789, name: "pankaj" },
//   { id: 120, name: "pankaj" },
// ];

// newarr = arr.filter((item) => item.id !== 123);
// console.log(newarr)

// todos
/*
localStorage data Update 
localStorage data Delete

which data i have to delete
user click on delete button of task associated to delete
which must have some unique identity
remember we dent have to remove from dom, dom will automatically reload all available data of localStorage
so deleting or removing one item from localstorage

we have tasks arr 
for updated arr tasks user click on btn we take a argument as id and filter out all data except that data
and saveData() with updated task

Simply
setAttribute to button onClick and call it by passing id to it

Note :
project taken time to understand but learning events have their own scop of variables problem solves in many ways also don't make silly mistakes like not returning values from function debug you problem with browser inspect tool also steps where you dought console and see also cross check with different examples
*/
