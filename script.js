let img = document.querySelectorAll(".img");
let msg = document.querySelector(".msg-fin");
let compScore = 0;
let userScore = 0;

let us = document.querySelector("#us");
let cs = document.querySelector("#cs");

const generateChoice = () => {
    let arr = ["stone", "paper","scissor"];
    let choice = Math.floor(Math.random() * 3);
    return arr[choice];
}

const playGame = (userChoice) => {
    let compChoice = generateChoice();
    console.log(compChoice);
    if(compChoice === userChoice) {
        console.log("Game was drawn");
        msg.innerText = "Game was draw!!!";
        msg.style.backgroundColor = "#F7A9A8";
    } else if(userChoice === "paper") {
        if(compChoice === "scissor") {
            msg.innerText = `comp wins ${compChoice} beats ${userChoice}`;
            compScore++;
            cs.innerText = compScore;
            msg.style.backgroundColor = "red";

        } else {
            msg.innerText = `you wins ${userChoice} beats ${compChoice}`;
            userScore++;
            us.innerText = userScore;
            msg.style.backgroundColor = "green";
        }
    } else if(userChoice === "stone") {
        if(compChoice === "scissor") {
            msg.innerText = `you wins ${userChoice} beats ${compChoice}`;
            userScore++;
            us.innerText = userScore;
            msg.style.backgroundColor = "green";
        } else {
            msg.innerText = `comp wins ${compChoice} beats ${userChoice}`;
            compScore++;
            cs.innerText = compScore;
            msg.style.backgroundColor = "red";
        }
    } else {
        if(compChoice === "stone") {
            msg.innerText = `comp wins ${compChoice} beats ${userChoice}`;
            compScore++;
            cs.innerText = compScore;
            msg.style.backgroundColor = "red";
        } else {
            msg.innerText = `you wins ${userChoice} beats ${compChoice}`;
            userScore++;
            us.innerText = userScore;
            msg.style.backgroundColor = "green";
        }
    }
}

img.forEach((box) => {
    box.addEventListener("click", () => {
        let userChoice = box.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});