// ----------------------------------------- variables START -----------------------------------------

// whole note box
let noteBoxEl = document.querySelector(".note-box"),
	// all notes
	eachNote = document.querySelectorAll(".each-note-box"),
	// delete note btn
	deleteBtn = document.querySelectorAll(".delete-note-btn"),
	// add note btn
	addNoteBtn = document.querySelector("#add-note-btn"),
	// gets localStorageItems
	noteLocalStorage = JSON.parse(localStorage.getItem("notes")),
	// delete all button
	deleteAllButton = document.querySelector("#delete-all-notes-btn"),
	// delete all confirmation box
	deleteAllConfirmation = document.querySelector("#delete-all-confirmation"),
	// delete all confirmation yes
	deleteAllYes = document.querySelector("#delete-yes"),
	// delete all confirmation no
	deleteAllNo = document.querySelector("#delete-no"),
	// title element
	TitleEL = document.querySelector("title");

// ----------------------------------------- variables END -----------------------------------------

// ----------------------------------------- functions and general code START -----------------------------------------

// functions

// loads from localStorage
// puts the items from localStorage in the noteBoxEl variable
if (noteLocalStorage) {
	noteBoxEl.innerHTML = noteLocalStorage;
}

// TITLE: Note Template function
// returns a note element that containing some other elements which makes a note box element
// has two varibles used from following functions:
// addHour(): currentTime
// colorChange(): colorValue
function noteTemplate() {
	return `
    <div class="each-note-box-styles each-note-box" style="background:${colorValue};">
        <p contenteditable="true" class="editing"></p>
        <div class="note-attributes">
            <p class="added-hour-and-date">${currentTime}</p>
            <hr style="border: 1px solid rgb(0, 0, 0);" width="100%">
            <div class="button-box">
                <i class="bx bx-save icon-styles save-note-btn"></i>
                <i class="bx bx-trash icon-styles delete-note-btn"></i>
            </div>
         </div>
    </div>
                `;
}

// TITLE: change title on events
// changes the title based on argument given to titleText parameter
// sets timeout on reseting title back to normal after 2 seconds
function ChangeTitles(titleText) {
	TitleEL.innerHTML = titleText;

	setTimeout(() => {
		TitleEL.innerHTML = "Sticky Notes";
	}, 2000);
}

// TITLE: remove note function
// loops throw deleteBtn element
// removes each noteBox on deleteBtn element's double click
// saves the result to localStorage
// calls the ChangeTitles function to change title based on given argument
function removeNote() {
	// updates both btns and notes
	deleteBtn = document.querySelectorAll(".delete-note-btn");

	// loops throw the nodeList
	deleteBtn.forEach((item) => {
		item.addEventListener("dblclick", () => {
			// Removes the note
			item.closest(".each-note-box").remove();

			// Saves the note List to localStorage
			saveToLocalStorage();

			// Changes the title
			// TODO: replace with silverBox
			ChangeTitles("------ Note Deleted! ------");
		});
	});
}

// TITLE: save note function
// loops throw saveBtn element
// saves each notebox on saveBtn element's click
// saves each notebox on any mouse click on window
// saves on keyboard keys click
// saves the result to localStorage
// calls the ChangeTitles function to change title based on given argument
function saveNote() {
	// updates both btns and notes
	const saveBtn = document.querySelectorAll(".save-note-btn");
	eachNote = document.querySelectorAll(".note-box");

	// saves on keyboard keys click
	document.addEventListener("keypress", (e) => {
		if ((e.key = e.key)) {
			saveToLocalStorage();
		}
	});
	// loops throw save buttons
	for (let i = 0; i < saveBtn.length; i++) {
		// save on mouse click
		window.addEventListener("click", (e) => {
			if (
				e.button == 0 ||
				e.button == 1 ||
				e.button == 2 ||
				e.button == 3 ||
				e.button == 4
			) {
				saveToLocalStorage();
			}
		});

		// save on saveBtn click
		saveBtn[i].addEventListener("click", () => {
			saveNoteProcess();
		});

		// save note and change title
		function saveNoteProcess() {
			saveToLocalStorage();
			ChangeTitles("----- Note Saved! -----");
		}
	}
}

// TITLE: save notes to localStorage
// puts the noteBoxEl into an array
// saves the array into a key in localStorage
function saveToLocalStorage() {
	let = noteList = noteBoxEl.innerHTML;
	localStorage.setItem("notes", JSON.stringify(noteList));
}

// TITLE: hour and date function
// grabs hour and date from Date object
// puts hour / minute / month / day / year into currentTime variable
// grabs the date and put them into moths array as an index to replace the int to month name
let currentTime = "";
function addHour() {
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	let hourEl = new Date();
	currentTime = `${hourEl.getHours()}:${hourEl.getMinutes()} / ${
		months[hourEl.getMonth()]
	} ${hourEl.getDay()},${hourEl.getFullYear()}`;
}

// TITLE: random color array
// puts a random color into coloValue variable
let colorValue = 0;
function colorChange() {
	colorValue = `#${Math.random().toString(16).slice(-6)}`;
}

// general code

// updates the style
deleteAllConfirmation.style.display = "none";
// toggle deleteAllConfirmation variable
// if you click yes it clears the noteBoxEl innerhtml and saves it to localStorage and sets the display to none
// if you click no it sets the display to none
deleteAllButton.addEventListener("click", () => {
	if (deleteAllConfirmation.style.display == "none") {
		deleteAllConfirmation.style.display = "flex";
	} else {
		deleteAllConfirmation.style.display = "none";
	}
	deleteAllYes.addEventListener("dblclick", () => {
		noteBoxEl.innerHTML = "";
		saveToLocalStorage();
		deleteAllConfirmation.style.display = "none";
	});
	deleteAllNo.addEventListener("click", () => {
		deleteAllConfirmation.style.display = "none";
	});
});

// ----------------------------------------- functions and general code END -----------------------------------------

// ----------------------------------------- add note START -----------------------------------------

// adds new note
addNoteBtn.addEventListener("click", () => {
	colorChange(), removeNote(), saveNote(), addHour(), saveToLocalStorage();
	ChangeTitles("------ Note Added! ------");
	// Adds new note by calling the noteTemplate function
	noteBoxEl.insertAdjacentHTML("afterbegin", noteTemplate());
});

// ----------------------------------------- add note END -----------------------------------------

// loads functions on page reload
document.addEventListener("DOMContentLoaded", () => {
	removeNote();
	saveNote();
	addHour();
	eachNote = document.querySelectorAll(".each-note-box");
	//  delete note button
	deleteBtn = document.querySelectorAll(".delete-note-btn");
	addNoteBtn = document.querySelector("#add-note-btn");
});

//
