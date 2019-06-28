"use strict";
/* global Controller */

class Game {

    constructor() { 

        this._Controller = new Controller();
    }

    startGame() {

        let hasFinishedPromise = this._Controller.beginStartSequence();
     
        hasFinishedPromise.then(() => {

            this.continueGame();
        });
    }

    continueGame() {

        this._Controller.assignKeyboardListener();

        this._Controller.beginNextPhrase();
    }
}