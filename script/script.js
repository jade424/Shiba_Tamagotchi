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

let shiba = {
    name: '',
    hunger: 0,
    boredom: 0,
    affection: 10,
    tired: 0,
    
    feed() {
        this.hunger = this.hunger - 1;
    },
    play() {
        this.boredom = this.boredome - 1;
    },
    love() {
        this.affection = this.affection + 1;
    },
    sleep() {
        this.tired = this.tired -1;
    },
}

let $hungry__fill = $('#hungry__fill');
let $bored__fill = $('#bored__fill');
let $sad__fill = $('#sad__fills');
let $tired__fill = $('#tired__fill');

let hungerIntervalId = '';
let boredomIntervalId = '';
let affectionIntervalId = '';
let tiredIntervalId = '';

let feedSound = new Audio("sounds/zapsplat_catoon_bite_munch_single_002_56564.mp3");



// $('#namebutton').click(function () {
// shiba.name = $("#namebutton").val();
// // $('#namebox1').html(shiba.name);
// });


//Start Game and Intervals

// function gameOver() {
//         $('.main').fadeOut();
//         $('img').fadeOut();
//         $('.petbox').fadeOut();
//         $('.end').fadeIn();
//         clearAllInterval();
//     knight.hunger = 0;
//     knight.fatigue = 0;
//     knight.skill = 100;
//     knight.age = 1;
// }

// function restartGame() {
// setTimeout (() => {
//     $('.main').fadeIn();
//     $('img').fadeIn();
//     $('.petbox').fadeIn();
//     $('.end').fadeOut();
// }, 1000)
// startIntervals();
// }

// function shine(){
// $body.css('background-color', '#7a665d');
// }

// function dimLight(){
// $body.css('background-color', '#7c142c')
// }

function clearAllInterval () {
clearInterval(hungerIntervalId);
clearInterval(boredomIntervalId);
clearInterval(affectionntervalId);
clearInterval(tiredInterval);
}

function startIntervals() {

hungerIntervalId = setInterval(function() {
    if(shiba.hunger >= 10) {
        clearInterval(hungerIntervalId);
        $('#gameover').html('Your shiba has filed for emancipation from starvation!')
        gameOver();

    } else {
        shiba.hunger = shiba.hunger + 3;
        $hungry__fill.css('width', shiba.hunger + '%');
    }
}, 1000);

boredomIntervalId = setInterval(function() {
    if(shiba.boredom >= 10) {
        clearInterval(boredomIntervalId);
        $('#gameover').html('Your shiba has filed for emancipation from lack of excitement!')
        gameOver();
        
    } else {
        shiba.boredom = shiba.boredom + 1;
        $fatigueProgress.css('width', knight.fatigue + '%');
    }
}, 1500);

swordIntervalId = setInterval(function(){
    if(knight.skill <= 0) {
        clearInterval(swordIntervalId);
        $('#gameover').html('You have failed because your sword has grown weak and dull...')
        gameOver();
        
    } else {
        knight.skill = knight.skill - 3;
        $swordProgress.css('width', knight.skill + '%');
    }
}, 3000);

ageIntervalId = setInterval(function(){
    if(knight.hunger >=100 || knight.fatigue >= 100 || knight.skill <= 0) {
        clearInterval(ageIntervalId);
    }  
    else if (knight.age >= 10) {
        $('#pet').attr("src", form2);  
    }  
    else {
        knight.age++;
        $age.html('Days Survived: ' + knight.age);
    }

}, 5000)



};



//action buttons
    $('#feed').click(function(){
        knight.feed();
        feedSound.play();
    });

    $('#sleep').click(function(){
        knight.sleep();
        sleepSound.play();
    });

    $('#practice').click(function(){
        knight.practice();
        swordSound.play();
    });

    $('#brighten').click(shine);

    $('#darken').click(dimLight);

    $('#restart').click(restartGame);

