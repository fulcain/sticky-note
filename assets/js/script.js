//upcoming save btn
const upcomingSaveBtn = document.querySelectorAll(".upcoming-save-note-btn")



// todo save btn
const ToDosaveBtn = document.querySelectorAll(".todo-save-note-btn")
const allNotes = document.querySelectorAll('.each-note-box-styles')



// ----------------------------------------- general START -----------------------------------------

// add new note function
function addNote(boxEl, classes, saveBtnName, deleteBtnName) {
    boxEl.innerHTML += `
    <div class="each-note-box-styles ${classes}" style="background-color:${colorChangeArr[colorChangeLoop]};">
        <p class="editing" contenteditable></p>
        <div class="note-attributes">
        <i class='bx bx-save icon-styles ${saveBtnName}'></i>
        <i class='bx bx-trash icon-styles ${deleteBtnName}'></i>
        </div>
        </div>`
}

// remove note function
function removeNote(btnName, NoteCategory,deleteBtnName,eachNoteName) {
    //updates both btns and notes
    btnName = document.querySelectorAll(deleteBtnName)
    NoteCategory = document.querySelectorAll(eachNoteName)

    for (let i = 0; i < btnName.length; i++) {

        btnName[i].addEventListener("dblclick", () => {
            NoteCategory[i].style.display = 'none'
        })
    }
}

// takes random color from the array
let colorChangeArr = ['#ff7eb9', '#ff65a3', '#7afcff', '#feff9c', '#fff740']
let colorChangeLoop = 0
function colorChange() {
    colorChangeLoop = Math.floor(Math.random() * 5)
}

// ----------------------------------------- general END -----------------------------------------

// ----------------------------------------- todo list START -----------------------------------------

// all variables used in todo list

let ToDoDeleteBtnEl = document.querySelectorAll(".todo-delete-note-btn")
// all todo notes
let eachTodoNote = document.querySelectorAll(".each-todo-list-note-box")
// add todo note btn
const addTodoBtnEl = document.querySelector("#add-todo-note-btn")
// todo list whole note box
const toDoNoteBoxEl = document.querySelector(".todo-list-note-box")
// todo delete btn

// adds new todo note
addTodoBtnEl.addEventListener("click", () => {
    colorChange()
    addNote(toDoNoteBoxEl, 'each-todo-list-note-box', 'todo-save-note-btn', 'todo-delete-note-btn')
    removeNote(ToDoDeleteBtnEl, eachTodoNote,'.todo-delete-note-btn','.each-todo-list-note-box')
})

// ----------------------------------------- todo list END -----------------------------------------

// ----------------------------------------- Upcomming list START -----------------------------------------

// all variables used in Upcomming list

// all upcomming notes
let eachUpComingNote = document.querySelectorAll(".each-upcoming-list-note-box")
//upcoming delete btn
let upcomingDeleteBtn = document.querySelectorAll(".upcoming-delete-note-btn")
// add upcomming note btn
const addUpcommingBtnEL = document.querySelector("#add-upcomming-note-btn")
// upcomming list whole note box
const upcomingNoteBoxEl = document.querySelector(".upcoming-list-note-box")

//adds new upcomming note
addUpcommingBtnEL.addEventListener("click", () => {
    colorChange()
    addNote(upcomingNoteBoxEl, 'each-upcoming-list-note-box', 'upcoming-save-note-btn', 'upcoming-delete-note-btn')
    removeNote(upcomingDeleteBtn, eachUpComingNote,'.upcoming-delete-note-btn','.each-upcoming-list-note-box')
    
})


// ----------------------------------------- Upcomming list END -----------------------------------------

