const game = () => {
    let pScore = 0;
    let cScore = 0;

//start game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = documnet.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

 //play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector(".playerhand");
        const computerHand = document.querySelector(".computerhand");
        const hands = document.querySelector('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationed', function(){
                this.style.animation = '';
            });
        });
        //comp options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener('click', function() {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //comparing hands
                    compareHands(this.textContent, computerChoice);
                    //img update
                playerHand.src = `./assets/${this.textContent}.png`;
                computerChoice.src = `./assets/${computerChoice}.png`;
                }, 2000)
            
                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };


    const updateScore = () =>{
        const playerScore = document.querySelector('.playerscore p');
        const computerScore = document.querySelector('.computerscore p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) =>{
        //update text
        const winner = document.querySelector(".winner");
        //tie
        if(playerChoice === computerChoice){
            winner.textContent = 'A tie...';
            return;
        }
        //rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Karen wins, which was expected tbh...';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'hey, look at that! you won!';
                cScore++;
                updateScore();
                return;

            }
        }
        
        //paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'sciccors'){
                winner.textContent = "Karen wins, which was expected tbh...";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'hey, look at that! you won!';
                pScore++;
                updateScore();
                return;
            }
        }
        
        //scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = "Karen wins, which was expected tbh...";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'hey, look at that! you won!';
                pScore++;
                updateScore();
                return;

            }
        }
    };

    startGame();
    playMatch();
};
game();