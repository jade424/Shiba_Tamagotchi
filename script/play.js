//Global Variables//

let hunger = 0;
let bored = 0;
let sad = 0;
let tired = 0;
let age = 0;

let petName = localStorage.getItem('petname');
console.log('petname' + petName); 

document.querySelector('#petName').innerHTML = petName + ' Status';

let hungerInterval = setInterval(function(){
    hunger++;
    document.querySelector('#hungry__fill').innerHTML = 'Hunger ' + hunger;
    checkLevels();
}, 1000);

let boredInterval = setInterval(function(){
    bored++;
    document.querySelector('#bored__fill').innerHTML = 'Boredom ' + bored;
    checkLevels();
}, 2000);

let sadInterval = setInterval(function(){
    sad++;
    document.querySelector('#sad__fill').innerHTML = 'Sad ' + sad;
    checkLevels();
}, 2000);

let tiredInterval = setInterval(function(){
    tired++;
    document.querySelector('#tired__fill').innerHTML = 'Tired ' + tired;
    checkLevels();
}, 3000);

let ageInterval = setInterval(function(){
    age++;
    document.querySelector('#age').innerHTML = age;
    if(age == 3){
        document.querySelector('#character').src="../images/shibaeat.jpeg";
    }
    checkLevels();
}, 5000);


function checkLevels(){
    if(hunger == 10){
        clearIntervals(); 
        alert('Your pet starved');
    }
    if(bored == 10){
        clearIntervals(); 
        alert('Your pet is bored');
    }
    if(sad == 10){
        clearIntervals(); 
        alert('Your pet is depressed');
    }
    if(tired == 10){
        clearIntervals(); 
        alert('Your pet is exhausted');
    }    
}

function clearIntervals(){
    clearInterval(hungerInterval);
    clearInterval(boredInterval);
    clearInterval(sadInterval);
    clearInterval(tiredInterval);
    clearInterval(ageInterval);
}

let feedbtn = document.querySelector('#feedbtn');
feedbtn.addEventListener('click', function () {
    hunger -= 1;
    if(hunger<0){
        hunger = 0;
    }
    document.querySelector('#hungry__fill').innerHTML = 'Hunger ' + hunger;
});

let playbtn = document.querySelector('#playbtn');
playbtn.addEventListener('click', function () {
    bored -= 2;
    if(bored<0){
        bored = 0;
    }
    document.querySelector('#bored__fill').innerHTML = 'Bored ' + bored;
});

let lovebtn = document.querySelector('#lovebtn');
lovebtn.addEventListener('click', function () {
    sad -= 2;
    if(sad<0){
        sad = 0;
    }
    document.querySelector('#sad__fill').innerHTML = 'Sad ' + sad;
});

let sleepbtn = document.querySelector('#sleepbtn');
sleepbtn.addEventListener('click', function () {
    tired -= 3;
    if(tired<0){
        tired = 0;
    }
    document.querySelector('#tired__fill').innerHTML = 'Tired ' + tired;
    document.querySelector('main').classList.add('sleep');
    let sleepInterval = setInterval(function(){
        wakeUp();
    }, 1000);
    function wakeUp() {
        document.querySelector('main').classList.remove('sleep');
        clearInterval(sleepInterval);
    }
});
