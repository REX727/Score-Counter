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