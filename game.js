window.onload = ()=> {
    window.alert('Rock, Paper and Scissor Game');

    // Player
    let playerChoice = window.prompt('Enter your choice');

    const playerPlay = ()=> {
        if (playerChoice.length <= 1) {
            playerChoice = window.prompt('Please enter Rock, Paper or Scissor');
        }
        console.log('Player: ' + playerChoice)
        return playerChoice;
    }
    playerPlay()

    //Computer
    const computerOptions = ['Rock', 'Paper', 'Scissor'] 
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];

    const computerPlay = ()=> {
        console.log('Computer: ' + computerChoice)
        return computerChoice;
    }
    computerPlay()


    // Game
    const startGame = (playerSelection, computerSelection)=> {
    
        let result;

        //Check conditions on for Rock
        if(playerSelection === 'Rock' || playerSelection === 'rock' && computerSelection === 'Scissor') {
                return result = 'You Win! Rock beats Scissor';

            } else if (playerSelection === 'Rock' || playerSelection === 'rock' && computerSelection === 'Paper') {
                return result = 'You Lose! Paper beats Rock';
            }

            //Check conditions on for Paper
            if(playerSelection === "Paper" || playerSelection === "paper" && computerSelection === 'Rock') {
                return result = 'You Win! Paper beats Rock'
            
            } else if (playerSelection === "Paper" || playerSelection === "paper" && computerSelection === "Scissor") {
                result = 'You Lose! Scissor beats Paper'
                return result = 'You Lose! Scissor beats Paper'
            }


            //Check conditions on for Scissor and Draw
            if (playerSelection === "Scissor" || playerSelection === "scissor" && computerSelection === 'Paper') {
                return result = 'You Win! Scissor beats Paper'
            
            } else if (playerSelection === "Scissor" || playerSelection === "scissor" &&  computerSelection === "Rock") {
                return result = 'You Lose! Rock beats Scissor'
            
            }  else {
                return result = 'It is a draw!'
            }

    }

    console.log(startGame(playerChoice, computerChoice));
}


  