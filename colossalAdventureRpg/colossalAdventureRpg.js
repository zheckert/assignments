// Project Requirements:

//     3. Walking:

//      The console will ask the user to enter a "w" to walk
        // Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)

//     4. If a wild enemy appears:

        // The enemy is random (can be chosen out of a minimum of 3 different enemy names)
        // The user can decide to attack or run
        // If attacking, a random amount of damage will be delt between a min and max
        // If running, there will be a 50% chance of escaping
        // After the player attacks or runs the enemy attacks back for a random damage amount
        // If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. Use a while loop to control this flow.
        // If the enemy kills the player the console prints a cool death message and the game ends

//     5. Inventory

        //When the player kills enemies, they are awarded with items
        //If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory


//to do: fix press w to walk https://www.npmjs.com/package/readline-sync#utility_methods-keyinselect You might need to move around some stuff.
const readlineSync = require("readline-sync")

let gameOver = false

const player = {
        name: "",
        health: 100,
}

let inventory = ["Your family's ancestral longsword", "Lightweight plate mail", ]

const userName = readlineSync.question("I'm sorry to call on you at such a late hour, brave knight. The king's illness has taken a turn for the worse and we can no longer wait for the healers to complete their journey from the distant mountains where they reside to heal him. We have no choice but to send a messenger through the Dark Forest and petition the witch who lives at the heart of the wood for aid. You've been tasked with traveling into the cursed copse and returning with a cure. If you fail, the king will perish and the kingdom will fall into chaos. What shall I call you, brave knight?\n")
console.log("Good morrow, " + userName + "! You begin your journey on a blah blah blah. \nPress the 'w' key on your keyboard to courageously press onward! You'll need to muster every ounce of strength and courage to deal with whatever lies ahead. Prevail, and you'll be lauded blah blah blah")

while(gameOver === false){
        
        const userAnswer = readlineSync.keyInSelect(["Walk", "Check your inventory", "Forfeit"], "What would you like to do?");
        if(userAnswer === 0){
                walk();
        } else if (userAnswer === 1){
                //add functions to add complexity and simplify while loop?
                console.log("You open your bags and check on your supplies:")
                console.log(inventory)
        } else if (userAnswer === 2){
                //add functions to add complexity and simplify while loop?
                console.log("You decide that the stability of the kingdom and the life of its ruler aren't worth fighting for. You take your bags and flee, content to live the life of a dishonored hermit in exile. \nYour days of adventure are over.")
                gameOver = true;
                return;
        }
}

function walk(){
        const walkChance = Math.floor(Math.random() * 4)
                if(walkChance === 0){
                        const Enemy = spawnEnemy()
                if(userAnswer === 1){
                        console.log("Test")
                        }
                if(userAnswer === 2){  
                        console.log("Test")            
                        }

        }
}

function spawnEnemy(){
        const spawnChance = Math.floor(Math.random() * 4)

        if(spawnChance === 0){
                return new Enemy("goblin", 12)
        } else if(spawnChance === 1){
                return new Enemy("goblin captain", 16)
        } else if(spawnChance === 2){
                return new Enemy("goblin warmaster", 20)
        } else {
                return new Enemy("fire-breathing dragon", 45)
        }
}

function Enemy(name, health){
        this.name = name
        this.health = health
}

//Delete when done

// battlePrompt = readline.keyInSelect("A slavering " + Enemy + "appears! Now is the time for glory and honor, " + userName + "- How will you proceed?"[Fight like the heroes of old", "Flee like the craven worm you are"]);


// console.log("You dance forward boldly, brandishing your weapon with killing intent!")
// console.log("You attempt to flee, dishonoring your family's name!")

// function print(inventory){
//         console.log("You open your bags and see the following:" + inventory);
// }

