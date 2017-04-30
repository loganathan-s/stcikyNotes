class Webcam {

	constructor(){
	
		this.video = document.querySelector('.player');
		this.canvas = document.querySelector('.photo');
		this.canvasContext = this.canvas.getContext("2d");
		this.strip = document.querySelector('.strip');
		this.snap = document.querySelector('.snap');
		this.photoButton = document.querySelector('#takePhoto');
		this.video.addEventListener("canplay", this.videoToCanvas.bind(this));
		this.photoButton.addEventListener("click", this.takePhoto.bind(this));	
	}

	captureVideo(){
		navigator.mediaDevices.getUserMedia({video: true, audio: false})
		.then(browserVideoStream => {
			this.video.src = window.URL.createObjectURL(browserVideoStream);
			return this.video.play();
		}).then(videoStream => {
			//return this.videoToCanvas();
		})
		.catch(err => alert(err));
	}
   
   videoToCanvas(){
   	//destructuring
   	[this.canvas.width, this.canvas.height]  = [this.video.videoWidth, this.video.videoHeight]
   	return setInterval(() => {
   	 	this.canvasContext.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
   	}, 16);
   	
   }

   takePhoto(){
	   	this.snap.currentTime = 0;
	   	this.snap.play();
	   	//Take Data from Canvas element
	   	const photo = this.canvas.toDataURL('image/jpeg');
		let imageLink = document.createElement('a');
	 	imageLink.href = photo;
	 	imageLink.setAttribute('download', 'capturedImage');
		imageLink.innerHTML = `<img src="${photo}" alt="hi"/>`;
	    this.strip.insertBefore(imageLink, this.strip.firstChild);
   }

}

video = new Webcam();
video.captureVideo();


