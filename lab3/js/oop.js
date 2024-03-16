// oop.js

// Define a function for creating a hamburger object
function createHamburger(bun, garnish, cheese, sauce, meat, pattyCount, toppings) {
    // Define the hamburger object
    let hamburger = {
        bun: bun,
        garnish: garnish,
        cheese: cheese,
        sauce: sauce,
        meat: meat,
        pattyCount: pattyCount,
        toppings: toppings,
        describe: function() {
            return `This hamburger has a ${this.bun} bun with ${this.garnish}, ${this.cheese}, ${this.sauce}, ${this.meat} (${this.pattyCount}), and toppings including ${this.toppings.join(", ")}.`;
        }
    };
    return hamburger; // Return the created hamburger object
}

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("hamburgerForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Extract form values
        let bun = document.getElementById("bun").value;
        let garnish = document.getElementById("garnish").value;
        let cheese = document.getElementById("cheese").value;
        let sauce = document.getElementById("sauce").value;
        let meat = document.getElementById("meat").value;
        let pattyCount = document.getElementById("pattyCount").value;
        let toppings = document.getElementById("toppings").value.split(",").map(item => item.trim());

        // Create hamburger object
        let myHamburger = createHamburger(bun, garnish, cheese, sauce, meat, pattyCount, toppings);

        // Output the description of the hamburger
        document.getElementById("output").textContent = myHamburger.describe();
    });
});
