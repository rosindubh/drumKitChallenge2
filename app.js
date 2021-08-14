/*phil welsby 14 aug 2021 - playing with Audio*/
const boom = document.getElementById("boom");
//const audio = document.getElementById("audio");


boom.addEventListener("click", () => {
    console.log("Boom here!");
    audio.play(boom);
    audio.currentTime = 0;
})