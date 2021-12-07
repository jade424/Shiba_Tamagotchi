    const shiba = {
        
        name: " ",
        hunger: 0,
        bored: 0,
        sad: 0,
        tired: 0,
        age: 0,
    }

feed() {
    this.hunger = this.hunger -1;
}
play() {
    this.bored = this.bored -1;
}
love() {
    this.sad = this.sad -1;
}
sleep() {
    this.tired = this.tired -1;
}

$('#start').click(function() {
    startIntervals();  
});
let $hungerStatus = $('#hungerStatus');
let $boredStatus = $('#boredStatus');
let $sadStatus = $('#sadStatus');
let $sleepStatus = $('#sleepStatus');



let hungerIntervalId = '';
let boredIntervalId = '';
let sadIntervalId = '';
let tiredIntervalId = '';

function clearAllInterval () {
    clearInterval(hungerIntervalId);
    clearInterval(boredIntervalId);
    clearInterval(sadIntervalId);
    clearInterval(tiredIntervalId);
}

function startIntervals () {
    hungerIntervalId = setInterval (function()) {
        if(shiba.hunger >= 10) {
            clearInterval(hungerIntervalId);
            $('#gameover').html('Your shiba has filed for emancipation from starvation')
            gameOver();

        } else {
            shiba.hunger = shiba.hunger +1;
            $hungerStatus.css('width' , shiba.hunger + '%');
        } 
    
    }
    boredIntervalId = setInterval (function()) {
        if(shiba.bored >= 10) {
            clearInterval(boredIntervalId);
            $('#gameover').html('Your shiba has filed for emancipation from loneliness')
            gameOver();

        } else {
            shiba.bored = shiba.bored +1;
            $boredStatus.css('width' , shiba.bored + '%');
        } 
    sadIntervalId = setInterval (function()) {
        if(shiba.sad >= 10) {
                clearInterval(sadIntervalId);
                $('#gameover').html('Your shiba has filed for emancipation from neglect')
                gameOver();
    
        } else {
                shiba.sad = shiba.sad +1;
                $sadStatus.css('width' , shiba.sad + '%');
        } 
        }
    }
    tiredIntervalId = setInterval (function()) {
        if(shiba.tired >= 10) {
            clearInterval(tiredIntervalId);
            $('#gameover').html('Your shiba has filed for emancipation from terrible sleep conditions')
            gameOver();

        } else {
            shiba.tired = shiba.tired +1;
            $sleepStatus.css('width' , shiba.tired + '%');
        } 


    
    }
}
$('#feedbtn').click(function(){
    shiba.feed();
});

$('#playbtn').click(function(){
    shiba.play();
});

$('#lovebtn').click(function(){
    shiba.love();
});
$('#sleepbtn').click(function(){
    shiba.sleep();
});

function petName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
} 

let name = petName('petname');

document.getElementById("petname").innerHTML = name;

windows.onload = setTitle;

window.addEventListener('DOMContentLoaded', (event) => {