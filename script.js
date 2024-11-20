document.addEventListener('DOMContentLoaded', () => {
    const facts = [
        "Honey never spoils.",
        "A day on Venus is longer than a year on Venus.",
        "Bananas are berries, but strawberries aren't.",
        "There are more stars in the universe than grains of sand on Earth.",
        "Octopuses have three hearts."
    ];

    const factDisplay = document.getElementById('fact-display');
    const generateFactButton = document.getElementById('generate-fact');

    generateFactButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        factDisplay.textContent = facts[randomIndex];
    });
});
