let images = ["dice-01.svg", "dice-02.svg", "dice-03.svg", "dice-04.svg", "dice-05.svg", "dice-06.svg"];

let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    const audio = new Audio((src = "https://bit.ly/dice-sound"));
    audio.play();
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
        console.log(dieOneValue, dieTwoValue);
        document.querySelector("#dice-1").setAttribute("src", "/images/" + images[dieOneValue]);
        document.querySelector("#dice-2").setAttribute("src", "/images/" + images[dieTwoValue]);
        document.querySelector("#Total").innerHTML = "Your Roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    }, 1000);
}
roll();
