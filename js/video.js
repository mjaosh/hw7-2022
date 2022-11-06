var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false; 

	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	video.play()
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down video");
	video.playbackRate *= 0.9
	console.log(video.playbackRate * 100)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed up video");
	video.playbackRate *= 1.10
	console.log(video.playbackRate * 100)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip video");
	video.currentTime += 10

	if (video.currentTime >= 67.4033){
		video.currentTime = 0
	}

	console.log(video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
		document.querySelector("#volume").innerHTML = (video.volume * 100) + '%'
		document.querySelector("#slider").value = volume * 100


	} else {
		console.log("mute Video");
		volume = video.volume
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
		document.querySelector("#volume").innerHTML = 0 + '%'
		document.querySelector("#slider").value = 0
	} 
	console.log(video.volume * 100)

});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = (this.value / 100) 
	document.querySelector("#volume").innerHTML = (video.volume * 100) + '%'
	console.log(video.volume * 100)
});  

document.querySelector("#vintage").addEventListener("click", function() {
	if (document.querySelector("#player1").className == "oldSchool") {
		document.querySelector("#player1").className = "video"
	}else{
		document.querySelector("video").className = "oldSchool"
	} 

}); 


