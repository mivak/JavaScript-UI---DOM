window.onload = function () {
    var canvas = document.getElementById('the-canvas'),
        ctx = canvas.getContext('2d');

    ctx.fillStyle = '#90CAD7';
    ctx.strokeStyle = 'rgb(2,55,155)';

    // bike
    ctx.beginPath();
    ctx.moveTo(200, 540);//first circle
    ctx.arc(150, 540, 50, 0, 2 * Math.PI);

    ctx.moveTo(400, 540);//second circle
    ctx.arc(350, 540, 50, 0, 2 * Math.PI);

    ctx.fill();

    ctx.moveTo(150, 540);
    ctx.lineTo(240, 540);

    ctx.lineTo(340, 460);
    ctx.moveTo(350, 540);
    ctx.lineTo(335, 420);
    ctx.lineTo(360, 390);
    ctx.moveTo(335, 420);
    ctx.lineTo(295, 430);

    ctx.moveTo(340, 460);
    ctx.lineTo(210, 460);
    ctx.lineTo(150, 540);

    ctx.moveTo(240, 540);
    ctx.lineTo(200, 430);
    ctx.moveTo(180, 430);
    ctx.lineTo(220, 430);

    ctx.moveTo(255, 540);//the little middle circle
    ctx.arc(240, 540, 15, 0, 2 * Math.PI);

    ctx.moveTo(230, 528);
    ctx.lineTo(219, 514);
    ctx.moveTo(250, 552);
    ctx.lineTo(261, 566);

    ctx.stroke();

    // face
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(150, 200, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    ctx.save();
    ctx.scale(4.75, 1);
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#396693';
    ctx.moveTo(45, 150);
    ctx.arc(32, 150, 13, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.scale(3, 1);
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#396693';
    ctx.moveTo(65, 100);
    ctx.arc(51, 100, 15, 0, 2 * Math.PI);

    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(110, 141);

    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#396693';
    ctx.moveTo(108, 100);
    ctx.lineTo(110, 141);
    ctx.quadraticCurveTo(150, 160, 196, 141);
    ctx.lineTo(198, 100);
    ctx.fill();
    ctx.stroke();

    ctx.quadraticCurveTo(140, 120, 108, 100);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = '#194A55';
    ctx.moveTo(145, 210);
    ctx.lineTo(130, 210);
    ctx.lineTo(145, 180);

    ctx.stroke();

    // left eye
    ctx.save();
    ctx.moveTo(135, 180);
    ctx.scale(2, 1);
    ctx.beginPath();
    ctx.arc(63, 180, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    // right eye
    ctx.save();
    ctx.moveTo(135, 180);
    ctx.scale(2, 1);
    ctx.beginPath();
    ctx.arc(82, 180, 5, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    //mouth
    ctx.moveTo(130, 220);
    ctx.quadraticCurveTo(150, 215, 155, 230);
    ctx.quadraticCurveTo(135, 235, 130, 220);

    ctx.stroke();
    // left apple of the eye
    ctx.save();
    ctx.moveTo(135, 180);
    ctx.scale(1, 2);
    ctx.beginPath();
    ctx.fillStyle = '#194A55';
    ctx.arc(123, 90, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();
    // right apple of the eye
    ctx.save();
    ctx.moveTo(135, 180);
    ctx.scale(1, 2);
    ctx.beginPath();
    ctx.fillStyle = '#194A55';
    ctx.arc(163, 90, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    // The house
    // the big rectangle
    ctx.beginPath();
    ctx.fillStyle = '#975B5B';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.moveTo(450, 250);
    ctx.fillRect(450, 250, 300, 250);
    ctx.strokeRect(450, 250, 300, 250);
    ctx.closePath();
    // the big triangle
    ctx.moveTo(450, 250);
    ctx.lineTo(750, 250);
    ctx.lineTo(600, 100);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //the chimney
    ctx.beginPath();
    ctx.moveTo(650, 200);
    ctx.lineTo(650, 120);
    ctx.quadraticCurveTo(660, 125, 670, 120);
    //ctx.moveTo(670, 120);
    ctx.lineTo(670, 200);
    //ctx.lineTo(670, 120);
    ctx.moveTo(670, 120);
    ctx.quadraticCurveTo(660, 115, 650, 120);
    ctx.quadraticCurveTo(660, 125, 670, 120);

    ctx.fill();
    ctx.stroke();

    //the door
    ctx.beginPath();
    ctx.moveTo(480, 500);
    ctx.lineTo(480, 410);
    ctx.moveTo(580, 500);
    ctx.lineTo(580, 410);
    ctx.quadraticCurveTo(530, 360, 480, 410);
    ctx.moveTo(530, 500);
    ctx.lineTo(530, 386);
    ctx.moveTo(520, 470);
    ctx.arc(515, 470, 5, 0, 2 * Math.PI);
    ctx.moveTo(550, 470);
    ctx.arc(545, 470, 5, 0, 2 * Math.PI);

    ctx.stroke();

    // the windows
    //top left window
    ctx.beginPath();
    ctx.moveTo(470, 310);
    ctx.fillStyle = '#000';
    ctx.fillRect(470, 310, 60, 40);
    ctx.moveTo(470, 267);
    ctx.fillRect(470, 267, 60, 40);
    ctx.moveTo(533, 267);
    ctx.fillRect(533, 267, 60, 40);
    ctx.moveTo(533, 310);
    ctx.fillRect(533, 310, 60, 40);

    //top right window
    ctx.moveTo(610, 310);
    ctx.fillRect(610, 310, 60, 40);
    ctx.moveTo(610, 267);
    ctx.fillRect(610, 267, 60, 40);
    ctx.moveTo(673, 310);
    ctx.fillRect(673, 310, 60, 40);
    ctx.moveTo(673, 267);
    ctx.fillRect(673, 267, 60, 40);

    //bottom right window
    ctx.moveTo(610, 370);
    ctx.fillRect(610, 370, 60, 40);
    ctx.moveTo(610, 413);
    ctx.fillRect(610, 413, 60, 40);
    ctx.moveTo(673, 370);
    ctx.fillRect(673, 370, 60, 40);
    ctx.moveTo(673, 413);
    ctx.fillRect(673, 413, 60, 40);
    ctx.closePath();
}