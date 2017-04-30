class Webcam {

	constructor(){
		this.video = document.querySelector('.player');
		this.canvas = document.querySelector('.photo');
		this.canvasContext = this.canvas.getContext("2d");
		this.strip = document.querySelector('.strip');
		this.snap = document.querySelector('.snap');
		this.video.addEventListener("canplay", this.videoToCanvas());

	}

	captureVideo(){
		navigator.mediaDevices.getUserMedia({video: true, audio: false})
		.then(browserVideoStream => {
			console.log(browserVideoStream);
			this.video.src = window.URL.createObjectURL(browserVideoStream);
			return this.video.play();
		}).then(video => {
			return this.videoToCanvas();
		})
		.catch(err => alert(err));
	}
   
   videoToCanvas(){
   	//destructuring
   	[this.canvas.width, this.canvas.height]  = [this.video.videoWidth, this.video.videoHeight]
   	setInterval(() => {
   	 	this.canvasContext.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
   	}, 16);
   	
   }

   takePhoto(){
   	this.snap.currentTime = 0;
   	this.snap.play();
   }

}

video = new Webcam();
video.captureVideo();
