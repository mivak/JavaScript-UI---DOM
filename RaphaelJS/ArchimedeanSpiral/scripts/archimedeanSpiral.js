window.onload = function () {

    var paper = Raphael(0, 0, 800, 600);

    function drawSpiral(centerX, centerY, a, b) {
        var centralPoint = 'M' + centerX + ' ' + centerY,
            spiralPoints = [centralPoint];

        for (var i = 0; i < 600; i++) {
            var angle = 0.1 * i,
        // using the Archimedian spiral equation r = a + b * angle;
        // a sets the offset from the central point, b - the distance between turnings
                x = centerX + (a + b * angle) * Math.cos(angle),
                y = centerY + (a + b * angle) * Math.sin(angle);

            spiralPoints.push('L ' + x + ' ' + y);
        }

        var spiralPointsStr = spiralPoints.join(' '),
            spiral = paper.path(spiralPointsStr);
    }

    drawSpiral(400, 300, 0, 3);
};