// Function to roll the dice and set the proper image
async function rollDice() {
    const dice = ["die1", "die2", "die3", "die4", "die5", "die6"];
    const baseUrl = "https://dice-roller-2-server-frf4d9axesg7hucc.centralus-01.azurewebsites.net"; // your server URL

    for (let i = 0; i < dice.length; i++) {
        try {
            // Fetch a random number between 1 and 6
            const response = await fetch(`${baseUrl}/api/rollDice`);
            const roll = await response.text(); // server returns plain text like "4"

            // Update the image for each dice element
            document.getElementById(dice[i]).src = `img/die${roll}.jpg`;

            console.log(`Die ${i + 1} rolled a ${roll}`);
        } catch (error) {
            console.error("Error fetching dice roll:", error);
        }
    }
}

// Focus the roll button when the page loads
document.getElementById("rollButton").focus();
