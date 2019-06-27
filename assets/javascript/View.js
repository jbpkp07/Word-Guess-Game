"use strict";

class View {

    constructor() { }

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
}