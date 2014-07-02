window.onload = function () {
    // using querySelector
    var nestedDivs = document.querySelectorAll('div > div');

    for (var i = 0; i < nestedDivs.length; i++) {
        
        console.log(nestedDivs[i].innerText.trim());
    }

    // using getElementByTagName
    nestedDivs = [];
    var allDivs = document.getElementsByTagName('div');
    for (i = 0, len = allDivs.length; i < len; i++) {
        if (allDivs[i].parentElement instanceof HTMLDivElement) {
            nestedDivs.push(allDivs[i]);
        }
    }

    for (i = 0; i < nestedDivs.length; i++) {
        console.log(nestedDivs[i].innerText);
    }
}