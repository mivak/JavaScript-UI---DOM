window.onload = function () {
    var paper = Raphael(10, 10, 800, 600);
    
    var rect = paper.rect(10, 10, 360, 120);
    rect.attr({
        stroke: '#5CE600'
    });

    var upperRect = paper.rect(9, 9, 362, 122);
    upperRect.attr({
        stroke: 'black'
    });

    paper.path('M 30 40 L 40 30 L 70 60 L 55 75 L 40 60 L 70 30 L 80 40').attr({
        fill: 'none',
        stroke: '#5CE600',
        'stroke-width': 5
    });

    var text = paper.text(90, 60, 'Telerik')
    text.attr({
        'font-size': 60,
        'text-anchor': 'start',
        'font-weight': 'bold'
    });

    var reservedSymbol = paper.text(290, 55, '®');
    reservedSymbol.attr({
        'font-size': 15
    });

    var message = paper.text(101, 100, 'Develop experiences');
    message.attr({
        'font-size': 26,
        'text-anchor':'start'
    });
}