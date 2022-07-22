
// function for whole game 
const game = ()=>{
    let pScore = 0;
    let cScore = 0;

    // Start the game function do: fade this out and fade the other back in 
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () =>{
        const options =document.querySelectorAll(".options button");
        const playerHands = document.querySelector(".player-hands");
        const computerHands = document.querySelector(".computer-hands");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });
        //Computer Options
        const computerOptions = ['rock','paper', 'scissors'];

        options.forEach(option=>{
            option.addEventListener('click', function(){
                //Computer Choise
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];
            
            setTimeout(() =>{
            // Here is where we call Compare hands
            compareHands(this.textContent, computerChoice)
            // Update Images
            playerHands.src = `assets/${this.textContent}.png`;
            computerHands.src = `assets/${computerChoice}.png`;
            },2000);

            //Animation
            playerHands.style.animation = "shakePlayer 2s ease";
            computerHands.style.animation = "shakecomputer 2s ease";
            });
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector('.winner');
        // Chicking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = ' It is a tie';
            return;
        }
        // Check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else{
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }
    }

    // It call all the inner function
    startGame();   
    playMatch();
};


// start the game function
game();