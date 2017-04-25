
class StickyNote {
	// Initialize the object property with noteForm
	constructor(){
		this.noteContainer = document.querySelector("#newNote");
		this.allnotes = document.querySelector("#notes-section-title");
		this.noteTemplate = `  <div>
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
			      </div>
	 `	
		this.newNoteClassList = ["mdl-card", "mdl-shadow--2dp", "mdl-cell"];

		//Attach Class and add element to window
		this.noteContainer.classList.add(...this.newNoteClassList)
		this.allnotes.classList.add(...this.newNoteClassList)
		this.noteContainer.innerHTML = this.noteTemplate;
		this.userNote = document.querySelector("#userNote");
		this.saveButton = document.querySelector("#saveNote");
		this.date = (new Date()).toString().split(' ').splice(1,3).join(' ');
	}

	//Initialize elements with listeners
	init(){
		this.userNote.addEventListener('keyup', this.toggleSaveButton.bind(this), true);
		this.saveButton.addEventListener("click", this.createNote.bind(this), true);
	
	}

	//Disable or Enable Add button based on user input
	toggleSaveButton(){
		if (this.userNote.value){
			this.saveButton.removeAttribute('disabled');
		}else{
			this.saveButton.setAttribute('disabled', 'true');
		}
    
	}

	createNote(){
		if (localStorage) {
		  let noteKey = new Date().getTime();
		  let noteValue = this.userNote.value;	
		  localStorage.setItem(noteKey, noteValue);
		  this.resetnoteTemplate();
		  this.listNote(noteKey, noteValue);
		}else{
		  alert("localStorage Not present");
		}
	}

	listNote(key, value){
		let note = `<div class="mdl-cell--4-col-desktop mdl-card__supporting-text mdl-cell--12-col mdl-shadow--2dp mdl-cell--4-col-tablet mdl-card mdl-cell sticky-note">
		    <div class="message">${value}</div>
		    <div class="date">Created on ${this.date}</div>
		    <button id=note-${key} class="delete mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Delete
			    <span class="mdl-button__ripple-container">
				    <span class="mdl-ripple">
				    </span>
			    </span>
		    </button>
		    </div>`
		    this.allnotes.innerHTML += note;
		    document.querySelector(`#note-${key}`).addEventListener("click", this.deleteNote);
	}

	deleteNote(){
     localStorage.removeItem(this.id);
     this.parentNode.remove();
	}

	//Clear text area after creating the note
	resetnoteTemplate(){
	 this.userNote.value = "";
	}

}

export default StickyNote;