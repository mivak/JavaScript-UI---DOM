/*global document, window*/
window.onload = function () {
    'use strict';
    var generateDivsBtn;

    function onGenerateDivsButtonClick() {
        var contentDiv = document.getElementById('content'),
            count,
            div,
            i;

        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }

        function getRandomNumberInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        count = (document.getElementById('count').value || 5) | 0;

        function createStrong(text) {
            var strong = document.createElement('strong');

            strong.appendChild(document.createTextNode(text));

            return strong;
        }

        function getRandomColor() {
            return 'rgba(' + [
                getRandomNumberInRange(0, 255),
                getRandomNumberInRange(0, 255),
                getRandomNumberInRange(0, 255),
                getRandomNumberInRange(1, 10) / 10
            ].join(', ') + ')';
        }

        function createDiv() {
            div = document.createElement('div');

            div.style.width = getRandomNumberInRange(20, 100) + 'px';
            div.style.height = getRandomNumberInRange(20, 100) + 'px';
            div.style.position = 'absolute';
            div.style.top = getRandomNumberInRange(0, 70) + '%';
            div.style.left = getRandomNumberInRange(0, 70) + '%';
            div.style.background = getRandomColor();
            div.style.color = getRandomColor();
            div.style.textAlign = 'center';

            div.style.borderRadius = getRandomNumberInRange(0, 50) + '%';
            div.style.borderColor = getRandomColor();
            div.style.borderWidth = getRandomNumberInRange(1, 20) + 'px';

            div.appendChild(createStrong('div'));
            contentDiv.appendChild(div);

            return contentDiv;
        }

        for (i = 0; i < count; i++) {
            div = createDiv();
        }
    }

    generateDivsBtn = document.getElementById('generate-divs');
    generateDivsBtn.addEventListener('click', onGenerateDivsButtonClick);
};