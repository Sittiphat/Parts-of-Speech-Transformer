const translate = require("translate"); // Old school

// Translate from English (default) to Spanish (specified)
let translateText = async (text, language) => {
    translate.engine = "libre";
    const translated_text = await translate(text, language);

    return translated_text
}

module.exports = translateText;