var divs = Array(5),
    centerX = 600,
    centerY = 300,
    radius = 200,
    angle = 0,
    divFragment = document.createDocumentFragment();

for (var i = 0; i < divs.length; i++) {
    var currDiv = document.createElement('div');
    
    currDiv.style.textAlign = 'center';
    currDiv.style.lineHeight = '50px';
    currDiv.style.width = '50px';
    currDiv.style.height = '50px';
    currDiv.style.border = '3px solid blue'
    currDiv.style.borderRadius = '50px';
    currDiv.style.position = 'absolute';
    divFragment.appendChild(currDiv);
    divs[i] = currDiv;
}

document.body.appendChild(divFragment);

var functionTimer = setInterval(function moveDivs() {
    angle++;

    for (var i = 0; i < divs.length; i++) {
        var addition = (360 / divs.length) * i,
            left = centerX + Math.cos((2 * 3.14 / 180) * (angle + addition)) * radius,
            right = centerY + Math.sin((2 * 3.14 / 180) * (angle + addition)) * radius;

        divs[i].style.left = left + "px";
        divs[i].style.top = right + "px";
    }
}, 100);