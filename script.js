let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;
const submitButton = document.getElementById('submitGuess');
const guessField = document.getElementById('guessField');
const resultDisplay = document.getElementById('result');
const attemptsDisplay = document.getElementById('attempts');
const lastResult = document.getElementById('lastResult');
const resetButton = document.getElementById('resetButton');

submitButton.addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = Number(guessField.value);
    attempts++;
    attemptsDisplay.textContent = attempts;

    if (userGuess === randomNumber) {
        resultDisplay.textContent = `Selamat! Tebakan kamu benar. Angka yang benar adalah ${randomNumber}.`;
        resultDisplay.style.color = '#4CAF50';
        lastResult.textContent = `Tebakan berhasil dalam ${attempts} percobaan!`;
        submitButton.disabled = true;
    } else if (attempts === maxAttempts) {
        resultDisplay.textContent = `Game Over! Kamu sudah mencapai ${maxAttempts} percobaan. Angka yang benar adalah ${randomNumber}.`;
        resultDisplay.style.color = '#FF6347';
        lastResult.textContent = `Game Over! Angka yang benar adalah ${randomNumber}.`;
        submitButton.disabled = true;
    } else {
        resultDisplay.textContent = userGuess < randomNumber ? 'Tebakan terlalu rendah!' : 'Tebakan terlalu tinggi!';
        resultDisplay.style.color = '#ff6347';
        guessField.value = '';
        guessField.focus();
    }
}

resetButton.addEventListener('click', resetGame);

function resetGame() {
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    submitButton.disabled = false;
    guessField.value = '';
    resultDisplay.textContent = '';
    lastResult.textContent = '';
    attemptsDisplay.textContent = attempts;
}
