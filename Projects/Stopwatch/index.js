let startStopButton = document.getElementById('start-stop-button');
let resetButton = document.getElementById('reset-button');
let tens = document.getElementById('tens');
let seconds = document.getElementById('seconds');

let ten = 0;
let second = 0;
let timeoutId = 0;

function couting() {
    ten++;

    if (ten > 99) {
        ten = 0;
        second++;
        if (second > 9) seconds.innerHTML = second;
        else seconds.innerHTML = "0" + second;
    }

    if (ten > 9) tens.innerHTML = ten;
    else tens.innerHTML = "0" + ten;
}

function changeToStartButton() {
    startStopButton.innerHTML = "START"
    startStopButton.style.background = "white";
    startStopButton.style.color = "#404040";
}

function changeToStopButton() {
    startStopButton.innerHTML = "STOP"
    startStopButton.style.background = "#404040";
    startStopButton.style.color = "white";
}

startStopButton.addEventListener('click', () => {
    if (startStopButton.innerHTML == "START") {
        timeoutId = setInterval(couting, 10);
        changeToStopButton()
    } else {
        clearInterval(timeoutId)
        changeToStartButton()
    }
})

resetButton.addEventListener('click', () => {
    clearInterval(timeoutId);
    ten = 0;
    second = 0;
    tens.innerHTML = "00";
    seconds.innerHTML = "00";
    changeToStartButton()
})