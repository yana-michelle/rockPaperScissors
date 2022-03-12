const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = documnet.querySelector(".match");

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeout");
            match.classList.add("fadein");
        });
    };
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

    const compareHands = (playerChoice, computerChoice) =>{
        if(playerChoice === computerChoice){
            winner.textContent = 'A tie...';
            return;
        }
        if(playerChoice === 'rock'){
            if(computerChoice === 'paper'){
                winner.textContent = "hey, look at that! you won!"
            }else{
                winner.textContent = 'Karen wins, which was expected tbh...';
                return;

            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'sciccors'){
                winner.textContent = "Karen wins, which was expected tbh..."
            }else{
                winner.textContent = 'hey, look at that! you won!';
                return;

            }
        }
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = "Karen wins, which was expected tbh..."
            }else{
                winner.textContent = 'hey, look at that! you won!';
                return;

            }
        }
    }

    };
    startGame();
    playMatch();
};

game();