const roasts = [
    "Your code is so bad, I had to debug myself after reading it.",
    "Even Notepad++ would refuse to open this mess.",
    "This code made my CPU cry. Literally.",
    "Ary bahi bss krde, ab aur dekha nhi jaye ga",
    "Did you code this in MS Paint?",
    "Is project ka best feature 'Ctrl + A, Delete' hai.",
    "Yeh code likhne ke baad tujhe keyboard bech dena chahiye.",
    "I've seen AI-generated memes with better logic than this.",
    "Your indentation is so random, even chaos theory can't explain it.",
    "This code is a crime, and I'm calling the FBI.",
    "You should frame this code and hang it in a museum... under 'Historical Programming Disasters'.",
    "Stack Overflow banned you, and ChatGPT just sent me a resignation letter.",
    "Your code is so buggy, NASA just mistook it for alien life.",
    "Even Clippy from Microsoft Word wouldn’t dare to assist with this.",
    "I ran this in a sandbox, and the sandbox self-destructed.",
    "If 'spaghetti code' was a competitive sport, you'd be an Olympic champion."
];

// Function to roast the code
function roastCode() {
    let userCode = document.getElementById("codeInput").value.trim();
    let output = document.getElementById("roastOutput");
    let body = document.body;

    if (userCode === "") {
        output.innerHTML = "You need to paste some code first, Einstein.";
        output.classList.remove("hidden");
        return;
    }

    // Choose a random roast
    let randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    output.innerHTML = `🔥 ${randomRoast}`;
    output.classList.remove("hidden");
    output.classList.add("shake");

    // Randomly decide if we should "explode" the page
    let chance = Math.random();

    if (chance < 0.2) {  // 20% chance to make the screen flash red
        body.classList.add("flash");
        setTimeout(() => body.classList.remove("flash"), 500);
    }

    if (chance < 0.1) {  // 10% chance to delete everything
        setTimeout(() => {
            document.getElementById("codeInput").value = "";
            output.innerHTML = "I have mercy on your soul. Code deleted.";
        }, 2000);
    }

    // Play random sound effects (New Sounds + Lower Volume)
    let soundChance = Math.random();
    let sound;

    if (soundChance < 0.5) {
        sound = new Audio("https://www.myinstants.com/media/sounds/vine-boom.mp3"); // Change sound here
    } 
    else 
    {
        sound = new Audio("https://www.myinstants.com/media/sounds/bruh.mp3"); // Change sound here
    }

    sound.volume = 0.3; // Set volume to 30%
    sound.play();
}
