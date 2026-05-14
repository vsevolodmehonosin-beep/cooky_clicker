let total = 0;
bonuss_clicks = 0;

function pat_button() {
    total = total + 1 + bonuss_clicks;
    console.log(total);
    document.getElementById("patpat-count").textContent = total;

    var pat_audio = new Audio('pat_sound.wav');
    pat_audio.play();
}

function upgrade_double_clicks() {
    if (total < 10) {
        alert("Not enough patpats to upgrade!");
        return;
    }
    else {    
        total = total - 10;
        document.getElementById("patpat-count").textContent = total;
        bonuss_clicks = bonuss_clicks + 1;
        console.log(bonuss_clicks);
    }

}