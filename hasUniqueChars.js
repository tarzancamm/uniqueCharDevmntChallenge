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
