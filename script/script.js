// function petName(name, url) {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
// } 

// let name = petName('petname');

// document.getElementById("petname").innerHTML = name;

// windows.onload = setTitle;

// window.addEventListener('DOMContentLoaded', (event) => {

    class shiba {
        constructor() {
            this.hunger = 0;
            this.bored = 0;
            this.sad = 0;
            this.tired =0;

        }
    }
    let name = " ";
    let age = 0;
    let foodScore = 10;
    let boredomScore = 10; 
    let fatigueScore = 10; 

    function updatePetStatus(petStatus, value) {
    hungerStatus = document.getElementById("#hunger__fill").style.width = `$(value)%`;
    hungerStatus = document.getElementById("#hunger__text").textContent = `$(value)%`;
    boredStatus = document.getElementById("#bored__fill").style.width = `$(value)%`;
    boredStatus = document.getElementById("#bored__text").textContent = `$(value)%`;
    loveStatus = document.getElementById("#sad__fill").style.width = `$(value)%`;
    loveStatus = document.getElementById("#sad__text").textContent = `$(value)%`;
    sleepStatus = document.getElementById("#tired__fill").style.width = `$(value)%`;
    sleepStatus = document.getElementById("#tired__text").textContent = `$(value)%`;
}

    
    let age = 0;
    updateAge()

    feedbtn.addEventListener("click", ()=>{
      hungry__text += 2;
      if(foodScore > 10) foodScore = 10;
      updateFoodWidth();
    });

    boredbtn.addEventListener("click", ()=>{
      bored__text += 2;
      if(boredomScore > 10) boredomScore = 10;
      updateBoredomWidth();
    });

    lovebtn.addEventListener("click", ()=>{
      sad__text += 2;
      if(fatigueScore > 10) fatigueScore = 10;
      updateFatigueWidth();

    });

    sleepbtn.addEventListener("click", ()=>{
        tired__text += 2;
        if(fatigueScore > 10) fatigueScore = 10;
        updateFatigueWidth();
  
      });

// let shiba {
//     constructor() {
//         this.hunger = 0;
//         this.bored = 0;
//         this.sad = 0;
//         this.tired = 0;
//         isAlive = true;
//     }


// }

