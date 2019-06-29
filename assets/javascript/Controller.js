"use strict";
/* global View, Model */

class Controller {

    constructor() {

        this._View = new View();
        this._Model = new Model();
        this._IsStartSequenceInitiated = false;

        //HTML button elements-------------------------------------------------
        this.A_Btn = document.getElementById("A-btn");
        this.B_Btn = document.getElementById("B-btn");
        this.C_Btn = document.getElementById("C-btn");
        this.D_Btn = document.getElementById("D-btn");
        this.E_Btn = document.getElementById("E-btn");
        this.F_Btn = document.getElementById("F-btn");
        this.G_Btn = document.getElementById("G-btn");
        this.H_Btn = document.getElementById("H-btn");
        this.I_Btn = document.getElementById("I-btn");
        this.J_Btn = document.getElementById("J-btn");
        this.K_Btn = document.getElementById("K-btn");
        this.L_Btn = document.getElementById("L-btn");
        this.M_Btn = document.getElementById("M-btn");
        this.N_Btn = document.getElementById("N-btn");
        this.O_Btn = document.getElementById("O-btn");
        this.P_Btn = document.getElementById("P-btn");
        this.Q_Btn = document.getElementById("Q-btn");
        this.R_Btn = document.getElementById("R-btn");
        this.S_Btn = document.getElementById("S-btn");
        this.T_Btn = document.getElementById("T-btn");
        this.U_Btn = document.getElementById("U-btn");
        this.V_Btn = document.getElementById("V-btn");
        this.W_Btn = document.getElementById("W-btn");
        this.X_Btn = document.getElementById("X-btn");
        this.Y_Btn = document.getElementById("Y-btn");
        this.Z_Btn = document.getElementById("Z-btn");

        //Mouse listeners------------------------------------------------------
        this.A_Btn.addEventListener("click", (event) => { this.selectLetter(this.A_Btn); });
        this.B_Btn.addEventListener("click", (event) => { this.selectLetter(this.B_Btn); });
        this.C_Btn.addEventListener("click", (event) => { this.selectLetter(this.C_Btn); });
        this.D_Btn.addEventListener("click", (event) => { this.selectLetter(this.D_Btn); });
        this.E_Btn.addEventListener("click", (event) => { this.selectLetter(this.E_Btn); });
        this.F_Btn.addEventListener("click", (event) => { this.selectLetter(this.F_Btn); });
        this.G_Btn.addEventListener("click", (event) => { this.selectLetter(this.G_Btn); });
        this.H_Btn.addEventListener("click", (event) => { this.selectLetter(this.H_Btn); });
        this.I_Btn.addEventListener("click", (event) => { this.selectLetter(this.I_Btn); });
        this.J_Btn.addEventListener("click", (event) => { this.selectLetter(this.J_Btn); });
        this.K_Btn.addEventListener("click", (event) => { this.selectLetter(this.K_Btn); });
        this.L_Btn.addEventListener("click", (event) => { this.selectLetter(this.L_Btn); });
        this.M_Btn.addEventListener("click", (event) => { this.selectLetter(this.M_Btn); });
        this.N_Btn.addEventListener("click", (event) => { this.selectLetter(this.N_Btn); });
        this.O_Btn.addEventListener("click", (event) => { this.selectLetter(this.O_Btn); });
        this.P_Btn.addEventListener("click", (event) => { this.selectLetter(this.P_Btn); });
        this.Q_Btn.addEventListener("click", (event) => { this.selectLetter(this.Q_Btn); });
        this.R_Btn.addEventListener("click", (event) => { this.selectLetter(this.R_Btn); });
        this.S_Btn.addEventListener("click", (event) => { this.selectLetter(this.S_Btn); });
        this.T_Btn.addEventListener("click", (event) => { this.selectLetter(this.T_Btn); });
        this.U_Btn.addEventListener("click", (event) => { this.selectLetter(this.U_Btn); });
        this.V_Btn.addEventListener("click", (event) => { this.selectLetter(this.V_Btn); });
        this.W_Btn.addEventListener("click", (event) => { this.selectLetter(this.W_Btn); });
        this.X_Btn.addEventListener("click", (event) => { this.selectLetter(this.X_Btn); });
        this.Y_Btn.addEventListener("click", (event) => { this.selectLetter(this.Y_Btn); });
        this.Z_Btn.addEventListener("click", (event) => { this.selectLetter(this.Z_Btn); });
    }

