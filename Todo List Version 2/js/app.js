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
    //editItems()
    //handleClick(e)
    setLocalStorage()
})

//form controller
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

//const deleteItem = document.querySelectorAll('.delete-item')

// function handleClick(e) {
//     console.log(e);
//     if (e.target.name == deleteItem) {
//         console.log(`yes`);
//     }
// }

// function editItems() {

//     const items = itemList.querySelectorAll('.item')
//     //select each item
//     items.forEach(item => {
//         if (item.querySelector('.item-name').textContent == ) {
//             //select each button //add event listeners to each button
//             item.querySelector('.delete-item').addEventListener('click', e => {
//                 itemList.removeChild(item)
//                 // todos = todos.filter(item => {
//                 //     return item !== newItem
//                 // })
//             })
//         }

//         //execute event
//         console.log(items);

//     })
// }

//show item on screen
function showList() {
    itemList.textContent = ``
    todos.forEach(item => {
        itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>`)
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
    localStorage.setItem('todos', todos)
}

//Things to do still
//save to LS
//get from ls
//set ls
//remove from ls










































// //add an eventListener to the from
// const form = document.querySelector('#itemForm'); // select form
// const itemInput = document.querySelector('#itemInput'); // select input box from form
// const itemList = document.querySelector('.item-list');
// const feedback = document.querySelector('.feedback');
// const clearButton = document.querySelector('#clear-list');

// let todoItems = [];

// const handleItem = function (itemName) {

//     const items = itemList.querySelectorAll('.item');

//     items.forEach(function (item) {

//         if (item.querySelector('.item-name').textContent === itemName) {
//             //complete event listener
//             item.querySelector('.complete-item').addEventListener('click', function () {
//                 item.querySelector('.item-name').classList.toggle('completed');
//                 this.classList.toggle('visibility');
//             });
//             //edit event listener
//             item.querySelector('.edit-item').addEventListener('click', function () {
//                 itemInput.value = itemName;
//                 itemList.removeChild(item);

//                 todoItems = todoItems.filter(function (item) {
//                     return item !== itemName;
//                 });
//             });
//             // delete event listener
//             item.querySelector('.delete-item').addEventListener('click', function () {
//                 //debugger;
//                 itemList.removeChild(item);

//                 todoItems = todoItems.filter(function (item) {
//                     return item !== itemName;
//                 });

//                 showFeedback('item delete', 'success');
//             })
//         }
//     })
// }

// const removeItem = function (item) {
//     console.log(item);
//     const removeIndex = (todoItems.indexOf(item));
//     console.log(removeIndex);
//     todoItems.splice(removeIndex, 1);
// }

// const getList = function (todoItems) {
//     itemList.innerHTML = '';

//     todoItems.forEach(function (item) {
//         itemList.insertAdjacentHTML('beforeend', `<div class="item my-3"><h5 class="item-name text-capitalize">${item}</h5><div class="item-icons"><a href="#" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a><a href="#" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a><a href="#" class="delete-item item-icon"><i class="far fa-times-circle"></i></a></div></div>`);

//         handleItem(item);
//     });
// }

// const getLocalStorage = function () {

//     const todoStorage = localStorage.getItem('todoItems');
//     if (todoStorage === 'undefined' || todoStorage === null) {
//         todoItems = [];
//     } else {
//         todoItems = JSON.parse(todoStorage);
//         getList(todoItems);
//     }
// }

// const setLocalStorage = function (todoItems) {
//     localStorage.setItem('todoItems', JSON.stringify(todoItems));
// }

// // get local storage from page
// getLocalStorage();

// //add an item to the List, including to local storage
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const itemName = itemInput.value;

//     if (itemName.length === 0) {
//         feedback.innerHTML = 'Please Enter Valid Value';
//         feedback.classList.add('showItem', 'alert-danger');
//         setTimeout(
//             function () {
//                 feedback.classList.remove('showItem');
//             }, 3000);
//     } else {
//         todoItems.push(itemName);
//         setLocalStorage(todoItems);
//         getList(todoItems);
//         //add event listeners to icons;
//         //handleItem(itemName);
//     }

//     itemInput.value = '';

// });

// //clear all items from the list
// clearButton.addEventListener('click', function () {
//     todoItems = [];
//     localStorage.clear();
//     getList(todoItems);
// })





