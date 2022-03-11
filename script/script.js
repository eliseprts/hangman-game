// WORDS TO GUESS

const wordsToGuess = ["crocodile", "tortue", "singe", "poisson", "araignée", "perroquet"];

// Random word to guess

function randomIndex() {
    let i = Math.floor(Math.random() * wordsToGuess.length);
    return i; // Return index of random word
}

let indexOfRW = 0;
indexOfRW = randomIndex();

var randomWord = wordsToGuess[indexOfRW];
var randomWordLength = randomWord.length;
console.log(randomWord);

// Display inputs word to guess


function displayInputs() {

    for (var i = 1; i <= randomWordLength; i++) {
        document.getElementById("guessedWord").innerHTML += '<div id="guessedLetterContainer' + i + '" class="guessedLetterContainer"><input type="text" id="guessedLetter' + i + '" class="guessedLetter" disabled></div>';
    }

    for (var j = 1; j <= randomWordLength; j++) {
        document.getElementById("hiddenWord").innerHTML += '<div id="hiddenLetterContainer' + i + '" class="hiddenLetterContainer"><input type="text" id="hiddenLetter' + i + '" class="hiddenLetter" value="' + randomWord[j - 1] + '"></div>';
    }

}

displayInputs();

// PLAY

var error = 0;
var wrong = false;
var nbWin = 0;

function selectLetter(a) {

    var letter = 1;

    document.getElementById("letter" + a).disabled = "true";
    document.getElementById("letter" + a).style.backgroundColor = "black";
    document.getElementById("letter" + a).style.color = "grey";
    document.getElementById("inputTextHidden").value = a;

    // Right letters
    for (var k = 1; k <= randomWordLength; k++) {

        if (a == randomWord[k - 1]) {
            document.getElementById("guessedLetter" + k).value = a;
            nbWin++;
        }

    }

    // Wrong letters
    for (var l = 1; l <= randomWordLength; l++) {

        if (a != randomWord[l - 1]) {
            wrong = true;
        }

        else if (a == randomWord[l - 1]) {
            wrong = false;
            break;
        }
    }

}