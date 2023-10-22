
// Drum Sound with button Element

var numOfDrums = document.querySelectorAll(".drum").length;
for (i =0; i<numOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}

// Drum sound with Key Element

document.addEventListener("keypress",function(event){
    var keyValue = event.key;
    makeSound(keyValue);
})

// Common function for making sound based on key or innerHTML value

function makeSound(key){
    switch (key) {
        case 'w':
            var tum1 = new Audio("./tom-1.mp3");
            tum1.play();
            break;
        case 'a':
            var tum2 = new Audio("./tom-2.mp3");
            tum2.play();
            break;
        case 's':
            var tum3 = new Audio("./tom-3.mp3");
            tum3.play();
            break;
        case 'd':
            var tum4 = new Audio("./tom-4.mp3");
            tum4.play();
            break;
        case 'j':
                var crash = new Audio("./crash.mp3");
                crash.play();
                break;
        case 'k':
            var kickBoss = new Audio("./kick-bass.mp3");
            kickBoss.play();
            break;
        case 'l':
            var share = new Audio("./snare.mp3");
            share.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}