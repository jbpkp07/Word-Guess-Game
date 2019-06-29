"use strict";
/* global CategoryPhrases */

class Model {

    constructor() {

        this._CategoryPhrases = new CategoryPhrases();
        this._CurrentPhrase = null;
        this._Status = new PhraseStatus();
        this._LetterElementsSelected = [];

        this._GuessesRemaining = Model.initialGuesses;
    }

    static get initialGuesses() { return 7; }

    assignNextPhrase() {

        if (this._CurrentPhrase !== null) {

            this._LetterElementsSelected = [];

            this._CurrentPhrase.resetLettersList();
    
            this._GuessesRemaining = Model.initialGuesses;
    
            this._Status.resetStatus();
        }

        this._CurrentPhrase = this._CategoryPhrases.getNextPhrase();
    }

    newLetterElementSelected(btnElem) {

        this._LetterElementsSelected.push(btnElem);

        let isPickCorrect = this._CurrentPhrase.updateNewLetterPicked(btnElem);

        this.adjustRemainingGuesses(isPickCorrect);

        this.updateStatus(isPickCorrect);
    }

    adjustRemainingGuesses(isPickCorrect) {

        if (!isPickCorrect && this._GuessesRemaining !== 0) {

            this._GuessesRemaining--;
        }
    }

    updateStatus(isPickCorrect) {

        this._Status.isPickCorrect = isPickCorrect;

        if (this._GuessesRemaining === 0) {

            this._Status.status = PhraseStatus.failed;
        }
        else if (this._CurrentPhrase.areAllLettersPicked()) {

            this._Status.status = PhraseStatus.guessed;
        }
    }


    get currentPhrase() { return this._CurrentPhrase; }
    set currentPhrase(value) { throw new Error("Class:Model:currentPhrase is PRIVATE"); }

    get getStatus() { return this._Status; }
    set getStatus(value) { throw new Error("Class:Model:getStatus is PRIVATE"); }

    get letterElementsSelected() { return this._LetterElementsSelected; }
    set letterElementsSelected(value) { throw new Error("Class:Model:letterElementsSelected is PRIVATE"); }
}


class PhraseStatus {

    constructor() {

        this._IsPickCorrect = false;

        this._Status = PhraseStatus.continue;
    }

    static get guessed() { return "GUESSED"; }

    static get failed() { return "FAILED"; }

    static get continue() { return "CONTINUE"; }

    resetStatus() {

        this._IsPickCorrect = false;

        this._Status = PhraseStatus.continue;
    }

    get isPickCorrect() { return this._IsPickCorrect; }
    set isPickCorrect(value) { this._IsPickCorrect = value; }

    get status() { return this._Status; }
    set status(value) { this._Status = value; }
}