const newBtn = document.querySelector(".newTaskBtn");
const modal = document.querySelector(".enter");
const addBtn = document.querySelector(".addTaskBtn");
const task = document.querySelector("#newTask");
const taskList = document.querySelector(".taskList");
const radioBtn = document.querySelectorAll(".taskCheck");

let a;
let id = 0;
const todosFromLS = JSON.parse(localStorage.getItem("todos"));
// if (todosFromLS) {
//   todosFromLS.forEach((todo) => {
//     createList(todo);
//   });
// }

newBtn.addEventListener("click", () => {
  task.value = "";
  addTodo();
  modal.classList.toggle("hidden");
});
const radioBtnAr = [];
addBtn.addEventListener("click", () => {
  if (a === undefined) {
    alert("please enter someThing");
  } else {
    modal.classList.toggle("hidden");
    createList(a);

    updateLS();
  }
});
function createList(todo = "") {
  const addTask = document.createElement("li");
  addTask.id = `${id}`;
  addTask.classList.add("list");
  addTask.innerHTML = `
  <button class='delete hidden'><i class="fa-solid fa-trash-can"></i></button>
      <input type="radio" name="task" id="${id}" class="taskCheck" />
      <label for="${id}" class='taskLabel'>${todo}</label>
      `;
  taskList.appendChild(addTask);

  id++;
  const radioBtn = addTask.querySelector(".taskCheck");
  const newDv = document.querySelectorAll(".list");
  const label = addTask.querySelector(".taskLabel");
  const deleteBtn = addTask.querySelector(".delete");

  deleteBtn.addEventListener("click", () => {
    addTask.remove();
  });

  label.addEventListener("mouseover", () => {
    deleteBtn.classList.remove("hidden");
  });

  radioBtn.addEventListener("click", () => {
    label.classList.toggle("text");
    setInterval(() => {
      radioBtn.checked = false;
    }, 1000);
  });
}

// function updateLS() {
//   const allTasks = document.querySelectorAll("li");

//   const tasksArr = [];

//   allTasks.forEach((task) => {
//     tasksArr.push(task.label.value);
//   });

//   localStorage.setItem("todos", JSON.stringify(tasksArr));
// }

function addTodo() {
  task.addEventListener("input", () => {
    a = task.value;
  });
}
