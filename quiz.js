// Prepare page
const quizspace = document.getElementById('quizspace');
quizspace.style.display.none;

//WORD CLASSES ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Nouns {
    constructor(de, deArt, eng, pt, ptG, esp, espG, gal, galG) {
        this.de = de;
        this.deArt = deArt;
        this.eng = eng;
        this.pt = pt;
        this.ptG = ptG;
        this.esp = esp;
        this.espG = espG;
        this.gal = gal;
        this.GalG = galG;
    }

    toStr() {
        return `Deutsch: ${this.deArt} ${this.de}, Portugiesisch: ${this.ptG} ${this.pt}, Spanisch: ${this.espG} ${this.esp}, Galicisch: ${this.GalG} ${this.gal}`;
    }
}

class Adjective {
    constructor(de, eng, pt, esp, gal) {
        this.de = de;
        this.eng = eng;
        this.pt = pt;
        this.esp = esp;
        this.gal = gal;
    }

    toStr() {
        return `Deutsch: ${this.de}, Portugiesisch: ${this.pt}, Spanisch: ${this.esp}, Galicisch: ${this.gal}`;
    }
}

class Adverb {
    constructor(de, eng, pt, esp, gal) {
        this.de = de;
        this.eng = eng;
        this.pt = pt;
        this.esp = esp;
        this.gal = gal;
    }

    toStr() {
        return `Deutsch: ${this.de}, Portugiesisch: ${this.pt}, Spanisch: ${this.esp}, Galicisch: ${this.gal}`;
    }
}

class Verb {
    constructor(de, eng, pt, ptRef, esp, espRef, gal, galRef) {
        this.de = de;
        this.eng = eng;
        this.pt = pt;
        this.ptRef = ptRef;
        this.esp = esp;
        this.espRef = espRef;
        this.gal = gal;
        this.galRef = galRef;
    }

    toStr() {
        return `Deutsch: ${this.de}, Portugiesisch: ${this.pt}, Spanisch: ${this.esp}, Galicisch: ${this.gal}`;
    }
}

// Load words

const fs = require('fs');
let categories = [];

function readNouns(link) {
    const nounsList = [];

    try {
        const data = fs.readFileSync(link, 'utf-8');
        const lines = data.split('\n');

        lines.forEach((line) => {
            const arguments = line.split(',');
            if (arguments.length >= 9) {
                const nouns = new Nouns(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4],
                    arguments[5], arguments[6], arguments[7], arguments[8]);
                nounsList.push(nouns);
            } else {
                console.log("Invalid Line: " + line);
            }
        });
    } catch (err) {
        console.error(err);
    }

    console.log("Nouns loaded successfully");
    categories.push("Nouns");
    return nounsList;
}

function readAdj(link) {
    const adjList = [];

    try {
        const data = fs.readFileSync(link, 'utf-8');
        const lines = data.split('\n');

        lines.forEach((line) => {
            const arguments = line.split(',');
            if (arguments.length >= 5) {
                const adj = new Adjective(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                adjList.push(adj);
            } else {
                console.log("Invalid Line: " + line);
            }
        });
    } catch (err) {
        console.error(err);
    }

    console.log("Adjectives loaded successfully");
    categories.push("Adjectives");
    return adjList;
}

function readAdv(link) {
    const advList = [];

    try {
        const data = fs.readFileSync(link, 'utf-8');
        const lines = data.split('\n');

        lines.forEach((line) => {
            const arguments = line.split(',');
            if (arguments.length >= 5) {
                const adv = new Adverb(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                advList.push(adv);
            } else {
                console.log("Invalid Line: " + line);
            }
        });
    } catch (err) {
        console.error(err);
    }
    console.log("Adverbs loaded successfully");
    categories.push("Adverbs");
    return advjList;
}

function readv(link) {
    const vList = [];

    try {
        const data = fs.readFileSync(link, 'utf-8');
        const lines = data.split('\n');

        lines.forEach((line) => {
            const arguments = line.split(',');
            if (arguments.length >= 8) {
                const verb = new Verb(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4],
                    arguments[5], arguments[6], arguments[7]);
                vList.push(verb);
            } else {
                console.log("Invalid Line: " + line);
            }
        });
    } catch (err) {
        console.error(err);
    }

    console.log("Verbs loaded successfully");
    categories.push("Verbs");
    return vList;
}

readNouns("Nouns.csv");
readAdj("Adjectives.csv");
addAdv("Adverbs.csv");
readVerbs("Verbs.csv");

// Handle words

function getWords(word) {
    let lex = [];
    if (!word.includes(",")) {
        lex.push(word);
    } else {
        let wordsArray = word.split(",");
        lex = wordsArray;
    }
    return lex;
}

function checkAnswer(answer, solution) {
    let answers = getWords(answer);
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === solution) {
            return true;
        }
    }
    return false;
}

// Gameplay      -----------------------------------------------------------------------------------------------------------------------------
function chooseCategory() {
    const chosenCategory = prompt("Wähle Wortarten: " + categories.join(", "));
    
    if (!categories.includes(chosenCategory)) {
      alert("Invalid category! Please choose from: " + categories.join(", "));
      chooseCategory();
      return;
    }

    const languages = ["Deutsch", "Portugiesisch", "Spanisch", "Galicisch"];
    const chosenLanguages = prompt("Wähle Sprachen: " + categories.join(", "));

    if (!categories.includes(chosenLanguages)) {
      alert("Invalid category! Please choose from: " + languages.join(", "));
      chooseCategory();
      return;
    }
  
    const numberOfWords = parseInt(prompt("How many words do you want to guess?"));
    if (isNaN(numberOfWords) || numberOfWords <= 0) {
      alert("Invalid number of words! Please enter a positive number.");
      chooseCategory();
      return;
    }
    const setQuizButton = document.getElementById('quizfestlegen');
    setQuizButton.style.display.none;

    const quizspace = document.getElementById('quizspace');
    quizspace.style.display.none;
}







