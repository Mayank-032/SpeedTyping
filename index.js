let str = ["You're off to great places, today is your day. Your mountain is waiting, so get on your way.", 
            "You always pass failure on the way to success.", 
            "No one is perfect - that's why pencils have erasers.", 
            "You're braver than you believe, and stronger than you seem, and smarter than you think.",
            "The purpose of our lives is to be happy.",
            "Life is what happens when you're busy making other plans.",
            "Get busy living or get busy dying.",
            "You only live once, but if you do it right, once is enough.",
            "Many of life's failures are people who did not realize how close they were to success when they gave up.",
            "If you want to live a happy life, tie it to a goal, not to people or things.",
            "Never let the fear of striking out keep you from playing the game.",
            "Money and success don't change people; they merely amplify what is already there.",
            "Not how long, but how well you have lived is the main thing.",
            "If life were predictable it would cease to be life, and be without flavor.",
            "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
            "In order to write about life first you must live it.",
            "The big lesson in life, baby, is never be scared of anyone or anything.",
            "Curiosity about life in all of its aspects, I think, is still the secret of great creative people."
        ];

let readOnlyText = document.querySelector(".myReadOnlyTextArea");
let writeOnlyText = document.querySelector(".myWriteOnlyTextArea");


// getting random number between 2 values: Math.random() * (min: 0, max: str.length - 1) + min: 0;
let a = 0;
let b = 1;
let c = 2;
let d = 3;
let readOnlyTextArray = [];

function displayText(a, b, c, d) {
    readOnlyTextArray = [];
    readOnlyText.textContent = null;
    let str1 = str[a];
    let str2 = str[b];
    let str3 = str[c];
    let str4 = str[d];
    // console.log(str1, str2, str3, str4);

    let count = 0;
    let dv1 = document.createElement("div");
    dv1.innerText = "";
    str1.split('').forEach(char => {
        let charSpan = document.createElement('span');
        charSpan.appendChild(document.createTextNode(char));
        dv1.appendChild(charSpan);
    })

    let dv2 = document.createElement("div");
    dv2.innerText = "";
    str2.split('').forEach(char => {
        let charSpan = document.createElement('span');
        charSpan.appendChild(document.createTextNode(char));
        dv2.appendChild(charSpan);
    })

    let dv3 = document.createElement("div");
    dv3.innerText = "";
    str3.split('').forEach(char => {
        let charSpan = document.createElement('span');
        charSpan.appendChild(document.createTextNode(char));
        dv3.appendChild(charSpan);
    })

    let dv4 = document.createElement("div");
    dv4.innerText = "";
    str4.split('').forEach(char => {
        let charSpan = document.createElement('span');
        charSpan.appendChild(document.createTextNode(char));
        dv4.appendChild(charSpan);
    })

    readOnlyText.appendChild(dv1);
    readOnlyText.appendChild(dv2);
    readOnlyText.appendChild(dv3);
    readOnlyText.appendChild(dv4);

    
    let readOnlyTextArrayDiv = readOnlyText.querySelectorAll("div");
    let tempArr1 = readOnlyTextArrayDiv[0].querySelectorAll("span");
    let tempArr2 = readOnlyTextArrayDiv[1].querySelectorAll("span");
    let tempArr3 = readOnlyTextArrayDiv[2].querySelectorAll("span");
    let tempArr4 = readOnlyTextArrayDiv[3].querySelectorAll("span");
    // console.log(tempArr4[tempArr4.length - 2]);
    // console.log(readOnlyTextArray);
    readOnlyTextArray = Array.prototype.concat.apply([], tempArr1);
    readOnlyTextArray = Array.prototype.concat.apply(readOnlyTextArray, tempArr2);
    readOnlyTextArray = Array.prototype.concat.apply(readOnlyTextArray, tempArr3);
    readOnlyTextArray = Array.prototype.concat.apply(readOnlyTextArray, tempArr4);
}

if(readOnlyText.innerText == ""){
    displayText(a, b, c, d);
}


