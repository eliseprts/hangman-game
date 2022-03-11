

const wordElem = document.getElementById("wordToGuess");
const playBtn = document.getElementById("playBtn");
const popup = document.getElementById("popupContainer");
const finalMessage = document.getElementById("finalMessage");

// WORDS TO GUESS

const wordsToGuess = ["crocodile", "tortue", "singe", "poisson", "araignée", "perroquet"];
let selectedWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

console.log(selectedWord);

const arrRightLetters = [];
const arrWrongLetters = [];

// DISPLAY WORD TO GUESS

function displayWord() {

    wordElem.innerHTML = `
            ${selectedWord
            .split('')
            .map(
                letter => `
                    <span class="letterToGuess">
                        ${arrRightLetters.includes(letter) ? letter : ''}
                    </span>
                    `
            )
            .join('')
        }
        `;

    const internWord = wordElem.innerText.replace(/\n/g, '');

    if (internWord === selectedWord) {
        finalMessage.innerHTML = "Bravo ! Tu as gagné !";
        popup.style.display = "flex";
    }

}

displayWord();

// PLAY

function selectLetter(element) {

    var selectedLetter = element.innerHTML;

    if (selectedWord.includes(selectedLetter)) {
        arrRightLetters.push(selectLetter);
    }

}