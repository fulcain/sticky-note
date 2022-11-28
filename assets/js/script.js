// grabing a hold of elements

// upcomming list whole note box
const upcomingNoteBoxEl = document.querySelector(".upcoming-list-note-box")
// add upcomming note btn
const addUpcommingBtnEL = document.querySelector("#add-upcomming-note-btn")
//upcoming save btn
const upcomingSaveBtn = document.querySelectorAll(".upcoming-save-note-btn")
//upcoming delete btn
const upcomingDeleteBtn = document.querySelectorAll(".upcoming-delete-note-btn")
// add todo note btn
const addTodoBtnEl = document.querySelector("#add-todo-note-btn")
// todo delete btn
const ToDoDeleteBtnEl = document.querySelectorAll(".todo-delete-note-btn")
// todo save btn
const ToDosaveBtn = document.querySelectorAll(".todo-save-note-btn")
// todo list whole note box
const toDoNoteBoxEl = document.querySelector(".todo-list-note-box")

const localStorageItems = JSON.parse(localStorage.getItem("notes"))

// adds new todo note
addTodoBtnEl.addEventListener("click", () => {
    colorChange()
    toDoNoteBoxEl.innerHTML += `
    <div class="each-todo-list-note-box each-note-box-styles" style="background-color:${colorChangeArr[colorChangeLoop]};">
        <p class="editing" contenteditable></p>
        <div class="note-attributes">
            <i class='bx bx-save icon-styles todo-save-note-btn'></i>
         <i class='bx bx-trash icon-styles todo-delete-note-btn'></i>
        </div>
    </div>
        `
})

//adds new upcomming note
addUpcommingBtnEL.addEventListener("click", () => {
    colorChange()
    upcomingNoteBoxEl.innerHTML += `
    <div class="each-upcoming-list-note-box each-note-box-styles" style="background-color:${colorChangeArr[colorChangeLoop]};">
        <p class="editing" contenteditable></p>
        <div class="note-attributes">
            <i class='bx bx-save icon-styles' id="save-note-btn"></i>
            <i class='bx bx-trash icon-styles' id="delete-note-btn"></i>
        </div>
    </div>
    `
})
// upcomingSaveBtn
let upcomingSaveBtnLoop = 0
let upcomingArr = []
upcomingSaveBtn.forEach(item =>{
    upcomingSaveBtnLoop += item
    upcomingSaveBtn[upcomingSaveBtnLoop].addEventListener("click", () =>{
        upcomingArr.push(upcomingNoteBoxEl.innerHTML)
        localStorage.setItem("upCommingItems" , JSON.stringify(upcomingArr))
    })
})
// takes random color from the array
let colorChangeArr = ['#ff7eb9', '#ff65a3', '#7afcff', '#feff9c', '#fff740']
let colorChangeLoop = 0
function colorChange() {
    colorChangeLoop = Math.floor(Math.random() * 5)
}