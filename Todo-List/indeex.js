const todoin = document.getElementById("todooo-in")

const todo1 = document.getElementById("todoo-n1")

const inputElement = document.createElement("input")
todoin.appendChild(inputElement)

const addTodoButton = document.createElement("button")

addTodoButton.innerHTML = "Add"

todoin.appendChild(addTodoButton)

addTodoButton.addEventListener('click', function() {
    const inputValue = inputElement.value
    const todoDiv = document.createElement("div")
    todoDiv.innerHTML = inputValue
    todo1.appendChild(todoDiv)
})