let index = 0;
let totalEntries = 0;
let incorrectEntries = 0;
let totalCorrectEntries = 0;
let totalInCorrectErrors = 0;
let char = readOnlyTextArray[index];
char.classList.add("current_value_property");
function processCurrentText(event) {
    let typedChar = event.key;
    if (typedChar === 'Backspace') {
        let prevChar = readOnlyTextArray[index];

        prevChar.classList.remove("current_value_property")
        prevChar.classList.remove('myTextCorrect');
        prevChar.classList.remove("myTextIncorrect");

        index--;
    
        let char = readOnlyTextArray[index];
        if(char == undefined){
            index = 0;
            char = readOnlyTextArray[index];
            char.classList.add("current_value_property");
        }else{
            if (char.classList.contains("myTextIncorrect") || char.classList.contains("myTextSpaceIncorrect")) {
                incorrectEntries--;
            }else if(char.classList.contains("myTextCorrect")){
                totalCorrectEntries--;
            }

            char.classList.remove("myTextIncorrect");
            char.classList.remove("myTextSpaceIncorrect");
            char.classList.remove("myTextCorrect");

            char.classList.add("current_value_property");
        }
    } else if (typedChar === 'CapsLock' || typedChar === 'Shift') {
        // console.log(",");
    } else {
        let char = readOnlyTextArray[index];

        if (typedChar === char.innerText) {
            if (char.innerText === ' ') {
                char.classList.add("myTextCorrect");
                char.classList.remove("myTextSpaceIncorrect");
                char.classList.remove("current_value_property");
            } else {
                char.classList.add("myTextCorrect");
                char.classList.remove("myTextIncorrect");
                char.classList.remove("current_value_property");
            }

            totalCorrectEntries++;
            index++;

            char = readOnlyTextArray[index];
            if(char == undefined){
                a = d+1;
                b = a+1;
                c = b+1;
                d = c+1;
    
                displayText(a, b, c, d);
                index = 0;
                char = readOnlyTextArray[index];
            }

            char.classList.add('current_value_property');
        } else if (typedChar !== char.innerText) {
            if (char.innerText === ' ') {
                char.classList.add("myTextSpaceIncorrect");
                char.classList.remove("myTextCorrect");
                char.classList.remove("current_value_property");
            } else {
                char.classList.add("myTextIncorrect");
                char.classList.remove("myTextCorrect");
                char.classList.remove("current_value_property");
            }

            index++;
            incorrectEntries++;
            totalInCorrectErrors++;

            char = readOnlyTextArray[index];
            if(char == undefined){
                a = d+1;
                b = a+1;
                c = b+1;
                d = c+1;
    
                displayText(a, b, c, d);
                index = 0;
                char = readOnlyTextArray[index];
            }

            char.classList.add('current_value_property');
        }
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
document.getElementById("chooseTime").onchange = function () {
    timeLimit = this.value;
}

function displayResult() {
    totalEntries = totalCorrectEntries + incorrectEntries;
    // console.log(totalEntries+" "+totalCorrectEntries+" "+incorrectEntries);
    if (timeLimit == 15) {
        let rawSp = ((totalEntries / 5) / 0.25);
        rawSp = rawSp.toFixed(1);
        raw_speed.innerText = rawSp;

        total_time.innerText = "15s";

        let cpermin = totalEntries / 0.25;
        cpm.innerText = cpermin;

        let sp = rawSp - (incorrectEntries / 0.25);
        if(sp < 0) sp = 0;
        sp = sp.toFixed(1);
        speed.innerText = sp;
    } else if (timeLimit == 30) {
        let rawSp = ((totalEntries / 5) / 0.5);
        rawSp = rawSp.toFixed(1);
        raw_speed.innerText = rawSp;

        total_time.innerText = "30s";

        let cpermin = totalEntries / 0.5;
        cpm.innerText = cpermin;

        let sp = rawSp - (incorrectEntries / 0.5);
        if(sp < 0) sp = 0;
        sp = sp.toFixed(1);
        speed.innerText = sp;
    } else {
        let rawSp = ((totalEntries / 5) / timeLimit);
        rawSp = rawSp.toFixed(1);
        raw_speed.innerText = rawSp;

        total_time.innerText = timeLimit + "min";

        let cpermin = totalEntries / timeLimit;
        cpm.innerText = cpermin;

        let sp = rawSp - (incorrectEntries / timeLimit);
        if(sp < 0) sp = 0;
        sp = sp.toFixed(1);
        speed.innerText = sp;
    }

    correct_entries.innerText = totalCorrectEntries;

    incorrect_entries.innerText = totalInCorrectErrors;
    char_typed.innerText = totalEntries;

    fixed_incorrect_entries.innerText = totalInCorrectErrors - incorrectEntries;

    if(totalEntries == 0){
        let acc = 0;
        accuracy.innerText = acc;
    }else{
        let val = (totalCorrectEntries + (totalInCorrectErrors - incorrectEntries));
        if(val == 0){
            let acc = 0;
            accuracy.innerText = acc;
        }else{
            let acc = (totalCorrectEntries / val) * 100;
            acc = acc.toFixed(1);
            accuracy.innerText = acc;
        }
    }
}

let control_Buttons = document.getElementById("controlButtons");

let minute = 0;
let second = 0;
let millisecond = 0;
let time;

let timeCircle = document.getElementById("timer");

function start() {
    pause();
    time = setInterval(() => { timer(); }, 10);
}

function pause() {
    if(writeOnlyText.disabled = false){
        writeOnlyText.disabled = true;
    }else{
        writeOnlyText.disabled = false;
    }

    clearInterval(time);
}

function reset() {
    pause();
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById("minute").innerText = "00";
    document.getElementById("second").innerText = "00";

    timeCircle.classList.remove("timerCircleProperties");
    timeCircle.classList.add("circle");

    writeOnlyText.value = "";
    writeOnlyText.disabled = false;

    speed.innerText = "0";
    accuracy.innerText = "0"; 
    raw_speed.innerText = "0"; 
    correct_entries.innerText = "0"; 
    incorrect_entries.innerText = "0"; 
    fixed_entries.innerText = "0"; 
    char_typed.innerText = "0"; 
    cpm.innerText = "0";  
    total_time.innerText = "0";  

    a = 0;
    b = 1;
    c = 2;
    d = 3;
    displayText(a, b, c, d);

    index = 0;
    totalEntries = 0;
    incorrectEntries = 0;
    totalCorrectEntries = 0;
    totalInCorrectErrors = 0;
    char = readOnlyTextArray[index];
    char.classList.add("current_value_property");

}

function timer() {
    if (timeLimit > 2) {
        if(timeLimit-second <= 5){
            timeCircle.classList.remove("circle");
            timeCircle.classList.add("timerCircleProperties");
        }

        if (second >= timeLimit) {
            writeOnlyText.disabled = true;
            pause();
            displayResult();

            writeOnlyText.value = "";
        }
    } else {
        if(timeLimit == 2){
            if(minute == 1 && 60-second <= 5){
                timeCircle.classList.remove("circle");
                timeCircle.classList.add("timerCircleProperties");
            }
        }else{
            if(minute == 0 && 60-second <= 5){
                timeCircle.classList.remove("circle");
                timeCircle.classList.add("timerCircleProperties");
            }
        }

        if (minute >= timeLimit) {
            writeOnlyText.disabled = true;
            pause();
            displayResult();

            writeOnlyText.value = "";
        }
    }
    
    if ((millisecond += 10) == 1000) {
        millisecond = 0;
        second++;
    }

    if (second == 60) {
        second = 0;
        minute++;
    }

    document.getElementById("minute").innerText = returnData(minute);
    document.getElementById("second").innerText = returnData(second);
}

function returnData(data) {
    return data >= 10 ? data : `0${data}`;
}