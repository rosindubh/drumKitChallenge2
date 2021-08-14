/*phil welsby 14 aug 2021 - playing with Audio*/
const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hiHat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openHat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

//const audio = document.getElementById("audio");



boom.addEventListener("click", () => {
    console.log("Boom here!");
    audio.play(boom);
    audio.currentTime = 0;
})

