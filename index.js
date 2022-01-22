let str = "If you're looking for random paragraphs";

let readOnlyTextArea = document.getElementById("myReadOnlyTextArea");
readOnlyTextArea.value = str;

let writeOnlyTextArea = document.getElementById("myWriteOnlyTextArea");
let control_Buttons = document.getElementById("controlButtons");

let timeLimit = document.getElementById("chooseTime").value;
document.getElementById("chooseTime").onchange = function(){
    timeLimit = this.value;
}

let minute = 0;
let second = 0;
let millisecond = 0;
let time;

function start() {
    pause();
    time = setInterval(() =>{timer();}, 10);
}

function pause(){
    clearInterval(time);
}

function reset() {
    pause();
    
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById("minute").innerText = "00";
    document.getElementById("second").innerText = "00";
}

function timer() {
    if(timeLimit > 2){
        if(second >= timeLimit){
            pause();
            reset();
        }
    }else{
        if(minute >= timeLimit){
            pause();
            reset();
        }
    }

    if((millisecond += 10) == 1000){
        millisecond = 0;
        second++;
    }

    if(second == 60){
        second = 0;
        minute++;
    }

    document.getElementById("minute").innerText = returnData(minute);
    document.getElementById("second").innerText = returnData(second);
}

function returnData(data){
    return data >= 10 ? data : `0${data}`;
}