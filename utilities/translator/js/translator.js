var textInput = "";

document.getElementById("quarEnglishInput").addEventListener('input', function (evt) {
    textInput = document.getElementById("quarEnglishInput").value;
    document.getElementById("quarText").innerHTML = textInput;
});


function changeStyle(font){
    //console.log(font.value);
    document.getElementById("quarText").style.fontFamily=font.value;
}