const readlineSync = require("readline-sync");
const name = readlineSync.question("What is your name? ");
let running = true;
let hasKey = false

console.log( "Hello, " + name + ". I'm surprised you're able to remember your name after how hard they hit you. You're currently sitting on a stained mattress in a filthy concrete room. There's a naked bulb flickering in the ceiling and a reinforced steel door looming moodily opposite you. In one corner there's a pile of muddy clothing, and there's a hole set in the wall nearest you. 'I sure would like to get out of here,' you think glumly to yourself, eyeing the hole warily. You raise a hand to the goose egg throbbing painfully on your head and are relieve to see you're not bleeding. I'd agree that getting out of here seems like a good plan.")

let options = ["Open the door", "Inspect the clothing", "Take a nap on the filth-encrusted mattress", "Probe the depths of the ominous hole with your fingers", "Break the lightbulb", "Examine the floor"]

while (running) {
    let index = readlineSync.keyInSelect(options, "What would you like to do?");
    
    if (options[index] === "Open the door") {
        if(hasKey){
            console.log('You have the key now the door is open')
            running = false
        }else{
            console.log("You examine the door. It's a hulking chunk of impenetrable steel, clearly designed to prevent exit. There's a small keyhole set in the center of the door. What next?")
        }
        // index = readlineSync.keyInSelect(options);
    } else if (options[index] === "Inspect the clothing"){
        console.log("You rifle through the clothing and only find that you'd really like to take a nice hot bath. What next?")
        // index = readlineSync.keyInSelect(options);
    } else if (options[index] === "Take a nap on the filth-encrusted mattress"){
        console.log("The mattress crunches and emits a dusty wheeze as you relax into its unhygienic embrace. You ruminate upon your unfortunate situation for a few minutes, but sleep evades you as you imagine an army of malevolent microbes assauting you from their mattress fortress. What next?")
        // index = readlineSync.keyInSelect(options);
    }  else if (options[index] === "Break the lightbulb"){
        console.log("You consider breaking the lightbulb, but since it's your only light source, decide against it. Plus, you're scared of the dark. What next?")
        // index = readlineSync.keyInSelect(options);
    } else if (options[index] === "Probe the depths of the ominous hole with your fingers") {
        console.log("You decide to stick your soft, vulnerable digits into the caliginous crevasse set within the wall. You feel white hot pain pierce your fingers, and you fingers scrape uselessly against the cold cement as your vision slowly fades to black.\nYou are dead.\n")
        running = false;
        // add "Try again?" option?
    } else if (options[index] === "Examine the floor"){
        console.log("You look at the floor. As you carefully examine its surface you notice a small key in front of the door. Perhaps it was dropped here accidentally? You pocket the key.")
        // index = readlineSync.keyInSelect(options);
        hasKey = true
    }

} 

//     do {
//         if (options[index] === "Open the door") {
//             console.log("You try the key in the lock, and surprisingly it fits! The door silently opens inward. You peek into the space beyond... And that's a story for another time.")
//             index = readlineSync.keyInSelect(options);
//             break;
//         } else if (options[index] === "Inspect the clothing"){
//             console.log("You rifle through the clothing and only find that you'd really like to take a nice hot bath. What next?")
//             index = readlineSync.keyInSelect(options);
//         } else if (options[index] === "Take a nap on the filth-encrusted mattress"){
//             console.log("The mattress crunches and emits a dusty wheeze as you relax into its unhygienic embrace. You ruminate upon your unfortunate situation for a few minutes, but sleep evades you as you imagine an army of malevolent microbes assauting you from their mattress fortress. What next?")
//             index = readlineSync.keyInSelect(options);
//         }  else if (options[index] === "Break the lightbulb"){
//             console.log("You consider breaking the lightbulb, but since it's your only light source, decide against it. Plus, you're scared of the dark. What next?")
//             index = readlineSync.keyInSelect(options);
//         } else if (options[index] === "Probe the depths of the ominous hole with your fingers") {
//             console.log("You decide to stick your soft, vulnerable digits into the caliginous crevasse set within the wall. You feel white hot pain pierce your fingers, and you fingers scrape uselessly against the cold cement as your vision slowly fades to black.\nYou are dead.\n")
//             break;
//             // add "Try again?" option?
//         } else if (options[index] === "Examine the Floor"){
//             console.log("There's nothing here but dirt now. Why not try the door?")
//             index = readlineSync.keyInSelect(options);
//         }    
// } while (running === false)


