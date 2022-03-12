const game = () => {
    let pScore = 0;
    let cScore = 0;

//start game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = documnet.querySelector(".match");

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeout");
            match.classList.add("fadein");
        });
    };

 //play match
    const playMatch = () => {
        const option = document.querySelectorAll('.option button');
        const playerHand = document.querySelector(".playerhand");
        const computerHand = document.querySelector(".computerhand");
        const computerOption = ['rock', 'paper', 'scissors'];

        option.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[computerNumber];

                computerHands(this.textContent, computerChoice);

                playerHand.src = `./assets/${this.textContent}.png`;
                computerChoice.src = `./assets/${computerChoice}.png`;
            
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
        if(playerChoice === computerChoice){
            winner.textContent = 'A tie...';
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'paper'){
                winner.textContent = "hey, look at that! you won!";
                pScore++;
                updateScore();
            }else{
                winner.textContent = 'Karen wins, which was expected tbh...';
                cScore++;
                updateScore();
                return;

            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'sciccors'){
                winner.textContent = "Karen wins, which was expected tbh...";
                cScore++;
                updateScore();
            }else{
                winner.textContent = 'hey, look at that! you won!';
                pScore++;
                updateScore();
                return;

            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = "Karen wins, which was expected tbh...";
                cScore++;
                updateScore();
            }else{
                winner.textContent = 'hey, look at that! you won!';
                pScore++;
                updateScore();
                return;

            }
        }
    }

    };
    startGame();
    playMatch();

game();