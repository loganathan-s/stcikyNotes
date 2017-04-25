
const userNote = () => document.querySelector("#userNote");
const saveButton = () => {
		let userNote = document.querySelector("#userNote");
		if (userNote.value){
			 document.querySelector("#saveNote").removeAttribute('disabled');
		}else{
			document.querySelector("#saveNote").setAttribute('disabled', 'true');
		}
    
	}
export {saveButton};