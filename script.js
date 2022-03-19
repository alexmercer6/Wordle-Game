const wordleContainer = document.getElementById("wordle-container");
const keyboardRow1 = document.getElementById("keyboard-row-1");
const keyboardRow2 = document.getElementById("keyboard-row-2");
const keyboardRow3 = document.getElementById("keyboard-row-3");
const userInput = document.getElementById("user-input");
const submitButton = document.getElementById("submit-button")

let index = 0;


submitButton.addEventListener("click", function(){
    addGuessToSquares();
})



for(let i = 0; i < 30; i++) {
    let newDiv = addNewElement("div", wordleContainer, "", "wordle-letter")
}

for(let i = 0; i < 10; i++) {
    let firstLineKey = addNewElement("div", keyboardRow1, "", "keys")
}

for(let i = 0; i < 9; i++) {
    let secondLineKey = addNewElement("div", keyboardRow2, "", "keys")
}

for(let i = 0; i < 9; i++) {
    let thirdLineKey = addNewElement("div", keyboardRow3, "", "keys")
}

const wordleLetters = document.querySelectorAll(".wordle-letter")



//functions
function addNewElement(tag, location, text, className) {
    let newElement = document.createElement(tag);
    newElement.textContent = text;
    newElement.classList.add(className)
    location.appendChild(newElement);
    return newElement
}

function addGuessToSquares() {
    let eachLetter = userInput.value.split("");
    for(const letter of eachLetter) {
        wordleLetters[index].textContent = letter;
        index +=1;
    }
}