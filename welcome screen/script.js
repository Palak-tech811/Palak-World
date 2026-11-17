// PALAK-WORLD CHARACTER CREATOR

const startButton = document.getElementById("startButton");
const welcomeScreen = document.querySelector(".game-world");
const characterScreen = document.getElementById("characterScreen");

// OPEN CHARACTER CREATOR

startButton.addEventListener("click", function () {
    welcomeScreen.classList.add("hidden");
    characterScreen.classList.remove("hidden");
});

// CHARACTER PRESETS

const presets = {
    explorer: {
        emoji: "🧑🏻‍🌾",
        name: "THE EXPLORER"
    },

    coder: {
        emoji: "👩🏻‍💻",
        name: "THE CODER"
    },

    artist: {
        emoji: "👩🏽‍🎨",
        name: "THE ARTIST"
    },

    hero: {
        emoji: "🧙🏻‍♀️",
        name: "THE HERO"
    }
};

const presetButtons = document.querySelectorAll(".preset-card");
const avatar = document.getElementById("avatar");
const characterName = document.getElementById("characterName");

// SELECT A CHARACTER

presetButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedPreset = button.dataset.preset;
        const character = presets[selectedPreset];

        avatar.textContent = character.emoji;
        characterName.textContent = character.name;

        presetButtons.forEach(function (card) {
            card.classList.remove("active");
        });

        button.classList.add("active");

    });

});

// UPDATE PLAYER NAME

const playerName = document.getElementById("playerName");

playerName.addEventListener("input", function () {

    if (playerName.value.trim() !== "") {
        characterName.textContent =
            playerName.value.trim().toUpperCase();
    }

});

// CONFIRM CHARACTER

const confirmButton =
    document.getElementById("confirmCharacter");

confirmButton.addEventListener("click", function () {

    const selectedCard =
        document.querySelector(".preset-card.active");

    const selectedCharacter = selectedCard.dataset.preset;

    const player = {
        name: playerName.value.trim() || "Player 01",
        character: selectedCharacter,
        skin: document.getElementById("skinTone").value,
        hairstyle: document.getElementById("hairStyle").value,
        outfit: document.getElementById("outfit").value,
        accessory: document.getElementById("accessory").value
    };

    localStorage.setItem(
        "palakWorldPlayer",
        JSON.stringify(player)
    );

    alert(
        "Character created successfully! Welcome to PALAK-WORLD, "
        + player.name + "! 🎮"
    );

});