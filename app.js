var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output")
var btnClear = document.querySelector("#btn-clear")

function clickEventHandler() {
   outputDiv.innerText = "jdakdkda " + txtInput.value;
}


btnTranslate.addEventListener("click", clickEventHandler)

function clearSpace ()
{
    outputDiv.innerText = ""
}

btnClear.addEventListener("click", clearSpace)