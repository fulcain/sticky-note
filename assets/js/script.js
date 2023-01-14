// ----------------------------------------- general START -----------------------------------------

// add new note function

function addNote() {
    // creates the noteBox div
    let eachNoteBox = document.createElement('div')
    // adds class names to the noteBox div
    eachNoteBox.classList.add('each-note-box-styles', 'each-todo-list-note-box')
    // adds an attribute to the noteBox div
    eachNoteBox.setAttribute('style', `background:${colorChangeArr[colorChangeLoop]};`)

    // creates a p element
    let pElment = document.createElement('p')
    // adds an attribute to the p element
    pElment.setAttribute('contenteditable', 'true')
    // adds class name to p element
    pElment.classList.add('editing')
    // adds the p element to noteBox
    eachNoteBox.appendChild(pElment)

    // creates note attribute div
    let noteAttributeDiv = document.createElement('div')
    // adds class name to the attribute div
    noteAttributeDiv.classList.add('note-attributes')
    // adds the noteAttribute div to noteBox
    eachNoteBox.appendChild(noteAttributeDiv)



    // creates hourElement
    let hourElement = document.createElement('p')
    // adds classes to the hourElement
    hourElement.classList.add('added-hour-and-date')
    //grabs the time from currentTime
    let currentTimeTextNode = document.createTextNode(currentTime)
    // adds the time grabbed from currentTime to hourElement
    hourElement.appendChild(currentTimeTextNode)
    // adds the hourElement to noteAttributeDiv
    noteAttributeDiv.appendChild(hourElement)

    //creates horizantal line
    let hrline = document.createElement('hr')
    hrline.setAttribute("style",'border: 1px solid rgb(0, 0, 0);')
    hrline.setAttribute("width",'100%')
    noteAttributeDiv.appendChild(hrline)

    // creates btns box el
    let btnBox = document.createElement("div")
    btnBox.classList.add('button-box')
    // adds the btns box el to noteAttributeDiv
    noteAttributeDiv.appendChild(btnBox)

    // creates saveBtn(i) element
    let saveEl = document.createElement('i')
    saveEl.classList.add("bx", "bx-save", "bx-save", 'todo-save-note-btn')
    // adds the saveBtn(i) to noteAttributeDiv
    btnBox.appendChild(saveEl)
    // creates deleteBtn(i) element
    let trashEl = document.createElement('i')
    trashEl.classList.add("bx", "bx-trash", "icon-styles", 'todo-delete-note-btn')
    // adds the deleteBtn(i)i element to the noteAttributeDiv
    btnBox.appendChild(trashEl)



    // adds the noteBox to the whole noteBox
    toDoNoteBoxEl.appendChild(eachNoteBox)
}

// changes the title 
// calling the title from HTML document
let TitleEL = document.querySelector('title')

function ChangeTitles(titleText) {

    function resetTheTitle() {
        TitleEL.innerHTML = 'Sticky Notes'
    }

    function myTimeOutFunction() {
        setTimeout(resetTheTitle, 2000)
    }
    myTimeOutFunction()
    resetTheTitle()
    TitleEL.innerHTML = titleText
}

// remove note function

function removeNote() {
    // updates both btns and notes
    ToDoDeleteBtnEl = document.querySelectorAll('.todo-delete-note-btn')
    // loops throw the nodelist

    ToDoDeleteBtnEl.forEach(item => {
        item.addEventListener("dblclick", () => {
            item.parentElement.parentElement.parentElement.remove()
            ToDoListArray = toDoNoteBoxEl.innerHTML
            localStorage.setItem("toDoKey", JSON.stringify(ToDoListArray))
            console.log();
            ChangeTitles('---------- Note Deleted! ----------')
        })
    })


}

// save notes to their own array and localStorage key

function saveNoteToLocalStorage() {
    // updates both btns and notes
    ToDosaveBtn = document.querySelectorAll(".todo-save-note-btn")
    eachTodoNote = document.querySelectorAll(".todo-list-note-box")
    // loops throw the nodelist
    for (let i = 0; i < ToDosaveBtn.length; i++) {
        ToDosaveBtn[i].addEventListener("click", () => {
            ToDoListArray = ToDosaveBtn[i].parentElement.parentElement.parentElement.parentElement.innerHTML
            ChangeTitles('---------- Note Saved! ----------')
            localStorage.setItem("toDoKey", JSON.stringify(ToDoListArray))
        })
    }


}
// gets hour and put it in a variable
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let hourEl = new Date()
let currentTime = ''
function addHour() {
    currentTime = `${hourEl.getHours()}:${hourEl.getMinutes()} / ${months[hourEl.getMonth()]} ${hourEl.getDay()},${hourEl.getFullYear()}`
}

//loads from localStorage to InnerHtml

function loadFromLocalStorageToInnerHtml() {
    if (ToDoLocalStorage) {
        toDoNoteBoxEl.innerHTML += ToDoLocalStorage
    }
}

// takes random color from the array

let colorChangeArr = ['#ff7eb9', '#ff65a3', '#7afcff', '#feff9c', '#fff740', '#2B3A55', '#CE7777', '#E8C4C4']
let colorChangeLoop = 0
function colorChange() {
    colorChangeLoop = Math.floor(Math.random() * 8)
}


// ----------------------------------------- general END -----------------------------------------

// ----------------------------------------- todo list START -----------------------------------------
// all variables used in todo list

// todo list whole note box
let toDoNoteBoxEl = document.querySelector(".todo-list-note-box"),
    // all todo notes
    eachTodoNote = document.querySelectorAll(".each-todo-list-note-box"),
    // todo save btn
    ToDosaveBtn = document.querySelectorAll(".todo-save-note-btn"),
    // todo delete note btn
    ToDoDeleteBtnEl = document.querySelectorAll(".todo-delete-note-btn"),
    // todo add note btn
    addTodoBtnEl = document.querySelector("#add-todo-note-btn"),
    // array that contains all todolist elements
    ToDoListArray = [],
    // gets localStorageItems
    ToDoLocalStorage = JSON.parse(localStorage.getItem('toDoKey'))


// adds new todo note
addTodoBtnEl.addEventListener("click", () => {
    colorChange()
    addNote()
    removeNote()
    saveNoteToLocalStorage()
    addHour()
    ChangeTitles('---------- Note Added! ----------')

})
loadFromLocalStorageToInnerHtml()

document.addEventListener("keydown", (e) =>{
    if(e.key === "="){
        for (let i = 0; i < ToDosaveBtn.length; i++) {
                ToDoListArray = ToDosaveBtn[i].parentElement.parentElement.parentElement.parentElement.innerHTML
                ChangeTitles('---------- Note Saved! ----------')
                localStorage.setItem("toDoKey", JSON.stringify(ToDoListArray))
        }
    }
})
// ----------------------------------------- todo list END -----------------------------------------

// loads functions on page reload

document.addEventListener('DOMContentLoaded', () => {
    removeNote()
    saveNoteToLocalStorage()
    addHour()
    eachTodoNote = document.querySelectorAll(".each-todo-list-note-box")
    // todo save btn
    ToDosaveBtn = document.querySelectorAll(".todo-save-note-btn")
    // todo delete note btn
    ToDoDeleteBtnEl = document.querySelectorAll(".todo-delete-note-btn")
    // todo add note btn
    addTodoBtnEl = document.querySelector("#add-todo-note-btn")
    // gets localStorageItems
    ToDoLocalStorage = JSON.parse(localStorage.getItem('toDoKey'))
})
