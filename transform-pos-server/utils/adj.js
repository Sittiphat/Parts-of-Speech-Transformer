const pos = require('parts-of-speech');


let isAdj = (word) => {
    let tagger = new pos.Tagger();

    return tagger.tag([word])[0][1] === "JJ";
}




module.exports = isAdj;