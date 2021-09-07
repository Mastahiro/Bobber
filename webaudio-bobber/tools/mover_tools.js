function _moveImg(data,elem,soundon,threshold = 2,multiplier=1){
	//let isEmptyData = true
    //ctx.beginPath();
	var sum = 0;
    for(let i=0; i < data.length; i++){
		sum+=data[i]
    }
	sum/=data.length; // If you wanna use a better formula for this, feel free. Currently it makes lower pitches move the icon more than higher pitches
	
	// Make the strokes next to the character appear on a certain threshold
	if(sum<=threshold) soundon.style.display = 'none';
		else soundon.style.display = 'inline';
		
	sum*=multiplier;
	elem.style.marginBottom = sum + 'px';
}