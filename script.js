'use strict';

let secret_number = Math.trunc(Math.random()*20) + 1;
let score = 5;
let highscore = 0


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);


    //When there is no input
    if (!guess){
        document.querySelector('.message').textContent = 'No number';
        
        //Whem player wins
    } else if(guess === secret_number){
        document.querySelector('.message').textContent = 'Correct number';
        //to manipulate a css file, we have to use
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secret_number;

        highscore += 1;
        document.querySelector('.highscore').textContent = highscore;

        //When guess is too high
    } else if (guess > secret_number){

        if(score > 1){
            document.querySelector('.message').textContent = 'Too high';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You loose :(';
            document.querySelector('.score').textContent = 0;
            highscore = 0;
            document.querySelector('.highscore').textContent = 0 ;
        }

        //When guess is too low
    } else if(guess < secret_number){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You loose :(';
            document.querySelector('.score').textContent = 0;
            highscore = 0;
            document.querySelector('.highscore').textContent = 0;
        }
    }

});

 //lets define our again buttons 
 document.querySelector('.again').addEventListener('click', function(){
    score = 5;
    secret_number =  Math.trunc(Math.random()*20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';

 });