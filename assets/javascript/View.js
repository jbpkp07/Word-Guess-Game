"use strict";

class View {

    constructor() {
        this._StartSequenceFinished = false;
    }

    startSequence(waitFunction) {

        this.hideStartBtn(2000);

        this.showInstructions(2000);

        this.hideInstructions(7000);

        this.hideStartGame(9000);

        const poll = (resolve) => {
            if (waitFunction()) {
                resolve();
            }
            else {
                setTimeout(() => poll(resolve), 100);
            }
        };

        return new Promise(poll);
    }

    hideStartBtn(mSec) {

        document.getElementById("startBtn").className = "hideStartBtn";

        window.setTimeout(() => {
            document.getElementById("startBtn").style = "visibility: hidden;";
        }, mSec);
    }

    showInstructions(mSec) {

        window.setTimeout(() => {
            document.getElementById("instructions").className = "showInstructions";
        }, mSec);
    }

    hideInstructions(mSec) {

        window.setTimeout(() => {
            document.getElementById("instructions").className = "fadeInstructions";
        }, mSec);
    }

    hideStartGame(mSec) {
        
        window.setTimeout(() => {
            document.getElementById("startGame").className = "hideStartGame";
            // this._StartSequenceFinished = true;
        }, mSec);
    }

    updateCategory(category) {
        document.getElementById("category").textContent = category;
    }

    updatePhrase(phrase) {
        document.getElementById("phrase").textContent = phrase;
    }

    zoomBackground() {
        document.getElementById("bg").className = "backgroundIMGZoomed";
    }

    unZoomBackground(mSec) {
        document.getElementById("bg").className = "backgroundIMG";
    }

    selectButton(btnElem) {
        btnElem.className = "letter-selected";
    }

    unSelectButton(btnElem) {
        btnElem.className = "letter";
    }

    get startSequenceFinished() { return this._StartSequenceFinished; }
    set startSequenceFinished(value) { throw new Error("Class:View:startSequenceFinished is PRIVATE"); }
}