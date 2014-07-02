window.onload = function () {
    var stage = new Kinetic.Stage({
        container: 'canvas-container',
        width: 800,
        height: 600
    }),
    layer = new Kinetic.Layer();

    var rect = new Kinetic.Rect({
        fill: 'yellowgreen',
        stroke: '#ccc',
        x: 25,
        y: 35,
        width: 57,
        height: 93
    });

    var circle = new Kinetic.Circle({
        fill: 'pink',
        stroke: 'skyblue',
        x: 150,
        y: 170,
        radius: 60,
        strokewidth: 5
    });

    var wedge = new Kinetic.Wedge({
        x: 500,
        y: 120,
        radius: 70,
        angle: 90,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        rotation: 180
    });

    var straight = new Kinetic.Line({
        points: [230, 240, 430, 240, 430, 440, 230, 440, 230, 340, 330, 340],
        stroke: 'pink',
        fill: 'skyblue',
        strokeWidth: 3,
        lineJoin: 'round',
        closed: true
    });

    var curved = new Kinetic.Line({
        points: [480, 240, 680, 240, 680, 440, 480, 440, 480, 340, 580, 340],
        stroke: 'skyblue',
        fill: 'pink',
        strokeWidth: 4,
        tension: 0.2,
        lineJoin: 'round',
        closed: true
    });

    var greenLine = new Kinetic.Line({
        points: [73, 70, 340, 23, 450, 60, 500, 20],
        stroke: 'green',
        strokeWidth: 2,
        lineJoin: 'round',
        dash: [10, 10]
    })

    var blueLine = new Kinetic.Line({
        points: [73, 70, 340, 23, 450, 60, 500, 20],
        stroke: 'skyblue',
        strokeWidth: 10,
        lineCap: 'round',
        lineJoin: 'round',
        dash: [0.001, 20]
    })

    blueLine.move({ x: 150, y: 150 });

    layer.add(blueLine);
    layer.add(greenLine);
    layer.add(wedge);
    layer.add(rect);
    layer.add(circle);
    layer.add(straight);
    layer.add(curved);
    return stage.add(layer);
}