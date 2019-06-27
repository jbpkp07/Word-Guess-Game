"use strict";

class Model {

    constructor() {
        
        this._CategoryPhrases = new CategoryPhrases();
        this._CurrentPhrase = null;
        this._LetterElementsSelected = [];
    }

    assignNextPhrase() {

        this._CurrentPhrase = this._CategoryPhrases.getNextPhrase();
    }

    newLetterElementSelected(btnElem) {
        
        this._LetterElementsSelected.push(btnElem);

        this._CurrentPhrase.updateNewLetterPicked(btnElem);
    }

    clearLettersSelected() {

        this._LetterElementsSelected = [];
    }

    get categoryPhrases() { return this._CategoryPhrases; }
    set categoryPhrases(value) { throw new Error("Class:Model:categoryPhrases is PRIVATE"); }

    get currentPhrase() { return this._CurrentPhrase; }
    set currentPhrase(value) { throw new Error("Class:Model:currentPhrase is PRIVATE"); }

    get letterElementsSelected() { return this._LetterElementsSelected; }
    set letterElementsSelected(value) { throw new Error("Class:Model:letterElementsSelected is PRIVATE"); }
}