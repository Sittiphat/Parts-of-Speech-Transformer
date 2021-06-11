console.log("Client side Javascript file is loaded");

const form_api = document.querySelector("#form_API");
const form_text = document.querySelector("#form_text");
const search_API = document.querySelector("input");
const search_text = document.querySelector("textarea");

const back_btn = document.querySelector("#back_btn");
const refresh_btn = document.querySelector("#refresh_btn");
const for_btn = document.querySelector("#for_btn");

let output = document.querySelector("#output");

// This is the button's action after the Transform button is pressed.
form_text.addEventListener("submit", e => {
    e.preventDefault();

    output.textContent = "Loading...";

    let config =  {
    headers: {
        "Content-Type": "text/plain"},
    responseType: "text"
    };

        let site = "https://transform-text-api.herokuapp.com/transform";
        let site2 = "https://transform-text-api.herokuapp.com/transform-translate-sp";

    // Sending text to my server then getting the response
    axios.post(site, search_text.value, config).
    then(res => output.textContent = res.data).
    catch(error => output.textContent = error);
});

// This is the button's action after the API button is pressed.
form_api.addEventListener("submit", e => {
    e.preventDefault();

    output.textContent = "Loading..."


    // First getting the scrapped text from the API provided in the search box
    axios.get(search_API.value).
    then(res => {
        let config =  {
        headers: {
            "Content-Type": "text/plain"},
        responseType: "text"
        };

        console.log(res.data);

        let site = "https://transform-text-api.herokuapp.com/transform";
        let site2 = "https://transform-text-api.herokuapp.com/transform-translate-sp";
        
        // Sending text to my server then getting the response
        axios.post(site, res.data, config).
        then(res => output.textContent = res.data).
        catch(error => output.textContent = error);
    }).
    catch(error => output.textContent = error);
});

// The undo and redo backtracking buttons logic
undo = () => document.execCommand("undo", false, null); 
redo = () => document.execCommand("redo", false, null); 