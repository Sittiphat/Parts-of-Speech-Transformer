const isNoun = require("./noun.js");
const isAdj = require('./adj.js');
const isVerb = require('./verb.js');

// Transforms text by identifying each word's POS then appending 
// appropriate POS if needed.
let transformTextPOS = (text) => {
    let arr_of_test = text.match(/\w+|\s+|[^\s\w]+/g);

    for (let i in arr_of_test) {
        if (arr_of_test[i] != " " && isNoun(arr_of_test[i])) {
            arr_of_test[i] = arr_of_test[i] + "(noun)";
        } else if (arr_of_test[i] != " " && isAdj(arr_of_test[i])) {
            arr_of_test[i] = arr_of_test[i] + "(adj)";
        } else if (arr_of_test[i] != " " && isVerb(arr_of_test[i])) {
            arr_of_test[i] = arr_of_test[i] + "(verb)";
        }
    }


    return arr_of_test.join("");
}


module.exports = transformTextPOS;