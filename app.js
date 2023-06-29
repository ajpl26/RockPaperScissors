const game = () =>{
    let pScore = 0;
    let cScore = 0;

    const tryAgain = document.querySelector(".play-again");
    tryAgain.addEventListener("click", () =>{
        location.reload();
    });

    // Here our game will start
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Match start

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const pHand = document.querySelector('.player-hand');
        const cHand = document.querySelector('.computer-hand');
        // const win = document.querySelector('.winner');
        // win.textContent("------------------");

        const comOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function(){
                const comNumber = Math.floor(Math.random() * 3);
                const comChoice = comOptions[comNumber];

                // comparing hands
                compareHands(this.textContent, comChoice);

                // update images
                pHand.src = `${this.textContent}.png`;
                cHand.src = `${comChoice}.png`;
            });
        });
    };

    const updateScore = () =>{

        const playerScore = document.querySelector(".player-score p");
        const comScore = document.querySelector(".computer-score p");

        playerScore.textContent = pScore;
        comScore.textContent = cScore;


    }

    const compareHands = (playerChoice, computerChoice) =>{

        // update text
        const winner = document.querySelector(".winner");
        // console.log(winner.textContent);
        console.log(playerChoice);
        console.log(computerChoice);
        // we are checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie.";
            // console.log("not working anymore");
            return;
        }

        // checking for rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "You wins!";
                pScore++;
                result();
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins!"
                cScore++;
                result();
                updateScore();
                return;
            }
        }

        
        // checking for paper
        if(playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "You wins!";
                pScore++;
                result();
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins!"
                cScore++;
                result();
                updateScore();
                return;
            }
        }

        
        // checking for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = "You wins!";
                pScore++;
                result();
                updateScore();
                return;
            }
            else{
                winner.textContent = "Computer Wins!"
                cScore++;
                result();
                updateScore();
                return;
            }
        }
    }


    const result = () =>{

        const resultDisplay = document.querySelector(".result-display");

        const match = document.querySelector('.match');

        const res = document.querySelector(".result");


        if(pScore === 10){
            // match.classList.add("fadeOut");
            match.style.opacity = 0;
            match.style.pointerEvents = "none";
            res.classList.add("fadeIn");
            resultDisplay.textContent = "Congratulations! You Won";
            return;
        }
        if (cScore === 10){
            // match.classList.add("fadeOut");
            match.style.opacity = 0;
            match.style.pointerEvents = "none";
            res.classList.add("fadeIn");
           
            resultDisplay.textContent = "You Lose! ";
            return;
        }
    }

    startGame();
    playMatch();
};

game();

