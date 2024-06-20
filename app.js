let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userscore");
const compScorePara = document.querySelector("#computerscore");
const hidden = document.querySelector(".hide");
const hidden1 = document.querySelector(".hide1");
const hidden2 = document.querySelector(".hide2");
const hidden3 = document.querySelector(".hide3");



const showWinner = (userWin) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = "You win! play again";
        msg.style.backgroundColor = "green";

    } else {
        computerscore++;
        compScorePara.innerText = computerscore;
        msg.innerText = "You lost. Better luck next time";
        msg.style.backgroundColor = "red";
    }
}
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    return options[randomNumber];

}

const hideAllElements = () => {
    hidden1.style.display = "none";
    hidden2.style.display = "none";
    hidden3.style.display = "none";
};


const playGame = (userChoice) => {

    hideAllElements();
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        console.log("match draw");
        msg.innerText = "Match draw!! Play again";
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

    if (computerChoice === "rock") {
        hidden.style.display = "block";
        hidden1.style.display = "block";
    } else if (computerChoice === "paper") {
        hidden.style.display = "block";
        hidden2.style.display = "block";
    } else if (computerChoice === "scissors") {
        hidden.style.display = "block";
        hidden3.style.display = "block";
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        console.log("hello");
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});


