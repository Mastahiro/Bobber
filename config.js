const THRESHOLD = 7;	//"Volume" theshold after which the bars next to the character appear
const MULTIPLIER = 0.7;	//Multiplies the movement by this ammount.


// If you use the disconary, you have to set the keybinds and related images below.
// If you don't use the dictionary, it'll try to find the <keypress>.png file to set, and default to <defaultletter>.png if it fails.
const USEDICTIONARY = true;
const DEFAULTLETTER = '0'; //For no dictionary

// BASE ICON BOTTOM-MOST LAYER
const DICTIONARY = {
	'0':'0.png',
	'\\':'mastaSmug2.png',
	'1':'mastaSmug.png',
	'2':'mastaLaugh.png',
	'q':'mastaShocked.png',
	'a':'mastaPout.png',
}

// Layers are ordered by the order in which they appear
// Change with SHIFT+Key (NOTE: if you want Shift+1, you HAVE to call it '!' or whatever you'd write with SHIFT+1 on your keyboard)
// You can change the keys for this in keychecker
const BOTTOMLAYER = {
	'|':'NONE',
	'!':'bookdown.png',
	'"':'mugdown.png',
	'#':'dealwithit.png',
}

// Change with ALT+Key
const MIDLAYER = {
	'\\':'NONE',
	'1':'shadowWeak.png',
	'2':'shadowMedium.png',
}

// Change with CTRL+Key
const OVERLAYS = {
	'\\':'NONE',
	'1':'CRAHat.png',
}

//Key used to remove all overlays
const REMOVEALL = '-';


const IMAGEFOLDER = './images/';
const ELEMENTID = 'portrait';
const BOTTOMLAYERID = 'portraitBottomLayer';
const MIDLAYERID = 'portraitMidlayer';
const OVERLAYID = 'portraitOverlay';