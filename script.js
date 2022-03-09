(() => {

    // Word to guess

    const wordToGuess = "crocodile"
    const arrWordToGuess = wordToGuess.split("")

    console.log(wordToGuess);
    console.log(arrWordToGuess);

    // document.getElementById("letterC").addEventListener("click", () => {

    //     const C = document.getElementById("letterC").innerHTML
    //     document.getElementById("letter1").innerHTML = C
    //     document.getElementById("letter4").innerHTML = C

    // })

    const letterBtns = document.getElementsByClassName("letter");

    for (var i = 0; i < letterBtns.length; i++) {

        letterBtns[i].addEventListener("click", () => {

            // console.log("test")

            const letter1 = letterBtns[i].innerHTML
            console

            for (let elem of letterBtns) {
                console.log(elem.innerHTML)
            }

        })
    }


})();