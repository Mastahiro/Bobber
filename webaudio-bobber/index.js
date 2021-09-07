"use strict";

function Bobber(audioContext, audioSource, elem, soundon, audioDest = null, analyzerFFT = 2048, threshold=2, multiplier=1){
        this.actx   = audioContext;
        this.FFT    = analyzerFFT;
        this.paused = false;
        this.anl    = this.actx.createAnalyser();
        this.ctx    = audioContext;
        this.src    = audioSource;
        this.dest   = audioDest;
		this.elem	= elem;
		this.soundon = soundon;
        // Configure Analyzer
        this.anl.fftSize = this.FFT;
        this.src.connect(this.anl);
        if(this.dest) this.anl.connect(this.dest);
		
        this.u8ar = new Uint8Array(this.FFT);
        this.draw = () =>{
            if(!this.paused) requestAnimationFrame(this.draw);
            this.anl.getByteFrequencyData(this.u8ar);
            _moveImg(this.u8ar, this.elem, this.soundon, threshold, multiplier);
        }
        this.start = () => {
            this.paused = false;
            this.draw();
        }
        this.pause = () =>{
            this.paused = true;
        }
        this.reset = () =>{
            this.paused = true;
            requestAnimationFrame(()=>{
                this.u8ar = new Uint8Array(this.FFT).fill(0);
                _moveImg(this.u8ar, this.elem, this.soundon, threshold, multiplier);
            });
        }
}

function createAudioContext(){
    return new (window.AudioContext || window.webkitAudioContext)();
}

// Elem - Element to move
// soundon - strokes next to the character

function MediaStreamBobber(mediaStream, elem, soundon, audioDest = null, analyzerFFT = 2048, threshold = 2, multiplier=1){
    let ctx = createAudioContext();
    let src = ctx.createMediaStreamSource(mediaStream);
    return new Bobber(ctx, src, elem, soundon, audioDest, analyzerFFT, threshold, multiplier);
}

function getUserMedia(constraints){
    return new Promise((resolve)=>{
        if(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia(constraints).then(resolve).catch(()=>resolve(null));
        }
        else if(navigator.getUserMedia){
            navigator.getUserMedia(constraints, resolve, ()=>resolve(null));
        }
        else if(navigator.webkitGetUserMedia){
            navigator.webkitGetUserMedia(constraints, resolve, ()=>resolve(null));
        }
        else if(navigator.mozGetUserMedia){
            navigator.mozGetUserMedia(constraints, resolve, ()=>resolve(null));
        }
        else resolve(null);
    });
}
