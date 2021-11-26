var userAction = document.querySelector("#btn-translate");
var userText = document.querySelector("#user-text")
var outputText = document.querySelector("#output-box")

var requestURL = "https://api.funtranslations.com/translate/minion.json"


function errorHandler(error) {
  console.log(`error occured ${error}`)
  alert("Server down ! Try it again in sometimes...")
}

function constructURL(text) {
  return `${requestURL}?text=${text}`;
}


function clickEventHandler() {
  var inputText = userText.value;

  fetch(constructURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated
      outputText.innerText = translatedText;
    })

    .catch(errorHandler)

}

userAction.addEventListener("click", clickEventHandler);
