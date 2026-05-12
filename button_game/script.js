let level = 0;
let timer1 = 5;
let timer1_interval = 0;
document.getElementById("secondButton").style.display = "none";

function button1() {
    if (level != 3) {
        if (level != 5) {
            level += 1;
            console.log(level);
            document.getElementById("levels_counter").textContent = level;
        }
        else {
            level = 0;
            document.getElementById("levels_counter").textContent = level;
            document.getElementById("myButton_text").textContent = "I said, don't click me!";
            document.getElementById("secondButton").style.display = "none";
        }
    }

    // game logic (levels)

    if (level == 1) {
        document.getElementById("myButton_text").textContent = "Click me again";
}
    if (level == 2) {
        document.getElementById("myButton_text").textContent = "And again";
}
    if (level == 3) {
        document.getElementById("myButton_text").textContent = "Pet me for " + timer1 + " times";
        let timer1_interval = timer1;
        if (timer1_interval == timer1) {
            timer1 = 5;
            document.getElementById("myButton_text").textContent = "Pet me for " + timer1 + " times";
        }
    }

    if (level == 4) {
        document.getElementById("myButton_text").textContent = "Good boy!";
        document.getElementById("secondButton").style.display = "block";
        
    }

    if (level == 5) {
        document.getElementById("myButton_text").textContent = "Don't click me!";
        document.getElementById("secondButton").style.display = "block";
    }

    if (level == 6) {
        document.getElementById("myButton_text").textContent = "Why are you still doing this?";
        document.getElementById("secondButton").style.display = "none";
    }
    if (level == 7) {
        document.getElementById("myButton_text").textContent = "It's over now, you can stop.";
    }
    if (level == 8) {
        document.getElementById("myButton_text").textContent = "I said, stop.";
    }
    if (level == 9) {
        document.getElementById("myButton_text").textContent = "Stop it!";
    }
    if (level == 10) {
        alert("Please stop.");
        document.getElementById("myButton_text").textContent = "You still here?";
    }
    if (level == 11) {
        document.getElementById("myButton_text").textContent = "I give up.";
    }
    if (level == 12) {
        document.getElementById("myButton_text").textContent = "You win.";
        document.body.style.height = "150vh";
        window.scrollTo({ top: 0});
        document.getElementById("myButton").style.marginTop = "150vh";
    }
    if (level == 13) {
        document.getElementById("myButton_text").textContent = "Huh?";
        document.getElementById("myButton").style.marginTop = "0px";
        document.body.style.height = "100%";
        window.scrollTo({ top: 0});
    }
    if (level == 14) {
        document.getElementById("myButton_text").textContent = "Ok...";
    }
    if (level == 15) {
        document.getElementById("myButton_text").textContent = "...";
    }
    if (level == 20) {
        document.getElementById("myButton_text").textContent = "...";
    }

}

function button1_hold() {
    if (level == 3) {
        timer1 -= 1;
        document.getElementById("myButton_text").textContent = "Pet me for " + timer1 + " times";
        console.log(timer1);
        if (timer1 == 0) {
            level += 1;
            document.getElementById("myButton_text").textContent = "Good boy!";
            document.getElementById("levels_counter").textContent = level;
        }
    }
}

function button2() {
    if (level == 5) {
        level += 1;
        document.getElementById("myButton_text").textContent = "Click me";
        document.getElementById("levels_counter").textContent = level;
        document.getElementById("secondButton").style.display = "none";
    }
}