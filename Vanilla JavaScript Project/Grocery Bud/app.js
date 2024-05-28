const form = document.querySelector('.grocery-form')
const grocery = document.querySelector("#grocery")
const addButton = document.querySelector(".add-button")
const container = document.querySelector(".list")
const list = document.querySelector(".grocery-list")
const clearButton = document.querySelector(".clear-button")

let editElement
let editFlag = false
let editID = ""



form.addEventListener("submit", addItem)

clearButton.addEventListener("click", clearItems)

window.addEventListener("DOMContentLoaded", setupItems)

// Add Item
function addItem(event) {
    event.preventDefault()

    const value = grocery.value
    const id = new Date().getTime().toString()

    if (value !== "" && !editFlag) {
        const element = document.createElement("div")
        let attr = document.createAttribute("data-id")
        attr.value = id
        element.setAttributeNode(attr)
        element.classList.add("grocery-item")
        element.innerHTML = `<p class="title">${value}</p>
              <div class="button-container">
                <button type="button" class="edit-button">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" class="delete-button">
                    <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            `

        // Add Event Listeners to both buttons
        const deleteButton = element.querySelector(".delete-button")
        deleteButton.addEventListener("click", deleteItem)
        const editButton = element.querySelector(".edit-button")
        editButton.addEventListener("click", editItem)

        // Append Child
        list.appendChild(element)

        // Show Container
        container.classList.add("show-list")

        // Set Local Storage
        addToLocalStorage(id, value)

        // Set back to Default
        setBackToDefault()
    } else if (value !== "" && editFlag) {
        editElement.innerHTML = value

        // edit  local storage
        editLocalStorage(editID, value)
        setBackToDefault()
    } else {
        alert("Please Enter Value")
    }
}

// Clear Items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item")
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item)
        })
    }
    container.classList.remove("show-list")
    setBackToDefault();
    localStorage.removeItem("list")
}

// Delete Item
function deleteItem(event) {
    const element = event.currentTarget.parentElement.parentElement
    const id = element.dataset.id

    list.removeChild(element)

    if (list.children.length === 0) {
        container.classList.remove("show-list")
    }

    setBackToDefault()

    // Remove from local storage
    removeFromLocalStorage(id)
}

function editItem(event) {
    const element = event.currentTarget.parentElement.parentElement

    // Set Edit Item
    editElement = event.currentTarget.parentElement.previousElementSibling

    // Set Form value
    grocery.value = editElement.innerHTML
    editFlag = true
    editID = element.dataset.id
    //
    addButton.textContent = "edit"
}

function setBackToDefault() {
    grocery.value = ""
    editFlag = false;
    editID = ""
    addButton.textContent = "Add"
}

// Local Storage
function addToLocalStorage(id, value) {
    const grocery = { id, value }
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem("list", JSON.stringify(items))
}

function getLocalStorage() {
    return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : []
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage()

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item
        }
    });

    localStorage.setItem("list", JSON.stringify(items))
}

function editLocalStorage(id, value) {
    let items = getLocalStorage()

    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value
        }
        return item
    })
    localStorage.setItem("list", JSON.stringify(items))
}

// Set up Items
function setupItems() {
    let items = getLocalStorage()

    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value)
        })

        container.classList.add("show-list")
    }
}

function createListItem(id, value) {
    const element = document.createElement("div")
    let attr = document.createAttribute("data-id")
    attr.value = id
    element.setAttributeNode(attr)
    element.classList.add("grocery-item")
    element.innerHTML = `<p class="title">${value}</p>
              <div class="button-container">
                <button type="button" class="edit-button">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button type="button" class="delete-button">
                    <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            `

    // Add Event Listeners to both buttons
    const deleteButton = element.querySelector(".delete-button")
    deleteButton.addEventListener("click", deleteItem)
    const editButton = element.querySelector(".edit-button");
    editButton.addEventListener("click", editItem);

    // Append Child
    list.appendChild(element);
}