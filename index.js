const livesEle = document.querySelector('.lives');
const scoreEle = document.querySelector('.score');
const gameArea = document.querySelector('.game-area');
const startBt = document.querySelector('.start');
const heading = document.getElementById('heading');
const high=document.querySelector('.hs');
let s = 0;
let l = 3;
let gameInterval;
startBt.addEventListener('click', startGame);

let highScore=0;
function startGame() {
    s = 0;
    l = 3;
    scoreEle.textContent = 'score: ' + s;
    livesEle.textContent = 'lives ❤️: ' + l;
    high.textContent='High score :'+highScore;
    startBt.style.display = 'none'; 
    heading.style.display='none';
    gameInterval = setInterval(spawnBug, 3000);
}

function spawnBug() {
    if (l < 1) {
        endGame();
        return;
    }

    const bug = document.createElement('div');
    bug.classList.add('bug');

    const x = Math.random() * (gameArea.clientWidth - 50); 
    const y = Math.random() * (gameArea.clientHeight - 50); 
    bug.style.left = `${x}px`;
    bug.style.top = `${y}px`;

    bug.addEventListener('click', () => {
        s++;  
        scoreEle.textContent = 'score: ' + s;
        bug.remove();  
    });

    gameArea.appendChild(bug);

    setTimeout(() => {
        if (gameArea.contains(bug)) {
            bug.remove();
            l--; 
            livesEle.textContent = 'lives ❤️: ' + l;
        }
    }, 5000);
}

function endGame() {
    if(highScore<s){
        highScore=s;
        high.textContent='High score :'+highScore;

    }

    clearInterval(gameInterval);  
    alert('Game Over! Your score: ' + s);  
    startBt.style.display = 'block'; 
    heading.style.display='block';
}
