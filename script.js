const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {

    startButton.textContent = "LOADING...";

    startButton.disabled = true;

    setTimeout(() => {
        alert("Welcome, Player 01! 🎮 Your adventure is about to begin!");

        startButton.textContent = "START GAME";
        startButton.disabled = false;
    }, 700);

});
