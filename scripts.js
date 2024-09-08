function  clickin(){
var username= document.getElementById('name');
var password= document.getElementById('password');
if(username.value==="admin"&& password.value==="12345"){
    window.location.href="login.html";
}
else{
    alert("invalid username or password");
}
}
let completedTasks = 0;

// Fetch and Display Todo List
function showToDo() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            let todoList = document.getElementById("todos");
            todoList.innerHTML = ''; // Clear previous todos
            todos.forEach(todo => {
                let listItem = document.createElement("li");
                listItem.classList.add("list-group-item");
                listItem.innerHTML = `
                    <input type="checkbox" ${todo.completed ? "checked disabled" : ""} 
                    onchange="taskCompleted(this)"> ${todo.title}
                `;
                todoList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching todos:", error));
}
function taskCompleted(checkbox) {
    return new Promise((resolve) => {
        if (checkbox.checked) {
            completedTasks++;
        } else {
            completedTasks--;
        }
        resolve();
    }).then(() => {
        if (completedTasks === 5) {
            alert("Congrats. 5 Tasks have been Successfully Completed");
        }
    });
}
