// ----------------------------------------- variables START -----------------------------------------

// whole note box
let noteBoxEl = document.querySelector(".note-box"),

    // all notes
    eachNote = document.querySelectorAll(".each-note-box"),

    // save btn
    saveBtn = document.querySelectorAll(".save-note-btn"),

    // delete note btn
    deleteBtn = document.querySelectorAll(".delete-note-btn"),

    // add note btn
    addNoteBtn = document.querySelector("#add-note-btn"),

    // array that contains all elements
    noteListAraay = [],

    // gets localStorageItems
    noteLocalStorage = JSON.parse(localStorage.getItem('notes'))

// ----------------------------------------- variables END -----------------------------------------

// ----------------------------------------- functions and gerenal code START -----------------------------------------

// loads from localStorage
if (noteLocalStorage) {
    noteBoxEl.innerHTML = noteLocalStorage
}

// add new note function
function addNote() {
    // creates the noteBox div
    let eachNoteBox = document.createElement('div')
    // adds class names to the noteBox div
    eachNoteBox.classList.add('each-note-box-styles', 'each-note-box')
    // adds an attribute to the noteBox div
    eachNoteBox.setAttribute('style', `background:${colorValue};`)

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
    hrline.setAttribute("style", 'border: 1px solid rgb(0, 0, 0);')
    hrline.setAttribute("width", '100%')
    noteAttributeDiv.appendChild(hrline)

    // creates btns box el
    let btnBox = document.createElement("div")
    btnBox.classList.add('button-box')
    // adds the btns box el to noteAttributeDiv
    noteAttributeDiv.appendChild(btnBox)

    // creates saveBtn(i) element
    let saveEl = document.createElement('i')
    saveEl.classList.add("bx", "bx-save", "bx-save", 'save-note-btn')
    // adds the saveBtn(i) to noteAttributeDiv
    btnBox.appendChild(saveEl)
    // creates deleteBtn(i) element
    let trashEl = document.createElement('i')
    trashEl.classList.add("bx", "bx-trash", "icon-styles", 'delete-note-btn')
    // adds the deleteBtn(i)i element to the noteAttributeDiv
    btnBox.appendChild(trashEl)

    // adds the noteBox to the whole noteBox
    noteBoxEl.appendChild(eachNoteBox)
}

// changes the title 
let TitleEL = document.querySelector('title')
function ChangeTitles(titleText) {
    function timOut() {
        setTimeout(resetTheTitle, 2000)
    }
    function resetTheTitle() {
        TitleEL.innerHTML = 'Sticky Notes'
    }
    timOut()
    resetTheTitle()
    TitleEL.innerHTML = titleText
}

// remove note function
function removeNote() {
    
    // updates both btns and notes
    deleteBtn = document.querySelectorAll('.delete-note-btn')

    // loops throw the nodelist
    deleteBtn.forEach(item => {
        item.addEventListener("dblclick", () => {
            removeNoteProcess()
        })

        // remove note and change title
        function removeNoteProcess() {
            item.parentElement.parentElement.parentElement.remove()
            noteListAraay = noteBoxEl.innerHTML
            localStorage.setItem("notes", JSON.stringify(noteListAraay))
            ChangeTitles('------ Note Deleted! ------')
        }
    })
}

// save notes function
function saveNote() {

    // updates both btns and notes
    saveBtn = document.querySelectorAll(".save-note-btn")
    eachNote = document.querySelectorAll(".note-box")

    // loops throw save buttons
    for (let i = 0; i < saveBtn.length; i++) {

        // save on keydown
        document.addEventListener("keydown", (e) => {
            if (e.key === "=") {
                saveNoteProcess()
            }
        })

        // save on click
        saveBtn[i].addEventListener("click", () => {
            saveNoteProcess()
        })

        // save note and change title
        function saveNoteProcess() {
            noteListAraay = saveBtn[i].parentElement.parentElement.parentElement.parentElement.innerHTML
            ChangeTitles('----- Note Saved! -----')
            localStorage.setItem("notes", JSON.stringify(noteListAraay))
        }
    }
}

// gets hour and date
let currentTime = ''
function addHour() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let hourEl = new Date()
    currentTime = `${hourEl.getHours()}:${hourEl.getMinutes()} / ${months[hourEl.getMonth()]} ${hourEl.getDay()},${hourEl.getFullYear()}`
}

// takes random color from the array
let colorValue = 0
function colorChange() {
    colorValue = `#${Math.random().toString(16).slice(-6)}`;

}

// ----------------------------------------- functions and gerenal code END -----------------------------------------

// ----------------------------------------- add note START -----------------------------------------

// adds new note
addNoteBtn.addEventListener("click", () => {
    colorChange(), addNote(), removeNote(), saveNote(), addHour()
    ChangeTitles('------ Note Added! ------')
})

// ----------------------------------------- add note END -----------------------------------------

// loads functions on page reload
document.addEventListener('DOMContentLoaded', () => {
    removeNote()
    saveNote()
    addHour()
    eachNote = document.querySelectorAll(".each-note-box")
    // save note button
    saveBtn = document.querySelectorAll(".save-note-btn")
    //  delete note button
    deleteBtn = document.querySelectorAll(".delete-note-btn")
    // todo add note button
    addNoteBtn = document.querySelector("#add-note-btn")
})
