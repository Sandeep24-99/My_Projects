const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const userData = input.value;

    if(userData === ""){
        alert("Please provide task before submiting!");
        input.focus();
        return;
    }

    //creating a element
    const task = document.createElement("div");
    task.classList.add("task");
    task.classList.add("mb-4");
    //appending that element
    tasks.appendChild(task);

    //creating another element
    const content = document.createElement("div");
    content.classList.add("content");
    //appending that element
    task.appendChild(content);

    //creating input field
    const taskInput = document.createElement("input");
    taskInput.classList.add("text");
    taskInput.classList.add("form-control");
    taskInput.classList.add("mb-2");
    taskInput.value = userData;
    taskInput.setAttribute("readonly","readonly");
    taskInput.type = "text";
    //appending the input field
    content.appendChild(taskInput);

    //creating another div
    const actions = document.createElement("div");
    actions.classList.add("actions");
    //appending that element
    task.appendChild(actions);

    //creating edit button
    const editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.classList.add("edit");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-warning");
    //appending edit button
    actions.appendChild(editBtn);

    //creating delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("mx-2");
    deleteBtn.classList.add("btn-danger");
    //appending edit button
    actions.appendChild(deleteBtn);

    input.value = "";

    //edit user data
    editBtn.addEventListener("click",()=>{
        if(editBtn.innerHTML === "Edit"){
            taskInput.removeAttribute("readonly");
            editBtn.innerHTML = "Save";
            taskInput.focus();
            editBtn.classList.remove("btn-warning");
            editBtn.classList.add("btn-success");
        }else{
            taskInput.setAttribute("readonly","readonly");
            editBtn.innerHTML = "Edit";
            editBtn.classList.remove("btn-success");
            editBtn.classList.add("btn-warning");
        }
    });

    //delete user data
    deleteBtn.addEventListener("click",()=>{
        tasks.removeChild(task);
    });
});