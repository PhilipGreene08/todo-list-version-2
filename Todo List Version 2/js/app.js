//grab items form dom
const itemInput = document.querySelector('#itemInput')
const itemList = document.querySelector('.item-list')
const clearButton = document.querySelector('#clear-list')
const itemContainer = document.querySelector('.item-container')
const form = document.querySelector('#itemForm')
const feedback = document.querySelector('.feedback')

let todos = []

//add item to todo array
form.addEventListener('submit', e => {
    e.preventDefault()
    const newItem = itemInput.value
    todos.push(newItem)
    itemInput.value = ``
    showList()
    
    setLocalStorage()
})

//form controller
function formController() {
    itemList.addEventListener('click', e => {
        let selectedItem = e.target.parentNode.parentNode.parentNode

        if (e.target.classList.contains('fa-times-circle')) {

            //console.log(e.target.parentNode.parentNode.parentNode);
            selectedItem.remove()
            console.log(selectedItem.textContent);
            filteredTodos = todos.filter(item => {
                return item !== selectedItem.textContent
            })
            todos = filteredTodos
            console.log(filteredTodos);
            setLocalStorage()
        }

        if (e.target.classList.contains('fa-edit')) {
            selectedItem.remove()
            itemInput.value = selectedItem.textContent
            filteredTodos = todos.filter(item => {
                return item !== selectedItem.textContent
            })
            todos = filteredTodos
            console.log(filteredTodos);
            setLocalStorage()
        }

        if (e.target.classList.contains('fa-check-circle')) {
            selectedItem.classList.toggle('completed')
            setLocalStorage()
        }
    })
}


//show item on screen
function showList() {

    itemList.textContent = ``

    todos.forEach(item => {
        itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>`)
        formController()
    })


}

//clear all data
clearButton.addEventListener('click', e => {
    e.preventDefault()
    itemList.textContent = ``
    todos = []
    setLocalStorage()
})

console.log(todos);

function setLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getLocalStorage() {
    const todoStorage = localStorage.getItem(todos)
    if (todos === `undefined` || todos === null) {
        todos = []
    } else {
        todos = JSON.parse(todoStorage)
        
    }
}




