

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
counter.innerHTML = 7;

// function decrementCounter() {
//     do {
//         counter.innerHTML - 1;
//     }
//     while (counter.innerHTML >= 0)
// }

// function incrementCounter() {
//     for (c = 7; c <= 7; c--) {
//         counter.innerHTML = c + "/7";
//     }
// }

// incrementCounter();


// Play

const letterBtns = document.querySelectorAll(".letter");

// const letter = "a";

// if (selectedWord.includes(letter)) {
//     arrRightLetters.push(letter);
//     displayWord();
// }

// else {
//     arrWrongLetters.push(letter);
//     // incrementCounter();
// }



for (var i = 0; i < letterBtns.length; i++) {

    letterBtns[i].addEventListener("click", () => {

        console.log(selectedLetter);

        // if (selectedWord.includes(selectedLetter)) {
        //     arrRightLetters.push(selectedLetter);
        //     displayWord();
        // }

    })
}
const selectedLetter = letterBtns[i].innerText;

