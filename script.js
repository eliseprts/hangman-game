

const wordElem = document.getElementById("wordToGuess");
const playBtn = document.getElementById("playBtn");
const popup = document.getElementById("popupContainer");
const finalMessage = document.getElementById("finalMessage");

// Words to guess

const wordsToGuess = ["crocodile", "tortue", "singe", "poisson", "araignée", "perroquet"];
let selectedWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];

console.log(selectedWord);

const arrRightLetters = [];
const arrWrongLetters = [];

// Display words to guess

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
        finalMessage.innerText = "Bravo ! Tu as gagné !";
        popup.style.display = "flex";
    }

}

displayWord();

// Counter

const counter = document.getElementById("tryCounterNbr");
counter.innerHTML = "7";

function incrementCounter() {
    for (c = 7; c <= 7; c--) {
        counter.innerHTML = c + "/7";
    }
}


// Play

const letter = "x"

if (selectedWord.includes(letter)) {
    arrRightLetters.push(letter);
    displayWord();
}

else {
    arrWrongLetters.push(letter);
    incrementCounter();
}


// const letterBtns = document.querySelectorAll(".letter");

// for (var i = 0; i < letterBtns.length; i++) {

//     let selectedLetter = letterBtns[i].innerText;

//     letterBtns[i].addEventListener("click", () => {

//         console.log(selectedLetter);

//     })
// }


