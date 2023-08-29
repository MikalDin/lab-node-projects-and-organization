const mikWordleApp = require("./words.json");

console.log(mikWordleApp)

// function to log all the words 


const allWords = (words) => {
    console.log(words)
};


const firstTenWords = (words) => {
    console.log(words.slice(0,10));

};

const nextTenWords = (words) => {
    console.log(words.slice(10,20));
};

const firstXWords = (words, x) => {
    console.log(words.slice(0,x));
};

const subsetOfWords = (words,x, y) => {
    console.log(words.slice(x,y));
}

const sortWords = (words) => {
    console.log(words.sort())
};

const wordsWithQ = (words) => {
    return words.filter(word => word.includes('q'));
};

const findWordsWithLetter = (words, letter) => {
        return words.filter(word => word.includes(letter));
}
// allow user to input letter from terminal
        const letter  = process.argv[2];
// this property is used to retrieve the command-line arguments entered when running the script.
        const wordList = ["women",
    "nikau",
    "swack",
    "feens",
    "fyles",
    "poled",
    "clags",
    "starn",
    "bindi",
    "woops",
    "fanos",
    "cabin",
    "souct",
    "trass",
    "shoat",
    "lefty",
    "durra",
    "hypes",
    "junta",
    "baisa"]

// call the  findWordswithLetter function w/ user input and log the result
    console.log(findWordsWithLetter(wordList, letter));

