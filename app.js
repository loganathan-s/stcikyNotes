import StickyNote from './note';

class StickyNoteApp extends StickyNote{
	init(){
	 super.init();
	}

}

window.addEventListener('load', function() {
 const noteApp = new StickyNote();
 noteApp.init();
});