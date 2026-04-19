let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [
    { question: "What is HTML?", answer: "HyperText Markup Language" },
    { question: "What is CSS?", answer: "Cascading Style Sheets" }
];

let currentIndex = 0;

function displayCard() {
    document.getElementById("question").innerText =
        flashcards[currentIndex].question;

    document.getElementById("answer").innerText =
        flashcards[currentIndex].answer;

    document.getElementById("answer").classList.add("hidden");
}

function showAnswer() {
    document.getElementById("answer").classList.remove("hidden");
}

function nextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
    }
    displayCard();
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    displayCard();
}

function addFlashcard() {
    let q = document.getElementById("newQuestion").value;
    let a = document.getElementById("newAnswer").value;

    if (q === "" || a === "") {
        alert("Please enter both question and answer");
        return;
    }

    flashcards.push({ question: q, answer: a });
    localStorage.setItem("flashcards", JSON.stringify(flashcards));

    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";

    currentIndex = flashcards.length - 1;
    displayCard();
}

displayCard();