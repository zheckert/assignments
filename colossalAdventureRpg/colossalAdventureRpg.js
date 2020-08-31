//I would like to color the player's health to be green at 100 and red at >100. Also damage numbers/ enemy health AND ENEMY NAMES! AND PLAYER NAME. Use https://www.npmjs.com/package/colors? PACKAGE IS INSTALLED. CANT GET IT TO WORK.

const readlineSync = require("readline-sync")
var colors = require('colors');

let gameOver = false

let player = {
        currentHealth: 100,
}

let walkCount = 0;

const blunt = ["crushing ", "smashing ", "blunt ", "ultradense ", "weighted ", "studded ", "heavy ",]
const bladed = ["vorpal ", "scintillating ", "honed ", "cutting ", "slicing ", "chopping ", "rending ", "severing ", "sharpened ", "jagged ", "serrated ",]

let weaponAdjective = ["filth-encrusted ", "fetid ", "dirty ", "gem-encrusted ", "gilded ", "golden ", "vomit-coated ", "bile-coated ", "hallowed ", "gore-stained ", "hell-spawned ", "blood-soaked ", "super-heated ","conflagrating ", "engraved ", "carved ", "magic ", "enhanced ", "refined ", "envenomed ", "venomous ", "soul-stealing ", "regenerating ", "enchanted ", "ensorceled ", "legendary ", "rune-etched ", "heroic ", "blessed ",]

const bladedType = ["longsword ", "broadsword ", "falchion ", "zweihander ", "short sword ", "claymore ", "greatsword ", "dagger ", "butcher's knife ", "kris ", "handaxe ", "greataxe ", "glaive ", "halberd ", "scimitar ", ]
const bluntType = ["warhammer ", "mallet ", "club ", "maul ", "flail ", "mace ", "cane ", "knuckleduster ", "morningstar ", "cudgel ", "quarterstaff ", "sledgehammer ", "stave ",]

let suffix = ["darkness", "light", "flame", "heat", "explosions", "thunderbolts", "flames", "ice", "hatred", "puissance", "malevolence", "potency", "power", "truth", "might", "carnage", "legend", "trauma", "rage", "fury", "insanity", "madness", "divinity", "caliginous funerals", "eternal moonlight", "ceaseless bloodthirst", "holy requiems", "unbridled magnificence", "decrepit coffins", "dessicated corpses", "angelic radiance","malignant cognizance", "leprous convergence", "the fungal blossoms", "wretched putrescence", ]

let inventory = ["Your ancestral longsword", "Lightweight plate mail", "lit lantern filled with oil",]

const userName = readlineSync.question("You awaken to a urgent knocking. It's the king's steward! The king's illness has taken a turn for the worse and we can no longer wait for the healers to complete their journey from the distant mountains where they reside to heal him. We have no choice but to send a messenger through the Dark Forest and petition the witch who lives at the heart of the wood for aid. You've been tasked with traveling into the cursed copse and returning with a cure.\n What are you called, brave knight?\n")
console.log("Well met, " + `${userName}`.green + "! Despite the lateness of the hour, you must make haste- time is not on our side. You dress quickly and arm yourself with your family's ancestral blade, passed down amongst your illustrious line these past 3000 years. You grab your bag and head out into the cool darkness, listening to the clank of your footsteps on the cobblestones of the courtyard. You pass the stables without saddling your horse; the woods are dense and you wouldn't have room to fight properly mounted. The border of the forest is a short walk through the darkening meadow. An eerie wind rises, causing the long grass to brush gently against your greaves. As you get closer, the dark trees loom above you ominously, the swaying branches seeming to beckon you forward. \nYou'll need to muster every ounce of strength and courage to deal with whatever lies ahead. Prevail, and you'll be lauded as a hero for ages to come, the tales of your valor inscribed upon the tapestries of history forevermore. If you fail, the king will perish and the kingdom will fall into chaos. You grit your teeth and check the straps on your armor a final time as you step onto the path which seems to vanish alarmingly into the gloom.")

while(!gameOver){
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
        console.log(`${userName}`.green + ", you have " + `${player.currentHealth}`.green + " health remaining and the following item(s): ")
        console.log(inventory);
}

