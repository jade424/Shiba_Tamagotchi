console.log('hello');


// let petName = document.querySelector('.petStatus'); //Grabbing the name element

let submit = document.querySelector('#start');
submit.addEventListener('click', function () {
let nameInput = document.querySelector('#petname').value;
    // petName.innerText = nameInput.value;
    console.log('eventlistener')
    console.log(nameInput);
    localStorage.setItem('petname', nameInput);

});




