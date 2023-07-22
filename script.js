let  score =JSON.parse(localStorage.getItem('score')) || {
    won : 0,
    lost : 0,
    ties : 0
};

/* if(!score){
    score =  {
    won : 0,
    lost : 0,
    ties : 0
};
};*/
let guess = '';
let computersMove = '';
let result = '';
let randomNumber = '';



function playerMove(guess){
    computerMove();
    if(guess === 'Rock'){
        if(computersMove === 'Rock'){
            result = 'Tie';
        }
        else if(computersMove === 'Paper'){
            result = 'Lost';
        }
        else if (computersMove === 'Scissors'){
            result = 'Won';
        }
    }
    if(guess === 'Paper'){
        if(computersMove === 'Rock'){
            result = 'Won';
        }
        else if(computersMove === 'Paper'){
            result = 'Tie';
        }
        else if (computersMove === 'Scissors'){
            result = 'Lost';
        }
    }
    if(guess === 'Scissors'){
        if(computersMove === 'Rock'){
            result = 'Lost';
        }
        else if(computersMove === 'Paper'){
            result = 'Won';
        }
        else if (computersMove === 'Scissors'){
            result = 'Tie';
        }

    }
    if(result === 'Won'){
        score.won++;
    }
    if(result === 'Tie'){
        score.ties++;
    }
    if(result === 'Lost'){
        score.lost++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `your move :   <img src="${guess}.jpg" class="move-icon">. and computer's move: <img src="${computersMove}.jpg" class="move-icon">.`

    updateScore();
   /* alert (`your move is : ${guess} and computer's move is :${computersMove} so The result is ${result}. ` );*/

}
function computerMove(){
    randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 1/3 ){
        computersMove = 'Rock';
    }
    if(randomNumber >= 1/3 && randomNumber < 2/3 ){
        computersMove = 'Paper';
    }
    if(randomNumber >= 2/3 && randomNumber < 1 ){
        computersMove = 'Scissors';
    }
    return computersMove;
}
function updateScore(){
    document.querySelector('.js-scores').innerHTML = `Your score is won :${score.won} ,ties ${score.ties} ,lost ${score.lost}. `;
}