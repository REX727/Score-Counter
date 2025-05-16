let blue_s = 00;
let red_s = 00;

function score_add_red() {
    red_s += 1;
    if (red_s < 10) {
        document.getElementById('RED').innerHTML = `0${red_s}`;
    }else{
        document.getElementById('RED').innerHTML = `${red_s}`;
    }
}

function score_add_blue() {
    blue_s += 1;
    if (blue_s < 10) {
        document.getElementById('BLUE').innerHTML = `0${blue_s}`;
    }else{
        document.getElementById('BLUE').innerHTML = `${blue_s}`;
    }
}

function score_minus_blue(){
    if (blue_s > 0) {
        blue_s -= 1;
        if (blue_s < 10) {
            document.getElementById('BLUE').innerHTML = `0${blue_s}`;
        } else {
            document.getElementById('BLUE').innerHTML = `${blue_s}`;
        }
    }
}

function score_minus_red(){
    if (red_s > 0) {
        red_s -= 1;
        if (red_s < 10) {
            document.getElementById('RED').innerHTML = `0${red_s}`;
        } else {
            document.getElementById('RED').innerHTML = `${red_s}`;
        }
    }
}

function score_reset() {
    red_s = 0;
    blue_s = 0;
    document.getElementById('RED').innerHTML = `0${red_s}`;
    document.getElementById('BLUE').innerHTML = `0${blue_s}`; 
}

// Timer
let timerDuration = 3 * 60; // 3 minutes in seconds
let timer = timerDuration;
let timerInterval = null;
let timerStarted = false; // 新增狀態

function updateTimerDisplay() {
    const min = String(Math.floor(timer / 60)).padStart(2, '0');
    const sec = String(timer % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${min}:${sec}`;
}

function startTimer() {
    if (timerInterval) return;
    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
    timerStarted = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timer = timerDuration;
    updateTimerDisplay();
    timerStarted = false;
}

window.onload = function() {
    updateTimerDisplay();
};

// 空白鍵快捷鍵
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        if (!timerStarted) {
            startTimer();
        } else {
            resetTimer();
        }
    }
    if (e.key === ',' || e.key === ',') {
        score_add_blue();
    }
    if (e.key === '.' || e.key === '.') {
        score_add_red();
    }
    if (e.key === 'r' || e.key === 'R') {
        reset();
    }
});

function reset() {
    score_reset();
    resetTimer();
}