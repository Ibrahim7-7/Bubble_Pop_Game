let startButton = document.getElementById('start-button');
let timerElement = document.getElementById('time-left');
let scoreElement = document.getElementById('score-value');
let bubbleContainer = document.getElementById('bubble-container');
let gameOverElement = document.getElementById('game-over');
let finalScoreElement = document.getElementById('final-score');
let timeLeft = 30;
let score = 0;
let interval;
let level = 1;

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hidden');
    score = 0;
    level = 1;
    scoreElement.textContent = score;
    gameOverElement.classList.add('hidden');
    timeLeft = 30;
    timerElement.textContent = timeLeft;
    startTimer();
    generateBubbles(level);
}

function startTimer() {
    interval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameOverElement.classList.remove('hidden');
    finalScoreElement.textContent = score;
    startButton.classList.remove('hidden');
}

function generateBubbles(level) {
    bubbleContainer.innerHTML = '';
    for (let i = 0; i < level + 4; i++) {
        let bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.width = `${Math.random() * 50 + 30}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.top = `${Math.random() * 250}px`;
        bubble.style.left = `${Math.random() * 250}px`;
        bubble.style.backgroundColor = getRandomColor();
        bubble.addEventListener('click', popBubble);
        bubbleContainer.appendChild(bubble);
    }
}

function popBubble() {
    score++;
    scoreElement.textContent = score;
    this.remove();
    if (bubbleContainer.children.length === 0) {
        level++;
        generateBubbles(level);
    }
}

function getRandomColor() {
    const colors = ['#ff6347', '#90ee90', '#ffff00', '#ff1493', '#d3d3d3', '#ff7f50', '#add8e6'];
    return colors[Math.floor(Math.random() * colors.length)];
}
