const competitiveGames = [
    "Valorant",
    "Counter-Strike 2",
    "Rocket League",
    "League of Legends",
    "Overwatch 2",
    "Apex Legends",
    "Rainbow Six Siege",
    "Fortnite"
];

const storyGames = [
    "Red Dead Redemption 2",
    "God of War",
    "The Last of Us",
    "Hogwarts Legacy",
    "Elden Ring",
    "Hollow Knight",
    "Hollow Knight: Silksong",
    "Clair Obscur: Expedition 33",
    "Cyberpunk 2077",
    "Baldur's Gate 3"
];



const suggestButton = document.querySelector("#suggestButton");
const select = document.querySelector(".select");

suggestButton.addEventListener("click", function() {
    select.style.display = "block";
});

const compButton = document.querySelector("#compButton");
const storyButton = document.querySelector("#storyButton");
const gameName = document.querySelector("#gameName");
const final = document.querySelector(".final");
const tryButton = document.querySelector("#tryButton");

let gamePicked = false;

compButton.addEventListener("click", function() {
    if(gamePicked === false){
    const randomIndex = Math.floor(Math.random() * competitiveGames.length);
    const randomGame = competitiveGames[randomIndex];
    gameName.textContent = randomGame;
    final.style.display = "block";
    gamePicked = true;

}});

storyButton.addEventListener("click", function() {
    if(gamePicked === false){
    const randomIndex = Math.floor(Math.random() * storyGames.length);
    const randomGame = storyGames[randomIndex];
    gameName.textContent = randomGame;
    final.style.display = "block";
    gamePicked = true;
}});

tryButton.addEventListener("click", function() {

    gamePicked = false;
    final.style.display = "none";
});
