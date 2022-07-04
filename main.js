var  SpeechRecognition = window.webkitSpeechRecognition

var  sp_recog = new SpeechRecognition();


function my_start(){

    document.getElementById("voice_output").value = "";

    sp_recog.start();
}

sp_recog.onresult = function(event){

    console.log(event);

    Content = event.results[0][0].transcript;

    document.getElementById("voice_output").value = Content;
}