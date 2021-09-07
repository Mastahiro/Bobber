function keychecker(e) {
	if(USEDICTIONARY){
		// Change the shift/alt/ctrl keys to suit your needs :)
		if(e.shiftKey && e.key in BOTTOMLAYER) loadImage(BOTTOMLAYER[e.key], BOTTOMLAYERID);
		if(e.altKey && e.key in MIDLAYER) loadImage(MIDLAYER[e.key], MIDLAYERID);
		if(e.ctrlKey && e.key in OVERLAYS) loadImage(OVERLAYS[e.key], OVERLAYID);
		if(!(e.shiftKey || e.ctrlKey || e.altKey) && e.key in DICTIONARY) loadImage(DICTIONARY[e.key], ELEMENTID);
		if(e.key == REMOVEALL) unloadOverlays();
	} else {
		loadImageByLetter(e.key);
	}
};

function unloadOverlays(){
	loadImage('NONE', OVERLAYID);
	loadImage('NONE', MIDLAYERID);
	loadImage('NONE', BOTTOMLAYER);
}

function loadImage(fileName, ID){
	if(fileName == 'NONE'){
		document.getElementById(ID).style.display = 'none';
	} else {
		document.getElementById(ID).src = IMAGEFOLDER+fileName;
		document.getElementById(ID).style.display = '';
	}
}

function loadImageByLetter(letter){
	loadImage(letter+'.png', ELEMENTID);
}

function load0Image(){
	console.log("Couldn't find an image, defaulting to "+DEFAULTLETTER+".png");
	loadImageByLetter(DEFAULTLETTER);
}