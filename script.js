// let randomNumber = Math.floor(Math.random() * 15) + 1;
// let guesses = [];
// let numberOfGuesses = 0;

// function checkGuess() {
//     const guessInput = document.getElementById('guessInput');
//     const message = document.getElementById('message');
//     const guessedNumbers = document.getElementById('guessedNumbers');
//     const numberOfGuessesElement = document.getElementById('numberOfGuesses');

//     const userGuess = parseInt(guessInput.value);
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 15) {
//         message.textContent = 'Please enter a valid number between 1 and 15.';
//         return;
//     }

//     guesses.push(userGuess);
//     numberOfGuesses++;

//     if (userGuess === randomNumber) {
//         message.textContent = 'Correct! You guessed the number!';
//         guessInput.disabled = true;
//     } else if (userGuess > randomNumber) {
//         message.textContent = 'Your guess is too high.';
//     } else {
//         message.textContent = 'Your guess is too low.';
//     }

//     guessedNumbers.textContent = `Guessed numbers are: ${guesses.join(', ')}`;
//     numberOfGuessesElement.textContent = `No. of guesses: ${numberOfGuesses}`;
//     guessInput.value = '';
// }


// ?======================


let randomNumber = Math.floor(Math.random() * 15) + 1;
let guesses = [];
let numberOfGuesses = 0;
const maxGuesses = 3; // Maximum allowed guesses

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const guessedNumbers = document.getElementById('guessedNumbers');
    const numberOfGuessesElement = document.getElementById('numberOfGuesses');

    const userGuess = parseInt(guessInput.value);
    
    // Validate user input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 15) {
        message.textContent = 'Please enter a valid number between 1 and 15.';
        return;
    }

    guesses.push(userGuess);
    numberOfGuesses++;

    // Check if the guess is correct
    if (userGuess === randomNumber) {
        message.textContent = 'Correct! You guessed the number!';
        guessInput.disabled = true;
    } else if (numberOfGuesses >= maxGuesses) {
        message.textContent = `Game over! The correct number was ${randomNumber}.`;
        guessInput.disabled = true; // Disable input after 3 tries
    } else if (userGuess > randomNumber) {
        message.textContent = 'Your guess is too high.';
    } else {
        message.textContent = 'Your guess is too low.';
    }

    // Update the guessed numbers and number of guesses
    guessedNumbers.textContent = `Guessed numbers: ${guesses.join(', ')}`;
    numberOfGuessesElement.textContent = `No. of guesses: ${numberOfGuesses}`;

    // Clear the input for the next guess
    guessInput.value = '';
}
