window.onload = function () {
    var canvas = document.getElementById("the-canvas"),
        ctx = canvas.getContext("2d"),
        xPosition = 10,
        yPosition = 10,
        xDirection = 1,
        yDirection = 1,
        radius = 8;

    setInterval(fly, 10);

    function fly() {
        ctx.beginPath();
        ctx.arc(xPosition, yPosition, 2 * radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#ccc";
        ctx.fill();

        xPosition += xDirection;
        yPosition += yDirection;

        if (xPosition === radius || xPosition === canvas.width - radius) {
            xDirection *= -1;
        }

        if (yPosition === radius || yPosition === canvas.height - radius) {
            yDirection *= -1;
        }

        ctx.beginPath();
        ctx.arc(xPosition, yPosition, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#2184FF";
        ctx.fill();
    }
}