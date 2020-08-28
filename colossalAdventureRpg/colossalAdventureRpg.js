//     4. If a wild enemy appears:

        // If attacking, a random amount of damage will be delt between a min and max
        // If running, there will be a 50% chance of escaping
        // After the player attacks or runs the enemy attacks back for a random damage amount
        // If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. Use a while loop to control this flow.
        // If the enemy kills the player the console prints a cool death message and the game ends

//     5. Inventory

        //When the player kills enemies, they are awarded with items

//////////STUFF TO DO BELOW!!!////////////////////////////////////////

//I want the game to end at 15ish walks. How do I implement that? see :43
//I need to make it so the player can die, and figure out how to deal damage. Also Maybe add +1 damage per hit for every extra item in your inventory?
//I need to finish the weapon randomizer and implement it into the battle loop.
//Finish the text elements. Nice but not a top priority.
//I would like to color the player's health to be green at 100 and red at >100. Also damage numbers/ enemy health AND ENEMY NAMES! AND PLAYER NAME. Use https://www.npmjs.com/package/colors?

const readlineSync = require("readline-sync")

let gameOver = false

let player = {
        currentHealth: 100,
}

let inventory = ["Your family's ancestral longsword", "Lightweight plate mail",]

const userName = readlineSync.question("I'm sorry to call on you at such a late hour, brave knight. The king's illness has taken a turn for the worse and we can no longer wait for the healers to complete their journey from the distant mountains where they reside to heal him. We have no choice but to send a messenger through the Dark Forest and petition the witch who lives at the heart of the wood for aid. You've been tasked with traveling into the cursed copse and returning with a cure. If you fail, the king will perish and the kingdom will fall into chaos. What shall I call you, brave knight?\n")
console.log("Good morrow, " + userName + "! You begin your journey on a blah blah blah. \nPress the 'w' key on your keyboard to courageously press onward! You'll need to muster every ounce of strength and courage to deal with whatever lies ahead. Prevail, and you'll be lauded blah blah blah")

while(gameOver === false){
        const userAnswer = readlineSync.keyIn("Would you like to \n[w]alk, check your [i]nventory, or [f]orfeit?\n", {limit: "wif"});
        if(userAnswer === "w"){
                walk();
                // where do I put the for loop that ends the game after 15 turns?
                // for (let i = 15; i < 0; i--){

                // }
        } else if (userAnswer === "i"){
                inventoryView();
        } else if (userAnswer === "f"){
                forfeit();
        }
}

function inventoryView(){
        console.log("You open your bags and check on your supplies:")
        console.log(userName + ", you have " + player.currentHealth + " health remaining and the following item(s): ")
        // should be player.currentHealth - playerDamage
        console.log(inventory);
}

function forfeit(){
        console.log("You decide that the stability of the kingdom and the life of its ruler aren't worth fighting for. You take your bags and flee, content to live the life of a dishonored hermit in exile. \nYour days of adventure are over.")
        gameOver = true;
        return;
}

function walk(){
        const walkChance = Math.floor(Math.random() * 4)
                if(walkChance === 0){
                        battle = true;
                        beginBattle()
                } else if(walkChance != 0){
                        noBattle()
                }

        }

function noBattle(){
       const walkText = Math.floor(Math.random() * 4)
       if(walkText === 0){
        console.log("You press forward, keenly glancing back and forth for any sign of danger.")
       } else if (walkText === 1){
        console.log("You continue onward, hoping that you're getting close.")
       } else if (walkText === 2){
        console.log("You follow the path, ready for anything.")
       } else if (walkText === 3){
        console.log("The darkness seems to press down upon you as you advance towards your destination.") 
       }
}

function beginBattle(){
        
        const Enemy = spawnEnemy()
        console.log("A slavering " + Enemy.name + " appears! Now is the time for glory and honor, " + userName + "- How will you proceed?")
        while(battle = true){
        const battleOptions = readlineSync.keyIn("Would you like to \n[f]ight like the heroes of old\n[e]xamine your opponent, or\nflee like the [c]raven worm you are\n", {limit: "fec"});
        if(battleOptions === "f"){
                // replace these choices with functions when complete?
                // for (let i = Enemy.health; i > 0; i--);
                // console.log("You dance forward boldly, brandishing your weapon with killing intent! You deal " + monsterDamage + " damage to your foe.")
                //also when you examine the enemy it should show Enemy.health - monsterDamage so,
                        // if (Enemy.health - monsterDamage <= 0){
                                // battle = false
                //         console.log("The " + Enemy.name + " dies amidst a pool of black ichor!\n")
                //         console.log("After wiping your weapon clean you find a [item] amongst the carnage. You place it into your bags and prepare to proceed.")
                //         // inventory.push(randomItem())
                //         // MAKE SURE YOU SWAP OUT [ITEM] FOR THE RANDOMIZER FUNCTION!!!
                        // }
                        // if(player.currentHealth - playerDamage <= 0){
                        //         console.log("You are dealt a mortal blow!\n As you collapse into a broken heap you can't help but manage a smile- You perished attempting to save the life of your leige- a noble way to pass into the realms beyond. Hopefully they send another champion to finish your work before it's too late...");
                        //         gameOver = true;
                        //         return;
                        // }
                // console.log("the creature lets loose a shriek and attacks! You take " + playerDamage + " damage.")
                
                } else if (battleOptions === "e"){
                        console.log("The " + Enemy.name + " has " + Enemy.health + " health remaining.")
                } else if (battleOptions === "w"){
                        console.log("You attempt to flee, dishonoring your family's name!")
                }

        }
}

function spawnEnemy(){
        const spawnChance = Math.floor(Math.random() * 4)
        if(spawnChance === 0){
                return new Enemy("goblin", 12)
        } else if(spawnChance === 1){
                return new Enemy("goblin grunt", 16)
        } else if(spawnChance === 2){
                return new Enemy("goblin captain", 20)
        } else {
                return new Enemy("goblin battlemaster", 45)
        }
}

function Enemy(name, health){
        this.name = name
        this.health = health
}

// randomItem(){
//         // weapon randomizer goes here
// }
