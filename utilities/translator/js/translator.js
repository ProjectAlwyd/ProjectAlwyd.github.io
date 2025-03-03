var textInput = "";

document.getElementById("quarEnglishInput").addEventListener('input', function (evt) {
    textInput = document.getElementById("quarEnglishInput").value;
    document.getElementById("quarText").innerHTML = textInput;
});