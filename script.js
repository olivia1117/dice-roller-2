// function to roll the die and update the image
async function rollDice() {
    try {
        const response = await fetch('https://dice-roller-2-server-frf4d9axesg7hucc.centralus-01.azurewebsites.net/api/rollDice');
        const data = await response.json();

        // update the image
        document.getElementById('die').src = `/img/${data.image}`;
        console.log(`Rolled a ${data.roll}`);
    } catch (error) {
        console.error("Error fetching dice roll:", error);
    }
}

// focus the roll button when the page loads
document.getElementById("rollButton").focus();

