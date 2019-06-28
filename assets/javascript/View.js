"use strict";

class View {

    constructor() {
        this._StartSequenceFinished = false;
    }

    startSequence(waitFunction) {

        this.hideStartBtn(2000);

        this.showInstructions(2000);

        this.hideInstructions(7000);

        this.hideGameTitle(7000);

        this.unZoomBackground(7000);

        this.hideStartGame(11000);

        this.showLettersGrid(11000);

        this.showCategory(11000);

        this.showPhrase(11000);

        window.setTimeout(() => {
            this._StartSequenceFinished = true;
        }, 11000);

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

    hideGameTitle(mSec) {

        window.setTimeout(() => {
            document.getElementById("gameTitle").className = "fadeGameTitle";
        }, mSec);
    }

    hideStartGame(mSec) {
        
        window.setTimeout(() => {
            document.getElementById("startGame").className = "hideStartGame";
        }, mSec);
    }

    unZoomBackground(mSec) {

        window.setTimeout(() => {
            document.getElementById("bg").className = "backgroundIMG";
        }, mSec);
    }

    showLettersGrid(mSec) {

        window.setTimeout(() => {
            document.getElementById("lettersContainer").className = "container-fluid lettersContainer";
        }, mSec);
    }

    showCategory(mSec) {

        window.setTimeout(() => {
            document.getElementById("category").className = "fadeCategory";
            window.setTimeout(() => { document.getElementById("category").className = "showCategory"; }, 100);
        }, mSec);
    }

    showPhrase(mSec) {

        window.setTimeout(() => {
            document.getElementById("phrase").className = "fadePhrase";
            window.setTimeout(() => { document.getElementById("phrase").className = "showPhrase"; }, 100);
        }, mSec);
    }

    updateCategory(category) {
        document.getElementById("categoryText").textContent = category;
    }

    updatePhrase(phrase) {
        document.getElementById("phrase").textContent = phrase;
    }

    // zoomBackground() {
    //     document.getElementById("bg").className = "backgroundIMGZoomed";
    // }

    selectButton(btnElem) {
        btnElem.className = "letter-selected";
    }

    unSelectButton(btnElem) {
        btnElem.className = "letter";
    }

    get startSequenceFinished() { return this._StartSequenceFinished; }
    set startSequenceFinished(value) { throw new Error("Class:View:startSequenceFinished is PRIVATE"); }
}