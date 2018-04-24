"use strict"

    const words = ["Harry Potter", "Hermione Granger", "Hagrid", "Ron Weasley"];
    let wins = 0;

   
    function wordGenerator(words) {
        const randIndex = Math.floor(Math.random() * words.length);
        const word = words[randIndex].toUpperCase();
        return [...word];
    }

    function setUpWordToGuessDisplay(word) {
        let display = [];
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== " ") {
                display.push("_");
            } else {
                display.push("|");
            }        
        }
        return display;
    }

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
        } else {
            alert(`You used up all your guesses. The correct word was ${currentWord.join("")}`);
            return resetFunction();
        }
    }

    function checkIfIncludes(letter) {
        if (currentWord.includes(letter)) {
            for (let i = 0; i < currentWord.length; i++) {
                if (currentWord[i] === letter) {
                    currentWordDisplay[i] = letter;
                    displayStringsNicely(currentWordDisplay, "word");
                }
            }        
            
            if (!currentWordDisplay.includes("_")) {
                wins++;
                document.getElementById("wins").innerHTML = wins;
                alert(`You win! ${currentWord.join("")} was the correct guess.`);
                return resetFunction();
            }
        } else {
            falseGuesses.push(letter);
            displayStringsNicely(falseGuesses, "letters-already-guessed");
        }
    }

    function displayStringsNicely(str, id) {
        let word = "";
        str.forEach(letter => word += letter + " ");
        return document.getElementById(id).innerHTML = word;
    }

    function clearHtmlDisplay(id) {
        return document.getElementById(id).innerHTML = "";
    }

    let numberOfGuesses, currentWordDisplay, falseGuesses, guessedLetters, currentWord;

    function resetFunction() {
        currentWord = wordGenerator(words);
        numberOfGuesses = 10;
        currentWordDisplay = setUpWordToGuessDisplay(currentWord);
        guessedLetters = [];
        falseGuesses = [];
        clearHtmlDisplay("letters-already-guessed");
        clearHtmlDisplay("number-of-guesses-remaining");
        displayStringsNicely(currentWordDisplay, "word");
    }


document.onkeyup = (getLetter);

resetFunction();
