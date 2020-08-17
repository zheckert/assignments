const readline = require("readline-sync");
const name = readline.question("What is your name? ");

// console.log( "Hello, " + name + ". I'm surprised you're able to remember your name after how hard they hit you. You're currently sitting on a stained mattress in a filthy concrete room. There's a naked bulb flickering in the ceiling and a reinforced steel door looming moodily opposite you. In one corner there's a pile of muddy clothing, and there's a hole set in the wall nearest you. 'I sure would like to get out of here,' you think glumly to yourself, eyeing the hole warily. You raise a hand to the goose egg throbbing painfully on your head and are relieve to see you're not bleeding. I'd agree that getting out of here seems like a good plan.")

options = ["Open the door", "Inspect the clothing", "Take a nap on the filth-encrusted mattress", "Probe the depths of the ominous hole with your fingers", "Break the lightbulb", "Examine the floor"],
index = readlineSync.keyInSelect(options, "What would you like to do?");

console.log("Yes" + options[index] + "This is a test")

// You examine the door. It's a hulking chunk of impenetrable steel, clearly designed to prevent exit. There's a small keyhole set in the center of the door

// The mattress crunches and emits a dusty wheeze as you relax into its unhygienic embrace. You ruminate upon your unfortunate situation for a few minutes, but sleep evades you. What would you like to do?

// You look at the floor. As you carefully examine its surface you notice a small key in front of the door. Perhaps it was dropped here accidentally? You pocket the key.

// You decide to stick your soft, vulnerable digits into the caliginous crevasse set within the wall. You feel white hot pain pierce your fingers, and all goes black. You're dead.

// You consider breaking the lightbulb, but since it's your only light source, decide against it. Plus, you're scared of the dark.

// You rifle through the clothing and only find that you'd really like to take a nice hot bath.






//To do: build the bones and loops out and add the text/flavoring in last. Don't get stuck in minutiae 