let attemptV = document.getElementById("attemptsJ");
let guessV = document.getElementById("guessJ");
let estimateV = document.getElementById("estimateJ");
let resetV = document.getElementById("resetBtn");
let inputS = document.getElementById("inputJ");

let guesses = [];
let numOfAttempt = 0;
let newGuess;

const minR = 1;
const maxR = 1000;
let randomG = Math.floor(Math.random() * (maxR - minR)) + minR;
console.log(randomG);

resetV.onclick = function()
{
    guesses = [];
    numOfAttempt = 0;
    randomG = Math.floor(Math.random() * (maxR - minR)) + minR;
    console.log(randomG);
    estimateV.textContent = ``;
    inputS.value = ``;
    attemptV.textContent = numOfAttempt;
}

guessV.onclick = function()
{
    newGuess = inputS.value;
    newGuess = Number(newGuess);

    if(newGuess < 1 || newGuess > maxR)
    {
        estimateV.textContent = `Pogađajte između 1 - ${maxR}!`;
    }

    else
    {
        if(guesses.includes(newGuess))
        {
            estimateV.textContent = `Već ste probali to!`;
        }

        else if(newGuess != randomG)
        {
            if(newGuess > randomG)
            {
                estimateV.textContent = `Vaš broj je prevelik!`;
                numOfAttempt++;
                attemptV.textContent = numOfAttempt;
            }
            else
            {
                estimateV.textContent = `Vaš broj je premali!`;
                numOfAttempt++;
                attemptV.textContent = numOfAttempt;
            }
        }
        else
        {
            estimateV.textContent = `Pogodili ste broj! Traženi broj: ${randomG}`;
            numOfAttempt++;
            attemptV.textContent = numOfAttempt;
        }
    }
    guesses.push(newGuess);  
}








