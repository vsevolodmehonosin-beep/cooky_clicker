const state = {
    level: 0,
    petCount: 5,
};

const elements = {
    button: document.getElementById("myButton"),
    buttonText: document.getElementById("myButton_text"),
    secondButton: document.getElementById("secondButton"),
    counter: document.getElementById("levels_counter"),
};

elements.secondButton.style.display = "none";

const levelData = {
    1: { text: "Click me again" },
    2: { text: "And again" },
    3: {
        text: () => `Pet me for ${state.petCount} times`,
        onEnter: () => {
            state.petCount = 5;
        },
    },
    4: { text: "Good boy!" },
    5: { text: "Don't click me!", secondButton: "block" },
    6: { text: "Why are you still doing this?", secondButton: "none" },
    7: { text: "It's over now, you can stop." },
    8: { text: "I said, stop." },
    9: { text: "Stop it!" },
    10: {
        text: "You still here?",
        onEnter: () => alert("Please stop."),
    },
    11: { text: "I give up." },
    12: {
        text: "You win.",
        bodyHeight: "150vh",
        buttonMarginTop: "150vh",
    },
    13: {
        text: "Huh?",
        bodyHeight: "100%",
        buttonMarginTop: "0px",
    },
    14: { text: "Ok..." },
    15: { text: "..." },
    20: { text: "..." },
};

function setLevel(nextLevel) {
    state.level = nextLevel;
    elements.counter.textContent = state.level;

    const config = levelData[state.level] || { text: "Click me" };

    if (typeof config.onEnter === "function") {
        config.onEnter();
    }

    elements.buttonText.textContent =
        typeof config.text === "function" ? config.text() : config.text;

    if (config.secondButton !== undefined) {
        elements.secondButton.style.display = config.secondButton;
    }

    if (config.bodyHeight !== undefined) {
        document.body.style.height = config.bodyHeight;
    }

    if (config.buttonMarginTop !== undefined) {
        elements.button.style.marginTop = config.buttonMarginTop;
    }
}

function button1() {
    if (state.level === 5) {
        setLevel(0);
        return;
    }

    if (state.level !== 3) {
        setLevel(state.level + 1);
    } else {
        setLevel(3);
    }
}

function button1_hold() {
    if (state.level !== 3) {
        return;
    }

    state.petCount -= 1;
    if (state.petCount < 0) {
        state.petCount = 0;
    }

    elements.buttonText.textContent = `Pet me for ${state.petCount} times`;

    if (state.petCount === 0) {
        setLevel(4);
    }
}

function button2() {
    if (state.level !== 5) {
        return;
    }

    setLevel(6);
    elements.secondButton.style.display = "none";
}

setLevel(0);
