var paper = Raphael(10, 10, 800, 600);

var rect = paper.rect(10, 150, 360, 120);
rect.attr({
    stroke: 'lightblue',
    'stroke-width': '2'
});

var firstWord = paper.text(30, 210, 'You');
firstWord.attr({
    color: '#4B4B4B',
    'font-size': 70,
    'text-anchor': 'start',
    'font-weight': 'bold'
});

var redRect = paper.rect(170, 170, 190, 80, 20);
redRect.attr({
    fill: '#EC2828',
    stroke: 'none',

});

var secondWord = paper.text(180, 210, 'Tube');
secondWord.attr({
    fill: 'white',
    'font-size': 70,
    'text-anchor': 'start',
    'font-weight': 'bold'
});