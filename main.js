var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML="";
    recognition.start();

} 

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=content;
    if(content == " Take my selfie. "){
        console.log("Take my selfie.");
        speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;
    var speak_data="Taking you'r selfie in 5 seconds";
    var words=new SpeechSynthesisUtterance(speak_data);
    synth.speak(words);
    Webcam.attach( camera );
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
 camera=document.getElementById("camera");