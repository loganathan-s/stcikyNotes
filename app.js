import StickyNote from './note';

class StickyNoteApp extends StickyNote{
	constructor(){
	  super();	
	}

	init(){
	 super.init();
	}

}

window.addEventListener('load', function() {

 const noteApp = new StickyNote();
 noteApp.init();
});