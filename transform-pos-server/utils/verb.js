const pos = require('parts-of-speech');

// If the word is a verb, the function returns true.
let isVerb = (word) => {
    let tagger = new pos.Tagger();

    return tagger.tag([word])[0][1][0] === "V";
}




module.exports = isVerb;