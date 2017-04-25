
class StickyNote {
	// Initialize the object property with noteForm
	constructor(){
		this.noteContainer = document.querySelector("#newNote");
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
		this.noteContainer.innerHTML = this.noteTemplate;
		this.userNote = document.querySelector("#userNote");
		this.saveButton = document.querySelector("#saveNote");
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
		let noteKey = new Date().getTime();
		let noteValue = this.userNote.value;
	}

	listNotes(){
		return `<sdiv class="mdl-cell--4-col-desktop mdl-card__supporting-text mdl-cell--12-col mdl-shadow--2dp mdl-cell--4-col-tablet mdl-card mdl-cell sticky-note">
		    <div class="message">{$note}</div>
		    <div class="date">Created on Apr 25</div>
		    <button class="delete mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Delete
			    <span class="mdl-button__ripple-container">
				    <span class="mdl-ripple">
				    </span>
			    </span>
		    </button>
		    </sticky-note>`
	}

	deleteNote(){

	}

}

export default StickyNote;