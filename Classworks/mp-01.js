const arr = ["img/mp-01-01.jpg", "img/mp-01-02.jpg", "img/mp-01-03.jpg"];
const arrWord = ["cubo", "gafas", "reloj"];
let counter = 0;
let i = selectRandomImage();
let score = 0;
let highScore = 0;
document.body.classList.add('backGroundBody');
let btnPlayAgain = document.querySelector('.playAgain');

const showbtnPlayAgain = function () {
    btnPlayAgain.classList.remove('hidden');
};

const hiddenbtnPlayAgain = function () {
    btnPlayAgain.classList.add('hidden');
};

const selectRandomImage = () => {
    document.querySelector(".countQuestion").textContent = "Question number " + counter;
    let index = Math.floor(Math.random() * 3);
    console.log(index);
    document.getElementById("imgToGuess").src = arr[index];
    return index;
}

const play = () => {
    counter++;
    if (counter <= 3) {
        const word = arrWord[i];
        const messageElement = document.querySelector(".message");
        const letter = document.getElementById("input").value;
        if (!letter) {
            messageElement.textContent = "No Letter 🥵";
            score -= 2;
        }
        else if (letter === word[0]) {
            messageElement.textContent = "correct Answer 🤙";
            score += 5;
        }
        else if (letter != word[0]) {
            messageElement.textContent = "wrong Answer 👎";
            score -= 2;
        }
        document.getElementById("input").value = "";
        document.querySelector(".score").textContent = "score : " + score;
        if (counter < 3) {
            i = selectRandomImage();
        }
    }
}

document.querySelector(".play").addEventListener('click', play);

const gameOver = () => {
    if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = "🍭 high score " + score;
    }
    document.body.classList.remove('backGroundBody');
    showbtnPlayAgain();
}

