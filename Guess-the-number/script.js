'use strict';

let randomNum = Math.floor(Math.random() * 20) + 1;
let message =document.querySelector('.message');
let scoreCounter = document.querySelector('.score');
let highScore =document.querySelector('.highscore');
let initialScore=20;
document.querySelector('.check').addEventListener('click',function(){
    localStorage.clear();
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        message.textContent='No guess';
        initialScore--;
        scoreCounter.textContent=initialScore;
    }else if(guess>randomNum){
        message.textContent='Too high';
        initialScore--;
        scoreCounter.textContent=initialScore;
    }else if(guess<randomNum){
        message.textContent='Too low';
        initialScore--;
        scoreCounter.textContent=initialScore;
    }else{
        message.textContent='Correct guess';
        document.body.style.backgroundColor="#2ec4b6";
        document.querySelector('.number').textContent=randomNum;
        if(initialScore>Number(highScore.textContent)){
            highScore.textContent=initialScore;
        }
    }

    if(initialScore===0){
        message.textContent='Game over!! you lost';
        document.querySelector('.number').textContent=randomNum;
        document.body.style.backgroundColor="#8d0801";
        document.querySelector(".check").disabled=true;
    }
})

document.querySelector('.again').addEventListener('click',function(){
    let highVal= highScore.textContent;
    localStorage.setItem('highScore',highVal);
    location.reload();
})

window.addEventListener('load', function() {
    let savedHighScore = localStorage.getItem('highScore');
    if (savedHighScore !== null) {
        highScore.textContent = savedHighScore;
    }
})
