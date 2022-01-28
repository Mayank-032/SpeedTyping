let str = "If you're looking for random paragraphs. We recommend reading this tutorial, in the sequence listed in the menu."+
" If you have a large screen, the menu will always be present on the left. If you have a small screen, open the menu by clicking the top menu sign;";

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
let totalEntries = 0;
let incorrectEntries = 0;
let totalInCorrectErrors = 0;
let char = readOnlyTextArray[index];
char.classList.add("current_value_property");
function processCurrentText(event) {
    let typedChar = event.key;

    if(typedChar === 'Backspace'){
        let prevChar = readOnlyTextArray[index];

        prevChar.classList.remove("current_value_property")
        prevChar.classList.remove('myTextCorrect');
        prevChar.classList.remove("myTextIncorrect");

        index--;
        totalEntries--;
        let char = readOnlyTextArray[index];
        if(char.classList.contains("myTextIncorrect") || char.classList.contains("myTextSpaceIncorrect")){
            incorrectEntries--;
        }
        char.classList.add("current_value_property");
    }else if(typedChar === 'CapsLock' || typedChar === 'Shift'){
        // console.log(",");
    }else{
        let char = readOnlyTextArray[index];

        if(typedChar === char.innerText){
            if(char.innerText === ' '){
                char.classList.add("myTextCorrect");
                char.classList.remove("myTextSpaceIncorrect");
                char.classList.remove("current_value_property");
            }else{
                char.classList.add("myTextCorrect");
                char.classList.remove("myTextIncorrect");
                char.classList.remove("current_value_property");
            }

            index++;
            char = readOnlyTextArray[index];
            char.classList.add('current_value_property');
        }else if(typedChar !== char.innerText){
            if(char.innerText === ' '){
                char.classList.add("myTextSpaceIncorrect");
                char.classList.remove("myTextCorrect");
                char.classList.remove("current_value_property");
            }else{
                char.classList.add("myTextIncorrect");
                char.classList.remove("myTextCorrect");
                char.classList.remove("current_value_property");
            }
            
            index++;
            incorrectEntries++;
            totalInCorrectErrors++;

            char = readOnlyTextArray[index];
            char.classList.add('current_value_property');
        }

        totalEntries++;
    }
}

let speed = document.getElementById("speed");
let accuracy = document.getElementById("accuracy");
let raw_speed = document.getElementById("raw_speed");
let correct_entries = document.getElementById("correct_entries");
let incorrect_entries = document.getElementById("actual_incorrect_entries");
let fixed_entries = document.getElementById("fixed_incorrect_entries");
let char_typed = document.getElementById("characters_ty");
let cpm = document.getElementById("cpm");
let total_time = document.getElementById("total_time");

let timeLimit = document.getElementById("chooseTime").value;
document.getElementById("chooseTime").onchange = function(){
    timeLimit = this.value;
}


function displayResult(){
    if(timeLimit == 15){
        let rawSp = ((totalEntries / 5) / 0.25);
        rawSp = rawSp.toFixed(1);
        raw_speed.innerText = rawSp;

        total_time.innerText = "15s";

        let cpermin = totalEntries / 0.25;
        cpm.innerText = cpermin;

        let sp = rawSp - (incorrectEntries / 0.25);
        sp = sp.toFixed(1);
        speed.innerText = sp;
    }else if(timeLimit == 30){
        let rawSp = ((totalEntries / 5) / 0.5);
        rawSp = rawSp.toFixed(1);
        raw_speed.innerText = rawSp;

        total_time.innerText = "30s";

        let cpermin = totalEntries / 0.5;
        cpm.innerText = cpermin;

        let sp = rawSp - (incorrectEntries / 0.5);
        sp = sp.toFixed(1);
        speed.innerText = sp;
    }else{
        let rawSp = ((totalEntries / 5) / timeLimit);
        rawSp = rawSp.toFixed(1);
        raw_speed.innerText = rawSp;

        total_time.innerText = timeLimit+"min";

        let cpermin = totalEntries / timeLimit;
        cpm.innerText = cpermin;

        let sp = rawSp - (incorrectEntries / timeLimit);
        sp = sp.toFixed(1);
        speed.innerText = sp;
    }

    let correctEntries = totalEntries - incorrectEntries;
    correct_entries.innerText = correctEntries;

    incorrect_entries.innerText = totalInCorrectErrors;
    char_typed.innerText = totalEntries;

    fixed_incorrect_entries.innerText = totalInCorrectErrors - incorrectEntries;

    let acc = ((totalEntries - incorrectEntries) / totalEntries) * 100;
    acc = acc.toFixed(1);
    accuracy.innerText = acc;
}

let control_Buttons = document.getElementById("controlButtons");

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
            displayResult();

            i=0;
            writeOnlyText.value = "";
            writeOnlyText.disabled = false;
        }
    }else{
        if(minute >= timeLimit){
            writeOnlyText.disabled = true;
            pause();
            reset();
            displayResult()

            writeOnlyText.value = "";
            writeOnlyText.disabled = false;
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