const input = document.getElementById("input");
const form = document.getElementById("form");
const todos = document.getElementById("todos");


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const todoText = input.value;

    if (todoText) {
        const todoEl = document.createElement("li");
        todoEl.innerText = todoText;

        todoEl.addEventListener("click", ()=> {
            todoEl.classList.toggle("completed");
        });

        todoEl.addEventListener("dblclick", ()=> {
            todoEl.remove(todoEl);
        });

        todos.appendChild(todoEl);

        input.value = ("");
    }
});
