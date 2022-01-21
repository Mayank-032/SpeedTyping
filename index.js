let str = "If you're looking for random paragraphs";

let readOnlyTextArea = document.getElementById("myReadOnlyTextArea");
readOnlyTextArea.value = str;

let writeOnlyTextArea = document.getElementById("myWriteOnlyTextArea");
writeOnlyTextArea.addEventListener("keypress", onKeyPress);

let display = document.getElementById("time");

function onKeyPress(event){
    console.log(event.key);
}


let minutes = document.getElementById("minutes").textContent;
let seconds = document.getElementById("seconds").textContent;

let actualminutes = minutes;
let actualseconds = seconds;

function startTimer(){
    if(minutes == 0){
        if(seconds == 1){
            display.textContent = actualminutes+":"+actualseconds;
            writeOnlyTextArea.disabled = true;

            clearInterval(myTimer);
            return;
        }
    }

    if(seconds == 1){
        minutes--;
        seconds = 5;
    }

    seconds--;


    let minuteStr = "";
    if(minutes < 10){
        minuteStr = "0" + minutes; 
    }else{
        minuteStr = "" + minutes;
    }

    let secondStr = "";
    if(seconds < 10){
        secondStr = "0" + seconds;
    }else{
        secondStr = "" + seconds;
    }
    

    display.textContent = minuteStr+":"+secondStr;
}

