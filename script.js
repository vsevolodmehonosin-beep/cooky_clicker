let total = 0;
let bonuss_clicks = 0;
let bonuss_clicks_cost = 10;
let auto_click_cost = 1000;

function pat_button() {
    total = total + 1 + bonuss_clicks;
    console.log(total);
    document.getElementById("patpat-count").textContent = total;

    var pat_audio = new Audio('pat_sound.wav');
    pat_audio.play();

    function check_upgrade_buttons() {
        if (total >= bonuss_clicks_cost) {
            document.getElementById("upgrade-button").disabled = false;
        } else {
            document.getElementById("upgrade-button").disabled = true;
        }

        if (total >= auto_click_cost) {
            document.getElementById("auto_click_button").disabled = false;
        } else {
            document.getElementById("auto_click_button").disabled = true;
        }
    }
    check_upgrade_buttons();
}

function upgrade_double_clicks() {
    if (total < bonuss_clicks_cost) {
        alert("Not enough patpats to upgrade!");
        return;
    }
    else {    
        total = total - bonuss_clicks_cost;
        bonuss_clicks_cost = bonuss_clicks_cost * 2;
        document.getElementById("patpat-count").textContent = total;
        document.getElementById("upgrade-cost").textContent = bonuss_clicks_cost;
        bonuss_clicks = bonuss_clicks + 1;
        console.log(bonuss_clicks);
        check_upgrade_buttons();
    }
}

function auto_click() {
    if (total < auto_click_cost) {
        alert("Not enough patpats to upgrade!");
        return;
    }
    else {
        total = total - auto_click_cost;
        document.getElementById("patpat-count").textContent = total;
        setInterval(pat_button, 1000);
        auto_click_cost = Math.round(auto_click_cost * 1.5);
        document.getElementById("auto-click-cost").textContent = auto_click_cost;
        check_upgrade_buttons();
    }
}