// Given a word, return true if that word contains only unique characters (no repeat characters, unless one is uppercase and the other lowercase - 'Bob' = true). Return false otherwise.
// Write your code below


let uniqueChar = (word) => {
    for (let i = 0; i < word.length; i++) {
        if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
            return false;
        }
    }
    return true;
}

let randomWord = 'monday'
console.log(uniqueChar(randomWord))

// Checks the first index of a character and if that index is NOT EQUAL to the index of the last occurance of that character it returns false. If it IS EQUAL it returns true.



// Advanced

let chkRepeat = (word) => {
    let wordSet = new Set(word);
    let lengthWord = word.length;
    let lengthWordSet = wordSet.size;

    if (lengthWord === lengthWordSet) {
        return true;
    } else {
        return false;
    }
}

let newRandomWord = 'hello'
console.log(chkRepeat(newRandomWord))

// Solved with Set built-in object. 