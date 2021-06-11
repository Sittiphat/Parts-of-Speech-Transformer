const express = require("express");
const cors = require('cors');
const translateText = require("../utils/translate.js");
const transformText = require("../utils/transformer.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.text());
app.use(express.json());
app.use(cors());

// If wrong link is provided instructions are provided below
app.get("*", (req, res) => {
    res.send("To translate to Spanish and get the parts of speech of the text simultaneously, send a text/plain body content type POST request to /transform-translate-sp");
});

app.post("/translate-ch", (req, res) => {

    translateText(req.body, "zh").then(t_t => res.send(t_t));

});

app.post("/translate-sp", (req, res) => {

    translateText(req.body, "es").then(t_t => res.send(t_t));
});

// This is the main API endpoint used in the final version. We transform 
// the text by calling our helper function defined in our self-made import module.
app.post("/transform", (req, res) => {

    res.send(transformText(req.body));
});

app.post("/transform-translate-ch", (req, res) => {

    translateText(transformText(req.body), "zh").then(t_t => res.send(t_t));
});

app.post("/transform-translate-sp", (req, res) => {

    translateText(transformText(req.body), "es").then(t_t => res.send(t_t));
});

// Server listens to incoming request.
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});