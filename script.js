const todoIcon = document.querySelector(".fa-plus");
const todoList = document.querySelector(".todoList");
const todoInput = document.querySelector(".todo-input");

todoIcon.addEventListener("click", clickOnPlus);

function clickOnPlus(e) {
  e.preventDefault();
  if (todoInput.value === "") {
    alert("Please enter something..");
  } else {
    let todoDiv = document.createElement("div");
    todoList.appendChild(todoDiv);

    let addList = document.createElement("li");
    addList.innerText = todoInput.value;
    todoDiv.appendChild(addList);

    todoInput.value = "";
    saveToLS(todoInput.value);

    let removeTask = document.createElement("i")
    removeTask.getAttribute('class', 'fa-solid fa-trash')
    addList.appendChild(removeTask)
  }
}

function saveToLS(item) {
  let toDos;
  toDos.push(item);
  localStorage.setItem("toDos", JSON.stringify(toDos));

  if (localStorage.getItem("toDos") === null) {
    toDos = [];
  } else {
    toDos = JSON.parse(localStorage.getItem("toDos"));
  }
}


