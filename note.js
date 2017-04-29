import News from "./news";

class StickyNote extends News{
	//
	//  the note object with required properties and settings
	//
	constructor(){
		super();
		this.noteContainer = document.querySelector("#notes-container");
		this.allnotes = document.querySelector("#notes-section-title");
		this.allnews = document.querySelector("#news-section");
		this.newNoteClassList = ["mdl-card", "mdl-shadow--2dp", "mdl-cell"];

		//Attach Class and add element to window
		//this.noteContainer.classList.add(...this.newNoteClassList) //Spread method
		this.allnotes.classList.add(...this.newNoteClassList) //Spread method
		this.noteContainer.insertAdjacentHTML('afterbegin',  this.constructor.noteCountTemplate());
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
		this.totalNotes();
        this.displayNews();

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
		  this.totalNotes();
		  this.saveButton.setAttribute('disabled', 'true');
		}else{
		  alert("localStorage Not present");
		}
	}

	//
	//Display the User Notes in a list
	//
	listNotes(key, value, newsPublishedAt = false){
		   if (newsPublishedAt) {
				this.allnews.insertAdjacentHTML('afterbegin', this.constructor.userNoteTemplate(key, value, newsPublishedAt));
		   }else{
			   	this.allnotes.insertAdjacentHTML('beforeend', this.constructor.userNoteTemplate(key, value));
			    document.querySelector(`#note-${key}`).addEventListener("click", this.deleteNote.bind(this));
		   }
          this.totalNotes();
		    
	}


	//
	//delete usernote from local storage and
	//
	deleteNote(event){
		let element = event.currentTarget;
	    const noteKey = element.id.match(/\d+/g);
        localStorage.removeItem(noteKey);
        this.totalNotes();
        element.parentNode.remove();
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
	 // Display News
	 //	

	displayNews(){
	 	var self = this;
	 	super.topNews().then(function(bbcNews) {
	 		console.table(bbcNews);
	 		bbcNews.forEach(news => {
	 			let date = news.publishedAt ? news.publishedAt : new Date()
	 			let key = new Date(date);
	 			let note = `<a target="_blank" href='${news.url}'>${news.description}</a>`
	 			return self.listNotes(key.getTime(), note, date);
	 		});
   		 })
	 	.catch((err) => {
   		 	 console.log(err);
	     });
	 	
	 }


	totalNotes(){
		document.querySelector("#totalNotes").textContent = `${localStorage.length} Notes!`;
	}
	//
	//STATIC METHODS. These methods can be invoked only by class names
	//

	static newNoteTemplate(){
		return `  <div class="mdl-card mdl-shadow--2dp mdl-cell">
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

	static noteCountTemplate(count){
		return `<div class="mdl-card mdl-shadow--2dp mdl-cell">
			        <div class="mdl-card__title mdl-color--blue-grey-200">
			          <h2 class="mdl-card__title-text">Your Total Notes</h2>
			        </div>
			        <div class="mdl-card__title " >
			          <span id="totalNotes"></span>
			        </div>
			      </div>`
	}

    static userNoteTemplate(noteId, note, date = false){
        let noteColor = `#${(Math.random()*0xFFFFFF<<0).toString(16)}`;

        let deleteButton =  `<button id=note-${noteId} class="delete mdl-button mdl-js-button mdl-js-ripple-effect" data-upgraded=",MaterialButton,MaterialRipple">Delete
            <span class="mdl-button__ripple-container">
                <span class="mdl-ripple">
                </span>
            </span>
        </button>`
                return `
                <div class="mdl-card mdl-shadow--2dp mdl-cell">
            <div class="mdl-card__title" style="background-color: ${noteColor}">
                <h2 class="mdl-card__title-text">${note}</h2>
            </div>
            <div class="mdl-card__title card-panel">
            </div><div class="date mdl-cell--2-col-tablet ">
                <b>${!date ? 'Created on' : 'Published Date'}</b> 
                ${this.createdPublishedDates(date)}
                </div>
        ${date ? '' : deleteButton}
        </div>`

    }


static createdPublishedDates(date = false) {
	   return (date ? new Date() : new Date(date)).toString().split(' ').splice(1,3).join(' ');
	};


}


export default StickyNote;