"use strict";


class Game {
    constructor() {
        this._phraseLibrary = new CategoryPhrases();
        
    }

    displayGame() {
      
    }

}








// for (let catPhrase of myCW.categoryPhrasesList) {

//     let chars = "";

//     for (let letterOBJ of catPhrase.lettersList) {
//         chars += letterOBJ.letter + "[" + letterOBJ.hasPicked + "]" + ", ";
//     }

//     console.log(catPhrase.category + " : " + catPhrase.phrase + " : " + chars);
// }


// document.onkeyup = function (event) {
//     let testBlah = myCW.getNextPhrase();


//     console.log("Next Phrase : " + testBlah.phrase);
//     console.log(testBlah.lettersList[0].letter + " : " + testBlah.lettersList[0].hasPicked);
//     testBlah.lettersList[0].markAsPicked();
//     console.log(testBlah.lettersList[0].letter + " : " + testBlah.lettersList[0].hasPicked);

//     testBlah.resetLettersList();

//     let historyList = "";
//     for (let item of myCW._history) {
//         historyList += item.phrase + ", ";
//     }
//     console.log(historyList);
// };