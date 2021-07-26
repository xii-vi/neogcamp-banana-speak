var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandling(error) {
    console.log("error occured", error)
    alert("the server is not working!! Try after some time")
}

function clickEventHandler() {

    var inputText = txtInput.value;


    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            translatedText = json.contents.translated;
            outputDiv.innerText = translatedText
        })
        .catch(errorHandling)
}


btnTranslate.addEventListener("click", clickEventHandler)