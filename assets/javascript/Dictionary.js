"use strict";

class Letter {
    constructor(letter) {
        this._letter = letter;
        this._hasPicked = false;
    }

    markAsPicked() { this._hasPicked = true; }
    resetAsPicked() { this._hasPicked = false; }

    get letter() { return this._letter; }
    set letter(value) { throw new Error("Class:Letter:letter is PRIVATE"); }

    get hasPicked() { return this._hasPicked; }
    set hasPicked(value) { throw new Error("Class:Letter:hasPicked is PRIVATE"); }
    // set hasPicked(value) { this._hasPicked = value; }
}

class CategoryPhrase {
    constructor(category, phrase) {
        this._category = category;
        this._phrase = phrase;
        this._lettersList = [];

        this.buildLettersList();
    }

    buildLettersList() {
        for (let ch of this._phrase) {
            if (ch !== ' ') {
                this._lettersList.push(new Letter(ch.toUpperCase()));
            }
        }
    }

    resetLettersList() {
        for (let letter of this._lettersList) {
            letter.resetAsPicked();
        }
    }

    get category() { return this._category; }
    set category(value) { throw new Error("Class:CategoryPhrase:category is PRIVATE"); }

    get phrase() { return this._phrase; }
    set phrase(value) { throw new Error("Class:CategoryPhrase:phrase is PRIVATE"); }

    get lettersList() { return this._lettersList; }
    set lettersList(value) { throw new Error("Class:CategoryPhrase:lettersList is PRIVATE"); }
}

class CategoryPhrases {
    constructor() {
        this._history = [];
        this._categoryPhrasesList = [];

        this.addHardwarePhrase("CPU");
        this.addHardwarePhrase("Memory");
        this.addHardwarePhrase("Processor");
        // this.addHardwarePhrase("Firewall");
        // this.addHardwarePhrase("Ethernet");
        // this.addHardwarePhrase("Motherboard");
        // this.addHardwarePhrase("Graphics Card");
        // this.addHardwarePhrase("Fiber Adapter");
        // this.addHardwarePhrase("File Server");
        // this.addHardwarePhrase("Terminal Server");

        // this.addSoftwareDevelopmentPhrase("Inheritance");
        // this.addSoftwareDevelopmentPhrase("Overloading");
        // this.addSoftwareDevelopmentPhrase("Constructor");
        // this.addSoftwareDevelopmentPhrase("Polymorphism");
        // this.addSoftwareDevelopmentPhrase("Interpreter");
        // this.addSoftwareDevelopmentPhrase("Database Connector");
        // this.addSoftwareDevelopmentPhrase("Private Member");
        // this.addSoftwareDevelopmentPhrase("Just In Time Compilation");
        // this.addSoftwareDevelopmentPhrase("Tokenization");
        // this.addSoftwareDevelopmentPhrase("Regular Expression");

        // this.addApplicationPhrase("Text Editor");
        // this.addApplicationPhrase("PDF Reader");
        // this.addApplicationPhrase("Adobe Photoshop");
        // this.addApplicationPhrase("Microsoft Excel");
        // this.addApplicationPhrase("Filezilla FTP Client");
        // this.addApplicationPhrase("Apple Final Cut Pro");
        // this.addApplicationPhrase("Google Chrome");
        // this.addApplicationPhrase("Mozilla Firefox");
        // this.addApplicationPhrase("Microsoft Visual Studio");
        // this.addApplicationPhrase("Adobe Illustrator");

        // this.addOperatingSystemPhrase("Windows Vista");
        // this.addOperatingSystemPhrase("Windows Server");
        // this.addOperatingSystemPhrase("Sun Solaris");
        // this.addOperatingSystemPhrase("macOS High Sierra");
        // this.addOperatingSystemPhrase("CentOS Linux");
        // this.addOperatingSystemPhrase("Ubuntu Linux");
        // this.addOperatingSystemPhrase("Debian Linux");
        // this.addOperatingSystemPhrase("Red Hat Linux");
        // this.addOperatingSystemPhrase("Apple iOS");
        // this.addOperatingSystemPhrase("Google Android");

        // this.addMiscellaneousPhrase("Ctrl Alt Delete");
        // this.addMiscellaneousPhrase("Blind Carbon Copy");
        // this.addMiscellaneousPhrase("Remote Desktop Session");
        // this.addMiscellaneousPhrase("Reply All");
        // this.addMiscellaneousPhrase("Concatenate");
        // this.addMiscellaneousPhrase("Contiguous");
        // this.addMiscellaneousPhrase("Copy Paste");
        // this.addMiscellaneousPhrase("Telnet Session");
        // this.addMiscellaneousPhrase("SSH Certificate");
        // this.addMiscellaneousPhrase("IP Address");
    }

    addHardwarePhrase(phrase) {
        this._categoryPhrasesList.push(new CategoryPhrase("Hardware", phrase));
    }

    addSoftwareDevelopmentPhrase(phrase) {
        this._categoryPhrasesList.push(new CategoryPhrase("Software Development", phrase));
    }

    addApplicationPhrase(phrase) {
        this._categoryPhrasesList.push(new CategoryPhrase("Application", phrase));
    }

    addOperatingSystemPhrase(phrase) {
        this._categoryPhrasesList.push(new CategoryPhrase("Operating System", phrase));
    }

    addMiscellaneousPhrase(phrase) {
        this._categoryPhrasesList.push(new CategoryPhrase("Miscellaneous", phrase));
    }

    getNextPhrase() {
        let nextPhrase;

        do {
            if (this._categoryPhrasesList.length === this._history.length) {
                console.log("Out Of Phrases, Starting Over Sequence");
                this._history.shift(); //remove first element
            }

            let i = Math.floor(Math.random() * this._categoryPhrasesList.length);
            nextPhrase = this._categoryPhrasesList[i];

            if (!this._history.includes(nextPhrase)) {
                this._history.push(nextPhrase);
                break;
            }

        }
        while (this._history.includes(nextPhrase));

        return nextPhrase;
    }

    get categoryPhrasesList() { return this._categoryPhrasesList; }
    set categoryPhrasesList(value) { throw new Error("Class:CategoryPhrases:categoryPhrasesList is PRIVATE"); }
}




// let myCW = new CategoryPhrases();


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

//     var historyList = "";
//     for (let item of myCW._history) {
//         historyList += item.phrase + ", ";
//     }
//     console.log(historyList);
// };
