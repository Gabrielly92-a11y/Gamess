const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const bgMusic = document.getElementById('bg-music');
const gameoverSound = document.getElementById('gameover-sound');
const scoreDisplay = document.getElementById('score')
let score = 0

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
}

const scoreLoop = setInterval(() => {
    score++;
    scoreDisplay.textContent = String(score).padStart(6, '0');
}, 100);

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   

    if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${pipePosition}px`;
        
        mario.src = "./imagens/game-over.png";
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        bgMusic.pause();
        bgMusic.currentTime = 0;
        gameoverSound.play()

       
        clearInterval(loop)
        clearInterval(scoreLoop)

    }
}, 10);

document.addEventListener('keydown', (e) => {
    if(e.code =='Space' || e.code === 'ArrowUp') jump();

    if (bgMusic.paused) {
        bgMusic.play();
    }
});