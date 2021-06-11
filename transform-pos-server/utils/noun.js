const pos = require('parts-of-speech');

// If the word is a noun, it returns true.
let isNoun = (word) => {
    let tagger = new pos.Tagger();

    return tagger.tag([word])[0][1][0] === 'N'
}




module.exports = isNoun;