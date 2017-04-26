
class StickyNote {
	//
	//  the note object with required properties and settings
	//
	constructor(){
		this.noteContainer = document.querySelector("#newNote");
		this.allnotes = document.querySelector("#notes-section-title");
		this.newNoteClassList = ["mdl-card", "mdl-shadow--2dp", "mdl-cell"];

		//Attach Class and add element to window
		this.noteContainer.classList.add(...this.newNoteClassList) //Spread method
		this.allnotes.classList.add(...this.newNoteClassList) //Spread method
		this.noteContainer.insertAdjacentHTML('afterbegin',  this.constructor.newNoteTemplate());
		this.userNote = document.querySelector("#userNote");
		this.saveButton = document.querySelector("#saveNote");
		//this.date = (new Date()).toString().split(' ').splice(1,3).join(' ');
	}

	//
	//Attach EventListener to elements
	//
	init(){
		this.userNote.addEventListener('keyup', this.toggleSaveButton.bind(this), true);
		this.saveButton.addEventListener("click", this.createNote.bind(this), true);
		this.displayAllNotes();

	}

	//
	//Disable or Enable Add button based on user input
	//
	toggleSaveButton(){
		if (this.userNote.value){
			this.saveButton.removeAttribute('disabled');
		}else{
			this.saveButton.setAttribute('disabled', 'true');
		}
    
	}

	//
	//Store User Note in to LocalStorage
	//
	createNote(){
		if (localStorage) {
		  let noteKey = new Date().getTime();
		  let noteValue = this.userNote.value;	
		  localStorage.setItem(noteKey, noteValue);
		  this.resetnoteTemplate();
		  this.listNotes(noteKey, noteValue);
		}else{
		  alert("localStorage Not present");
		}
	}

	//
	//Display the User Notes in a list
	//
	listNotes(key, value){
		    this.allnotes.insertAdjacentHTML('beforeend', this.constructor.userNoteTemplate(key, value))
		   document.querySelector(`#note-${key}`).addEventListener("click", this.deleteNote);
	}

	//
	//delete usernote from local storage and
	//
	deleteNote(){;
	   const noteKey = this.id.match(/\d+/g);
       localStorage.removeItem(noteKey);
       this.parentNode.remove();
	}

	//
	//Clear text area after creating the note
	//
	resetnoteTemplate(){
	 this.userNote.value = "";
	}

	//
	//Display existing notes while loading the page
	//
	 displayAllNotes(){
	 	var self = this;
		if (localStorage.length > 0){
		  let notes =  Object.keys(localStorage);
		  	notes.forEach(function(key) {
		  		const value = localStorage.getItem(`${key}`)
		  		self.listNotes(key, value);
		  	})
		}
	}

	//
	//STATIC METHODS. These methods can be invoked only by class names
	//

	static newNoteTemplate(){
		return `  <div>
			        <div class="mdl-card__title mdl-color--blue-grey-200">
			          <h2 class="mdl-card__title-text">Add new note</h2>
			        </div>
			        <div class="mdl-card__supporting-text mdl-color-text--grey-600">
			            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			              <textarea class="mdl-textfield__input" rows= "3" id="userNote"></textarea>
			              <label class="mdl-textfield__label" for="message">Message text...</label>
			            </div>
			            <button id="saveNote" disabled class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--color">
			              Add
			            </button>
			        </div>
			      </div>`	
	}

	static userNoteTemplate(noteId, note){
		return `<div class="mdl-cell--4-col-desktop mdl-card__supporting-text mdl-cell--12-col mdl-shadow--2dp mdl-cell--4-col-tablet mdl-card mdl-cell sticky-note">
		    <div class="message">${note}</div>
		    <div class="date">Created on ${this.today()}</div>
		    <button id=note-${noteId} class="delete mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Delete
			    <span class="mdl-button__ripple-container">
				    <span class="mdl-ripple">
				    </span>
			    </span>
		    </button>
		    </div>`
	}

	static today() {
		return (new Date()).toString().split(' ').splice(1,3).join(' ')
	};


}


export default StickyNote;