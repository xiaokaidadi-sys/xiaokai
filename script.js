const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ball = { x: 50, y: 300, radius: 20, dy: 0, gravity: 0.5, jump: -10 };
let isJumping = false;

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

function update() {
    ball.dy += ball.gravity;
    ball.y += ball.dy;

    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
        ball.dy = 0;
        isJumping = false;
    }

    drawBall();
    requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !isJumping) {
        ball.dy = ball.jump;
        isJumping = true;
    }
});

update();
