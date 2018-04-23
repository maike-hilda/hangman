"use strict"

document.onkeyup = (getLetter);

const words = ["testword"];
const currentWord = [..."TESTWORD"];
let currentWordDisplay = [];
let numberOfGuesses = 10;
let wins = 0;
document.getElementById("number-of-guesses-remaining").innerHTML = numberOfGuesses;

for (let i = 0; i < currentWord.length; i++) {
    currentWordDisplay.push("_");
}

document.getElementById("word").innerHTML = currentWordDisplay;

let guessedLetters = [];
let falseGuesses = [];

function getLetter(event) {
    if (numberOfGuesses > 0) {

        const userGuess = event.code;
        // verification
        if (userGuess.includes("Key") && guessedLetters.indexOf(userGuess[3]) === -1) {
            guessedLetters.push(userGuess[3]);
            console.log(guessedLetters)
            numberOfGuesses--;
            document.getElementById("number-of-guesses-remaining").innerHTML = numberOfGuesses;
    
            return checkIfIncludes(userGuess[3]);
        } else {
            console.log("invalid or repeated input");
        }
    }
}

function checkIfIncludes(letter) {
    if (currentWord.includes(letter)) {
        for (let i = 0; i < currentWord.length; i++) {
            if (currentWord[i] === letter) {
                currentWordDisplay[i] = letter;
            }
        }        
        document.getElementById("word").innerHTML = currentWordDisplay;
    } else {
        falseGuesses.push(letter);
        document.getElementById("letters-already-guessed").innerHTML = falseGuesses;
    }
}

