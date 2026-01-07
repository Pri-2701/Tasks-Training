//existing todos from localstorage or create empty array

//if nothing exist in localstorage intialize with  empty array
let todos = JSON.parse(localStorage.getItem("todos")) || []; //json.parse converts string from localstorage into js array
 
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos)); // // save updated array back to localstorage as s string
}


function addTodo() {
    const input = document.getElementById("todo");  //get input element

    const todoText = input.value.trim(); //get trimmeed value from input (remove extra spaces at start/end)

    if(todoText === ""){     //if input is empty ,show alert message
        alert("please enter a todo");
        return;
    }
    todos.push({
        text: todoText,
        completed: false })

      //add new todo text
   input.value = "" //clear the input box for next todo
    saveTodos();
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1); //remove 1 item fro  todos array at given index
    saveTodos();
    renderTodos();

}

function sortTodos(type) {
       if(type === "az") {
        todos.sort((a, b) =>a.text.localeCompare(b.text));
       }
       if(type === "za") {
        todos.sort((a, b) =>b.text.localeCompare(a.text));
       }
       if(type === "completed") {
        todos.sort((a,b) => a.completed - b.completed);
       }
       renderTodos();
}

function renderTodos() {
   const list = document.getElementById("todoList");  //get the <ul> element where todos will be displayed

   const searchText = document.getElementById("searchInput").value.toLowerCase(); //search input in lowercase


   list.innerHTML= ""; //clear previous todos list to avoid duplicate values
 
   todos.filter(todo => (todo.text|| "").toLowerCase().includes(searchText)) //check if todo include 
   .forEach((todo, index)=>{
    //create a list
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "" //add completed class if done

    li.textContent = todo.text; //set the text  content of the list item to the todo text

    const btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function() {
        deleteTodo(index);   //pass index to delete the correct item
    };
    li.appendChild(btn);   //append button to the list the item
    list.appendChild(li);  //append to the list item the  list
   });
}

renderTodos();
