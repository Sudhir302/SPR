let userScore = 0;
let compScore = 0;
const drawAudio = document.getElementById("draw-audio");
const wonAudio = document.getElementById("won-audio");
const loseAudio = document.getElementById("loose-audio")

let compChoice = () =>{
    let compOption = ["Scissor", "Paper", "Rock"];
    let compIndx = Math.floor(Math.random()*3);
    return compOption[compIndx];
}

let choices = document.querySelectorAll(".user-choice");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        userChoice = choice.getAttribute("id");
        playGame();
    });
});

let playGame =()=>{
    const compGenChoice = compChoice();
    console.log(userChoice)
    console.log(compGenChoice);

    // -----------------------------for computer image----------
    if(compGenChoice === "Scissor"){
        document.querySelector('.computer-choice').style.backgroundImage = "url('./image/scissor.jpg')";
        document.querySelector('.computer-choice').style.backgroundSize ="cover";
    }
    else if(compGenChoice === "Paper"){
        document.querySelector('.computer-choice').style.backgroundImage = "url('./image/paper.jpg')";
        document.querySelector('.computer-choice').style.backgroundSize ="cover";
    }
    else{
        document.querySelector('.computer-choice').style.backgroundImage = "url('./image/rock.jpg')";
        document.querySelector('.computer-choice').style.backgroundSize ="cover";
    }

    // ---------------------for score-------------------------

    if(compGenChoice === userChoice){
        drawAudio.play();
    }
    else if(compGenChoice === "Scissor" && userChoice === "Paper" || compGenChoice === "Paper" && userChoice === "Rock" || compGenChoice === "Rock" && userChoice === "Scissor"){
        loseAudio.play();
        document.getElementById('comp-score').innerText = ++compScore;
    }
    else{
        wonAudio.play();
        document.getElementById('user-score').innerText = ++userScore;
    }

}