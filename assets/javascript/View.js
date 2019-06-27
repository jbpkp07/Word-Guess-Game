"use strict";

class View {

    constructor() {
        this._StartSequenceFinished = false;
    }

    startSequence() {

        let startBTN = document.getElementById("showStartBtn");

        startBTN.id = "hideStartBtn";

        window.setTimeout(() => {
            startBTN.style = "visibility: hidden;";
            this.showHideInstructions();
        }, 2000);
    }

    showHideInstructions() {

        let instructions = document.getElementById("hideInstructions");

        instructions.id = "showInstructions";

        window.setTimeout(() => {
            instructions.id = "fadeInstructions";
            window.setTimeout(() => { this.hideStartGame(); }, 2000);
        }, 5000);
    }

    hideStartGame() {
        document.getElementById("showStartGame").id = "hideStartGame";

        this._StartSequenceFinished = true;
    }



    waitFor(conditionFunction) {

        const poll = resolve => {
            if (conditionFunction()) { 
                resolve();
            }
            else { 
                setTimeout( () => poll(resolve), 100);
            }
        }
    
        return new Promise(poll);
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

    unZoomBackground() {
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