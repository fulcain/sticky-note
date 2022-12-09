
// ----------------------------------------- general START -----------------------------------------
// add new note function
function addNote(boxEl, classes, deleteBtnName,eachHourElementId) {
    boxEl.innerHTML += `
    <div class="each-note-box-styles ${classes}" style="background-color:${colorChangeArr[colorChangeLoop]};">
        <p class="editing" contenteditable></p>
        <div class="note-attributes">
        <i class='bx bx-trash icon-styles ${deleteBtnName}'></i>
        <p id="${eachHourElementId}"></p>
        </div>
        </div>`
        addHour(upcomingHour)
}

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
function removeNote(removeBtnName, removeNoteCategory, deleteBtnClassName, eachNoteName) {
    // updates both btns and notes
    removeBtnName = document.querySelectorAll(deleteBtnClassName)
    removeNoteCategory = document.querySelectorAll(eachNoteName)
    // loops throw the nodelist

    for (let i = 0; i < removeBtnName.length; i++) {
        removeBtnName[i].addEventListener("dblclick", () => {
            removeNoteCategory[i].remove()
            ChangeTitles('---------- Note Deleted! ----------')
        })

    }
}
function loadItems() {
    ToDoDeleteBtnEl = document.querySelectorAll('.todo-delete-note-btn')
}
// save notes to their own array and localStorage key
function saveNoteToLocalStorage(saveBtName, NoteCategory, saveBtnClassName, wholeListName, arrayName, keyName) {
    // updates both btns and notes
    saveBtName = document.querySelectorAll(saveBtnClassName)
    NoteCategory = document.querySelectorAll(wholeListName)
    // loops throw the nodelist
    saveBtName.forEach(item => {
        item.addEventListener("click", () => {
            NoteCategory.forEach(item => {
                arrayName += item.innerHTML
            })
            ChangeTitles('---------- Note Saved! ----------')
            localStorage.setItem(keyName, JSON.stringify(arrayName))
        })
    })

}


//loads from localStorage to InnerHtml
function loadFromLocalStorageToInnerHtml(localStorageName, noteBoxElement, noteBoxClassName) {
    if (localStorageName) {
        noteBoxElement.innerHTML += localStorageName
    }
}
// takes random color from the array
let colorChangeArr = ['#ff7eb9', '#ff65a3', '#7afcff', '#feff9c', '#fff740', '#2B3A55', '#CE7777', '#E8C4C4']
let colorChangeLoop = 0
function colorChange() {
    colorChangeLoop = Math.floor(Math.random() * 8)
}

// // show / hide list items
// function toggleEl(toggleElement, toggleBtn, hintEl) {
//     toggleBtn.addEventListener("click", () => {
//         if (toggleElement.style.visibility == "hidden") {
//             toggleElement.style.visibility = "visible"
//             toggleBtn.style.color = 'red'
//             hintEl.innerHTML = 'Status: Visible'
//         } else {
//             toggleElement.style.visibility = "hidden"
//             hintEl.innerHTML = 'Status: Hidden'
//             toggleBtn.style.color = 'rgb(174, 174, 128)'
//         }
//     })
// }

// gets hour and put it in an element
let hourEl = new Date()
function addHour() {
    todoHour.innerHTML = hourEl.getHours() + ":" + hourEl.getMinutes()
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
    ToDoLocalStorage = JSON.parse(localStorage.getItem('toDoKey')),
    // to do hour
    todoHour = document.querySelector('#todo-hour')



// adds new todo note
addTodoBtnEl.addEventListener("click", () => {
    colorChange()
    addNote(toDoNoteBoxEl, 'each-todo-list-note-box', 'todo-delete-note-btn',todoHour)
    removeNote(ToDoDeleteBtnEl, eachTodoNote, '.todo-delete-note-btn', '.each-todo-list-note-box')
    saveNoteToLocalStorage(ToDosaveBtn, toDoNoteBoxEl, ".todo-save-note-btn", ".todo-list-note-box", ToDoListArray, "toDoKey")
    ChangeTitles('---------- Note Added! ----------')
    addHour()
    todoHour.innerHTML = hourEl.getHours() + ":" + hourEl.getMinutes()

})
toggleEl(toDoNoteBoxEl, toDoToggleEl, todoHint);
loadFromLocalStorageToInnerHtml(ToDoLocalStorage, toDoNoteBoxEl)

// ----------------------------------------- todo list END -----------------------------------------

// ----------------------------------------- Upcomming list START -----------------------------------------

// all variables used in Upcomming list

// upcomming list whole note box
let upcomingNoteBoxEl = document.querySelector(".upcoming-list-note-box"),
    // all upcomming notes
    eachUpComingNote = document.querySelectorAll(".each-upcoming-list-note-box"),
    // upcoming save note btn
    upcomingSaveBtn = document.querySelectorAll(".upcoming-save-note-btn"),
    //upcoming delete note btn
    upcomingDeleteBtn = document.querySelectorAll(".upcoming-delete-note-btn"),
    // add upcomming note btn
    addUpcommingBtnEL = document.querySelector("#add-upcomming-note-btn"),
    // save upcoming array
    upcomingArray = [],
    // upcoming LocalStorage
    upcomingLocalStorage = JSON.parse(localStorage.getItem('upcomingKey')),
    // upcoming hour
    upcomingHour = document.querySelector('#upcoming-hour')


//adds new upcomming note
addUpcommingBtnEL.addEventListener("click", () => {
    colorChange()
    addNote(upcomingNoteBoxEl, 'each-upcoming-list-note-box', 'upcoming-delete-note-btn')
    removeNote(upcomingDeleteBtn, eachUpComingNote, '.upcoming-delete-note-btn', '.each-upcoming-list-note-box')
    saveNoteToLocalStorage(upcomingSaveBtn, upcomingNoteBoxEl, ".upcoming-save-note-btn", ".upcoming-list-note-box", upcomingArray, 'upcomingKey')
    ChangeTitles('---------- Note Added! ----------')
})
toggleEl(upcomingNoteBoxEl, upcomingToggleEl, upcomingHint);
loadFromLocalStorageToInnerHtml(upcomingLocalStorage, upcomingNoteBoxEl)
// ----------------------------------------- Upcomming list END -----------------------------------------



// temporary localStorage clear
const LocalStorageClear = document.querySelector("#ClearLocalStorage")
LocalStorageClear.addEventListener("dblclick", () => {
    localStorage.clear()
})