    beginStartSequence() {

        document.getElementById("startBtn").addEventListener("click", (event) => {

            if (!this._StartSequenceInitiated) {

                this._StartSequenceInitiated = true;

                this._View.startSequence();
            }
        });
       
        let hasFinishedPromise = this.createPromise( () => this._View.isStartSequenceFinished === true );
       
        return hasFinishedPromise;
    }

    createPromise(waitFunction) {

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

    assignKeyboardListener() {

        document.addEventListener("keyup", (event) => {

            let keyPressed = event.key.toUpperCase();

            switch (keyPressed) {
                case "A": this.selectLetter(this.A_Btn); break;
                case "B": this.selectLetter(this.B_Btn); break;
                case "C": this.selectLetter(this.C_Btn); break;
                case "D": this.selectLetter(this.D_Btn); break;
                case "E": this.selectLetter(this.E_Btn); break;
                case "F": this.selectLetter(this.F_Btn); break;
                case "G": this.selectLetter(this.G_Btn); break;
                case "H": this.selectLetter(this.H_Btn); break;
                case "I": this.selectLetter(this.I_Btn); break;
                case "J": this.selectLetter(this.J_Btn); break;
                case "K": this.selectLetter(this.K_Btn); break;
                case "L": this.selectLetter(this.L_Btn); break;
                case "M": this.selectLetter(this.M_Btn); break;
                case "N": this.selectLetter(this.N_Btn); break;
                case "O": this.selectLetter(this.O_Btn); break;
                case "P": this.selectLetter(this.P_Btn); break;
                case "Q": this.selectLetter(this.Q_Btn); break;
                case "R": this.selectLetter(this.R_Btn); break;
                case "S": this.selectLetter(this.S_Btn); break;
                case "T": this.selectLetter(this.T_Btn); break;
                case "U": this.selectLetter(this.U_Btn); break;
                case "V": this.selectLetter(this.V_Btn); break;
                case "W": this.selectLetter(this.W_Btn); break;
                case "X": this.selectLetter(this.X_Btn); break;
                case "Y": this.selectLetter(this.Y_Btn); break;
                case "Z": this.selectLetter(this.Z_Btn); break;
            }
        });
    }

    selectLetter(btnElem) {

        if (!this._Model.letterElementsSelected.includes(btnElem)) {
 
            let isPickCorrect = this._Model.newLetterElementSelected(btnElem);

            this._View.selectButton(btnElem, isPickCorrect);

            this._View.updatePhrase(this._Model.currentPhrase.displayPhrase);

            let status = this._Model.getPhraseStatusAndReset();

            if (status !== "CONTINUE") {

                if (status === "GUESSED") {
                    alert("You win!");
                }
                else {
                    alert("You Lose!");
                }

                this.completedPhrase();
            }
            // if (this._Model.isPhraseCompleted()) {

            //    this.completedPhrase();
            // }
        }
    }

    completedPhrase() {
        
        window.setTimeout( () => { this.beginNextPhrase(); }, 2000);
    }

    unSelectAllLetters() {

        for (let btnElem of this._Model.letterElementsSelected) {

            this._View.unSelectButton(btnElem);
        }

        this._Model.clearLettersSelected();
    }

    beginNextPhrase() {

        this._Model.assignNextPhrase();

        this.unSelectAllLetters();

        this._View.updateCategory(this._Model.currentPhrase.category);

        this._View.updatePhrase(this._Model.currentPhrase.displayPhrase);
    }
}