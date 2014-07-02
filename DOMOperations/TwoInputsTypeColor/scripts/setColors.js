window.onload = function () {
    var textArea = document.getElementById('textarea'),
        fontColor,
        backgroundColor,
        fontColorBtn = document.getElementById('font'),
        backgroundColorBtn = document.getElementById('background');

    function onFontColorButtonClick() {
        fontColor = document.getElementById('font-color').value;
        textArea.style.color = fontColor;
    }

    function onBackgroundColorButtonClick() {
        backgroundColor = document.getElementById('background-color').value;
        textArea.style.background = backgroundColor;
    }

    fontColorBtn.addEventListener('click', onFontColorButtonClick);
    backgroundColorBtn.addEventListener('click', onBackgroundColorButtonClick);   
}