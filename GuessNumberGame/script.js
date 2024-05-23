// document.addEventListener('DOMContentLoaded', () => {

    const userInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessButton');
    const message = document.getElementById('message');
    const resetBtn = document.getElementById('resetButton');



    let attemps = 0;
    let randomNum = Math.round((Math.random() * 100) + 1);

    console.log(randomNum);

    guessBtn.addEventListener('click' , () => {

        const userGuess = parseInt(userInput.value , 10)
        attemps++;

        if (isNaN(userGuess)) {
            message.innerText = `Please enter a valid number`;
        } else if (userGuess < 1 || userGuess > 100) {
            message.innerText = `Please enter a number between 1 to 100`;
        } else if (userGuess === randomNum) {
            message.innerText = `Congratulatons!, you guessed it right the number is ${randomNum} in ${attemps} attemps .`;
            guessBtn.disabled = true;
        } else if (userGuess > randomNum) {
            message.innerText = `Your number is too high , Try again`;
        } else {
            message.innerText = `Your number is too low , Try again`;
        }

        userInput.value = '';
    });

    resetBtn.addEventListener('click', () => {
        randomNum = Math.floor((Math.random() * 100) + 1);
        attemps = 0;
        message.textContent = '';
        guessBtn.disabled = false;
        userInput.value = '';
    });

// });

// document.addEventListener('DOMContentLoaded', () => {
//     const guessInput = document.getElementById('guessInput');
//     const guessButton = document.getElementById('guessButton');
//     const resetButton = document.getElementById('resetButton');
//     const message = document.getElementById('message');

//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     let attempts = 0;

//     guessButton.addEventListener('click', () => {
//         const userGuess = parseInt(guessInput.value, 10);
//         attempts++;

//         if (isNaN(userGuess)) {
//             message.textContent = "Please enter a valid number.";
//         } else if (userGuess < 1 || userGuess > 100) {
//             message.textContent = "Please guess a number between 1 and 100.";
//         } else if (userGuess === randomNumber) {
//             message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
//             guessButton.disabled = true;
//         } else if (userGuess < randomNumber) {
//             message.textContent = "Too low! Try again.";
//         } else {
//             message.textContent = "Too high! Try again.";
//         }

//         guessInput.value = '';
//     });

//     resetButton.addEventListener('click', () => {
//         randomNumber = Math.floor(Math.random() * 100) + 1;
//         attempts = 0;
//         message.textContent = '';
//         guessButton.disabled = false;
//         guessInput.value = '';
//     });
// });


