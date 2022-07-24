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
    };

    // Player selection function
    const playerPlay = (round)=> {
       let playerInput = prompt(`Round ${round} - Enter your choice`).toLowerCase();
        return playerInput;
    };

    // Round function
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
        };

        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
                playerSelection = prompt('Invalid choice! Please enter Rock, Paper or Scissors.').toLowerCase();  
        }; 

        let messagePlayerSelection = `Player: ${playerSelection}`;
        let messageComputerSelection = `Computer: ${computerSelection}`;
        let messageRoundResult = result;

        return {
            messagePlayerSelection: messagePlayerSelection,
            messageComputerSelection: messageComputerSelection,
            messageRoundResult: messageRoundResult,
            playerScore: playerScore,
            computerScore: computerScore,
        };
    
    };

    // Game function - Loops game for 5 rounds
    const game = () => {
        let round = 0;

        for(let i=0; i<5; i++){
            round++
            const playerChoice = playerPlay(round);
            const computerChoice = computerPlay();
            const roundResult = playRound(playerChoice, computerChoice);

            console.log(`------- Round ${round} -------`);
            console.log(roundResult.messagePlayerSelection);
            console.log(roundResult.messageComputerSelection);
            console.log(roundResult.messageRoundResult);
            console.log( 'Player: ' + playerScore + ' Computer: ' + computerScore);
        };
    };

    game();

    // Final result function - Ends game when 5 rounds are completed
    const endGame = ()=> {
        if (playerScore > computerScore) {
            result = 'Congratulations! You are the Winner.';
            console.log(`------ Game Result ------`);
            console.log( 'Player: ' + playerScore + ' Computer: ' + computerScore);
            console.log(result);

        } else if(playerScore < computerScore) {
            console.log(`------ Game Result ------`);
            result = 'You Lose! Computer Wins.';
            console.log( 'Player: ' + playerScore + ' Computer: ' + computerScore);
            console.log(result);

        } else {
            console.log(`------ Game Result ------`);
            result = 'It is a draw!';
            console.log( 'Player: ' + playerScore + ' Computer: ' + computerScore);
            console.log(result);
        }

        return result;
    };

    endGame();
};


  
