/*globals $, window, console, document*/
window.onload = function () {
    'use strict';
    var canvas = document.getElementById('stats-canvas'),
        ctx = canvas.getContext('2d'),
        from = {
            x: 45,
            y: 75
        },
        to = {
            x: 275,
            y: 245
        };

    function getData(successCallback) {
        $.get('http://random-numbers.herokuapp.com', function (response) {
            successCallback(response);
        });
    }

    //getData();

    // from (x, y), to (x, y)
    function drawAnimatedLine(ctx, from, to) {
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();

        var n = Math.sqrt((from.x - to.x) * (from.x - to.x) + (from.y - to.y) * (from.y - to.y)),
            // refreshInterval = 1,
            i = 0;

        n = (n > 100) ? 100 : n;

        function frame() {
            var newPoint = calculateDeltaPosition(from, to, i / n);

            drawPoint(ctx, newPoint.x, newPoint.y);
            i++;

            if (i <= n) {
                //setTimeout(frame, refreshInterval);
                window.requestAnimationFrame(frame);
            }
        }
        frame();
    }

    function drawPoint(ctx, x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fill();
    }

    function calculateDeltaPosition(from, to, d) {
        return {
            x: from.x + d * (to.x - from.x),
            y: from.y + d * (to.y - from.y)
        };
    }

    function drawStats(ctx) {
        var lastPoint = {
            x: 0,
            y: 0
        },
        deltaX = 15;

        drawLine();

        function drawLine() {
            getData(function (data) {
                var point = {
                    x: lastPoint.x + deltaX,
                    y: data.value
                };

                console.dir(lastPoint);
                console.dir(point);

                var from = {
                    x: lastPoint.x,
                    y: lastPoint.y
                },
                    to = {
                        x: point.x,
                        y: point.y
                    };

                drawAnimatedLine(ctx, from, to);
                lastPoint.x = point.x;
                lastPoint.y = point.y;
                setTimeout(drawLine, 1000);
            });
        };
    }
    //drawAnimatedLine(ctx, from, to);
    drawStats(ctx);
};