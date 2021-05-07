const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todolist=document.querySelector(".todo-list");

todoButton.addEventListener('click',addTodo);
todolist.addEventListener('click',deletetodo);


function addTodo(event){
    event.preventDefault();
    console.log("abc");

    const todoDiv=document.createElement("div");
    todoDiv.classList.add("todo");

    const newtodo=document.createElement("li");
    newtodo.innerText=todoInput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);

    const complete=document.createElement("button");
    complete.innerText="C";
    complete.classList.add("complete-btn")
    todoDiv.appendChild(complete);

    const deletebtn=document.createElement("button");
    deletebtn.innerText="D";
    deletebtn.classList.add("delete-btn")
    todoDiv.appendChild(deletebtn);

    todolist.appendChild(todoDiv);

    todoInput.value="";

}
function deletetodo(e){
    const item=e.target;

    if(item.classList[0]=="delete-btn")
    {
        const todo=item.parentElement;
        todo.remove();
    }

    if(item.classList[0]=="complete-btn"){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}
