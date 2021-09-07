function startBob(){
	
	document.querySelector('button').style.display = 'none';
	audioSource = undefined;
	
	const constraints = {
		audio: {deviceId: undefined}
	};
	
	var elem = document.getElementById("picture");
	var soundon = document.getElementById('soundon');
	
    getUserMedia(constraints)
        .then(stream=>{
            if(!stream) {
                return false;
            }
            let bob = new MediaStreamBobber(stream, elem, soundon, null, 2048, THRESHOLD, MULTIPLIER);
            bob.start();
        });
}
document.querySelector(".start").addEventListener("click",startBob);