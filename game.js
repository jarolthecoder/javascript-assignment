window.onload = ()=> {
    window.alert(`Rock, Paper, Scissors Game. Let's Start!`);
    const gameOptions = { 1: "rock", 2: "paper", 3: "scissors" };
    let playerScore = 0;
    let computerScore = 0;
    let result;


    // Computer function
    const computerPlay = ()=> {
        let computerOptions = gameOptions;
        return computerOptions[Math.floor(Math.random() * 3) + 1];
    }

    const playerPlay = (round)=> {
       let playerInput = prompt(`Round ${round} - Enter your choice`).toLowerCase();
        return playerInput
    }


    const playRound = (playerSelection, computerSelection)=> {

        if (playerSelection === 'rock') {
            switch (computerSelection) {
                case 'rock':
                    result = 'It is a draw!';
                    break;
                case 'paper':
                    result = 'You Lose! Paper beats Rock';
                    computerScore++;
                    break;
                case 'scissors':
                    result = 'You Win! Rock beats Scissors';
                    playerScore++;
                    break;
            };

        } else if (playerSelection === 'paper') {
            switch (computerSelection) {
                case 'rock':
                    result = 'You Win! Paper beats Rock'; 
                    playerScore++;
                    break;
                case 'paper':
                    result = 'It is a draw!';
                    break;
                case 'scissors':
                    result = 'You Lose! Scissors beats Paper';
                    computerScore++;
                    break;
            };

        } else if (playerSelection === 'scissors') {
            switch (computerSelection) {
                case 'rock':
                    result = 'You Lose! Scissors beats Paper';
                    computerScore++;
                    break;
                case 'paper':
                    result = 'You Win! Scissors beats Paper';
                    playerScore++;
                    break;
                case 'scissors':
                    result = 'It is a draw!';
                    break;
            };
        } 
        
        else {
            playerSelection = prompt('Please enter Rock, Paper or Scissors').toLowerCase();
            if (playerSelection != undefined) {
                playRound(playerSelection, computerSelection);
            };
        };

        return result + ' - Player: ' + playerScore + ' Computer: ' + computerScore;
    
    }

    const game = () => {
        let round = 0;

        for(let i=0; i<5; i++){
            round++

            const playerChoice = playerPlay(round)
            const computerChoice = computerPlay();
            const roundResult = playRound(playerChoice, computerChoice)

            console.log('Player: ' + playerChoice);
            console.log('Computer: ' + computerChoice);
            console.log(roundResult)
        }

    }

    game()

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

    console.log(endGame())
}


  