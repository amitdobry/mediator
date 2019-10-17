$(document).ready(function() {
    $('#a').css('cursor', 'pointer');

    $('#a').click(function() {
        window.location="https://mediator-papu.000webhostapp.com/papoo%20the%20mediator%20page%204%20v4.1.2.html"
    })

    $('#a2').css('cursor', 'pointer');

    $('#a2').click(function() {
        window.location="https://mediator-papu.000webhostapp.com/pappoo%20the%20mediator%20page%205.2.html"
    })
    
    $(".hover2").hover(function () {
        $(this).effect("shake", { times:5 }, 800);
    })

    $(".hover4").mouseenter(function(){
        if (counter < 1){
            $(this).effect("pulsate", { times:2 }, 2000);
            counter = counter + 1;
            return;
        }
        else{
            return;
        }
    });
    $(".hover4").mouseleave(function(){
        counter = 0;
        return;
    });
   
    
});

function myFunction() {
    confirm("are you sure your done?!");
       }

record.onclick = e => {
    console.log('i was clicked')
    record.disabled = true;
    record.style.backgroundColor = "blue"
    stopRecord.disable = false;
    audioChunks = [];
    rec.start();
}

stopRecord.onclick = e => {
    console.log('i was clicked')
    record.disabled = false;
    stop.disable = true;
    record.style.backgroundColor = "red"
    rec.stop();
}

navigator.mediaDevices.getUserMedia({audio:true})
.then(stream => {handlerFunction(stream)})

function handlerFunction(stream) {
rec = new MediaRecorder(stream);
rec.ondataavailable = e => {
if (rec.state == "inactive"){
    let blob = new blob(audioChunks, {type:'audio/mpeg-3'});
        recordedAudio.src = URL.createObjectURL(blob);
        recordedAudio.controls=true;
        recordedAudio.autoplay=true;
        sendData(blob)
        }
    }
}