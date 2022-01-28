let str = "If you're looking for random paragraphs. We recommend reading this tutorial, in the sequence listed in the menu."+
"If you have a large screen, the menu will always be present on the left. If you have a small screen, open the menu by clicking the top menu sign;";

let readOnlyText = document.querySelector(".myReadOnlyTextArea");
let writeOnlyText = document.querySelector(".myWriteOnlyTextArea");

displayText();
function displayText(){
    readOnlyText.textContent = null;

    str.split('').forEach(char => {
        let charSpan = document.createElement('span');
        charSpan.appendChild(document.createTextNode(char));
        readOnlyText.appendChild(charSpan);
    })
}
let readOnlyTextArray = readOnlyText.querySelectorAll("span");


let index = 0;
let char = readOnlyTextArray[index];
char.classList.add("current_value_property");
function processCurrentText(event) {
    let typedChar = event.key;

    if(typedChar === 'Backspace'){
        let prevChar = readOnlyTextArray[index];
        prevChar.classList.remove("current_value_property")
        prevChar.classList.remove('current_value_property');
        prevChar.classList.remove("myTextIncorrect");

        index--;
        let char = readOnlyTextArray[index];
        char.classList.add("current_value_property");
    }else if(typedChar === 'CapsLock' || typedChar === 'Shift'){
        // console.log(",");
    }else{
        let char = readOnlyTextArray[index];

        if(typedChar === char.innerText){
            char.classList.add("myTextCorrect");
            char.classList.remove("myTextIncorrect");
            char.classList.remove("current_value_property");
            index++;

            char = readOnlyTextArray[index];
            char.classList.add('current_value_property');
        }else if(typedChar !== char.innerText){
            char.classList.add("myTextIncorrect");
            char.classList.remove("myTextCorrect");
            char.classList.remove("current_value_property");
            index++;

            char = readOnlyTextArray[index];
            char.classList.add('current_value_property');
        }
    }
}




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
            writeOnlyText.disabled = true;
            pause();
            reset();
            i=0;
            writeOnlyText.value = "";
            writeOnlyText.disabled = false;
        }
    }else{
        if(minute >= timeLimit){
            writeOnlyText.disabled = true;
            pause();
            reset();
            writeOnlyText.value = "";
            writeOnlyText.disabled = false;
        }
    }

    if((millisecond += 20) == 1000){
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