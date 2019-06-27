"use strict";

class Game {

    constructor() { }

    startGame() {
        


        // let controller = new Controller();

        // controller.beginNextPhrase();



        // document.addEventListener("keyup", (event) => {

        //     let zoomed = true;

        //     let keyPressed = event.key.toUpperCase();

        //     switch (keyPressed) {
        //         case "SHIFT":
        //             this._Controller.unSelectAllLetters();
        //             if (zoomed) {
        //                 this._Controller._View.unZoomBackground();
        //                 zoomed = false;
        //             }
        //             else {
        //                 this._Controller._View.zoomBackground();
        //                 zoomed = true;
        //             }

        //             break;
        //     }

        //     let nextPhrase = controller._CategoryPhrases.getNextPhrase();

        //     controller._View.updateCategory(nextPhrase.category);

        //     let builtPhrase = "";

        //     for (let ltr of nextPhrase.lettersList) {
        //         if (ltr.hasPicked === true) {
        //             builtPhrase += ltr.letter;
        //         }
        //         else {
        //             builtPhrase += "_";
        //         }

        //     }
        //     console.log(nextPhrase.phrase);

        //     for (let ltr of nextPhrase.lettersList) {
        //         console.log(ltr.letter + " : " + ltr.hasPicked);
        //     }

        //     //controller._View.updatePhrase(builtPhrase);
        // });
    }


}

let launcher = new Game();

launcher.startGame();