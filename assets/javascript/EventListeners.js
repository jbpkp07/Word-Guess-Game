"use strict";

class EventListeners {
    constructor() {
        this._lettersSelected = [];

        let A_Btn = document.getElementById("A-btn");
        let B_Btn = document.getElementById("B-btn");
        let C_Btn = document.getElementById("C-btn");
        let D_Btn = document.getElementById("D-btn");
        let E_Btn = document.getElementById("E-btn");
        let F_Btn = document.getElementById("F-btn");
        let G_Btn = document.getElementById("G-btn");
        let H_Btn = document.getElementById("H-btn");
        let I_Btn = document.getElementById("I-btn");
        let J_Btn = document.getElementById("J-btn");
        let K_Btn = document.getElementById("K-btn");
        let L_Btn = document.getElementById("L-btn");
        let M_Btn = document.getElementById("M-btn");
        let N_Btn = document.getElementById("N-btn");
        let O_Btn = document.getElementById("O-btn");
        let P_Btn = document.getElementById("P-btn");
        let Q_Btn = document.getElementById("Q-btn");
        let R_Btn = document.getElementById("R-btn");
        let S_Btn = document.getElementById("S-btn");
        let T_Btn = document.getElementById("T-btn");
        let U_Btn = document.getElementById("U-btn");
        let V_Btn = document.getElementById("V-btn");
        let W_Btn = document.getElementById("W-btn");
        let X_Btn = document.getElementById("X-btn");
        let Y_Btn = document.getElementById("Y-btn");
        let Z_Btn = document.getElementById("Z-btn");

        document.addEventListener("keyup", (event) => {
            let keyPressed = event.key.toUpperCase();

            switch (keyPressed) {
                case "A": selectLetter(A_Btn); break;
                case "B": selectLetter(B_Btn); break;
                case "C": selectLetter(C_Btn); break;
                case "D": selectLetter(D_Btn); break;
                case "E": selectLetter(E_Btn); break;
                case "F": selectLetter(F_Btn); break;
                case "G": selectLetter(G_Btn); break;
                case "H": selectLetter(H_Btn); break;
                case "I": selectLetter(I_Btn); break;
                case "J": selectLetter(J_Btn); break;
                case "K": selectLetter(K_Btn); break;
                case "L": selectLetter(L_Btn); break;
                case "M": selectLetter(M_Btn); break;
                case "N": selectLetter(N_Btn); break;
                case "O": selectLetter(O_Btn); break;
                case "P": selectLetter(P_Btn); break;
                case "Q": selectLetter(Q_Btn); break;
                case "R": selectLetter(R_Btn); break;
                case "S": selectLetter(S_Btn); break;
                case "T": selectLetter(T_Btn); break;
                case "U": selectLetter(U_Btn); break;
                case "V": selectLetter(V_Btn); break;
                case "W": selectLetter(W_Btn); break;
                case "X": selectLetter(X_Btn); break;
                case "Y": selectLetter(Y_Btn); break;
                case "Z": selectLetter(Z_Btn); break;
            }
        });

        A_Btn.addEventListener("click", (event) => { this.selectLetter(A_Btn); });
        B_Btn.addEventListener("click", (event) => { this.selectLetter(B_Btn); });
        C_Btn.addEventListener("click", (event) => { this.selectLetter(C_Btn); });
        D_Btn.addEventListener("click", (event) => { this.selectLetter(D_Btn); });
        E_Btn.addEventListener("click", (event) => { this.selectLetter(E_Btn); });
        F_Btn.addEventListener("click", (event) => { this.selectLetter(F_Btn); });
        G_Btn.addEventListener("click", (event) => { this.selectLetter(G_Btn); });
        H_Btn.addEventListener("click", (event) => { this.selectLetter(H_Btn); });
        I_Btn.addEventListener("click", (event) => { this.selectLetter(I_Btn); });
        J_Btn.addEventListener("click", (event) => { this.selectLetter(J_Btn); });
        K_Btn.addEventListener("click", (event) => { this.selectLetter(K_Btn); });
        L_Btn.addEventListener("click", (event) => { this.selectLetter(L_Btn); });
        M_Btn.addEventListener("click", (event) => { this.selectLetter(M_Btn); });
        N_Btn.addEventListener("click", (event) => { this.selectLetter(N_Btn); });
        O_Btn.addEventListener("click", (event) => { this.selectLetter(O_Btn); });
        P_Btn.addEventListener("click", (event) => { this.selectLetter(P_Btn); });
        Q_Btn.addEventListener("click", (event) => { this.selectLetter(Q_Btn); });
        R_Btn.addEventListener("click", (event) => { this.selectLetter(R_Btn); });
        S_Btn.addEventListener("click", (event) => { this.selectLetter(S_Btn); });
        T_Btn.addEventListener("click", (event) => { this.selectLetter(T_Btn); });
        U_Btn.addEventListener("click", (event) => { this.selectLetter(U_Btn); });
        V_Btn.addEventListener("click", (event) => { this.selectLetter(V_Btn); });
        W_Btn.addEventListener("click", (event) => { this.selectLetter(W_Btn); });
        X_Btn.addEventListener("click", (event) => { this.selectLetter(X_Btn); });
        Y_Btn.addEventListener("click", (event) => { this.selectLetter(Y_Btn); });
        Z_Btn.addEventListener("click", (event) => { this.selectLetter(Z_Btn); });
    }

    selectLetter(btnElem) {

        if (!lettersSelected.includes(btnElem)) {

            btnElem.className = "letter-selected";

            lettersSelected.push(btnElem);
        }
    }

    unSelectAllLetters() {

        for (let btnElem of lettersSelected) {

            btnElem.className = "letter";
        }

        lettersSelected = [];
    }
}

let myListr = new EventListeners();

document.addEventListener("keyup", (event) => {

    let keyPressed = event.key.toUpperCase();

    switch (keyPressed) {
        case "SHIFT":
            myListr.unSelectAllLetters();
            break;
    }
});