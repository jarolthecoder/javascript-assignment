window.onload = ()=> {
    window.alert(`Rock, Paper, Scissors Game. Let's Start!`);
    const gameOptions = { 1: "rock", 2: "paper", 3: "scissors" };

    // Computer function
    const computerPlay = ()=> {
        let computerOptions = gameOptions;
        return computerOptions[Math.floor(Math.random() * 3) + 1];
    }

    // Game function
    let playerChoice;
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    let result;

    const startGame = (playerSelection, computerSelection)=> {

        // Check conditions for Rock
        if(playerSelection === 'rock' && computerSelection === 'scissors') {
            playerScore++;  
            result = 'You Win! Rock beats Scissors'
            return result + ' - Player: ' + playerScore + ' Computer: ' + computerScore;

        } else if (playerSelection === 'rock' && computerSelection === 'paper') {
            computerScore++;
            result = 'You Lose! Paper beats Rock';  
            return result + ' - Player: ' + playerScore + ' Computer: ' + computerScore;
        }

        // Check conditions for Paper
        if(playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            result = 'You Win! Paper beats Rock'; 
            return result + ' - Player: ' + playerScore + ' Computer: ' + computerScore;
            
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            computerScore++;
            result = 'You Lose! Scissors beats Paper';    
            return result + ' - Player: ' + playerScore + ' Computer: ' + computerScore; 
        }

        // Check conditions for Scissor and Draw
        if (playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            result = 'You Win! Scissors beats Paper';    
            return result + ' - Player: ' + playerScore + ' Computer: ' + computerScore;

        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            computerScore++;
            result = 'You Lose! Scissors beats Paper';
            return result + ' - Player: ' + playerScore + ' Computer: ' + computerScore;
            
        } else {
            result = 'It is a draw!'
            return result + ' - Player: ' + playerScore + ' Computer: ' + computerScore;
        }
    }

    // Loop for rounds and text cases and spelling check
    for(let i=0; i<5; i++){
        round++
        playerChoice = prompt(`Round ${round} - Enter your choice`).toLowerCase();

        if (playerChoice.length <= 1) {
            playerChoice = prompt('Please enter Rock, Paper or Scissors').toLowerCase();
        } else if(playerChoice.indexOf('rock') === -1 &&  playerChoice.indexOf('paper') === -1 &&  playerChoice.indexOf('scissors') === -1 ) {
            playerChoice = prompt('Please enter Rock, Paper or Scissors').toLowerCase();
        }

        const computerSelection = computerPlay();
        console.log('Player: ' + playerChoice);
        console.log('Computer: ' + computerSelection);
        console.log(startGame(playerChoice, computerSelection));
    }

    // Ends game when 5 rounds are completed
    const endGame = ()=> {
        if (playerScore > computerScore) {
            return result = 'Game result: Congratulations! You are the Winner.';

        } else if(playerScore < computerScore) {
            return result = 'Game result: You Lose! Computer Wins.';

        } else {
            return result = 'Game result: It is a draw!'
        }
    }
    console.log(endGame());
}


  