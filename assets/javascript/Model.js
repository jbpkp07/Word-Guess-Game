"use strict";
/* global CategoryPhrases */

class Model {

    constructor() {
        
        this._CategoryPhrases = new CategoryPhrases();
        this._CurrentPhrase = null;
        this._LetterElementsSelected = [];
        
        this._GuessesRemaining = 7;
        this._IsPhraseGuessedCorrectly = false;
        this._IsPhraseGuessedIncorrectly = false;

        this._Status = new PhraseStatus();
    }

    assignNextPhrase() {

        this._CurrentPhrase = this._CategoryPhrases.getNextPhrase();
    }

    newLetterElementSelected(btnElem) {
        
        this._LetterElementsSelected.push(btnElem);

        let isPickCorrect = this._CurrentPhrase.updateNewLetterPicked(btnElem);

        if (!isPickCorrect) {

            this.adjustRemainingGuesses();
        }
        else if (this.isPhraseCompleted()) {

            this._IsPhraseGuessedCorrectly = true;
        }

        return isPickCorrect;
    }

    adjustRemainingGuesses() {

        this._GuessesRemaining--;

        if (this._GuessesRemaining === 0) {

            this._GuessesRemaining = 7;

            this._IsPhraseGuessedIncorrectly = true;
        }
    }

    isPhraseCompleted() {

        return this._CurrentPhrase.areAllLettersPicked();
    }

    getPhraseStatusAndReset() {

        let status;

        if (this._IsPhraseGuessedCorrectly === true) {

            status = "GUESSED";
        }
        else if (this._IsPhraseGuessedIncorrectly === true) {

            status = "FAILED";
        }
        else {

            status = "CONTINUE";
        }

        if (status !== "CONTINUE") {

            this._IsPhraseGuessedCorrectly = false;

            this._IsPhraseGuessedIncorrectly = false;


        }

        return status;
    }

    clearLettersSelected() {

        this._LetterElementsSelected = [];

        this._CurrentPhrase.resetLettersList();
    }

    get categoryPhrases() { throw new Error("Class:Model:categoryPhrases is PRIVATE"); }
    set categoryPhrases(value) { throw new Error("Class:Model:categoryPhrases is PRIVATE"); }

    get currentPhrase() { return this._CurrentPhrase; }
    set currentPhrase(value) { throw new Error("Class:Model:currentPhrase is PRIVATE"); }

    get letterElementsSelected() { return this._LetterElementsSelected; }
    set letterElementsSelected(value) { throw new Error("Class:Model:letterElementsSelected is PRIVATE"); }
}


class PhraseStatus {

    constructor(isPickCorrect, status) {

        this._IsPickCorrect = isPickCorrect;

        this._Status = status; 
    }

    get isPickCorrect() { return this._IsPickCorrect; }
    set isPickCorrect(value) { this._IsPickCorrect = value; }

    get status() { return this._Status; }
    set status(value) { this._Status = value; }
}