function forfeit(){
        const forfeit = readlineSync.keyIn("Are you sure you'd like to forfeit?\n [y]es or [n]o?\n", {limit: "yn"});
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
        const walkChance = Math.floor(Math.random() * 4)
                if(walkChance === 0){
                        battle = true;
                        beginBattle()
                        walkCount++;
                } else if(walkChance != 0){
                        noBattle()
                        walkCount++;
                }       
                if(walkCount >= 15){
                        console.log("After what seems like weeks of trudging along the narrow path, your eyes sense a change in the light ahead, and you notice peculiar runes carved into the trees. Invigorated by this development, you redouble your efforts, and the soft light grows brighter as you continue on. Finally, you break into a clearing, and ahead is the witch's cottage. You approach the door and she opens it before you have a chance to knock. It appears she's been expecting you, as she presses a warm drink into your cold hands. She invites you to drink, and then indicates that you should follow her down a hallway you hadn't noticed when you came in. You feel mysterious forces tugging on your body and mind, and suddenly, you're in the king's bedchamber, with no doorway behind you to indicate how you've arrived. The witch sets about her work, ordering staff to fetch her boiling water and other equipment, and you slump into an opulent chair by the fire. You close your eyes and smile. Tomorrow you'll be rewarded, but tonight you're content to know that your perseverance has brough stability to your nation.\n Well done, " + `${userName}`.green + "!")
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
        console.log("A slavering " + `${Enemy.name}`.red + " appears! Now is the time for glory and honor, " + `${userName}`.green + "- How will you proceed?")
        while(battle = true){
                const battleOptions = readlineSync.keyIn("Would you like to \n[f]ight like the heroes of old\n[e]xamine your opponent, or\nflee like the [c]raven worm you are\n", {limit: "fec"});
                if(battleOptions === "f"){
                        let monsterDamage = Math.floor(Math.random() * 9);       
                        console.log("You dance forward boldly, brandishing your weapon with killing intent! You deal " + `${monsterDamage}`.red + " damage to your foe.")
                                Enemy.health = Enemy.health - monsterDamage;
                                if (Enemy.health <= 0){
                                        console.log("The " + `${Enemy.name}`.red + " dies amidst a pool of purple ichor!\n")
                                        let prize = legendaryWeaponGenerator()
                                        console.log("After wiping your weapon clean you find a " + `${prize}`.yellow +  " amongst the carnage. You place it into your bags and prepare to proceed.")                                        
                                        inventory.push(prize)
                                        battle = false
                                        return;
                                }
                                
                        let playerDamage = Math.floor(Math.random() * 5)
                        console.log("the " + `${Enemy.name}`.red + " lets loose a shriek and attacks! You take " + `${playerDamage}`.red + " damage.")
                                player.currentHealth = player.currentHealth - playerDamage;
                                if(player.currentHealth - playerDamage <= 0){
                                        console.log("You are dealt a mortal blow!\n As you collapse into a broken heap you can't help but manage a smile- You perished attempting to save the life of your leige- a noble way to pass into the realms beyond. Hopefully they send another champion to finish your work before it's too late...\n Game Over!");
                                        gameOver = true;
                                        return;
                                }                   
                        } else if (battleOptions === "e"){
                                console.log("The " + `${Enemy.name}`.red + " has " + `${Enemy.health}`.green + " health remaining.")
                        } else if (battleOptions === "c"){
                                console.log("You attempt to flee, dishonoring your family's name!")
                                let flee = Math.floor(Math.random() * 2)
                                        if (flee === 0){
                                                console.log("You successfully escape into the underbrush!")
                                                return;
                                        } else if (flee === 1){
                                                let fleeDamage = 5 + Math.floor(Math.random() * 9)
                                                console.log("The monster leaps into your path, preventing you from escaping! It attacks you, dealing " + fleeDamage +" damage!")
                                                player.currentHealth = player.currentHealth - fleeDamage;
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

function legendaryWeaponGenerator(){
    let style = Math.floor(Math.random() * 2)
    if(style === 0){
        const bladedWeapon = bladed[Math.floor(Math.random()*blunt.length)] + weaponAdjective[Math.floor(Math.random()*weaponAdjective.length)] + bladedType[Math.floor(Math.random()*bluntType.length)] + "of " + suffix[Math.floor(Math.random()*suffix.length)];
        return bladedWeapon;
    } else if(style === 1){
        const bluntWeapon = blunt[Math.floor(Math.random()*blunt.length)] + weaponAdjective[Math.floor(Math.random()*weaponAdjective.length)] + bluntType[Math.floor(Math.random()*bluntType.length)] + "of " + suffix[Math.floor(Math.random()*suffix.length)];
        return bluntWeapon;
    }
}