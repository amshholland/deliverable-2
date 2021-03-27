// Prompt the user for the pet's name
let name = prompt("What's your pet's name?");

// Variables
let happiness = 0;
let energy = 0;

// Use a loop to prompt user for action 6 times
for (var i = 0; i <= 5; i++) {
    let action = prompt("Do you want to feed, pet, or walk your pet?")
    action.toLowerCase();

    // The feed option increases energy by 2
    if (action === "feed") {
        energy += 2;
    }
    // The pet option increases happiness by 1
    else if (action === "pet") {
        happiness += 1;
    }
    // The walk option increases happiness by 2 but decreases energy by 1
    // If the user chooses "walk" but the energy level is currently at zero
    else if (action === "walk") {
        if (energy == 0) {
            alert("Not enough energy to enjoy a walk.");
        }
        else {
            happiness += 2;
            energy -= 1;
        }
    }
}

// Log the pet's name, happiness, and energy level to the console
console.log(name + " has " + happiness + " happiness and " + energy + " energy.");
