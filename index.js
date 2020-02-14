var buttons = [...document.querySelectorAll(".drum")];
var drums = ["crash.mp3", "kick-bass.mp3", "snare.mp3", "tom-1.mp3", "tom-2.mp3", "tom-3.mp3", "tom-4.mp3"];

// Play sound corresponding to image on click
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        new Audio("sounds/"+drums[buttons.indexOf(event.target)]).play();
    });
}

// Play sound corresponding to letter on keypress, if there is one
document.addEventListener("keydown", function(b) {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].textContent === b.key) {
            new Audio("sounds/"+drums[i]).play();
        }
    }
});