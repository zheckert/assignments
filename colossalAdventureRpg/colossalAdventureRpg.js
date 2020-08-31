//     4. If a wild enemy appears:

        // If attacking, a random amount of damage will be delt between a min and max
        // If running, there will be a 50% chance of escaping
        // After the player attacks or runs the enemy attacks back for a random damage amount
        // If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking. Use a while loop to control this flow.
        // If the enemy kills the player the console prints a cool death message and the game ends

//     5. Inventory

        //When the player kills enemies, they are awarded with items

//////////STUFF TO DO BELOW!!!////////////////////////////////////////

//I need to make it so the player can die, and figure out how to deal damage. Also Maybe add +1 damage per hit for every extra item in your inventory? AND fleeing.
//I need to finish the weapon randomizer and implement it into the battle loop.
//also weird inventory single quotes
// add "are you sure" to forfeit
//I would like to color the player's health to be green at 100 and red at >100. Also damage numbers/ enemy health AND ENEMY NAMES! AND PLAYER NAME. Use https://www.npmjs.com/package/colors? PACKAGE IS INSTALLED. CANT GET IT TO WORK.

const readlineSync = require("readline-sync")
// var colors = require('colors');
// colors.enable();

let gameOver = false

let player = {
        currentHealth: 100,
}

let inventory = ["Your family's ancestral longsword", "Lightweight plate mail", "A lit lantern filled with oil",]

const userName = readlineSync.question("You awaken to a urgent knocking. It's the king's steward! The king's illness has taken a turn for the worse and we can no longer wait for the healers to complete their journey from the distant mountains where they reside to heal him. We have no choice but to send a messenger through the Dark Forest and petition the witch who lives at the heart of the wood for aid. You've been tasked with traveling into the cursed copse and returning with a cure.\n What are you called, brave knight?\n")
console.log("Well met, " + userName + "! Despite the lateness of the hour, you must make haste- time is not on our side. You dress quickly and arm yourself with your family's ancestral blade, passed down amongst your illustrious line these past 3000 years. You grab your bag and head out into the cool darkness, listening to the clank of your footsteps on the cobblestones of the courtyard. You pass the stables without saddling your horse; the woods are dense and you wouldn't have room to fight properly mounted. The border of the forest is a short walk through the darkening meadow. An eerie wind rises, causing the long grass to brush gently against your greaves. As you get closer, the dark trees loom above you ominously, the swaying branches seeming to beckon you forward. \nYou'll need to muster every ounce of strength and courage to deal with whatever lies ahead. Prevail, and you'll be lauded as a hero for ages to come, the tales of your valor inscribed upon the tapestries of history forevermore. If you fail, the king will perish and the kingdom will fall into chaos. You grit your teeth and check the straps on your armor a final time as you step onto the path which seems to vanish alarmingly into the gloom.")

while(gameOver === false){
        const userAnswer = readlineSync.keyIn("Would you like to \n[w]alk bravely, check your [i]nventory, or [f]orfeit?\n", {limit: "wif"});
        if(userAnswer === "w"){
                walk();
        } else if (userAnswer === "i"){
                inventoryView();
        } else if (userAnswer === "f"){
                forfeit();
        }
}

function inventoryView(){
        console.log("You open your bags and check on your supplies:")
        console.log(userName + ", you have " + player.currentHealth - playerDamage + " health remaining and the following item(s): ")
        console.log(inventory);
}

function forfeit(){
        const forfeit = readlineSync.keyIn("Are you sure you'd like to forfeit?\n [y]es or [n]o?", {limit: "yn"});
                if(forfeit === "n"){
                        console.log("You shake your head. You'd never abandon your king and country to destruction!")
                        return;
                }
                if(forfeit === "y"){
                        console.log("You decide that the stability of the kingdom and the life of its ruler aren't worth fighting for. You take your bags and flee, content to live the life of a dishonored hermit in exile. \nYour days of adventure are over.")
                        gameOver = true;
                        return;
                }
}

function walk(){
        let walkCount = 0;
        const walkChance = Math.floor(Math.random() * 4)
                if(walkChance === 0){
                        battle = true;
                        beginBattle()
                        walkCount++
                } else if(walkChance != 0){
                        noBattle()
                        walkCount++
                }
                if(walkCount >= 15){
                        console.log("After what seems like weeks of trudging along the narrow path, your eyes sense a change in the light ahead, and you notice peculiar runes carved into the trees. Invigorated by this development, you redouble your efforts, and the warm light grows stronger as you continue. Finally, you break into a clearing, and ahead is the witch's cottage. You approach the door and she opens it before you have a chance to knock. It appears she's been expecting you, as she presses a warm drink into your cold hands. She invites you to drink, and then indicates that you should follow her down a hallway you hadn't noticed when you came in. You feel mysterious forces tugging on your body and mind, and suddenly, you're in the king's bedchamber, with no doorway behind you to indicate how you've arrived. The witch sets about her work, ordering staff to fetch her boiling water and other equipment, and you slump into an opulent chair by the fire. You close your eyes and smile. Tomorrow you'll be rewarded, but tonight you're content to know that your perseverance has brough stability to your nation. Well done!")
                        gameOver = true
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
                        let monsterDamage = Math.floor(Math.random() * 9)
                        console.log("You dance forward boldly, brandishing your weapon with killing intent! You deal " + monsterDamage + " damage to your foe.")
                                if (Enemy.health - monsterDamage <= 0){
                                        console.log("The " + Enemy.name + " dies amidst a pool of purple ichor!\n")
                                        console.log("After wiping your weapon clean you find a " + prize +  " amongst the carnage. You place it into your bags and prepare to proceed.")
                                        // !! Link this up !!
                                        //let prize = 
                                        // inventory.push(function legendaryWeaponGenerator())
                                        battle = false
                                        return;
                                }
                        let playerDamage = Math.floor(Math.random() * 5)
                        console.log("the creature lets loose a shriek and attacks! You take " + player.currentHealth - playerDamage + " damage.")

                                if(player.currentHealth - playerDamage <= 0){
                                        console.log("You are dealt a mortal blow!\n As you collapse into a broken heap you can't help but manage a smile- You perished attempting to save the life of your leige- a noble way to pass into the realms beyond. Hopefully they send another champion to finish your work before it's too late...");
                                        gameOver = true;
                                        return;
                                }                   
                        } else if (battleOptions === "e"){
                                console.log("The " + Enemy.name + " has " + Enemy.health - monsterDamage + " health remaining.")
                        } else if (battleOptions === "c"){
                                console.log("You attempt to flee, dishonoring your family's name!")
                                let flee = Math.floor(Math.random() * 2)
                                        if (flee === 0){
                                                console.log("You successfully escape into the underbrush!")
                                                let battle = false
                                                return;
                                        } else if (flee === 1){
                                                //finish me!
                                                console.log()
                                        }
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
