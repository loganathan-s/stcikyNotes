import StickyNote from './note';

class StickyNoteApp extends StickyNote{
	constructor(){
	  super();	
	}

	init(){
	 super.init();
	 //localStorage.clear();	
	}

}

window.addEventListener('load', function() {

 const noteApp = new StickyNote();
 noteApp.init();
});