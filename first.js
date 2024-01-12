

// *******************************************************ROCK PAPER AND SCISSORS GAME CODE *************************************

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let compCount = 0; let userCount = 0;
let userNum = document.querySelector("#user-score");
let compNum = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    if (userChoice === compChoice) {
        gameDraw();
    }
    else {
        let userwin = true;
        if (userChoice === "rock") {
            // scissor , paper
            userwin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "scissor") {
            // rock, paper
            userwin = compChoice === "rock" ? false : true;
        }
        else {
            // rock, scissor
            userwin = compChoice === "scissor" ? false : true;
        }
        showWinner(userwin);
    }
}

const showWinner = (userwin) => {
    if (userwin) {
        msg.innerText = "You win !! :)";
        userCount++;
        userNum.innerText = userCount;
        msg.style.backgroundColor = "green";
    }
    else {
        msg.innerText = "You Lose !! :(";
        compCount++;
        compNum.innerText = compCount;
        msg.style.backgroundColor = "red";
    }
}

const gameDraw = () => {
    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Game is Draw. Play Agin !!";
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

