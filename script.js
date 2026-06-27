// ==========================
// GUESS BATTLE - SCRIPT.JS
// ==========================

// Secret Numbers
let secretA = 0;
let secretB = 0;

// Attempts
let attemptsA = 0;
let attemptsB = 0;

// Winner Found?
let gameOver = false;

// Elements
const setup = document.getElementById("setup");
const gameArea = document.getElementById("gameArea");

const winnerBox = document.getElementById("winnerBox");
const winnerText = document.getElementById("winnerText");

const attemptA = document.getElementById("attemptA");
const attemptB = document.getElementById("attemptB");

const hintA = document.getElementById("hintA");
const hintB = document.getElementById("hintB");

// ----------------------
// START GAME
// ----------------------

document.getElementById("startBtn").onclick = function(){

    secretA = Number(document.getElementById("secretA").value);
    secretB = Number(document.getElementById("secretB").value);

    if(secretA < 1 || secretA > 100 ||
       secretB < 1 || secretB > 100){

        alert("Both players must choose a number between 1 and 100.");
        return;
    }

    setup.style.display = "none";
    gameArea.style.display = "block";
};

// ----------------------
// PLAYER A GUESS
// ----------------------

document.getElementById("btnA").onclick = function(){

    if(gameOver) return;

    let guess = Number(document.getElementById("guessA").value);

    if(guess < 1 || guess > 100){

        alert("Enter a number between 1 and 100.");
        return;
    }

    attemptsA++;
    attemptA.innerText = attemptsA;

    if(guess == secretB){

        winner("🏆 Player A Wins!");

        return;

    }else if(guess < secretB){

        hintA.innerHTML="⬆️ UP";

    }else{

        hintA.innerHTML="⬇️ DOWN";

    }

    document.getElementById("guessA").value="";
};

// ----------------------
// PLAYER B GUESS
// ----------------------

document.getElementById("btnB").onclick=function(){

    if(gameOver) return;

    let guess = Number(document.getElementById("guessB").value);

    if(guess < 1 || guess > 100){

        alert("Enter a number between 1 and 100.");
        return;
    }

    attemptsB++;
    attemptB.innerText=attemptsB;

    if(guess==secretA){

        winner("🏆 Player B Wins!");

        return;

    }else if(guess<secretA){

        hintB.innerHTML="⬆️ UP";

    }else{

        hintB.innerHTML="⬇️ DOWN";

    }

    document.getElementById("guessB").value="";
};

// ----------------------
// WINNER FUNCTION
// ----------------------

function winner(message){

    gameOver=true;

    winnerText.innerHTML=message;

    winnerBox.style.display="block";
}

// ----------------------
// PLAY AGAIN
// ----------------------

document.getElementById("restartBtn").onclick=function(){

    location.reload();

};
